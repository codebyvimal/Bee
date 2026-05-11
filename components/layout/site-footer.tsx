import Link from "next/link";
import { brand } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50 py-16 md:py-24">
      <div className="container-shell grid gap-12 md:grid-cols-4 lg:gap-16">
        <div className="md:col-span-2">
          <Link href="/" className="font-heading text-3xl font-bold tracking-tight text-foreground">
            {brand.name}
          </Link>
          <p className="mt-6 max-w-sm font-body text-lg leading-relaxed text-muted-foreground">
            {brand.tagline} We believe in natural energy, pure ingredients, and premium wellness for
            your everyday life.
          </p>
        </div>

        <div>
          <h4 className="mb-6 font-heading text-lg font-semibold text-foreground">Shop</h4>
          <ul className="grid gap-4 font-body text-base text-muted-foreground">
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
          <h4 className="mb-6 font-heading text-lg font-semibold text-foreground">Support</h4>
          <ul className="grid gap-4 font-body text-base text-muted-foreground">
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
      <div className="container-shell mt-20 flex flex-col items-center justify-between gap-6 border-t border-stone-200 pt-10 font-body text-sm text-muted-foreground sm:flex-row">
        <p>
          © {new Date().getFullYear()} {brand.name}. All rights reserved.
        </p>
        <div className="flex gap-8">
          <a href="/terms" className="transition-colors hover:text-foreground">
            Terms of Service
          </a>
          <a href="/privacy" className="transition-colors hover:text-foreground">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
