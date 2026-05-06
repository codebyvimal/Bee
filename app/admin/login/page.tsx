import type { Metadata } from "next";
import { LoginForm } from "@/components/forms/login-form";

export const metadata: Metadata = {
  title: "Admin Login"
};

export default function AdminLoginPage() {
  return (
    <main className="grid min-h-dvh place-items-center px-4 py-10">
      <div className="w-full max-w-sm rounded-lg border bg-card p-6 shadow-soft">
        <h1 className="text-2xl font-bold">Admin login</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Use the Supabase admin account created for Hunnybi operations.
        </p>
        <LoginForm />
      </div>
    </main>
  );
}
