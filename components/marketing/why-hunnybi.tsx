import { Leaf, ShieldCheck, Zap } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "All-Day Play Energy",
    description:
      "Say goodbye to afternoon slumps! The sweet honey and crunchy nuts give you a happy, steady burst of energy for school, work, or play."
  },
  {
    icon: ShieldCheck,
    title: "Nothing But Goodness",
    description:
      "We keep it simple and honest. No yucky artificial stuff, no hidden sugars. Just the pure, yummy ingredients from Mother Nature herself!"
  },
  {
    icon: Leaf,
    title: "Happy Bees, Happy Trees",
    description:
      "Our honey comes from farms that love their bees, and our nuts are grown by folks who care about the earth. Good for you, good for the planet!"
  }
];

export function WhyHunnybi() {
  return (
    <section id="why-hunnybi" className="section-shell">
      <div className="mb-16 text-center md:mb-20">
        <p className="mb-4 text-sm font-bold uppercase tracking-widest text-primary">
          Our Promise
        </p>
        <h2 className="mb-6 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
          Why Everyone Loves Hunnybi!
        </h2>
        <p className="mx-auto max-w-2xl text-lg font-medium text-muted-foreground">
          We wanted a snack that tastes like a treat but acts like a superhero. Here is why families everywhere are filling their pantries with Hunnybi.
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
            <h3 className="mb-3 text-xl font-bold text-foreground">{reason.title}</h3>
            <p className="leading-relaxed text-muted-foreground">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
