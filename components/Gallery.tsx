const images = [
  {
    span: "md:col-span-2 md:row-span-2",
    aspect: "aspect-[4/5] md:aspect-auto",
  },
  { aspect: "aspect-[4/5]" },
  { aspect: "aspect-[4/5]" },
  { aspect: "aspect-[4/5]" },
  { aspect: "aspect-[4/5]" },
];

export function Gallery() {
  return (
    <section className="bg-brand-cream relative rounded-b-[48px] pb-28 pt-24 md:pb-36 md:pt-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="text-brand-clay text-[11px] uppercase tracking-[0.32em]">
              The Room
            </span>
            <h2 className="text-brand-green-deep mt-5 font-display text-5xl font-medium leading-[1.02] tracking-tight md:text-6xl">
              A small dining room.
              <span className="text-brand-clay italic"> Loud bowls. </span>
              Quiet care.
            </h2>
          </div>
          <p className="text-brand-green-deep/70 max-w-sm text-sm leading-relaxed md:text-base">
            Thirty seats, an open pass, and a stove that has been on since six
            in the morning. We hope it feels like someone&rsquo;s home — because it is.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative flex items-center justify-center overflow-hidden rounded-[18px] md:rounded-[22px] bg-brand-green-deep/5 ring-1 ring-brand-green-deep/10 ${img.aspect} ${img.span ?? ""} ${i === 0 ? "col-span-2" : ""}`}
            >
              <span className="px-3 text-center text-[10px] font-semibold uppercase tracking-[0.32em] text-brand-green-deep/50 md:text-[11px]">
                Insert room image
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
