import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import dynamic from 'next/dynamic';
import Spinner from "../components/Spinner";

const CoderPageContent = dynamic(() => import('../components/CoderPageContent'), {
  loading: () => <Spinner />,
  ssr: false
})

const coder: NextPage = () => {
  return (
    <main>
      <CoderPageContent />
      <Navbar />
    </main>
  );
};

export default coder;
