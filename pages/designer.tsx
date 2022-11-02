import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CarrouselAppSlider from '../components/CarrouselAppSlider'
import CompareSlider from '../components/CompareSlider'
import CarrouselVidSlider from '../components/CarrouselVidSlider'
import CarrouselPicSlider from '../components/CarrouselPicSlider'


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
    )
}


export default designer