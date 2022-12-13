import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./CarrouselPicSlider.module.scss";
import profilePic from "../../../src/testing.webp";
import testing3 from "../../../src/testing3.webp";
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
    slidesToScroll: 2,
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
      image: "/designer/PicCarrouselDiv/AppleLiquerAfter.png",
      editedImage: "/designer/PicCarrouselDiv/AppleLiquerBefore.png",
    },
    {
      image: "/designer/PicCarrouselDiv/BlondGirlAfter.png",
      editedImage: "/designer/PicCarrouselDiv/BlondGirlBefore.png",
    },
    {
      image: "/designer/PicCarrouselDiv/RedFishAfter.png",
      editedImage: "/designer/PicCarrouselDiv/RedFishBefore.png",
    },
    {
      image: "/designer/PicCarrouselDiv/ShibuyaAfter.png",
      editedImage: "/designer/PicCarrouselDiv/ShibuyaBefore.png",
    },
    {
      image: "/designer/PicCarrouselDiv/PurpleGirlAfter.png",
      editedImage: "/designer/PicCarrouselDiv/PurpleGirlBefore.png",
    },
    {
      image: "/designer/PicCarrouselDiv/TiggerRiverAfter.png",
      editedImage: "/designer/PicCarrouselDiv/TiggerRiverBefore.png",
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
        <h2 className={styles.Title}>
          Click on one of my last photography projects to see the
          <span className={styles.CapitalWord}> before and after </span>editing
        </h2>

        <div className={styles.imageSlider}>
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
                />
              </motion.div>
            ))}
          </Slider>
        </div>
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
