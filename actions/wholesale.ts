"use server";

import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { assertRateLimit } from "@/lib/rate-limit";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { validateWholesaleForm } from "@/lib/validation";
import type { ActionState } from "@/types/forms";

export async function createWholesaleInquiryAction(
  _: ActionState,
  formData: FormData
): Promise<ActionState> {
  try {
    const headersList = await headers();
    assertRateLimit(`wholesale:${headersList.get("x-forwarded-for") || "local"}`, 5);

    const validation = validateWholesaleForm(formData);
    if (!validation.ok) {
      return {
        ok: false,
        message: "Please fix the highlighted fields.",
        fieldErrors: validation.fieldErrors
      };
    }

    const values = validation.data;
    const supabase = await createSupabaseServerClient();
    const { error } = await supabase.from("wholesale_inquiries").insert({
      name: values.name,
      business_name: values.businessName,
      phone: values.phone,
      quantity_needed: values.quantityNeeded,
      monthly_volume: values.monthlyVolume || null,
      notes: values.notes || null
    });

    if (error) throw error;

    revalidatePath("/admin/inquiries");
    revalidatePath("/admin");
    return { ok: true, message: "Inquiry received. We will contact you shortly." };
  } catch (error) {
    console.error(error);
    return { ok: false, message: "Unable to submit inquiry right now. Please use WhatsApp." };
  }
}

export async function updateInquiryNotesAction(
  _: ActionState,
  formData: FormData
): Promise<ActionState> {
  try {
    const id = String(formData.get("id") || "");
    const adminNotes = String(formData.get("adminNotes") || "").trim();
    if (!id) return { ok: false, message: "Missing inquiry id." };

    const supabase = await createSupabaseServerClient();
    const { error } = await supabase
      .from("wholesale_inquiries")
      .update({ admin_notes: adminNotes || null })
      .eq("id", id);

    if (error) throw error;

    revalidatePath("/admin/inquiries");
    return { ok: true, message: "Inquiry updated." };
  } catch (error) {
    console.error(error);
    return { ok: false, message: "Unable to update inquiry." };
  }
}
