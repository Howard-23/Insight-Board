"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CreditCardIcon,
  HomeIcon,
  LogoIcon,
  ReportIcon,
  SettingsIcon,
  UsersIcon
} from "@/components/icons/Icons";

const navItems = [
  { href: "/app", label: "Overview", icon: HomeIcon },
  { href: "/app/reports", label: "Reports", icon: ReportIcon },
  { href: "/app/transactions", label: "Transactions", icon: CreditCardIcon },
  { href: "/app/team", label: "Team", icon: UsersIcon },
  { href: "/app/settings", label: "Settings", icon: SettingsIcon }
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="stack-lg">
        <Link href="/app" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontWeight: 700 }}>
          <LogoIcon size={20} />
          <span>InsightBoard</span>
        </Link>
        <nav aria-label="Sidebar navigation" className="stack-sm">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} className="sidebar-link" data-active={active}>
                <Icon size={16} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
