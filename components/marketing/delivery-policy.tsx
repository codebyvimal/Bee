import { Truck, Package, Clock, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const policies = [
  {
    icon: Truck,
    title: "Super Fast Shipping",
    description:
      "We pack your order with love and send it zooming across the country so you can start snacking sooner!"
  },
  {
    icon: Clock,
    title: "Arrives in 2-4 Days",
    description:
      "Most orders arrive in just a few days. Need it for a last-minute gift? Choose our speedy overnight option at checkout."
  },
  {
    icon: Package,
    title: "Safe & Snug Packaging",
    description:
      "Every jar is wrapped up tightly and tucked in securely so it arrives safely at your doorstep, ready to be enjoyed."
  },
  {
    icon: Shield,
    title: "The Happy Guarantee",
    description:
      "If anything at all goes wrong with your delivery, just let us know and we'll send a fresh batch your way right away!"
  }
];

export function DeliveryPolicy() {
  return (
    <section id="delivery" className="section-shell bg-card/50">
      <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
        <div className="sticky top-28">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-primary">
            Quick & Safe Delivery
          </p>
          <h2 className="mb-6 text-3xl font-extrabold tracking-tight sm:text-4xl">From Our Hive to Yours!</h2>
          <p className="mb-8 text-lg font-medium text-muted-foreground">
            We pack every box full of love and care, ensuring it arrives at your doorstep looking beautiful and tasting perfectly fresh.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {policies.map((policy) => (
            <Card
              key={policy.title}
              className="h-full border-border/50 bg-background/50 p-6 backdrop-blur"
            >
              <div className="mb-4 inline-flex size-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                <policy.icon className="size-5" />
              </div>
              <h3 className="mb-2 font-bold text-foreground">{policy.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{policy.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
