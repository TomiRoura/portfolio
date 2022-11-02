import React, { Component } from "react";
import Slider from "react-slick";
import styles from ".//CarrouselVidSlider.module.scss"

export default class CarrouselVidSlider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
        };
        return (
            <div className={styles.main}>
                <h2 className={styles.title}> some of my recent video projects </h2>
                <div className={styles.VidSlider}>
                    <Slider {...settings}>

                        <video src={"/designerVideo.webm"} className={styles.video} />
                        <video src={"/designerVideo.webm"} className={styles.video} />
                        <video src={"/designerVideo.webm"} className={styles.video} />
                        <video src={"/designerVideo.webm"} className={styles.video} />
                        <video src={"/designerVideo.webm"} className={styles.video} />
                        <video src={"/designerVideo.webm"} className={styles.video} />

                    </Slider>
                </div>
            </div>
        );
    }
}
