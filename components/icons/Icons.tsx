import { cn } from "@/lib/cn";

type IconProps = {
  size?: number;
  className?: string;
};

function IconBase({
  size = 18,
  className,
  children,
  viewBox = "0 0 24 24"
}: IconProps & { children: React.ReactNode; viewBox?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      fill="none"
      aria-hidden="true"
      className={cn(className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
}

export function LogoIcon({ size = 22, className }: IconProps) {
  return (
    <IconBase size={size} className={className}>
      <rect x="3" y="3" width="8" height="8" rx="2" fill="currentColor" />
      <rect x="13" y="3" width="8" height="8" rx="2" fill="currentColor" opacity="0.7" />
      <rect x="3" y="13" width="8" height="8" rx="2" fill="currentColor" opacity="0.7" />
      <rect x="13" y="13" width="8" height="8" rx="2" fill="currentColor" />
    </IconBase>
  );
}

export function ArrowRightIcon({ size, className }: IconProps) {
  return (
    <IconBase size={size} className={className}>
      <path
        d="M5 12H19M19 12L13 6M19 12L13 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

export function SunIcon({ size, className }: IconProps) {
  return (
    <IconBase size={size} className={className}>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 2V4M12 20V22M4.93 4.93L6.34 6.34M17.66 17.66L19.07 19.07M2 12H4M20 12H22M4.93 19.07L6.34 17.66M17.66 6.34L19.07 4.93"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </IconBase>
  );
}

export function MoonIcon({ size, className }: IconProps) {
  return (
    <IconBase size={size} className={className}>
      <path
        d="M21 13.04C20.4 13.23 19.77 13.33 19.11 13.33C15.68 13.33 12.89 10.54 12.89 7.11C12.89 6.45 12.99 5.82 13.18 5.22C10.18 5.95 8 8.65 8 11.87C8 15.66 11.08 18.74 14.87 18.74C18.09 18.74 20.79 16.56 21.52 13.56C21.34 13.39 21.17 13.22 21 13.04Z"
        fill="currentColor"
      />
    </IconBase>
  );
}

export function SearchIcon({ size, className }: IconProps) {
  return (
    <IconBase size={size} className={className}>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
      <path d="M20 20L17 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </IconBase>
  );
}

export function BellIcon({ size, className }: IconProps) {
  return (
    <IconBase size={size} className={className}>
      <path
        d="M15 17H9C7.9 17 7 16.1 7 15V11C7 8.24 9.24 6 12 6C14.76 6 17 8.24 17 11V15C17 16.1 16.1 17 15 17Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M10 17C10 18.1 10.9 19 12 19C13.1 19 14 18.1 14 17" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 4V6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </IconBase>
  );
}

export function HomeIcon({ size, className }: IconProps) {
  return (
    <IconBase size={size} className={className}>
      <path
        d="M4 10L12 4L20 10V19H4V10Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M9 19V13H15V19" stroke="currentColor" strokeWidth="1.8" />
    </IconBase>
  );
}

export function ReportIcon({ size, className }: IconProps) {
  return (
    <IconBase size={size} className={className}>
      <path d="M6 20V10M12 20V4M18 20V14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </IconBase>
  );
}

export function CreditCardIcon({ size, className }: IconProps) {
  return (
    <IconBase size={size} className={className}>
      <rect x="3" y="6" width="18" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 10H21" stroke="currentColor" strokeWidth="1.8" />
    </IconBase>
  );
}

export function UsersIcon({ size, className }: IconProps) {
  return (
    <IconBase size={size} className={className}>
      <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 19C3 16.24 5.24 14 8 14H10C12.76 14 15 16.24 15 19" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
    </IconBase>
  );
}

export function SettingsIcon({ size, className }: IconProps) {
  return (
    <IconBase size={size} className={className}>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M19.4 15A1.7 1.7 0 0 1 20 16.4A1.6 1.6 0 0 1 18.4 18H18.2A1.7 1.7 0 0 0 17 18.6L16.2 20A1.7 1.7 0 0 1 14.8 20.8A1.6 1.6 0 0 1 13.2 19.2V19A1.7 1.7 0 0 0 12.6 17.8L11.2 17A1.7 1.7 0 0 1 10.4 15.6A1.6 1.6 0 0 1 12 14H12.2A1.7 1.7 0 0 0 13.4 13.4L14.2 12A1.7 1.7 0 0 1 15.6 11.2A1.6 1.6 0 0 1 17.2 12.8V13A1.7 1.7 0 0 0 17.8 14.2L19.2 15H19.4Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </IconBase>
  );
}

export function CheckCircleIcon({ size, className }: IconProps) {
  return (
    <IconBase size={size} className={className}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M8 12L11 15L16 9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

export function SparkleIcon({ size, className }: IconProps) {
  return (
    <IconBase size={size} className={className}>
      <path d="M12 3L13.9 8.1L19 10L13.9 11.9L12 17L10.1 11.9L5 10L10.1 8.1L12 3Z" fill="currentColor" />
    </IconBase>
  );
}

export function CloseIcon({ size, className }: IconProps) {
  return (
    <IconBase size={size} className={className}>
      <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </IconBase>
  );
}
