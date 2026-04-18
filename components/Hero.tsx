import Image from "next/image";

export function Hero() {
  return (
    <section className="px-4 pb-4 pt-4 md:px-6 md:pb-6">
      <div className="relative mx-auto aspect-[16/9] w-full max-w-[1400px] overflow-hidden rounded-b-[40px] md:aspect-[21/9] md:rounded-b-[56px]">
        <Image
          src="https://images.unsplash.com/photo-1583224964978-2257b960c3d3?auto=format&fit=crop&w=2000&q=80"
          alt="A spread of Vietnamese dishes — a steaming bowl of pho with herbs and lime, spring rolls, and fresh greens on a wooden table"
          fill
          priority
          sizes="(min-width: 1400px) 1400px, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
