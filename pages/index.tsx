import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import AboutMe from '../components/AboutMe';
import HoverVideos from '../components/HoverVideos';


const Home: NextPage = () => {
  return (
    <main>

      <Navbar />
      <HoverVideos />
      <AboutMe />
      <Footer />
    </main>

  )
}
export default Home
