import React from "react";
import Slider from "react-slick";
import styles from "./CodeProjects.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";


function CodeProjects() {
  const projects = [
    {
      image: "/coder/myPages/el_practico.webp",
      href: "https://www.elpractico.com/",
    },
    {

      image: "/coder/myPages/3d_noticias.webp",
      href: "https://3dnoticias.com.ar/",
    },
    {
      image: "/coder/myPages/gusberti_propiedades.webp",
      href: "https://www.gusbertipropiedades.com/",
    },
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <LeftArrow />,
    prevArrow: <RightArrow />,
  };

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

      <div className={styles.projectsSlider}>
        <Slider {...settings}>
          {projects.map(project => (
            <motion.div
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 1 }}
              className={styles.projPreview}
            >
              <a href={project.href}>
                <Image
                  src={project.image}
                  alt=''
                  className={styles.EveryProject}
                  width={400}
                  height={225}
                />
              </a>
            </motion.div>
          ))}
        </Slider>
      </div>

      <div className={styles.projectsSliderMobile}>
        <Slider {...settingsM}>
          {projects.map(project => (
            <div className={styles.mobileProjPreview}>
              <a href={project.href}>
                <Image
                  src={project.image}
                  alt=''
                  className={styles.EveryProject}
                  width={400}
                  height={225}
                />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </motion.div>
  );
}

export default CodeProjects;
