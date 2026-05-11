import Image from "next/image";

const reasons = [
  {
    iconSrc: "/images/icons/icon_6.png",
    title: "All-Day Play Energy",
    description:
      "Say goodbye to afternoon slumps! The sweet honey and crunchy nuts give you a happy, steady burst of energy for school, work, or play."
  },
  {
    iconSrc: "/images/icons/icon_7.png",
    title: "Nothing But Goodness",
    description:
      "We keep it simple and honest. No yucky artificial stuff, no hidden sugars. Just the pure, yummy ingredients from Mother Nature herself!"
  },
  {
    iconSrc: "/images/icons/icon_5.png",
    title: "Happy Bees, Happy Trees",
    description:
      "Our honey comes from farms that love their bees, and our nuts are grown by folks who care about the earth. Good for you, good for the planet!"
  }
];

export function WhyHunnybi() {
  return (
    <section id="why-hunnybi" className="section-shell bg-background">
      <div className="mb-16 text-center md:mb-20">
        <p className="mb-4 font-body text-sm font-bold uppercase tracking-[0.2em] text-primary">
          Our Promise
        </p>
        <h2 className="mb-6 font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-6xl">
          Why Everyone Loves <span className="text-primary italic">Hunnybi!</span>
        </h2>
        <p className="mx-auto max-w-2xl font-body text-lg text-muted-foreground md:text-xl">
          We wanted a snack that tastes like a treat but acts like a superhero. Here is why families everywhere are filling their pantries with Hunnybi.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {reasons.map((reason) => (
          <div
            key={reason.title}
            className="group relative rounded-3xl border border-white/20 bg-white p-10 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:bg-stone-900/50"
          >
            <div className="relative mb-8 inline-flex size-20 items-center justify-center rounded-2xl bg-primary/5 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/10 overflow-hidden">
              <Image src={reason.iconSrc} alt={reason.title} fill className="object-contain p-2 transition-all duration-500" />
            </div>
            <h3 className="mb-4 font-heading text-2xl font-semibold text-foreground">{reason.title}</h3>
            <p className="font-body leading-relaxed text-muted-foreground">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
