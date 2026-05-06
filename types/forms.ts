import type { OrderStatus, PaymentMethod, PaymentStatus } from "@/types/database";

export type ActionState = {
  ok: boolean;
  message: string;
  fieldErrors?: Record<string, string>;
};

export type OrderFormValues = {
  customerName: string;
  phone: string;
  address: string;
  district: string;
  quantity: number;
  paymentMethod: PaymentMethod;
};

export type WholesaleFormValues = {
  name: string;
  businessName: string;
  phone: string;
  quantityNeeded: string;
  monthlyVolume: string;
  notes: string;
};

export type OrderAdminUpdate = {
  id: string;
  paymentStatus: PaymentStatus;
  orderStatus: OrderStatus;
  adminNotes: string;
};
