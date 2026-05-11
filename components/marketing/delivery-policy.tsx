import Image from "next/image";
import { Card } from "@/components/ui/card";

const policies = [
  {
    iconSrc: "/images/icons/icon_3.png",
    title: "Super Fast Shipping",
    description:
      "We pack your order with love and send it zooming across the country so you can start snacking sooner!"
  },
  {
    iconSrc: "/images/icons/icon_4.png",
    title: "Arrives in 2-4 Days",
    description:
      "Most orders arrive in just a few days. Need it for a last-minute gift? Choose our speedy overnight option at checkout."
  },
  {
    iconSrc: "/images/icons/icon_6.png",
    title: "Safe & Snug Packaging",
    description:
      "Every jar is wrapped up tightly and tucked in securely so it arrives safely at your doorstep, ready to be enjoyed."
  },
  {
    iconSrc: "/images/icons/icon_7.png",
    title: "The Happy Guarantee",
    description:
      "If anything at all goes wrong with your delivery, just let us know and we'll send a fresh batch your way right away!"
  }
];

export function DeliveryPolicy() {
  return (
    <section id="delivery" className="section-shell bg-secondary/30">
      <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
        <div className="lg:sticky lg:top-32">
          <p className="mb-4 font-body text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Quick & Safe Delivery
          </p>
          <h2 className="mb-6 font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">From Our Hive to Yours!</h2>
          <p className="mb-8 font-body text-lg leading-relaxed text-muted-foreground md:text-xl">
            We pack every box full of love and care, ensuring it arrives at your doorstep looking beautiful and tasting perfectly fresh.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {policies.map((policy) => (
            <Card
              key={policy.title}
              className="group h-full border-white/20 bg-white/50 p-8 shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-xl dark:bg-stone-900/50"
            >
              <div className="relative mb-6 inline-flex h-16 w-full max-w-[140px] items-center justify-start transition-all duration-500 group-hover:scale-110">
                <Image src={policy.iconSrc} alt={policy.title} fill className="object-contain object-left" />
              </div>
              <h3 className="mb-3 font-heading text-xl font-semibold text-foreground">{policy.title}</h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">{policy.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
