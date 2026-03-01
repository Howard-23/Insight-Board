import { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  id: string;
  label: string;
  options: SelectOption[];
  helperText?: string;
};

export function Select({ id, label, options, className, helperText, ...props }: SelectProps) {
  return (
    <div className="input-wrap">
      <label htmlFor={id} className="input-label">
        {label}
      </label>
      <select
        id={id}
        className={cn("select", className)}
        aria-describedby={helperText ? `${id}-hint` : undefined}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {helperText ? (
        <p id={`${id}-hint`} className="input-helper">
          {helperText}
        </p>
      ) : null}
    </div>
  );
}
