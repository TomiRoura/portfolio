import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import dynamic from 'next/dynamic';
import Spinner from "../components/Spinner";

const DesignerPageContent = dynamic(() => import('../components/DesignerPageContent'), {
  loading: () => <Spinner />,
  ssr: false
})

const designer: NextPage = () => {
  return (
    <main>
      <Navbar />
      <DesignerPageContent />
    </main>
  );
};

export default designer;
