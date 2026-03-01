import { ThemeToggle } from "@/components/theme/ThemeToggle";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="auth-shell page-transition">
      <div style={{ position: "fixed", top: 18, right: 18 }}>
        <ThemeToggle />
      </div>
      {children}
    </main>
  );
}
