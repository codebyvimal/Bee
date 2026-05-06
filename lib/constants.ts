export const brand = {
  name: "Hunnybi",
  tagline: "Honeyed nuts for cleaner snacking.",
  description:
    "Premium honey and mixed nuts snack boxes made for natural energy, gifting, and everyday wellness."
};

export const product = {
  name: "Nuts & Honey Box",
  pricePerBox: 149,
  currency: "INR",
  minCodQuantity: 26,
  maxQuantity: 500
};

export const districts = [
  "Chennai",
  "Kanchipuram",
  "Chengalpattu",
  "Tiruvallur",
  "Coimbatore",
  "Madurai",
  "Tiruchirappalli",
  "Salem",
  "Other Tamil Nadu"
] as const;

export const orderStatuses = [
  "pending",
  "paid",
  "processing",
  "shipped",
  "delivered",
  "cancelled"
] as const;

export const paymentStatuses = ["unpaid", "verification_pending", "paid"] as const;
