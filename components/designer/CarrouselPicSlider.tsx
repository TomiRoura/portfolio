import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from ".//CarrouselPicSlider.module.scss";
import profilePic from "../../src/testing.webp";
import testing3 from "../../src/testing3.webp";
import Image from "next/image";
import { motion } from "framer-motion";
import PicToggle from "./toggles/picToggle";

function RightArrow(props: any) {
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

function LeftArrow(props: any) {
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

function CarrouselPicSlider() {
  const [imgIndex, setImgIndex] = useState(0);

  const images = [
    profilePic,
    testing3,
    profilePic,
    profilePic,
    testing3,
    testing3,
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

  const settingsT = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <LeftArrow />,
    prevArrow: <RightArrow />,
  };

  const settingsM = {
    beforeChange: (current, next) => setImgIndex(next),
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <LeftArrow />,
    prevArrow: <RightArrow />,
    centerMode: true,
  };

  const close = () => setPicOpen(false);
  const open = () => setPicOpen(true);
  const [picOpen, setPicOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [swipedRecently, setSwipedRecently] = useState(false);

  useEffect(() => {
    if (!swipedRecently) return;
    const timeout = setTimeout(() => {
      setSwipedRecently(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [swipedRecently]);

  const onClickSlide = (slide: Slide) => {
    if (swipedRecently) return;
    setSelectedImage(slide.image);
    if (picOpen) {
      close();
    } else {
      open();
    }
  };

  type Slide = {
    image: string;
    imageToggle: string;
  };

  const slides: Array<Slide> = [
    { image: testing3, imageToggle: "1" },
    { image: testing3, imageToggle: "2" },
    { image: profilePic, imageToggle: "3" },
    { image: testing3, imageToggle: "4" },
    { image: testing3, imageToggle: "5" },
    { image: profilePic, imageToggle: "6" },
  ];

  return (
    <main className={styles.main}>
      {picOpen && (
        <PicToggle
          isOpen={picOpen}
          handleClose={close}
          currentImage={selectedImage}
        />
      )}
      <div className={styles.carrouselSlider}>
        <h2 className={styles.Title}> some of my last photography projects</h2>
        <div className={styles.imageSlider}>
          <Slider {...settings} onSwipe={() => setSwipedRecently(true)}>
            {slides.map((slide) => (
              <motion.div
                className={styles.image}
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1 }}
                onClick={() => onClickSlide(slide)}
              >
                <Image src={slide.image} className={styles.image} />
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
                <Image src={slide.image} className={styles.image} />
              </motion.div>
            ))}
          </Slider>
        </div>
        <div className={styles.imageSliderM}>
          <Slider {...settingsM}>
            {images.map((images, idx) => (
              <div
                className={idx === imgIndex ? styles.activeSlide : styles.slide}
              >
                <div className={styles.image}>
                  <Image
                    placeholder="blur"
                    src={images}
                    className={styles.image}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </main>
  );
}

export default CarrouselPicSlider;
