import type { NextPage } from "next";
import dynamic from 'next/dynamic';
import Spinner from "../components/Spinner";
import Navbar from "../components/Navbar";

const HomepageContent = dynamic(() => import('../components/HomepageContent'), {
  loading: () => <Spinner />,
  ssr: false
})

const Home: NextPage = () => {
  return (
    <main>
      <Navbar />
      <HomepageContent />
    </main>
  );
};

export default Home;
