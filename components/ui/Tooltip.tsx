type TooltipProps = {
  label: string;
  children: React.ReactNode;
};

export function Tooltip({ label, children }: TooltipProps) {
  return (
    <span className="tooltip">
      {children}
      <span className="tooltip-panel" role="tooltip">
        {label}
      </span>
    </span>
  );
}
