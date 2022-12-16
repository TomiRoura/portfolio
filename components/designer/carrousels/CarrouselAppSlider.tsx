import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./CarrouselAppSlider.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/designer/AppsDiv/AdobeAudition.webp",
  "/designer/AppsDiv/AfterEffects.webp",
  "/designer/AppsDiv/Blender.webp",
  "/designer/AppsDiv/Davinci.webp",
  "/designer/AppsDiv/Figma.webp",
  "/designer/AppsDiv/Illustrator.webp",
  "/designer/AppsDiv/Lightroom.webp",
  "/designer/AppsDiv/Photoshop.webp",
  "/designer/AppsDiv/Premiere.webp",
  "/designer/AppsDiv/Procreate.webp",
];

function RightArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <img src="arrows.webp" alt="arrow" className={styles.arrow} />
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
      <img src="arrows2.webp" alt="arrow" className={styles.arrow} />
    </div>
  );
}

export default class CarrouselSlider extends Component {
  render() {
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
          <script src="particles.js"></script>
          <div className={styles.carrouselSlider}>
            <motion.div variants={fadeInUpTitle}>
              <h2 className={styles.designerAndFilmaker}>
                Designer and Filmaker
              </h2>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h2 className={styles.AppsThatIUse}>apps that I use</h2>
              <Slider {...settings}>
                {images.map((image) => (
                  <div className={styles.image}>
                    <Image
                      src={image}
                      width={60}
                      height={60}
                      className={styles.image}
                      priority={true}
                    />
                  </div>
                ))}
              </Slider>
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUpImage}
            className={styles.backgroundImage}
          >
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
}
