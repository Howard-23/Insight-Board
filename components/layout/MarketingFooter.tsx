import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { LogoIcon } from "@/components/icons/Icons";

export function MarketingFooter() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-grid">
          <div className="stack-sm">
            <div className="marketing-brand">
              <LogoIcon size={20} />
              <span>InsightBoard</span>
            </div>
            <p className="text-muted" style={{ margin: 0 }}>
              Premium analytics experiences for modern product teams.
            </p>
          </div>
          <div className="stack-sm footer-column">
            <strong className="footer-heading">Product</strong>
            <Link href="/features" className="text-muted">
              Features
            </Link>
            <Link href="/pricing" className="text-muted">
              Pricing
            </Link>
          </div>
          <div className="stack-sm footer-column">
            <strong className="footer-heading">Company</strong>
            <Link href="/login" className="text-muted">
              Login
            </Link>
            <Link href="/signup" className="text-muted">
              Get Started
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
