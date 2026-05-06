export type UserRole = "admin" | "customer";
export type PaymentStatus = "unpaid" | "paid" | "verification_pending" | "refunded";
export type OrderStatus =
  | "pending"
  | "paid"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled";
export type PaymentMethod = "upi" | "cod";
export type LeadStatus = "new" | "contacted" | "qualified" | "converted" | "closed";

export type Profile = {
  id: string;
  name: string;
  phone: string | null;
  role: UserRole;
  created_at: string;
  updated_at: string;
};

export type Order = {
  id: string;
  customer_name: string;
  phone: string;
  address: string;
  district: string;
  quantity: number;
  price_per_box: number;
  total_price: number;
  payment_status: PaymentStatus;
  order_status: OrderStatus;
  payment_method: PaymentMethod;
  payment_reference: string | null;
  payment_screenshot_url: string | null;
  admin_notes: string | null;
  created_at: string;
  updated_at: string;
};

export type WholesaleInquiry = {
  id: string;
  name: string;
  business_name: string;
  phone: string;
  quantity_needed: string;
  monthly_volume: string | null;
  notes: string | null;
  lead_status: LeadStatus;
  admin_notes: string | null;
  created_at: string;
  updated_at: string;
};

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: Profile;
        Insert: Omit<Profile, "created_at" | "updated_at"> & {
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Omit<Profile, "id" | "created_at">>;
      };
      orders: {
        Row: Order;
        Insert: Omit<
          Order,
          "id" | "created_at" | "updated_at" | "admin_notes" | "payment_reference" | "payment_screenshot_url"
        > & {
          id?: string;
          created_at?: string;
          updated_at?: string;
          admin_notes?: string | null;
          payment_reference?: string | null;
          payment_screenshot_url?: string | null;
        };
        Update: Partial<Omit<Order, "id" | "created_at" | "updated_at">>;
      };
      wholesale_inquiries: {
        Row: WholesaleInquiry;
        Insert: Omit<WholesaleInquiry, "id" | "created_at" | "updated_at" | "admin_notes" | "lead_status"> & {
          id?: string;
          created_at?: string;
          updated_at?: string;
          lead_status?: LeadStatus;
          admin_notes?: string | null;
        };
        Update: Partial<Omit<WholesaleInquiry, "id" | "created_at" | "updated_at">>;
      };
    };
  };
};
