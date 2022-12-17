import type { NextPage } from "next";
import AboutCodeProjects from "../components/coder/AboutCodeProjects";
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
      <AboutCodeProjects />
      <Footer />
    </main>
  );
};

export default coder;
