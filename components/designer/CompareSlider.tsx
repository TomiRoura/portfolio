import React from "react";
import styles from ".//CompareSlider.module.scss";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { NextPage } from "next";
import { motion } from "framer-motion";

const CompareSlider: NextPage = () => {
  const easing = [0, 0.9, 0.11, 0.99];

  const fadeIn = {
    initial: { opacity: 0, y: 1000 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easing } },
  };

  return (
    <main>
      <motion.div
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
        variants={fadeIn}
        className={styles.compareContainer}
      >
        <h1 className={styles.title}>
          Here's an example of one of my editings, you can see the
          <span className={styles.CapitalWord}> before and after </span> by
          clicking the slider
        </h1>
        <h1 className={styles.titleMobile}>
          Here's an example of one of my editings, you can see the
          <span className={styles.CapitalWord}> before and after </span> by
          tapping the slider
        </h1>
        <div className={styles.compareSlider}>
          <ReactCompareSlider
            itemOne={
              <ReactCompareSliderImage
                src="/designer/ComparisonDiv/before.png"
                srcSet="/designer/ComparisonDiv/before.png"
                alt="Image one"
                className={styles.image}
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                src="/designer/ComparisonDiv/after.png"
                srcSet="/designer/ComparisonDiv/after.png"
                alt="Image two"
                className={styles.image}
              />
            }
          />
        </div>
      </motion.div>
    </main>
  );
};

export default CompareSlider;
