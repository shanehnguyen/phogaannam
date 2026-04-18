import Link from "next/link";
import { Clock, MapPin, Phone, ArrowRight } from "lucide-react";

const hours = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday – Thursday", time: "11:00 — 21:00" },
  { day: "Friday", time: "11:00 — 22:00" },
  { day: "Saturday", time: "10:00 — 22:00" },
  { day: "Sunday", time: "10:00 — 21:00" },
];

export function Visit() {
  return (
    <section
      id="visit"
      className="bg-brand-green text-brand-cream scroll-mt-28 rounded-b-[48px]"
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-14 px-6 py-24 md:py-32 lg:grid-cols-[1.1fr_1fr] lg:gap-20 lg:px-12">
        <div>
          <span className="text-brand-gold-soft text-[11px] uppercase tracking-[0.32em]">
            Ghé Thăm — Visit
          </span>
          <h2 className="mt-5 font-display text-5xl font-medium leading-[1.02] tracking-tight md:text-6xl lg:text-[4.6rem]">
            Pull up a stool.
            <span className="text-brand-gold-soft italic"> Stay a while.</span>
          </h2>
          <p className="text-brand-cream/80 mt-7 max-w-md text-base leading-relaxed md:text-lg">
            Walk-ins are welcome. Reservations are kind. We&rsquo;ll have a bowl ready
            either way.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2">
            <div className="flex gap-4">
              <span className="bg-brand-cream/10 ring-brand-cream/20 mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full ring-1">
                <MapPin className="text-brand-gold-soft h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="text-brand-cream/55 text-[11px] uppercase tracking-[0.22em]">
                  Address
                </p>
                <p className="mt-1 text-base leading-snug">
                  740 Story Rd
                  <br />
                  San Jose, CA
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="bg-brand-cream/10 ring-brand-cream/20 mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full ring-1">
                <Phone className="text-brand-gold-soft h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="text-brand-cream/55 text-[11px] uppercase tracking-[0.22em]">
                  Reservations
                </p>
                <p className="mt-1 text-base leading-snug">
                  (123) 456-7890
                  <br />
                  hello@example.com
                </p>
              </div>
            </div>
          </div>

          <div
            id="book"
            className="border-brand-cream/15 mt-12 flex flex-col gap-4 border-t pt-10 sm:flex-row sm:items-center"
          >
            <Link
              href="#book"
              className="bg-brand-gold text-brand-green-deep hover:bg-brand-cream group inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] transition-colors"
            >
              Reserve a table
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#order"
              className="border-brand-cream/40 text-brand-cream hover:bg-brand-cream/10 inline-flex items-center justify-center gap-3 rounded-full border px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] transition-colors"
            >
              Order pickup
            </Link>
          </div>
        </div>

        <div className="bg-brand-green-deep/60 ring-brand-cream/10 rounded-[28px] p-8 ring-1 md:p-10">
          <div className="flex items-center gap-3">
            <Clock className="text-brand-gold-soft h-5 w-5" aria-hidden />
            <p className="text-brand-cream/60 text-[11px] uppercase tracking-[0.28em]">
              Kitchen Hours
            </p>
          </div>
          <ul className="mt-7 divide-y divide-brand-cream/10">
            {hours.map(({ day, time }) => (
              <li
                key={day}
                className="flex items-center justify-between py-4 text-base"
              >
                <span className="text-brand-cream/85">{day}</span>
                <span
                  className={`font-display tracking-tight ${
                    time === "Closed"
                      ? "text-brand-cream/45"
                      : "text-brand-gold-soft"
                  }`}
                >
                  {time}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-brand-cream/55 mt-7 text-xs leading-relaxed">
            Last seating 30 minutes before close. The broth waits for no one —
            we run out a few nights a month. Come early.
          </p>
        </div>
      </div>
    </section>
  );
}
