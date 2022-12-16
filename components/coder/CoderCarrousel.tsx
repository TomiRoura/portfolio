import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from ".//CoderCarrousel.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

function CoderCarrousel() {
  const images = [
    "/coder/AppsCarrousel/CSS.webp",
    "/coder/AppsCarrousel/JavaScript.webp",
    "/coder/AppsCarrousel/Nextjs.webp",
    "/coder/AppsCarrousel/Nodejs.webp",
    "/coder/AppsCarrousel/React.webp",
    "/coder/AppsCarrousel/SCSS.webp",
    "/coder/AppsCarrousel/Shopify.webp",
    "/coder/AppsCarrousel/SQL.webp",
    "/coder/AppsCarrousel/TypeScript.webp",
    "/coder/AppsCarrousel/WordPress.webp",
  ];

  function RightArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <img src="/arrows.webp" alt="arrow" className={styles.arrow} />
      </div>
    );
  }

  function LeftArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <img src="/arrows2.webp" alt="arrow" className={styles.arrow} />
      </div>
    );
  }

  const easing = [0, 0.9, 0.11, 0.99];

  const fadeInUpTitle = {
    initial: { y: -800, opacity: 1 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.6, ease: easing } },
  };

  const fadeInUp = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 3, ease: easing } },
  };

  const stagger = { animate: { transition: { staggerChildren: 0.4 } } };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <LeftArrow />,
    prevArrow: <RightArrow />,
  };

  return (
    <main className={styles.main}>
      <motion.div
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <div className={styles.carrouselSlider}>
          <motion.div variants={fadeInUpTitle}>
            <h2 className={styles.fullStackDev}> Full Stack developer </h2>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <h2 className={styles.AppsThatIUse}> technologies that I use </h2>
            <Slider {...settings}>
              {images.map((images) => (
                <div className={styles.image}>
                  <Image src={images} width={50} height={50} priority={true} />
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>
        <motion.div variants={fadeInUp} className={styles.backgroundImage}>
          <Image
            src="/designer/DesignerMainBackground.webp"
            width={900}
            height={600}
            priority={true}
          />
        </motion.div>
      </motion.div>
    </main>
  );
}

export default CoderCarrousel;
