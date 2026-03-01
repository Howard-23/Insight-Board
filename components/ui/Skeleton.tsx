import { cn } from "@/lib/cn";

type SkeletonProps = {
  width?: string | number;
  height?: string | number;
  className?: string;
};

export function Skeleton({ width = "100%", height = 14, className }: SkeletonProps) {
  return <div className={cn("skeleton", className)} style={{ width, height }} aria-hidden="true" />;
}
