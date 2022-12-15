import React, { Component } from "react";
import Slider from "react-slick";
import styles from ".//CodeProjects.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

function CodeProjects() {
  const images = [
    "/coder/myPages/3dNoticias.png",
    "/coder/myPages/ElPractico.png",
    "/coder/myPages/GusbertiPropiedades.png",
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

  const settingsM = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <LeftArrow />,
    prevArrow: <RightArrow />,
  };

  const easing = [0, 0.9, 0.11, 0.99];

  const fadeInUp = {
    initial: { opacity: 0, y: 1000 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easing } },
  };

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
      variants={fadeInUp}
      className={styles.main}
    >
      <h2 className={styles.title}> web projects where I participated </h2>
      <div className={styles.projects}>
        {images.map((images) => (
          <div className={styles.projCard}>
            <Image
              src={images}
              className={styles.projPreview}
              width={400}
              height={250}
            />
          </div>
        ))}
      </div>
      <div className={styles.projectsSliderMobile}>
        <Slider {...settingsM}>
          {images.map((images) => (
            <div className={styles.projPreview}>
              <Image
                src={images}
                className={styles.projPreview}
                width={400}
                height={250}
              />
            </div>
          ))}
        </Slider>
      </div>
    </motion.div>
  );
}

export default CodeProjects;
