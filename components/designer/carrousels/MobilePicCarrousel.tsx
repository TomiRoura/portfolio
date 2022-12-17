import React, { useEffect, useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./MobilePicCarrousel.module.scss";
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
