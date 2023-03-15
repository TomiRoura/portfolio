import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./CarrouselAppSlider.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/designer/AppsDiv/adobe_audition_circle.webp",
  "/designer/AppsDiv/after_effects_circle.webp",
  "/designer/AppsDiv/premiere_circle.webp",
  "/designer/AppsDiv/photoshop_circle.webp",
  "/designer/AppsDiv/lightroom_circle.webp",
  "/designer/AppsDiv/illustrator_circle.webp",
  "/designer/AppsDiv/blender_circle.webp",
  "/designer/AppsDiv/davinci_circle.webp",
  "/designer/AppsDiv/figma_circle.webp",
  "/designer/AppsDiv/procreate_circle.webp",
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
        transition: { duration: 0.2 },
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
                      priority
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
              src="/designer/imageFront.png"
              width={300}
              height={200}
              priority
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
}
