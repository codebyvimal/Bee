import Link from "next/link";
import { brand } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="border-t bg-card py-12 md:py-16">
      <div className="container-shell grid gap-8 md:grid-cols-4 lg:gap-12">
        <div className="md:col-span-2">
          <Link href="/" className="text-2xl font-bold tracking-tight text-foreground">
            {brand.name}
          </Link>
          <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">
            {brand.tagline} We believe in natural energy, pure ingredients, and premium wellness for
            your everyday life.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-foreground">Shop</h4>
          <ul className="grid gap-3 text-sm text-muted-foreground">
            <li>
              <a href="#product" className="transition-colors hover:text-primary">
                Our Box
              </a>
            </li>
            <li>
              <a href="#wholesale" className="transition-colors hover:text-primary">
                Wholesale
              </a>
            </li>
            <li>
              <a href="#corporate" className="transition-colors hover:text-primary">
                Corporate Gifting
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-foreground">Support</h4>
          <ul className="grid gap-3 text-sm text-muted-foreground">
            <li>
              <a href="#faq" className="transition-colors hover:text-primary">
                FAQ
              </a>
            </li>
            <li>
              <a href="#delivery" className="transition-colors hover:text-primary">
                Delivery Policy
              </a>
            </li>
            <li>
              <a href="mailto:hello@hunnybi.com" className="transition-colors hover:text-primary">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-shell mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 text-sm text-muted-foreground sm:flex-row">
        <p>
          © {new Date().getFullYear()} {brand.name}. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="/terms" className="transition-colors hover:text-foreground">
            Terms
          </a>
          <a href="/privacy" className="transition-colors hover:text-foreground">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}
