import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WholesaleCTA() {
  return (
    <section id="wholesale" className="section-shell pt-0">
      <div className="relative overflow-hidden rounded-3xl bg-foreground text-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent opacity-50" />

        <div className="relative grid gap-10 px-8 py-16 md:p-16 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
              Corporate & Wholesale
            </p>
            <h2 className="mb-6 text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
              Partner with Hunnybi
            </h2>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-background/80">
              Elevate your retail shelves, corporate gifting programs, or premium hospitality
              offerings with our thoughtfully curated honey and nut boxes. We offer dedicated
              support and bespoke packaging options for volume orders.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                variant="default"
                className="rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90"
              >
                Request a Catalog
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-background/20 px-8 text-background hover:bg-background/10"
              >
                Contact Sales <ArrowRight className="ml-2 size-4" />
              </Button>
            </div>
          </div>

          <div className="relative mx-auto hidden aspect-square w-full max-w-md lg:block">
            <div className="absolute inset-0 animate-pulse rounded-full border border-background/10" />
            <div className="absolute inset-8 rounded-full border border-background/20" />
            <div className="absolute inset-16 flex items-center justify-center rounded-full border border-primary/20 bg-background/5 backdrop-blur-sm">
              <div className="text-center">
                <p className="mb-2 font-serif text-3xl italic text-primary">HB</p>
                <p className="text-sm font-medium uppercase tracking-widest text-background/80">
                  Wholesale
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
