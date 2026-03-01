import Link from "next/link";
import { LogoIcon } from "@/components/icons/Icons";
import { Container } from "@/components/layout/Container";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

const links = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/login", label: "Login" }
];

export function MarketingHeader() {
  return (
    <header className="marketing-nav">
      <Container>
        <div className="marketing-nav-row">
          <Link href="/" className="marketing-brand">
            <LogoIcon size={20} />
            <span>InsightBoard</span>
          </Link>
          <nav aria-label="Main navigation" className="marketing-nav-links">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="button button-ghost hide-mobile marketing-nav-link">
                {link.label}
              </Link>
            ))}
            <span className="hide-mobile marketing-theme-toggle">
              <ThemeToggle />
            </span>
            <Link href="/signup" className="button button-primary button-sm marketing-nav-cta">
              Start free
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
