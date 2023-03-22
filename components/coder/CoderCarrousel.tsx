import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./CoderCarrousel.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

function CoderCarrousel() {
  const images = [
    "/coder/AppsCarrousel/css_logo.webp",
    "/coder/AppsCarrousel/javascript_logo.webp",
    "/coder/AppsCarrousel/nextjs_logo.webp",
    "/coder/AppsCarrousel/nodejs_logo.webp",
    "/coder/AppsCarrousel/react_logo.webp",
    "/coder/AppsCarrousel/scss_logo.webp",
    "/coder/AppsCarrousel/shopify_logo.webp",
    "/coder/AppsCarrousel/sql_logo.webp",
    "/coder/AppsCarrousel/typescript_logo.webp",
    "/coder/AppsCarrousel/wordpress_logo.webp",
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
    initial: { y: -100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: easing },
    },
  };

  const fadeInUp = {
    initial: { y: 100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: easing },
    },
  };

  const fadeInUpImage = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
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
                  <Image src={images} width={50} height={50} />
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>
        <motion.div variants={fadeInUpImage} className={styles.backgroundImage} >
          <Image
            src="/coder/coderLogo.png"
            width={300}
            height={300}

          />
        </motion.div>
      <motion.div
            variants={fadeInUpImage}
            className={styles.glass}>
          </motion.div>

        </motion.div>
        <div className={styles.squareBlue}></div>
        <div className={styles.squarePurple}></div>
        <div className={styles.squareGreen}></div>
        <div className={styles.squareYellow}></div>
        <div className={styles.squareLightBlue}></div>
    </main>
  );
}

export default CoderCarrousel;
