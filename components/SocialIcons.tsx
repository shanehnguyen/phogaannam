type IconProps = { className?: string };

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M13.5 21v-7h2.3l.35-2.7H13.5V9.6c0-.78.22-1.32 1.34-1.32h1.43V5.85c-.25-.03-1.1-.1-2.08-.1-2.06 0-3.47 1.25-3.47 3.56v1.99H8.4v2.7h2.32V21h2.78Z" />
    </svg>
  );
}

export function XIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.53 3H20.4l-6.27 7.17L21.5 21h-5.77l-4.52-5.92L5.96 21H3.08l6.7-7.66L2.8 3h5.92l4.08 5.4L17.53 3Zm-1 16.2h1.6L7.56 4.7H5.85L16.53 19.2Z" />
    </svg>
  );
}

export function YoutubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M21.58 7.2a2.5 2.5 0 0 0-1.76-1.77C18.24 5 12 5 12 5s-6.24 0-7.82.43A2.5 2.5 0 0 0 2.42 7.2 26.3 26.3 0 0 0 2 12a26.3 26.3 0 0 0 .42 4.8 2.5 2.5 0 0 0 1.76 1.77C5.76 19 12 19 12 19s6.24 0 7.82-.43a2.5 2.5 0 0 0 1.76-1.77A26.3 26.3 0 0 0 22 12a26.3 26.3 0 0 0-.42-4.8ZM10 15V9l5.2 3-5.2 3Z" />
    </svg>
  );
}
