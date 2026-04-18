import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Dish = {
  vi: string;
  en: string;
  category: string;
  price: string;
  description: string;
  image: string;
  alt: string;
  featured?: boolean;
};

const dishes: Dish[] = [
  {
    vi: "Bún Bò Huế",
    en: "Spicy Beef Noodle Soup",
    category: "Bún · Vermicelli",
    price: "$18",
    description:
      "Lemongrass-and-chili broth from the imperial city of Huế. Beef shank, pork knuckle, thick round rice noodles.",
    image: "/food-images/66170222_Pho_Ga_Am_Nam_SpicyBeefNoodleSoup.webp",
    alt: "A bowl of bún bò Huế with thick rice noodles, beef, and a chili-red broth",
    featured: true,
  },
  {
    vi: "Nem Nướng & Gỏi Cuốn",
    en: "Grilled Pork Patties & Spring Rolls",
    category: "Khai Vị · Appetizer",
    price: "$14",
    description:
      "Charcoal-grilled pork patties and fresh spring rolls with rice paper, herbs, and dipping sauce.",
    image:
      "/food-images/66170222_Pho_Ga_Am_Nam_GrilledPorkPattiesSpringRolls.webp",
    alt: "Grilled pork patties with fresh Vietnamese spring rolls on a plate",
  },
  {
    vi: "Bánh Bèo Chén",
    en: "Steamed Rice Cakes",
    category: "Bánh · Small Plate",
    price: "$12",
    description:
      "Silky steamed rice cakes topped with dried shrimp, scallion oil, and crispy pork rind.",
    image: "/food-images/banh+beo+chen.webp",
    alt: "Small bowls of Vietnamese bánh bèo with shrimp and scallion oil",
  },
  {
    vi: "Bún Măng Gỏi Vịt",
    en: "Duck & Bamboo Noodle Soup",
    category: "Bún · Vermicelli",
    price: "$17",
    description:
      "Clear duck broth with tender bamboo shoots, rice vermicelli, and a side of ginger-lime duck salad.",
    image: "/food-images/bun+mang+goi+vit.webp",
    alt: "A bowl of Vietnamese bún măng with duck and bamboo shoots",
  },
  {
    vi: "Cơm Gà Xíu Xíu",
    en: "An Nam Chicken Rice",
    category: "Cơm · Rice",
    price: "$16",
    description:
      "House-marinated chicken over turmeric rice with gingered scallion oil, pickles, and a clear broth.",
    image: "/food-images/com+ga+siu+siu+an+nam.webp",
    alt: "A plate of An Nam chicken and rice with pickles and a side broth",
  },
  {
    vi: "Xôi Chiên Gà Rôti",
    en: "Crispy Sticky Rice & Rotisserie Chicken",
    category: "Xôi · Sticky Rice",
    price: "$17",
    description:
      "Golden fried sticky rice cake with caramel-glazed rotisserie chicken and pickled daikon.",
    image: "/food-images/xoi+chien+ga+roti.webp",
    alt: "Crispy fried sticky rice with rotisserie chicken",
  },
];

export function MenuPreview() {
  return (
    <section
      id="menu"
      className="bg-brand-cream relative scroll-mt-28 pb-28 pt-8 md:pb-36 md:pt-12"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="text-brand-clay text-[11px] uppercase tracking-[0.32em]">
              Thực Đơn — The Menu
            </span>
            <h2 className="text-brand-green-deep mt-5 font-display text-5xl font-medium leading-[1.02] tracking-tight md:text-6xl lg:text-[4.4rem]">
              Six dishes
              <span className="text-brand-clay italic"> we&rsquo;d serve our family.</span>
            </h2>
          </div>
          <Link
            href="#full-menu"
            className="text-brand-green-deep hover:text-brand-clay group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] transition-colors"
          >
            Full menu
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {dishes.map((dish) => (
            <article
              key={dish.vi}
              className={`group bg-brand-cream relative flex flex-col overflow-hidden rounded-[24px] shadow-[0_18px_40px_-30px_rgba(18,35,24,0.5)] transition-transform hover:-translate-y-1 ${
                dish.featured ? "lg:col-span-1 lg:row-span-1" : ""
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.alt}
                  fill
                  sizes="(min-width: 1024px) 420px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {dish.featured && (
                  <span className="bg-brand-gold text-brand-green-deep absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em]">
                    Signature
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-7">
                <p className="text-brand-clay text-[10px] uppercase tracking-[0.28em]">
                  {dish.category}
                </p>
                <div className="mt-3 flex items-baseline justify-between gap-3">
                  <h3 className="text-brand-green-deep font-display text-2xl font-semibold leading-tight tracking-tight md:text-[1.7rem]">
                    {dish.vi}
                  </h3>
                  <span className="text-brand-green-deep/70 font-display text-lg">
                    {dish.price}
                  </span>
                </div>
                <p className="text-brand-green-deep/70 mt-1 text-sm italic">
                  {dish.en}
                </p>
                <p className="text-brand-green-deep/75 mt-4 text-sm leading-relaxed">
                  {dish.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
