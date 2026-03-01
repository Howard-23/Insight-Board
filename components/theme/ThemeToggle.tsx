"use client";

import { useTheme } from "@/components/theme/ThemeProvider";
import { MoonIcon, SunIcon } from "@/components/icons/Icons";
import { Button } from "@/components/ui/Button";

export function ThemeToggle() {
  const { mounted, theme, toggleTheme } = useTheme();
  const isDark = mounted && theme === "dark";

  return (
    <Button
      variant="secondary"
      size="sm"
      aria-label="Toggle theme"
      onClick={toggleTheme}
      leftIcon={isDark ? <SunIcon size={16} /> : <MoonIcon size={16} />}
    >
      {isDark ? "Light" : "Dark"}
    </Button>
  );
}
