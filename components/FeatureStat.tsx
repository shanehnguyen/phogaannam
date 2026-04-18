import Image from "next/image";

export function FeatureStat() {
  return (
    <section className="bg-brand-cream rounded-t-[40px] md:rounded-t-[56px]">
      <div className="mx-auto grid min-h-[600px] max-w-[1400px] grid-cols-1 items-center gap-12 px-6 py-24 md:grid-cols-2 md:gap-8 md:py-32">
        <div className="relative mx-auto aspect-square w-full max-w-md">
          <span
            aria-hidden="true"
            className="absolute left-[8%] top-[18%] h-[70%] w-[70%] rounded-full bg-[#b6a58f]/80"
          />
          <Image
            src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80"
            alt="A top-down view of a bowl of chicken pho with rice noodles, fresh herbs, lime, and chili"
            fill
            sizes="(min-width: 768px) 480px, 90vw"
            className="object-contain"
          />
        </div>

        <div className="text-brand-green">
          <h2 className="font-display text-6xl leading-[0.95] tracking-wide md:text-[7rem]">
            100%
            <br />
            Authentic
          </h2>
          <p className="mt-6 font-script text-3xl md:text-4xl">Family recipe since 1987</p>
        </div>
      </div>
    </section>
  );
}
