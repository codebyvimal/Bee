import { Leaf, ShieldCheck, Zap } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Sustained Natural Energy",
    description:
      "Forget the afternoon crash. The combination of complex carbohydrates from nuts and natural sugars from honey provides a steady, enduring energy source."
  },
  {
    icon: ShieldCheck,
    title: "Uncompromising Purity",
    description:
      "We believe in transparent labeling. No artificial preservatives, no hidden sugars, and absolutely no synthetic flavorings. Just nature's finest."
  },
  {
    icon: Leaf,
    title: "Ethically Harvested",
    description:
      "Our honey is sourced from sustainable apiaries that prioritize bee health, and our nuts are grown by farmers committed to regenerative agriculture."
  }
];

export function WhyHunnybi() {
  return (
    <section id="why-hunnybi" className="section-shell">
      <div className="mb-16 text-center md:mb-20">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
          The Philosophy
        </p>
        <h2 className="mb-6 text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
          Why Choose Hunnybi?
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          We didn&apos;t just create a snack; we crafted a standard. Every element of Hunnybi is
          designed to elevate your wellness routine.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {reasons.map((reason) => (
          <div
            key={reason.title}
            className="group relative rounded-2xl border border-border/50 bg-card p-8 transition-all duration-300 hover:border-primary/20 hover:shadow-lg"
          >
            <div className="mb-6 inline-flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
              <reason.icon className="size-6" />
            </div>
            <h3 className="mb-3 text-xl font-medium text-foreground">{reason.title}</h3>
            <p className="leading-relaxed text-muted-foreground">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
