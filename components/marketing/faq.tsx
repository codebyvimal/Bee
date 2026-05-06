export function FAQ() {
  const faqs = [
    {
      question: "Is the honey completely raw and unprocessed?",
      answer:
        "Yes, our honey is 100% raw, unfiltered, and unpasteurized. This ensures that all natural enzymes, antioxidants, and pollen remain intact for maximum health benefits."
    },
    {
      question: "How should I store my Hunnybi box?",
      answer:
        "Store your Hunnybi box at room temperature in a dry place, away from direct sunlight. Do not refrigerate the honey, as it will accelerate crystallization."
    },
    {
      question: "What if my honey crystallizes?",
      answer:
        "Crystallization is a natural mark of pure, raw honey. If it crystallizes, simply place the jar in a bowl of warm water (not boiling) until it returns to a liquid state."
    },
    {
      question: "Do you offer bulk or corporate gifting options?",
      answer:
        "Absolutely. We specialize in premium corporate gifting. Please navigate to our Wholesale section or contact our concierge team for custom arrangements."
    },
    {
      question: "Are the nuts roasted with oil?",
      answer:
        "No, we dry-roast our premium nuts slowly at low temperatures to enhance their natural flavor profile without the addition of any oils or artificial preservatives."
    }
  ];

  return (
    <section id="faq" className="section-shell">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
          Common Queries
        </p>
        <h2 className="mb-6 text-3xl font-medium tracking-tight sm:text-4xl">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="mx-auto grid max-w-3xl gap-4">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group rounded-xl border border-border/60 bg-card p-6 transition-colors open:bg-background/50"
          >
            <summary className="flex cursor-pointer items-center justify-between text-lg font-medium text-foreground transition-colors marker:content-none hover:text-primary">
              {faq.question}
              <span className="relative ml-4 flex size-5 flex-shrink-0 items-center justify-center">
                <span className="absolute h-0.5 w-full bg-foreground transition-transform group-open:rotate-180" />
                <span className="absolute h-full w-0.5 bg-foreground transition-transform group-open:rotate-90" />
              </span>
            </summary>
            <p className="mt-4 pr-8 text-base leading-relaxed text-muted-foreground">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
