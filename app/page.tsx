import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Specialty } from "@/components/Specialty";
import { MenuPreview } from "@/components/MenuPreview";
import { Gallery } from "@/components/Gallery";
import { Visit } from "@/components/Visit";
import { Marquee } from "@/components/Marquee";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <div className="relative bg-brand-cream">
          <Nav />
          <Hero />
        </div>
        <Specialty />
        <MenuPreview />
        <div className="bg-brand-green">
          <Gallery />
        </div>
        <div className="bg-brand-gold">
          <Visit />
        </div>
        <div className="bg-brand-green-deep">
          <Marquee />
        </div>
      </main>
      <Footer />
    </>
  );
}
