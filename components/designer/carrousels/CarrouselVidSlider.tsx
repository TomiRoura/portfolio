import React, { useCallback, useEffect, useState } from "react";
import Slider from "react-slick";
import styles from "./CarrouselVidSlider.module.scss";
import wallpaperComp from "../../../src/wallpaperCarrousel.webp";
import Image from "next/image";
import { motion } from "framer-motion";
import VidToggle, { Slide } from "../toggles/vidToggle";

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

function CarrouselVidSlider() {
  const [picOpen, setPicOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Slide>(null);
  const [swipedRecently, setSwipedRecently] = useState(false);

  const slides: Array<Slide> = [
    {
      image: wallpaperComp,
      video: "/designer/VidCarrouselDiv/BoldDrink.mp4",
    },
    {
      image: wallpaperComp,
      video: "/designer/VidCarrouselDiv/CocktailCommercial.mp4",
    },
    {
      image: wallpaperComp,
      video: "/designer/VidCarrouselDiv/MarcopoloG8.mp4",
    },
    {
      image: wallpaperComp,
      video: "/designer/VidCarrouselDiv/MonsterCommercial.mp4",
    },
    {
      image: wallpaperComp,
      video: "/designer/VidCarrouselDiv/Olipop.mp4",
    },
    {
      image: wallpaperComp,
      video: "/designer/VidCarrouselDiv/PicoCommercial.mp4",
    },
  ];

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

  useEffect(() => {
    if (!swipedRecently) return;
    const timeout = setTimeout(() => {
      setSwipedRecently(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [swipedRecently]);

  const onClickSlide = useCallback(
    (slide: Slide) => {
      if (swipedRecently) return;
      setSelectedImage(slide);
      setPicOpen(!picOpen);
    },
    [swipedRecently, setPicOpen, setSelectedImage, picOpen]
  );

  return (
    <main>
      {picOpen && (
        <VidToggle
          isOpen={picOpen}
          handleClose={() => setPicOpen(false)}
          currentSlide={selectedImage}
        />
      )}
      <div className={styles.main}>
        <h2 className={styles.title}>
          some of my recent
          <span className={styles.CapitalWord}> video projects </span>{" "}
        </h2>
        <div className={styles.VidSlider}>
          <Slider
            {...settings}
            onSwipe={() => setSwipedRecently(true)}
            nextArrow={<LeftArrow />}
            prevArrow={<RightArrow />}
          >
            {slides.map((slide) => (
              <motion.div
                className={styles.video}
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1 }}
                onClick={() => onClickSlide(slide)}
              >
                <Image src={slide.image} className={styles.video} />
              </motion.div>
            ))}
          </Slider>
        </div>
        <div className={styles.VidSliderMobile}>
          <Slider {...settingsM} onSwipe={() => setSwipedRecently(true)}>
            {slides.map((slide) => (
              <div className={styles.video}>
                <Image src={slide.image} className={styles.video}></Image>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </main>
  );
}

export default CarrouselVidSlider;
