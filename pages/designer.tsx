import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CarrouselAppSlider from "../components/designer/CarrouselAppSlider";
import CompareSlider from "../components/designer/CompareSlider";
import CarrouselVidSlider from "../components/designer/CarrouselVidSlider";
import CarrouselPicSlider from "../components/designer/CarrouselPicSlider";

const designer: NextPage = () => {
  return (
    <main>
      <Navbar />
      <CarrouselAppSlider />
      <CompareSlider />
      <CarrouselVidSlider />
      <CarrouselPicSlider />
      <Footer />
    </main>
  );
};

export default designer;
