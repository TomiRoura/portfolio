import React, { useCallback, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import styles from "./CarrouselVidSlider.module.scss";
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

function MobileSlide(props: { video: string }) {
  const videoRef = useRef(null);
  useEffect(() => {
    let options = {
      rootMargin: "0px",
      threshold: [0.25, 0.75],
    };

    let handlePlay = (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          videoRef.current.pause();
        }
      });
    };

    let observer = new IntersectionObserver(handlePlay, options);

    observer.observe(videoRef.current);
  }, []);

  return (
    <div className={styles.mobileVideo}>
      <video
        ref={videoRef}
        controls
        src={props.video}
        className={styles.mobileVideo}
      />
    </div>
  );
}

function CarrouselVidSlider() {
  const videoRefs = useRef<Array<HTMLVideoElement>>([]);
  const [picOpen, setPicOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Slide>(null);
  const [swipedRecently, setSwipedRecently] = useState(false);
  console.log({ videoRefs });

  const slides: Array<Slide> = [
    {
      image: "/designer/VidCarrouselDiv/bold_drink.webp",
      video: "/designer/VidCarrouselDiv/bold_drink.webm",
    },
    {
      image: "/designer/VidCarrouselDiv/patron_cocktail.webp",
      video: "/designer/VidCarrouselDiv/patron_cocktail.webm",
    },
    {
      image: "/designer/VidCarrouselDiv/barber_shop.webp",
      video: "/designer/VidCarrouselDiv/barber_shop.webm",
    },
    {
      image: "/designer/VidCarrouselDiv/monster_coffee.webp",
      video: "/designer/VidCarrouselDiv/monster_coffee.webm",
    },
    {
      image: "/designer/VidCarrouselDiv/olipop_drink.webp",
      video: "/designer/VidCarrouselDiv/olipop_drink.webm",
    },
    {
      image: "/designer/VidCarrouselDiv/pico_pizza.webp",
      video: "/designer/VidCarrouselDiv/pico_pizza.webm",
    },
  ];

  const mobileSlides = [
    "/designer/VidCarrouselDiv/bold_drink.webm",
    "/designer/VidCarrouselDiv/barber_shop.webm",
    "/designer/VidCarrouselDiv/patron_cocktail.webm",
    "/designer/VidCarrouselDiv/monster_coffee.webm",
    "/designer/VidCarrouselDiv/olipop_drink.webm",
    "/designer/VidCarrouselDiv/pico_pizza.webm",
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

  const onSwipe = () => {
    videoRefs.current.forEach((video) => {
      video.pause();
    });
    setSwipedRecently(true);
  };

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
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>
            some of my recent
            <span className={styles.CapitalWord}> video projects </span>{" "}
          </h2>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className={styles.VidSlider}
        >
          <Slider
            {...settings}
            onSwipe={onSwipe}
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
                <Image
                  src={slide.image}
                  className={styles.video}
                  width={400}
                  height={250}
                />
              </motion.div>
            ))}
          </Slider>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className={styles.horizontalMobileSlider}
        >
          <Slider
            {...settings}
            onSwipe={onSwipe}
            nextArrow={<LeftArrow />}
            prevArrow={<RightArrow />}
          >
            {slides.map((slide) => (
              <motion.div
                className={styles.video}
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1 }}
              >
                <Image
                  src={slide.image}
                  className={styles.video}
                  width={400}
                  height={250}
                />
              </motion.div>
            ))}
          </Slider>
        </motion.div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.5 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className={styles.VidSliderMobile}
        >
          <Slider {...settingsM} onSwipe={onSwipe}>
            {mobileSlides.map((video) => (
              <MobileSlide video={video} />
            ))}
          </Slider>
        </motion.div>
      </div>
    </main>
  );
}

export default CarrouselVidSlider;
