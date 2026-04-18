import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Logo } from "./Logo";

type IconProps = { className?: string };

function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M13.5 21v-7h2.3l.35-2.7H13.5V9.6c0-.78.22-1.32 1.34-1.32h1.43V5.85c-.25-.03-1.1-.1-2.08-.1-2.06 0-3.47 1.25-3.47 3.56v1.99H8.4v2.7h2.32V21h2.78Z" />
    </svg>
  );
}

function YoutubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M21.58 7.2a2.5 2.5 0 0 0-1.76-1.77C18.24 5 12 5 12 5s-6.24 0-7.82.43A2.5 2.5 0 0 0 2.42 7.2 26.3 26.3 0 0 0 2 12a26.3 26.3 0 0 0 .42 4.8 2.5 2.5 0 0 0 1.76 1.77C5.76 19 12 19 12 19s6.24 0 7.82-.43a2.5 2.5 0 0 0 1.76-1.77A26.3 26.3 0 0 0 22 12a26.3 26.3 0 0 0-.42-4.8ZM10 15V9l5.2 3-5.2 3Z" />
    </svg>
  );
}

const columns: { heading: string; links: { href: string; label: string }[] }[] = [
  {
    heading: "Visit",
    links: [
      { href: "#visit", label: "Hours & Location" },
      { href: "#book", label: "Reserve a Table" },
      { href: "#order", label: "Order Pickup" },
      { href: "#parking", label: "Parking" },
    ],
  },
  {
    heading: "Menu",
    links: [
      { href: "#menu", label: "Full Menu" },
      { href: "#chicken-pho", label: "Chicken Pho" },
      { href: "#allergens", label: "Allergens" },
      { href: "#wine-beer", label: "Drinks" },
    ],
  },
  {
    heading: "Family",
    links: [
      { href: "#catering", label: "Catering" },
      { href: "#private-events", label: "Private Events" },
      { href: "#press", label: "Press" },
      { href: "#gift-cards", label: "Gift Cards" },
    ],
  },
];

const socials = [
  { href: "https://instagram.com", label: "Instagram", Icon: InstagramIcon },
  { href: "https://facebook.com", label: "Facebook", Icon: FacebookIcon },
  { href: "https://youtube.com", label: "YouTube", Icon: YoutubeIcon },
];

export function Footer() {
  return (
    <footer className="bg-brand-green-deep text-brand-cream relative overflow-hidden">
      <div
        aria-hidden
        className="bg-brand-gold/8 pointer-events-none absolute -top-32 right-0 h-[400px] w-[400px] rounded-full blur-3xl"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 py-20 md:py-24 lg:px-12">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[auto_1fr_1fr_1fr_1.2fr] lg:gap-12">
          <div>
            <Link
              href="/"
              aria-label="Phở Gà An Nam — home"
              className="bg-brand-cream inline-flex items-center justify-center rounded-2xl px-4 py-3 transition-transform hover:scale-[1.02]"
            >
              <Logo className="h-14 w-auto" />
            </Link>
            <p className="text-brand-cream/65 mt-6 max-w-xs text-sm leading-relaxed">
              A family-run Vietnamese kitchen in San Jose, California. Slow
              broth, fresh herbs, an open door.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-brand-gold-soft text-[11px] font-semibold uppercase tracking-[0.28em]">
                {col.heading}
              </h3>
              <ul className="mt-5 space-y-3 text-sm">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-brand-cream/85 hover:text-brand-gold-soft transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="text-brand-gold-soft text-[11px] font-semibold uppercase tracking-[0.28em]">
              Letters from the kitchen
            </p>
            <p className="mt-3 font-display text-2xl leading-snug tracking-tight md:text-[1.65rem]">
              Specials, recipes, the occasional photo of the broth at 4 a.m.
            </p>
            <form className="mt-6 flex items-center gap-2">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="you@example.com"
                className="bg-brand-cream/10 border-brand-cream/20 placeholder:text-brand-cream/45 text-brand-cream focus:border-brand-gold-soft min-w-0 flex-1 rounded-full border px-5 py-3 text-sm outline-none transition-colors"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="bg-brand-gold text-brand-green-deep hover:bg-brand-cream inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-colors"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
            <p className="text-brand-cream/45 mt-3 text-xs leading-relaxed">
              No spam. Unsubscribe with one click.
            </p>
          </div>
        </div>

        <div className="border-brand-cream/15 mt-16 flex flex-col items-start gap-6 border-t pt-8 md:flex-row md:items-center md:justify-between">
          <ul className="flex items-center gap-3">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                <Link
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-brand-cream/25 text-brand-cream/85 hover:border-brand-gold-soft hover:text-brand-gold-soft inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              </li>
            ))}
          </ul>

          <ul className="text-brand-cream/55 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.16em]">
            <li>
              <Link href="#terms" className="hover:text-brand-cream transition-colors">
                Terms
              </Link>
            </li>
            <li>
              <Link href="#privacy" className="hover:text-brand-cream transition-colors">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="#accessibility" className="hover:text-brand-cream transition-colors">
                Accessibility
              </Link>
            </li>
          </ul>

          <p className="text-brand-cream/55 text-xs uppercase tracking-[0.16em]">
            © Phở Gà An Nam · 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
