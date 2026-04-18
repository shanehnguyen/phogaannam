import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { FeatureStat } from "@/components/FeatureStat";
import { DarkFeature } from "@/components/DarkFeature";
import { Marquee } from "@/components/Marquee";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FeatureStat />
        <DarkFeature />
        <Marquee />
      </main>
      <Footer />
    </>
  );
}
