import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { product } from "@/lib/constants";
import { formatCurrency } from "@/lib/format";

const features = [
  "100% Pure, Real Honey",
  "Super Crunchy Nuts",
  "No Yucky Preservatives",
  "Sourced with Love",
  "Perfect for Gifts & Treats"
];

export function ProductShowcase() {
  return (
    <section id="product" className="section-shell bg-secondary/30">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Product Image / Display */}
        <div className="group relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-white/50 p-6 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] sm:aspect-[4/5] sm:p-8">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-primary/5 opacity-50" />

            {/* Actual Product Image */}
            <div className="relative h-full w-full">
              <Image
                src="/images/product.png"
                alt="The Signature Hunnybi Box"
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 1024px) 80vw, 50vw"
              />
            </div>
          </div>

          {/* Floating Badge - Glass Effect */}
          <div className="absolute -bottom-4 -right-4 z-20 rounded-2xl border border-white/20 bg-white/80 p-4 shadow-xl backdrop-blur-xl sm:-bottom-6 sm:-right-6 sm:p-6 lg:-right-8">
            <p className="font-body mb-0.5 text-xs text-muted-foreground sm:mb-1 sm:text-sm">Starting from</p>
            <p className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
              {formatCurrency(product.pricePerBox)}
            </p>
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <p className="mb-4 font-body text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Our Fan Favorite
          </p>
          <h2 className="mb-6 font-heading text-4xl font-bold tracking-tight sm:text-6xl">{product.name}</h2>
          <p className="mb-8 font-body text-lg leading-relaxed text-muted-foreground md:text-xl">
            A big spoonful of happiness! We&apos;ve mixed the sweetest, most delicious honey with a perfectly crunchy blend of nuts. It&apos;s the ultimate treat that makes everyone smile.
          </p>

          <Card className="mb-8 border-white/20 bg-white/40 p-6 text-left shadow-sm backdrop-blur-md">
            <ul className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="flex-shrink-0 rounded-full bg-primary/20 p-1">
                    <Check className="size-4 text-primary" />
                  </div>
                  <span className="font-body text-sm font-medium text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </Card>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" variant="premium" className="flex-1 font-body transition-all active:scale-95">
              Add to Cart <ArrowRight className="ml-2 size-4" />
            </Button>
            <Button size="lg" variant="outline" className="flex-1 font-body transition-all active:scale-95">
              Nutritional Info
            </Button>
          </div>
          <p className="mt-6 font-body text-xs text-muted-foreground">
            Free shipping on orders over {formatCurrency(1500)}. Secure checkout.
          </p>
        </div>
      </div>
    </section>
  );
}
