import { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
  helperText?: string;
  error?: string;
  invalid?: boolean;
};

export function Input({ id, label, helperText, error, invalid, className, ...props }: InputProps) {
  const hasError = Boolean(error) || Boolean(invalid);

  return (
    <div className="input-wrap">
      <label htmlFor={id} className="input-label">
        {label}
      </label>
      <input
        id={id}
        className={cn("input", hasError && "input-error", className)}
        aria-invalid={hasError}
        aria-describedby={helperText || error ? `${id}-hint` : undefined}
        {...props}
      />
      {error ? (
        <p id={`${id}-hint`} className="input-error-text">
          {error}
        </p>
      ) : helperText ? (
        <p id={`${id}-hint`} className="input-helper">
          {helperText}
        </p>
      ) : null}
    </div>
  );
}
