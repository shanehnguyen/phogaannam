import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LogoMark } from "./Logo";
import { InstagramIcon, FacebookIcon, XIcon, YoutubeIcon } from "./SocialIcons";

const columns: { heading: string; links: { href: string; label: string }[] }[] = [
  {
    heading: "ABOUT US",
    links: [
      { href: "/locations", label: "Locations" },
      { href: "/our-story", label: "Our Story" },
      { href: "/careers", label: "Careers" },
      { href: "/contact", label: "Contact" },
      { href: "/faqs", label: "FAQs" },
    ],
  },
  {
    heading: "OUR MENU",
    links: [
      { href: "/menu", label: "Menu" },
      { href: "/nutrition", label: "Nutrition" },
      { href: "/allergens", label: "Allergens" },
    ],
  },
  {
    heading: "MORE",
    links: [
      { href: "/gift-cards", label: "Gift Cards" },
      { href: "/catering", label: "Catering" },
      { href: "/private-events", label: "Private Events" },
    ],
  },
];

const socials = [
  { href: "https://instagram.com", label: "Instagram", Icon: InstagramIcon },
  { href: "https://facebook.com", label: "Facebook", Icon: FacebookIcon },
  { href: "https://x.com", label: "X", Icon: XIcon },
  { href: "https://youtube.com", label: "YouTube", Icon: YoutubeIcon },
];

export function Footer() {
  return (
    <footer className="bg-brand-ink text-brand-cream">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[auto_1fr_1fr_1fr_auto] lg:gap-10">
          <div>
            <Link
              href="/"
              aria-label="Pho Ga An Nam — home"
              className="inline-flex transition-opacity hover:opacity-80"
            >
              <LogoMark className="h-14 w-14" />
            </Link>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="font-display text-lg tracking-wide">{col.heading}</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="transition-opacity hover:opacity-70">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:max-w-sm">
            <p className="text-sm tracking-wide opacity-80">NEWSLETTER SIGN UP</p>
            <div className="mt-3 font-display text-3xl leading-tight tracking-wide md:text-4xl">
              <p>
                KEEP UP WITH <span className="whitespace-nowrap">ALL THINGS</span>
              </p>
              <p className="mt-2 flex flex-wrap items-center gap-3">
                <span>PHO GA AN NAM</span>
                <Link
                  href="/newsletter"
                  aria-label="Sign up for the newsletter"
                  className="bg-brand-red inline-flex h-12 w-12 items-center justify-center rounded-full transition-transform hover:scale-105"
                >
                  <ArrowRight className="h-6 w-6 text-white" />
                </Link>
                <span className="text-brand-red">SIGN UP</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start gap-8 border-t border-brand-cream/15 pt-8 md:flex-row md:items-center md:justify-between">
          <ul className="flex items-center gap-4">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                <Link
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-brand-red text-brand-red hover:bg-brand-red inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex flex-wrap items-center gap-6 text-xs tracking-wider uppercase">
            <li>
              <Link href="/terms" className="transition-opacity hover:opacity-70">
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="transition-opacity hover:opacity-70">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="transition-opacity hover:opacity-70">
                Cookies Policy
              </Link>
            </li>
          </ul>

          <p className="text-xs tracking-wider uppercase opacity-80">©PHO GA AN NAM 2026</p>
        </div>
      </div>
    </footer>
  );
}
