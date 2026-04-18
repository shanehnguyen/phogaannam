import { Flame, Clock3, Leaf } from "lucide-react";

const pillars = [
  {
    Icon: Clock3,
    title: "Slow-simmered broth",
    body: "Beef shank, pork knuckle, lemongrass, and chili oil. Skimmed by hand, never rushed.",
  },
  {
    Icon: Leaf,
    title: "Herbs from the garden",
    body: "Thai basil, banana blossom, scallion. Cut the morning of, set on the table beside the bowl.",
  },
  {
    Icon: Flame,
    title: "A spirited kick",
    body: "Lemongrass, fermented shrimp, and a ribbon of chili oil — warming, layered, unmistakable.",
  },
];

export function Specialty() {
  return (
    <section className="bg-brand-cream">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-14 px-6 py-24 md:py-32 lg:grid-cols-[1.05fr_1fr] lg:gap-20 lg:px-12">
        <div className="relative">
          <div className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-[24px] bg-brand-green-deep/5 ring-1 ring-brand-green-deep/10 md:rounded-[32px]">
            <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-green-deep/50">
              Insert bún bò Huế image
            </span>
          </div>
          <div className="absolute -bottom-6 -right-2 hidden w-64 rounded-2xl bg-brand-green-deep p-5 text-brand-cream shadow-xl md:block lg:-right-6">
            <p className="font-script text-2xl text-brand-gold-soft">Bún Bò Huế</p>
            <p className="mt-1 text-sm leading-relaxed text-brand-cream/85">
              Spicy beef noodle soup from the imperial city. Our specialty.
            </p>
          </div>
        </div>

        <div className="text-brand-green-deep">
          <span className="text-[11px] uppercase tracking-[0.32em] text-brand-clay">
            The Specialty
          </span>
          <h2 className="mt-5 font-display text-5xl font-medium leading-[1.02] tracking-tight md:text-6xl lg:text-[4.6rem]">
            Bún Bò Huế is not a side dish.
            <span className="text-brand-clay italic"> It&rsquo;s the dish.</span>
          </h2>
          <p className="mt-7 max-w-lg text-base leading-relaxed text-brand-green/85 md:text-lg">
            A spicy, lemongrass-driven beef noodle soup from the imperial city
            of Huế. Thick round rice noodles, tender beef shank, pork knuckle,
            and a ribbon of chili oil — bolder on the tongue, heavier on
            memory.
          </p>

          <ul className="mt-10 space-y-6">
            {pillars.map(({ Icon, title, body }) => (
              <li key={title} className="flex gap-5">
                <span className="bg-brand-green-deep/5 ring-brand-green-deep/10 mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full ring-1">
                  <Icon className="text-brand-green-deep h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="font-display text-xl font-semibold tracking-tight md:text-2xl">
                    {title}
                  </p>
                  <p className="text-brand-green/75 mt-1 max-w-md text-sm leading-relaxed md:text-base">
                    {body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
