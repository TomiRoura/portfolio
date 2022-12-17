import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CarrouselAppSlider from "../components/designer/carrousels/CarrouselAppSlider";
import CompareSlider from "../components/designer/CompareSlider";
import CarrouselVidSlider from "../components/designer/carrousels/CarrouselVidSlider";
import CarrouselPicSlider from "../components/designer/carrousels/CarrouselPicSlider";
import MobilePicCarrousel from "../components/designer/carrousels/MobilePicCarrousel";
import ParticlesBackground from "../components/designer/ParticlesBackground";
import MobileHorizontalPicCarrousel from "../components/designer/carrousels/MobileHorizontalPicCarrousel";

const designer: NextPage = () => {
  return (
    <main>
      <Navbar />
      <CarrouselAppSlider />
      <CompareSlider />
      <CarrouselVidSlider />
      <CarrouselPicSlider />
      <MobilePicCarrousel />
      <MobileHorizontalPicCarrousel />
      <ParticlesBackground />
      <Footer />
    </main>
  );
};

export default designer;
