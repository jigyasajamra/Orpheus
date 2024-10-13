import Image from "next/image";
import HeroSection from "./components/heroSection";
import SoundQualityDisplay from "./components/sound";
import PlansDisplay from "./components/plan";
import { AppleCardsCarouselDemo } from "./components/carousel";
import { HeroParallaxDemo } from "./components/gallery";
import FAQSection from "./components/faq";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
    <HeroSection />
    <AppleCardsCarouselDemo />
    <SoundQualityDisplay />
    <PlansDisplay />
    <HeroParallaxDemo />
    <FAQSection />
    <Footer />
    </>
  );
}
