import { cn } from "@/lib/cn";

type GridProps = {
  children: React.ReactNode;
  className?: string;
};

export function Grid({ children, className }: GridProps) {
  return <div className={cn("grid-12", className)}>{children}</div>;
}
