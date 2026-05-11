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
    <header className="fixed top-4 left-4 right-4 z-50 transition-all sm:left-1/2 sm:w-full sm:max-w-4xl sm:-translate-x-1/2">
      <div className="rounded-full border border-white/20 bg-white/70 px-6 py-3 shadow-lg backdrop-blur-xl dark:bg-stone-900/70">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="font-heading text-2xl font-bold tracking-tight text-foreground transition-opacity hover:opacity-80"
              aria-label={`${brand.name} home`}
            >
              {brand.name}
            </Link>
            <nav className="hidden items-center gap-6 font-body text-sm font-medium text-muted-foreground md:flex">
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
            <Button asChild variant="ghost" size="sm" className="hidden font-body sm:inline-flex">
              <a href="/admin/login">Log In</a>
            </Button>
            <Button asChild variant="premium" size="sm" className="rounded-full px-6 font-body">
              <a href="#product">Order Now</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
