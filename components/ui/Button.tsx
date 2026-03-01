import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leftIcon?: React.ReactNode;
};

const sizeMap: Record<ButtonSize, string> = {
  sm: "button-sm",
  md: "button-md",
  lg: "button-lg"
};

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  leftIcon,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn("button", `button-${variant}`, sizeMap[size], className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? "Loading..." : leftIcon}
      <span>{children}</span>
    </button>
  );
}
