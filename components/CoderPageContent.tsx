import AboutCodeProjects from "./coder/AboutCodeProjects";
import CodeProjects from "./coder/CodeProjects";
import CoderCarrousel from "./coder/CoderCarrousel";
import Footer from "./Footer";

const CoderPageContent = () => (
    <>
        <CoderCarrousel />
        <CodeProjects />
        <AboutCodeProjects />
        <Footer />
    </>
);
export default CoderPageContent;