import { MarketingFooter } from "@/components/layout/MarketingFooter";
import { MarketingHeader } from "@/components/layout/MarketingHeader";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="marketing-shell">
      <MarketingHeader />
      <main className="page-transition">{children}</main>
      <MarketingFooter />
    </div>
  );
}
