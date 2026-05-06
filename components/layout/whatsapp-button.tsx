import { MessageCircle } from "lucide-react";
import { getWhatsAppPhone } from "@/lib/env";

export function WhatsAppButton() {
  const href = `https://wa.me/${getWhatsAppPhone()}?text=${encodeURIComponent("Hi Hunnybi, I want to know more about the Nuts & Honey Box.")}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-4 right-4 z-50 inline-flex size-12 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-soft transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      aria-label="Contact Hunnybi on WhatsApp"
    >
      <MessageCircle aria-hidden="true" className="size-5" />
    </a>
  );
}
