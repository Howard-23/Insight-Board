"use client";

import { useEffect, useRef, useState } from "react";

type DropdownItem = {
  label: string;
  onSelect: () => void;
};

type DropdownProps = {
  trigger: React.ReactNode;
  items: DropdownItem[];
  align?: "left" | "right";
  ariaLabel?: string;
};

export function Dropdown({ trigger, items, align = "right", ariaLabel = "Open menu" }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onOutside = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("mousedown", onOutside);
    window.addEventListener("keydown", onEscape);
    return () => {
      window.removeEventListener("mousedown", onOutside);
      window.removeEventListener("keydown", onEscape);
    };
  }, []);

  return (
    <div className="dropdown" ref={rootRef}>
      <button
        type="button"
        className="button button-secondary"
        aria-label={ariaLabel}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        {trigger}
      </button>
      {open ? (
        <div className="dropdown-menu" style={{ right: align === "right" ? 0 : "auto", left: align === "left" ? 0 : "auto" }} role="menu">
          {items.map((item) => (
            <button
              type="button"
              key={item.label}
              className="dropdown-item"
              role="menuitem"
              onClick={() => {
                item.onSelect();
                setOpen(false);
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
