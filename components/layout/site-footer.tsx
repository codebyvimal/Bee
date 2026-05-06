import { brand } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="border-t bg-card">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="font-semibold text-foreground">{brand.name}</p>
        <p>{brand.description}</p>
      </div>
    </footer>
  );
}
