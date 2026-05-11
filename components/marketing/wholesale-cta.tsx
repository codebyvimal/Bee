import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WholesaleCTA() {
  return (
    <section id="wholesale" className="section-shell pt-0">
      <div className="relative overflow-hidden rounded-[3rem] bg-foreground text-background shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-transparent to-transparent opacity-40" />

        <div className="relative grid gap-10 px-8 py-16 md:p-20 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="mb-4 font-body text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Bulk Orders & Parties
            </p>
            <h2 className="mb-6 font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-6xl">
              Share the <span className="italic">Sweetness!</span>
            </h2>
            <p className="mb-8 max-w-xl font-body text-lg leading-relaxed text-background/70 md:text-xl">
              Planning a big party, corporate event, or stocking your store shelves? We&apos;ve got you covered with special bulk pricing and adorable custom packaging options that everyone will love.
            </p>

            <div className="flex flex-col gap-6 sm:flex-row">
              <Button
                size="lg"
                className="rounded-full bg-primary px-10 font-body text-primary-foreground transition-all duration-300 hover:scale-105 hover:bg-primary/90"
              >
                Request Catalog
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-background/20 px-10 font-body text-background backdrop-blur-md transition-all duration-300 hover:bg-background/10"
              >
                Contact Sales <ArrowRight className="ml-2 size-4" />
              </Button>
            </div>
          </div>

          <div className="relative mx-auto hidden aspect-square w-full max-w-md overflow-hidden rounded-full border border-background/10 p-4 lg:block shadow-3xl">
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image
                src="/images/wholesale.png"
                alt="Hunnybi Wholesale and Corporate Gifting"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
