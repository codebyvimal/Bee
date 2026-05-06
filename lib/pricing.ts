import { product } from "@/lib/constants";
import type { PaymentMethod } from "@/types/database";

export function calculateOrderTotal(quantity: number) {
  return quantity * product.pricePerBox;
}

export function isCodAllowed(quantity: number) {
  return quantity >= product.minCodQuantity;
}

export function normalizePaymentMethod(quantity: number, method: PaymentMethod): PaymentMethod {
  if (method === "cod" && !isCodAllowed(quantity)) {
    return "upi";
  }

  return method;
}
