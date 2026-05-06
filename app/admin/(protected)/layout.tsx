import { redirect } from "next/navigation";
import { AdminHeader } from "@/components/admin/admin-header";
import { getCurrentAdmin } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function ProtectedAdminLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const admin = await getCurrentAdmin();

  if (!admin) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-dvh bg-muted/40">
      <AdminHeader email={admin.email ?? "Admin"} />
      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">{children}</main>
    </div>
  );
}
