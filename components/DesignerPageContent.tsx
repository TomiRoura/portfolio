import CarrouselAppSlider from "./designer/carrousels/CarrouselAppSlider";
import CarrouselPicSlider from "./designer/carrousels/CarrouselPicSlider";
import CarrouselVidSlider from "./designer/carrousels/CarrouselVidSlider";
import MobileHorizontalPicCarrousel from "./designer/carrousels/MobileHorizontalPicCarrousel";
import MobilePicCarrousel from "./designer/carrousels/MobilePicCarrousel";
import CompareSlider from "./designer/CompareSlider";
import ParticlesBackground from "./designer/ParticlesBackground";
import Footer from "./Footer";

const DesignerPageContent = () => (
    <>
        <CarrouselAppSlider />
        <CompareSlider />
        <CarrouselVidSlider />
        <CarrouselPicSlider />
        <MobilePicCarrousel />
        <MobileHorizontalPicCarrousel />
        <ParticlesBackground />
        <Footer />
    </>
);
export default DesignerPageContent;