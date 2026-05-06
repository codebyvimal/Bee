import Link from "next/link";
import { signOutAction } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { brand } from "@/lib/constants";

export function AdminHeader({ email }: { email: string }) {
  return (
    <header className="border-b bg-background">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div>
          <Link href="/admin" className="font-bold">
            {brand.name} Admin
          </Link>
          <p className="text-xs text-muted-foreground">{email}</p>
        </div>
        <form action={signOutAction}>
          <Button type="submit" variant="outline" size="sm">
            Sign out
          </Button>
        </form>
      </div>
    </header>
  );
}
