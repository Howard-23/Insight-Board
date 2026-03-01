import { cn } from "@/lib/cn";
import { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
};

type CardBodyProps = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

export function Card({ className, children, ...props }: CardProps) {
  return (
    <section className={cn("card", className)} {...props}>
      {children}
    </section>
  );
}

export function CardHeader({ className, children, ...props }: CardProps) {
  return (
    <header className={cn("card-header", className)} {...props}>
      {children}
    </header>
  );
}

export function CardBody({ className, children, ...props }: CardBodyProps) {
  return (
    <div className={cn("card-body", className)} {...props}>
      {children}
    </div>
  );
}
