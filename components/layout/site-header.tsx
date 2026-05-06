import Link from "next/link";
import { Button } from "@/components/ui/button";
import { brand } from "@/lib/constants";

const links = [
  { href: "#product", label: "Shop" },
  { href: "#why-hunnybi", label: "Why Us" },
  { href: "#faq", label: "FAQ" },
  { href: "#wholesale", label: "Wholesale" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md transition-all">
      <div className="container-shell flex h-20 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-foreground transition-opacity hover:opacity-80"
            aria-label={`${brand.name} home`}
          >
            {brand.name}
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button asChild variant="ghost" className="hidden sm:inline-flex">
            <a href="/admin/login">Log In</a>
          </Button>
          <Button asChild variant="premium" className="rounded-full px-6">
            <a href="#product">Order Now</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
