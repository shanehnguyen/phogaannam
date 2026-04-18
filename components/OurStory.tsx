import Image from "next/image";

const milestones = [
  { year: "1962", body: "Bà Nội opens a sidewalk pho cart in Đà Nẵng." },
  { year: "1985", body: "The family carries the recipe — and the stockpot — to America." },
  { year: "2014", body: "Phở Gà An Nam opens its doors on a quiet block in Austin." },
];

export function OurStory() {
  return (
    <section
      id="story"
      className="bg-brand-green-deep text-brand-cream relative scroll-mt-28 overflow-hidden rounded-t-[28px] md:rounded-t-[44px]"
    >
      <div
        aria-hidden
        className="bg-brand-gold/10 pointer-events-none absolute -top-32 -right-20 h-[480px] w-[480px] rounded-full blur-3xl"
      />
      <div
        aria-hidden
        className="bg-brand-clay/15 pointer-events-none absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full blur-3xl"
      />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 gap-16 px-6 py-24 md:py-36 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:px-12">
        <div>
          <span className="text-brand-gold-soft text-[11px] uppercase tracking-[0.32em]">
            Câu Chuyện — Our Story
          </span>
          <h2 className="mt-5 font-display text-5xl font-medium leading-[1.02] tracking-tight md:text-6xl lg:text-[4.6rem]">
            A recipe is just
            <span className="text-brand-gold-soft italic"> a story </span>
            you can taste.
          </h2>
          <div className="text-brand-cream/80 mt-8 max-w-lg space-y-5 text-base leading-relaxed md:text-lg">
            <p>
              Our grandmother used to say a good pot of broth needs three things:
              good bones, good time, and someone who is willing to listen to it.
            </p>
            <p>
              Three generations later, our stove still hums all night. The
              recipe is unchanged. The aim — to feed you the way we feed our
              own — is unchanged. Welcome.
            </p>
          </div>

          <p className="font-script text-brand-gold-soft mt-10 text-3xl">
            — The An Nam family
          </p>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px]">
            <Image
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=85"
              alt="A Vietnamese cook tending a tall stockpot on a quiet stove, steam rising"
              fill
              sizes="(min-width: 1024px) 600px, 90vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="from-brand-green-deep/70 absolute inset-0 bg-gradient-to-t to-transparent"
            />
          </div>

          <ol className="mt-10 space-y-5">
            {milestones.map(({ year, body }) => (
              <li
                key={year}
                className="border-brand-cream/15 hover:border-brand-gold/60 flex items-baseline gap-6 border-l-2 pl-6 transition-colors"
              >
                <span className="text-brand-gold-soft font-display w-16 shrink-0 text-2xl font-semibold tracking-tight">
                  {year}
                </span>
                <p className="text-brand-cream/85 text-base leading-relaxed">
                  {body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
