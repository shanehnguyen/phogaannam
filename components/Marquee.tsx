const phrases = [
  "AUTHENTIC PHO",
  "FRESH HERBS DAILY",
  "FAMILY RECIPE",
  "SLOW-SIMMERED BROTH",
  "VIETNAMESE SOUL FOOD",
];

export function Marquee() {
  const items = [...phrases, ...phrases];

  return (
    <section
      aria-label="What we stand for"
      className="bg-brand-red flex h-[120px] items-center overflow-hidden md:h-[160px]"
    >
      <div className="animate-marquee flex w-max shrink-0 items-center">
        {items.map((phrase, i) => (
          <span
            key={`${phrase}-${i}`}
            className="font-display text-brand-cream mx-10 whitespace-nowrap text-5xl leading-none tracking-wide md:mx-16 md:text-7xl lg:text-8xl"
          >
            {phrase}
            <span aria-hidden="true" className="ml-10 md:ml-16">
              •
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
