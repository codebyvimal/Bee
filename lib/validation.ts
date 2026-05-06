import { districts, product } from "@/lib/constants";
import type { OrderAdminUpdate, OrderFormValues, WholesaleFormValues } from "@/types/forms";
import type { OrderStatus, PaymentStatus } from "@/types/database";

type ValidationResult<T> =
  | { ok: true; data: T }
  | { ok: false; fieldErrors: Record<string, string> };

const phonePattern = /^[6-9]\d{9}$/;

function text(value: FormData, key: string) {
  return String(value.get(key) || "").trim();
}

function hasDistrict(value: string) {
  return (districts as readonly string[]).includes(value);
}

export function validateOrderForm(formData: FormData): ValidationResult<OrderFormValues> {
  const quantity = Number(text(formData, "quantity"));
  const values: OrderFormValues = {
    customerName: text(formData, "customerName"),
    phone: text(formData, "phone"),
    address: text(formData, "address"),
    district: text(formData, "district"),
    quantity,
    paymentMethod: text(formData, "paymentMethod") === "cod" ? "cod" : "upi"
  };
  const fieldErrors: Record<string, string> = {};

  if (values.customerName.length < 2) fieldErrors.customerName = "Enter your full name.";
  if (!phonePattern.test(values.phone)) fieldErrors.phone = "Enter a valid 10-digit phone number.";
  if (values.address.length < 10) fieldErrors.address = "Enter a complete delivery address.";
  if (!hasDistrict(values.district)) fieldErrors.district = "Select a delivery district.";
  if (!Number.isInteger(quantity) || quantity < 1 || quantity > product.maxQuantity) {
    fieldErrors.quantity = `Quantity must be between 1 and ${product.maxQuantity}.`;
  }

  if (Object.keys(fieldErrors).length > 0) return { ok: false, fieldErrors };
  return { ok: true, data: values };
}

export function validateWholesaleForm(formData: FormData): ValidationResult<WholesaleFormValues> {
  const values: WholesaleFormValues = {
    name: text(formData, "name"),
    businessName: text(formData, "businessName"),
    phone: text(formData, "phone"),
    quantityNeeded: text(formData, "quantityNeeded"),
    monthlyVolume: text(formData, "monthlyVolume"),
    notes: text(formData, "notes")
  };
  const fieldErrors: Record<string, string> = {};

  if (values.name.length < 2) fieldErrors.name = "Enter your name.";
  if (values.businessName.length < 2) fieldErrors.businessName = "Enter a business name.";
  if (!phonePattern.test(values.phone)) fieldErrors.phone = "Enter a valid 10-digit phone number.";
  if (values.quantityNeeded.length < 1) fieldErrors.quantityNeeded = "Enter required quantity.";

  if (Object.keys(fieldErrors).length > 0) return { ok: false, fieldErrors };
  return { ok: true, data: values };
}

export function validateOrderAdminUpdate(formData: FormData): ValidationResult<OrderAdminUpdate> {
  const paymentStatus = text(formData, "paymentStatus") as PaymentStatus;
  const orderStatus = text(formData, "orderStatus") as OrderStatus;
  const values: OrderAdminUpdate = {
    id: text(formData, "id"),
    paymentStatus,
    orderStatus,
    adminNotes: text(formData, "adminNotes")
  };
  const fieldErrors: Record<string, string> = {};

  if (!values.id) fieldErrors.id = "Missing order id.";
  if (!["unpaid", "verification_pending", "paid"].includes(paymentStatus)) {
    fieldErrors.paymentStatus = "Invalid payment status.";
  }
  if (
    !["pending", "paid", "processing", "shipped", "delivered", "cancelled"].includes(orderStatus)
  ) {
    fieldErrors.orderStatus = "Invalid order status.";
  }

  if (Object.keys(fieldErrors).length > 0) return { ok: false, fieldErrors };
  return { ok: true, data: values };
}
