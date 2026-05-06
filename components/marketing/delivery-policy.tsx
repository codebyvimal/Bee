import { Truck, Package, Clock, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const policies = [
  {
    icon: Truck,
    title: "Express Nationwide Shipping",
    description:
      "We deliver across the country using premium logistics partners to ensure your Hunnybi arrives in perfect condition."
  },
  {
    icon: Clock,
    title: "2-4 Business Days",
    description:
      "Standard delivery takes 2 to 4 business days. Priority overnight shipping is available at checkout for urgent orders."
  },
  {
    icon: Package,
    title: "Secure Packaging",
    description:
      "Every box is temperature-controlled and meticulously packed to protect the delicate glass jars and premium nuts."
  },
  {
    icon: Shield,
    title: "Freshness Guarantee",
    description:
      "If your order arrives damaged or compromised in any way, our concierge team will dispatch a replacement immediately."
  }
];

export function DeliveryPolicy() {
  return (
    <section id="delivery" className="section-shell bg-card/50">
      <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
        <div className="sticky top-28">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
            Logistics & Care
          </p>
          <h2 className="mb-6 text-3xl font-medium tracking-tight sm:text-4xl">Delivery Policy</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            We treat our delivery process with the same care and attention as our ingredients.
            Expect nothing less than a premium unboxing experience.
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
              <h3 className="mb-2 font-medium text-foreground">{policy.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{policy.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
