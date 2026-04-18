import Link from "next/link";
import { Menu } from "lucide-react";
import { Logo } from "./Logo";

const navLinks = [
  { href: "/menu", label: "Menu" },
  { href: "/locations", label: "Locations" },
  { href: "/our-story", label: "Our Story" },
  { href: "/gift-cards", label: "Gift Cards" },
];

export function Nav() {
  return (
    <div className="sticky top-4 z-50 px-4 md:px-6">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-[1400px] items-center gap-4 rounded-full bg-brand-ink px-4 text-brand-cream shadow-lg md:h-[72px] md:gap-6 md:px-6"
      >
        <Link
          href="/"
          aria-label="Pho Ga An Nam — home"
          className="flex items-center transition-opacity hover:opacity-80"
        >
          <Logo />
        </Link>

        <ul className="ml-8 hidden items-center gap-7 text-sm font-medium lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition-opacity hover:opacity-70">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2 md:gap-3">
          <Link
            href="/order"
            className="hidden rounded-full border border-brand-cream/60 px-4 py-2 text-sm font-medium transition-colors hover:bg-brand-cream/10 md:inline-block"
          >
            Order Pickup
          </Link>
          <Link
            href="/book"
            className="rounded-full bg-brand-red px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90 md:px-5"
          >
            Book A Table
          </Link>
          <button
            type="button"
            aria-label="Open menu"
            className="ml-1 inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-brand-cream/10"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>
    </div>
  );
}
