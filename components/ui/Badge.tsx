import { cn } from "@/lib/cn";

type BadgeVariant = "default" | "success" | "warning" | "danger";

type BadgeProps = {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return <span className={cn("badge", `badge-${variant}`, className)}>{children}</span>;
}
