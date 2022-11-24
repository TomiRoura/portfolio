import type { NextPage } from "next";
import CodeProjects from "../components/coder/CodeProjects";
import CoderCarrousel from "../components/coder/CoderCarrousel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const coder: NextPage = () => {
  return (
    <main>
      <Navbar />
      <CoderCarrousel />
      <CodeProjects />
      <Footer />
    </main>
  );
};

export default coder;
