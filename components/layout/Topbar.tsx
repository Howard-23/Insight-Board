"use client";

import { BellIcon, SearchIcon } from "@/components/icons/Icons";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Dropdown } from "@/components/ui/Dropdown";
import { useToast } from "@/components/ui/Toast";

export function Topbar() {
  const { pushToast } = useToast();

  return (
    <header className="topbar">
      <label htmlFor="global-search" className="topbar-search" style={{ minWidth: 200, width: "100%", maxWidth: 420 }}>
        <SearchIcon size={16} />
        <input
          id="global-search"
          type="search"
          placeholder="Search metrics, reports..."
          aria-label="Search"
          style={{ border: 0, background: "transparent", color: "var(--text)", width: "100%", outline: "none" }}
        />
      </label>
      <div style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
        <button
          type="button"
          className="button button-secondary"
          aria-label="Notifications"
          onClick={() => pushToast({ title: "No new alerts", description: "You are fully up to date." })}
          style={{ paddingInline: 10 }}
        >
          <BellIcon size={16} />
        </button>
        <ThemeToggle />
        <Dropdown
          ariaLabel="Open profile menu"
          trigger={
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <span
                aria-hidden="true"
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, var(--primary), var(--success))"
                }}
              />
              <span className="hide-mobile">A. Admin</span>
            </span>
          }
          items={[
            { label: "Profile", onSelect: () => pushToast({ title: "Profile", description: "Opening profile soon." }) },
            { label: "Billing", onSelect: () => pushToast({ title: "Billing", description: "Billing panel is in progress." }) },
            { label: "Sign out", onSelect: () => pushToast({ title: "Signed out", description: "Session ended safely." }) }
          ]}
        />
      </div>
    </header>
  );
}
