import React, { useEffect, useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./MobilePicCarrousel.module.scss";
import profilePic from "../../../src/testing.webp";
import testing3 from "../../../src/testing3.webp";
import Image from "next/image";

import type { ImgSlide } from "../toggles/picToggle";

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

type CarouselSlideProps = ImgSlide & {
  isCentered: boolean;
  swipedRecently: boolean;
};

function CarouselSlide(props: CarouselSlideProps) {
  const [edited, setEdited] = useState(false);

  const onClick = () => {
    if (!props.swipedRecently) {
      setEdited(!edited);
    }
  };

  return (
    <div
      onClick={onClick}
      className={props.isCentered ? styles.activeSlide : styles.slide}
    >
      <div className={styles.image}>
        <Image
          placeholder="blur"
          src={edited ? props.editedImage : props.image}
          className={styles.image}
          blurDataURL="/designer/PicCarrouselDiv/AppleLiquerAfter.png"
          width={1000}
          height={1500}
        />
      </div>
    </div>
  );
}

function MobilePicCarrousel() {
  const [imgIndex, setImgIndex] = useState(0);
  const [swipedRecently, setSwipedRecently] = useState(false);

  const settings: Settings = {
    afterChange: (next: number) => setImgIndex(next),
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <LeftArrow />,
    prevArrow: <RightArrow />,
    centerMode: true,
  };

  useEffect(() => {
    if (!swipedRecently) return;
    const timeout = setTimeout(() => {
      setSwipedRecently(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [swipedRecently]);

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
      <h1 className={styles.mobileTitle}>
        Tap on one of my last photography projects to see the
        <span className={styles.CapitalWord}> before and after </span> editing
      </h1>

      <div className={styles.carrouselSlider}>
        <div className={styles.imageSliderM}>
          <Slider {...settings} onSwipe={() => setSwipedRecently(true)}>
            {slides.map((slide, idx) => (
              <CarouselSlide
                key={idx}
                image={slide.image}
                swipedRecently={swipedRecently}
                isCentered={idx === imgIndex}
                editedImage={slide.editedImage}
              />
            ))}
          </Slider>
        </div>
      </div>
    </main>
  );
}

export default MobilePicCarrousel;
