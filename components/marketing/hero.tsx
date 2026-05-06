import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brand } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-16 md:pt-24 lg:pt-32">
      {/* Soft background glow */}
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
        <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary/30 to-secondary/30 opacity-30" />
      </div>

      <div className="container-shell text-center">
        <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-primary">
          Premium Wellness Experience
        </p>
        <h1 className="mx-auto max-w-4xl text-5xl font-medium tracking-tight text-foreground sm:text-6xl md:text-7xl">
          Elevate Your Everyday <span className="italic text-primary">Energy</span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          {brand.tagline} Discover the perfect harmony of raw honey and premium nuts, carefully
          curated for those who demand more from their daily rituals.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" variant="premium" className="w-full sm:w-auto">
            <a href="#product">
              Shop the Collection <ArrowRight className="ml-2 size-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
            <a href="#why-hunnybi">Explore the Benefits</a>
          </Button>
        </div>

        {/* Hero Image / Video Placeholder */}
        <div className="mt-16 sm:mt-24 lg:mt-32">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border/50 bg-card shadow-2xl">
            <div className="flex aspect-[16/9] w-full items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/50 via-background to-background object-cover">
              {/* This would be replaced with a premium hero image in production */}
              <div className="p-8 text-center">
                <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                  Pure Ingredients
                </div>
                <h3 className="text-2xl font-medium text-foreground">
                  Nature&apos;s Finest Ingredients
                </h3>
              </div>
            </div>
            {/* Subtle overlay gradient */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
