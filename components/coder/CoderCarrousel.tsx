import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from ".//CoderCarrousel.module.scss";
import profilePic from "../../src/logo.webp";
import Image from "next/image";
import { motion } from "framer-motion";

function CoderCarrousel() {
  const images = [
    profilePic,
    profilePic,
    profilePic,
    profilePic,
    profilePic,
    profilePic,
    profilePic,
    profilePic,
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
    slidesToShow: 4,
    slidesToScroll: 3,
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
                  <Image src={images} />
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}

export default CoderCarrousel;
