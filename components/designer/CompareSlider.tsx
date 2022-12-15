import React from "react";
import styles from ".//CompareSlider.module.scss";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { NextPage } from "next";
import { motion } from "framer-motion";

const CompareSlider: NextPage = () => {
  return (
    <main>
      <div className={styles.compareContainer}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.3 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.title}
        >
          Here's an example of one of my editings, you can see the
          <span className={styles.CapitalWord}> before and after </span> by
          clicking the slider
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.3 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.titleMobile}
        >
          Here's an example of one of my editings, you can see the
          <span className={styles.CapitalWord}> before and after </span> by
          tapping the slider
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.5 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className={styles.compareSlider}
        >
          <ReactCompareSlider
            itemOne={
              <ReactCompareSliderImage
                src="/designer/ComparisonDiv/before.webp"
                srcSet="/designer/ComparisonDiv/before.webp"
                alt="Image one"
                className={styles.image}
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                src="/designer/ComparisonDiv/after.webp"
                srcSet="/designer/ComparisonDiv/after.webp"
                alt="Image two"
                className={styles.image}
              />
            }
          />
        </motion.div>
      </div>
    </main>
  );
};

export default CompareSlider;
