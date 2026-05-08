import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WholesaleCTA() {
  return (
    <section id="wholesale" className="section-shell pt-0">
      <div className="relative overflow-hidden rounded-3xl bg-foreground text-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent opacity-50" />

        <div className="relative grid gap-10 px-8 py-16 md:p-16 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-primary">
              Bulk Orders & Parties
            </p>
            <h2 className="mb-6 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Share the Sweetness!
            </h2>
            <p className="mb-8 max-w-xl text-lg font-medium leading-relaxed text-background/80">
              Planning a big party, corporate event, or stocking your store shelves? We've got you covered with special bulk pricing and adorable custom packaging options that everyone will love.
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

          <div className="relative mx-auto hidden aspect-square w-full max-w-md overflow-hidden rounded-full border border-border/20 lg:block shadow-2xl">
            <Image
              src="/images/wholesale.png"
              alt="Hunnybi Wholesale and Corporate Gifting"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
