const phrases = [
  "Phở Gà Đặc Biệt",
  "Slow-Simmered",
  "Family Recipe",
  "Bếp Nhà — Family Kitchen",
  "Fresh Herbs Daily",
  "Hand-Pulled Noodles",
];

export function Marquee() {
  const items = [...phrases, ...phrases];

  return (
    <section
      aria-label="What we stand for"
      className="bg-brand-gold flex h-[110px] items-center overflow-hidden rounded-b-[48px] md:h-[150px]"
    >
      <div className="animate-marquee flex w-max shrink-0 items-center">
        {items.map((phrase, i) => (
          <span
            key={`${phrase}-${i}`}
            className="text-brand-green-deep mx-10 flex items-center gap-10 whitespace-nowrap font-display text-4xl font-medium italic leading-none tracking-tight md:mx-14 md:gap-14 md:text-6xl lg:text-7xl"
          >
            {phrase}
            <span aria-hidden className="text-brand-green-deep/45 text-3xl not-italic">
              ❋
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
