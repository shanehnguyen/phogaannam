import Link from "next/link";
import { Menu, MapPin } from "lucide-react";
import { Logo } from "./Logo";

const navLinks = [
  { href: "#menu", label: "Menu" },
  { href: "#story", label: "Our Story" },
  { href: "#visit", label: "Visit" },
  { href: "#catering", label: "Catering" },
];

export function Nav() {
  return (
    <div className="absolute inset-x-0 top-4 z-50 px-3 md:top-5 md:px-6">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-[68px] max-w-[1440px] items-center gap-3 rounded-full bg-brand-green-deep/80 px-3 text-brand-cream shadow-[0_18px_40px_-18px_rgba(0,0,0,0.55)] ring-1 ring-brand-cream/10 backdrop-blur-md md:h-20 md:gap-6 md:px-4"
      >
        <Link
          href="/"
          aria-label="Phở Gà An Nam — home"
          className="flex h-[52px] items-center justify-center rounded-full bg-brand-cream px-3 transition-transform hover:scale-[1.02] md:h-16 md:px-5"
        >
          <Logo className="h-10 w-auto md:h-12" priority />
        </Link>

        <ul className="ml-4 hidden items-center gap-8 text-sm font-medium tracking-wide lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-brand-cream/85 transition-colors hover:text-brand-gold-soft"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2 md:gap-3">
          <Link
            href="#visit"
            className="hidden items-center gap-1.5 rounded-full border border-brand-cream/30 px-4 py-2 text-sm font-medium text-brand-cream/90 transition-colors hover:border-brand-gold-soft hover:text-brand-gold-soft md:inline-flex"
          >
            <MapPin className="h-3.5 w-3.5" aria-hidden />
            <span>San Jose, CA</span>
          </Link>
          <Link
            href="#book"
            className="rounded-full bg-brand-gold px-5 py-2.5 text-sm font-semibold text-brand-green-deep shadow-sm transition-colors hover:bg-brand-gold-soft md:px-6"
          >
            Reserve
          </Link>
          <button
            type="button"
            aria-label="Open menu"
            className="ml-1 inline-flex h-10 w-10 items-center justify-center rounded-full text-brand-cream/85 transition-colors hover:bg-brand-cream/10 lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>
    </div>
  );
}
