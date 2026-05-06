"use server";

import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { calculateOrderTotal, normalizePaymentMethod } from "@/lib/pricing";
import { product } from "@/lib/constants";
import { assertRateLimit } from "@/lib/rate-limit";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { validateOrderAdminUpdate, validateOrderForm } from "@/lib/validation";
import type { ActionState } from "@/types/forms";

const genericOrderError = "We could not place this order right now. Please contact us on WhatsApp.";

export async function createOrderAction(_: ActionState, formData: FormData): Promise<ActionState> {
  try {
    const headersList = await headers();
    assertRateLimit(`order:${headersList.get("x-forwarded-for") || "local"}`);

    const validation = validateOrderForm(formData);
    if (!validation.ok) {
      return {
        ok: false,
        message: "Please fix the highlighted fields.",
        fieldErrors: validation.fieldErrors
      };
    }

    const values = validation.data;
    const paymentMethod = normalizePaymentMethod(values.quantity, values.paymentMethod);
    const paymentStatus = paymentMethod === "upi" ? "verification_pending" : "unpaid";
    const supabase = await createSupabaseServerClient();
    const { error } = await supabase.from("orders").insert({
      customer_name: values.customerName,
      phone: values.phone,
      address: values.address,
      district: values.district,
      quantity: values.quantity,
      price_per_box: product.pricePerBox,
      total_price: calculateOrderTotal(values.quantity),
      payment_status: paymentStatus,
      order_status: "pending",
      payment_method: paymentMethod
    });

    if (error) throw error;

    revalidatePath("/admin/orders");
    revalidatePath("/admin");

    return {
      ok: true,
      message:
        paymentMethod === "upi"
          ? "Order received. Complete UPI payment and share confirmation on WhatsApp."
          : "Order received. Our team will confirm delivery and COD details."
    };
  } catch (error) {
    console.error(error);
    return { ok: false, message: error instanceof Error ? error.message : genericOrderError };
  }
}

export async function updateOrderAction(_: ActionState, formData: FormData): Promise<ActionState> {
  try {
    const validation = validateOrderAdminUpdate(formData);
    if (!validation.ok) {
      return {
        ok: false,
        message: "Could not update order.",
        fieldErrors: validation.fieldErrors
      };
    }

    const values = validation.data;
    const supabase = await createSupabaseServerClient();
    const { error } = await supabase
      .from("orders")
      .update({
        payment_status: values.paymentStatus,
        order_status: values.orderStatus,
        admin_notes: values.adminNotes || null
      })
      .eq("id", values.id);

    if (error) throw error;

    revalidatePath("/admin");
    revalidatePath("/admin/orders");

    return { ok: true, message: "Order updated." };
  } catch (error) {
    console.error(error);
    return { ok: false, message: "Unable to update order." };
  }
}
