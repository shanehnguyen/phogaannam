import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-[85vh] min-h-[560px] w-full overflow-hidden rounded-b-[48px] md:h-screen md:min-h-[720px]">
      <Image
        src="https://images.pexels.com/photos/2133989/pexels-photo-2133989.jpeg"
        alt="A bowl of Vietnamese phở with clear broth, rice noodles, and fresh green herbs"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-brand-green-deep/55 via-brand-green-deep/15 to-brand-green-deep/85"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-brand-green-deep/60 via-transparent to-transparent"
      />

      <div className="relative flex h-full flex-col justify-between px-6 pb-12 pt-32 md:px-14 md:pb-20 md:pt-40 lg:px-20">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-cream/30 bg-brand-green-deep/40 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-brand-cream/80 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gold-soft" />
            Est. in the family kitchen
          </span>
          <p className="mt-6 font-script text-3xl text-brand-gold-soft md:text-4xl">
            Phở gà, the way grandmother made it.
          </p>
        </div>

        <div className="max-w-4xl">
          <h1 className="font-display text-[3rem] font-medium leading-[0.95] tracking-tight text-brand-cream md:text-[5.5rem] lg:text-[6.5rem]">
            A bowl of broth.
            <br />
            <span className="italic text-brand-gold-soft">Three generations</span>
            <br />
            of patience.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-brand-cream/85 md:text-lg">
            We simmer free-range chicken bones for fourteen hours with charred
            ginger, toasted spices, and a quiet stove. Pull up a stool. Stay a
            while.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3 md:gap-4">
            <Link
              href="#menu"
              className="group inline-flex items-center gap-3 rounded-full bg-brand-gold px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-brand-green-deep transition-colors hover:bg-brand-cream"
            >
              See the Menu
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#book"
              className="inline-flex items-center gap-3 rounded-full border border-brand-cream/40 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-brand-cream backdrop-blur-sm transition-colors hover:bg-brand-cream/10"
            >
              Reserve a Table
            </Link>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 rotate-90 text-[10px] uppercase tracking-[0.4em] text-brand-cream/55 md:block"
      >
        Bếp Nhà — Family Kitchen — San Jose, CA
      </div>
    </section>
  );
}
