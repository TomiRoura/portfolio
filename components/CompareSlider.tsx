import React from "react";
import styles from './/CompareSlider.module.scss';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { NextPage } from "next";

const CompareSlider: NextPage = () => {
    return (
        <main>
            <div className={styles.compareContainer}>
                <h1 className={styles.title}>Here's an example of one of my editings, you can see the before and after by clicking the slider</h1>
                <div className={styles.compareSlider}>
                    <ReactCompareSlider
                        itemOne={<ReactCompareSliderImage src="/wallpaperComplete.webp" srcSet="wallpaperComplete.webp" alt="Image one" />}
                        itemTwo={<ReactCompareSliderImage src="/wallpaperComplete2.webp" srcSet="/wallpaperComplete2.webp" alt="Image two" />}
                    />
                </div>
            </div>
        </main>
    )
};

export default CompareSlider