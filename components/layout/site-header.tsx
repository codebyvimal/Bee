import Link from "next/link";
import { Button } from "@/components/ui/button";
import { brand } from "@/lib/constants";

const links = [
  { href: "#order", label: "Order" },
  { href: "#wholesale", label: "Wholesale" },
  { href: "#faq", label: "FAQ" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/92 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-bold" aria-label={`${brand.name} home`}>
          {brand.name}
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground sm:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-foreground">
              {link.label}
            </a>
          ))}
        </nav>
        <Button asChild size="sm">
          <a href="#order">Order</a>
        </Button>
      </div>
    </header>
  );
}
