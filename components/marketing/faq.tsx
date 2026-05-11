export function FAQ() {
  const faqs = [
    {
      question: "Is the honey completely raw and unprocessed?",
      answer:
        "Yes! Our honey is 100% raw and unfiltered. It's straight from the hive, keeping all the natural goodness and sweet taste intact."
    },
    {
      question: "How should I store my Hunnybi box?",
      answer:
        "Just keep it in your pantry! Room temperature is perfect. Please don't put the honey in the fridge, or it might get hard and crunchy."
    },
    {
      question: "What if my honey gets hard (crystallizes)?",
      answer:
        "Don't worry, that's completely normal for pure honey! Just place the jar in a warm bowl of water for a few minutes and it will be perfectly runny again."
    },
    {
      question: "Do you have options for big parties or gifts?",
      answer:
        "We sure do! We love putting together special packages for birthday parties, weddings, and corporate gifts. Check out our Bulk Orders section."
    },
    {
      question: "Are the nuts roasted with oil?",
      answer:
        "Nope! We gently dry-roast our nuts without any oils or yucky stuff so they stay super crunchy and healthy."
    }
  ];

  return (
    <section id="faq" className="section-shell bg-background">
      <div className="mx-auto mb-12 max-w-3xl text-center md:mb-20">
        <p className="mb-4 font-body text-sm font-bold uppercase tracking-[0.2em] text-primary">
          Got Questions?
        </p>
        <h2 className="mb-6 font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-6xl">
          We&apos;ve Got Answers!
        </h2>
      </div>

      <div className="mx-auto grid max-w-4xl gap-6">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group rounded-3xl border border-white/20 bg-white p-8 transition-all duration-300 open:bg-white/80 open:shadow-xl dark:bg-stone-900/50"
          >
            <summary className="flex cursor-pointer items-center justify-between font-heading text-xl font-semibold text-foreground transition-colors marker:content-none hover:text-primary">
              {faq.question}
              <span className="relative ml-4 flex size-6 flex-shrink-0 items-center justify-center">
                <span className="absolute h-0.5 w-full bg-foreground transition-transform group-open:rotate-180" />
                <span className="absolute h-full w-0.5 bg-foreground transition-transform group-open:rotate-90" />
              </span>
            </summary>
            <p className="mt-6 pr-8 font-body text-lg leading-relaxed text-muted-foreground">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
