import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { product } from "@/lib/constants";
import { formatCurrency } from "@/lib/format";

const features = [
  "100% Raw, Unfiltered Honey",
  "Premium Roasted Nuts",
  "No Artificial Preservatives",
  "Ethically Sourced",
  "Beautifully Packaged for Gifting"
];

export function ProductShowcase() {
  return (
    <section id="product" className="section-shell bg-card/50">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Product Image / Display */}
        <div className="group relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-secondary/30 transition-transform duration-500 group-hover:scale-[1.02]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />

            {/* Placeholder for Product Image */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <div className="mb-8 flex size-48 items-center justify-center rounded-full bg-gradient-to-tr from-primary/40 to-secondary shadow-soft">
                <span className="font-serif text-4xl italic text-primary-foreground">HB</span>
              </div>
              <h3 className="mb-2 text-2xl font-medium text-foreground">The Signature Box</h3>
              <p className="mx-auto max-w-xs text-sm text-muted-foreground">
                A visual representation of the beautifully crafted Hunnybi package.
              </p>
            </div>
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-border/50 bg-background p-6 shadow-xl sm:block lg:-right-8">
            <p className="mb-1 text-sm text-muted-foreground">Starting from</p>
            <p className="text-3xl font-semibold text-foreground">
              {formatCurrency(product.pricePerBox)}
            </p>
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
            Our Signature Product
          </p>
          <h2 className="mb-6 text-4xl font-medium tracking-tight sm:text-5xl">{product.name}</h2>
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
            Experience the perfect synergy of nature&apos;s finest offerings. Our signature box
            combines the robust flavor of premium nuts with the delicate sweetness of ethically
            sourced raw honey.
          </p>

          <Card className="mb-8 border-primary/20 bg-primary/5 p-6">
            <ul className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="flex-shrink-0 rounded-full bg-primary/20 p-1">
                    <Check className="size-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </Card>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" variant="premium" className="flex-1">
              Add to Cart <ArrowRight className="ml-2 size-4" />
            </Button>
            <Button size="lg" variant="outline" className="flex-1">
              View Nutritional Info
            </Button>
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground sm:text-left">
            Free shipping on orders over {formatCurrency(1500)}. Secure checkout.
          </p>
        </div>
      </div>
    </section>
  );
}
