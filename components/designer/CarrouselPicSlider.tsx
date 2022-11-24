import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from ".//CarrouselPicSlider.module.scss";
import profilePic from "../../src/testing.webp";
import nadanada from "../../src/testing3.webp";
import Image from "next/image";

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

function CarrouselPicSlider() {
  const [imgIndex, setImgIndex] = useState(0);

  const images = [
    profilePic,
    nadanada,
    profilePic,
    profilePic,
    nadanada,
    nadanada,
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
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

  return (
    <main className={styles.main}>
      <div className={styles.carrouselSlider}>
        <h2 className={styles.Title}> some of my last photography projects</h2>
        <div className={styles.imageSlider}>
          <Slider {...settings}>
            {images.map((images) => (
              <div className={styles.image}>
                <Image src={images} className={styles.image} />
              </div>
            ))}
          </Slider>
        </div>
        <div className={styles.imageSliderT}>
          <Slider {...settingsT}>
            {images.map((images) => (
              <div className={styles.image}>
                <Image src={images} className={styles.image} />
              </div>
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
