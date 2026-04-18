type LogoProps = {
  className?: string;
  wordmark?: boolean;
};

export function Logo({ className, wordmark = true }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className ?? ""}`}>
      <LogoMark className="h-9 w-9 shrink-0" />
      {wordmark && (
        <span className="font-display text-2xl leading-none tracking-wide text-brand-cream">
          PHO GA AN NAM
        </span>
      )}
    </span>
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <rect width="48" height="48" rx="6" fill="var(--color-brand-red)" />
      <path
        d="M10 26 Q24 36 38 26"
        stroke="var(--color-brand-cream)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="24" cy="26" r="1.8" fill="var(--color-brand-cream)" />
      <rect x="14" y="10" width="2.4" height="14" rx="1" fill="var(--color-brand-cream)" />
      <rect x="22.8" y="10" width="2.4" height="14" rx="1" fill="var(--color-brand-cream)" />
      <rect x="31.6" y="10" width="2.4" height="14" rx="1" fill="var(--color-brand-cream)" />
    </svg>
  );
}
