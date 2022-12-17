import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./CarrouselPicSlider.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import PicToggle, { ImgSlide } from "../toggles/picToggle";

function RightArrow(props: any) {
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

function LeftArrow(props: any) {
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

function CarrouselPicSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <LeftArrow />,
    prevArrow: <RightArrow />,
  };

  const settingsT = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <LeftArrow />,
    prevArrow: <RightArrow />,
  };

  const [picOpen, setPicOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<ImgSlide>(null);
  const [swipedRecently, setSwipedRecently] = useState(false);

  useEffect(() => {
    if (!swipedRecently) return;
    const timeout = setTimeout(() => {
      setSwipedRecently(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [swipedRecently]);

  const onClickSlide = (slide: ImgSlide) => {
    if (swipedRecently) return;
    setSelectedImage(slide);
    setPicOpen(!picOpen);
  };

  const slides: Array<ImgSlide> = [
    {
      image: "/designer/PicCarrouselDiv/apple_liquer_after.webp",
      editedImage: "/designer/PicCarrouselDiv/apple_liquer_before.webp",
    },
    {
      image: "/designer/PicCarrouselDiv/blond_girl_after.webp",
      editedImage: "/designer/PicCarrouselDiv/blond_girl_before.webp",
    },
    {
      image: "/designer/PicCarrouselDiv/red_fish_after.webp",
      editedImage: "/designer/PicCarrouselDiv/red_fish_before.webp",
    },
    {
      image: "/designer/PicCarrouselDiv/shibuya_after.webp",
      editedImage: "/designer/PicCarrouselDiv/shibuya_before.webp",
    },
    {
      image: "/designer/PicCarrouselDiv/purple_girl_after.webp",
      editedImage: "/designer/PicCarrouselDiv/purple_girl_before.webp",
    },
    {
      image: "/designer/PicCarrouselDiv/tigger_river_after.webp",
      editedImage: "/designer/PicCarrouselDiv/tigger_river_before.webp",
    },
  ];

  return (
    <main className={styles.main}>
      {picOpen && (
        <PicToggle
          isOpen={picOpen}
          handleClose={() => setPicOpen(false)}
          slide={selectedImage}
        />
      )}

      <div className={styles.carrouselSlider}>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          whileInView={{ y: 0, opacity: 1 }}
          className={styles.Title}
          viewport={{ once: true }}
        >
          Click on one of my last photography projects to see the
          <span className={styles.CapitalWord}> before and after </span>editing
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={styles.imageSlider}
        >
          <Slider {...settings} onSwipe={() => setSwipedRecently(true)}>
            {slides.map((slide) => (
              <motion.div
                className={styles.image}
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1 }}
                onClick={() => onClickSlide(slide)}
              >
                <Image
                  src={slide.image}
                  className={styles.image}
                  width={1000}
                  height={1500}
                  priority={false}
                />
              </motion.div>
            ))}
          </Slider>
        </motion.div>
        <div className={styles.imageSliderT}>
          <Slider {...settingsT} onSwipe={() => setSwipedRecently(true)}>
            {slides.map((slide) => (
              <motion.div
                className={styles.image}
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1 }}
                onClick={() => onClickSlide(slide)}
              >
                <Image
                  src={slide.image}
                  className={styles.image}
                  width={1000}
                  height={1500}
                  priority={false}
                />
              </motion.div>
            ))}
          </Slider>
        </div>
      </div>
    </main>
  );
}

export default CarrouselPicSlider;
