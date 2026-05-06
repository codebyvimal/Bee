import { useMemo } from "react";
import { calculateOrderTotal, isCodAllowed } from "@/lib/pricing";

export function useOrderTotal(quantity: number) {
  return useMemo(
    () => ({
      total: calculateOrderTotal(quantity),
      codAllowed: isCodAllowed(quantity)
    }),
    [quantity]
  );
}
