import { ArrowRight, Leaf, PackageCheck, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brand, product } from "@/lib/constants";
import { formatCurrency } from "@/lib/format";

const highlights = [
  {
    icon: Leaf,
    title: "Natural energy",
    text: "Honey and nuts make a cleaner snack for work, travel, and gifting."
  },
  {
    icon: ShieldCheck,
    title: "Simple ingredients",
    text: "Built around familiar ingredients instead of a complicated snack label."
  },
  {
    icon: PackageCheck,
    title: "Order-ready boxes",
    text: "Designed for direct orders, bulk gifting, and wholesale conversations."
  }
];

export default function HomePage() {
  return (
    <>
      <section className="section-shell grid gap-10 pt-10 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Premium honey snack brand
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {brand.name}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
            {brand.tagline} A modern snack box for natural energy, premium gifting, and everyday
            wellness.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#order">
                Order now <ArrowRight aria-hidden="true" className="size-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#wholesale">Wholesale inquiry</a>
            </Button>
          </div>
        </div>

        <div className="relative rounded-lg border bg-card p-6 shadow-soft">
          <div className="aspect-[4/3] rounded-md bg-[radial-gradient(circle_at_50%_35%,#ffe27a,transparent_36%),linear-gradient(135deg,#fff9e6,#f7e6b5)]" />
          <div className="mt-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm text-muted-foreground">{product.name}</p>
              <p className="text-2xl font-bold">{formatCurrency(product.pricePerBox)}</p>
            </div>
            <p className="text-right text-sm text-muted-foreground">COD available from 25 boxes</p>
          </div>
        </div>
      </section>

      <section className="section-shell grid gap-4 sm:grid-cols-3">
        {highlights.map((item) => (
          <article key={item.title} className="rounded-lg border bg-card p-5">
            <item.icon aria-hidden="true" className="mb-4 size-6 text-accent" />
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
          </article>
        ))}
      </section>

      <section id="order" className="section-shell">
        <div className="rounded-lg border bg-card p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Ordering foundation
          </p>
          <h2 className="mt-3 text-3xl font-bold">Order system phase is ready to build.</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            The foundation includes typed pricing rules, server action boundaries, Supabase
            clients, validation utilities, and the App Router structure needed for the full order
            flow.
          </p>
        </div>
      </section>

      <section id="wholesale" className="section-shell pt-0">
        <div className="grid gap-6 rounded-lg border bg-foreground p-6 text-background sm:p-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Wholesale
            </p>
            <h2 className="mt-3 text-3xl font-bold">Built for bulk orders and retail leads.</h2>
          </div>
          <p className="text-sm leading-6 text-background/75">
            Wholesale inquiry storage, admin management, and lead status architecture are defined
            for the next implementation phase.
          </p>
        </div>
      </section>
    </>
  );
}
