import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { ToastProvider } from "@/components/ui/Toast";
import "@/styles/globals.css";
import "@/styles/themes.css";
import "@/styles/motion.css";

export const metadata: Metadata = {
  title: "InsightBoard",
  description: "Premium SaaS analytics dashboard and marketing site."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const themeScript = `
    (function() {
      try {
        var key = "insightboard-theme";
        var stored = localStorage.getItem(key);
        var preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        var theme = stored === "dark" || stored === "light" ? stored : preferred;
        document.documentElement.dataset.theme = theme;
      } catch (e) {}
    })();
  `;

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <ThemeProvider>
          <ToastProvider>{children}</ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
