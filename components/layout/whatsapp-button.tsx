import { MessageCircle } from "lucide-react";
import { getWhatsAppPhone } from "@/lib/env";

export function WhatsAppButton() {
  // If no phone number is provided, use a default for UI demo purposes
  const phone = getWhatsAppPhone() || "1234567890";
  const href = `https://wa.me/${phone}?text=${encodeURIComponent("Hi Hunnybi, I want to know more about the premium Nuts & Honey Box.")}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#20bd5a] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      aria-label="Contact Hunnybi on WhatsApp"
    >
      <MessageCircle aria-hidden="true" className="size-5" />
      <span className="hidden sm:inline">Chat with us</span>
    </a>
  );
}
