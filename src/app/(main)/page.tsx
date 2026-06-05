import BannerCarousel from "@/components/BannerCarousel";
import Counter from "@/components/Counter";
import MensSection from "@/components/home/MensSection";
import LatestShipmentCarousel from "@/components/LatestShipmentCarousel";
import MessageDirector from "@/components/MessageDirector";
import ProfessionalDress from "@/components/ProfessionalDress";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <BannerCarousel />

      <ProfessionalDress />

      <LatestShipmentCarousel />

      <MensSection />

      <MessageDirector />

      <Counter />
    </div>
  );
}
