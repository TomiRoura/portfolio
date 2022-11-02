import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './/CarrouselAppSlider.module.scss';
import profilePic from '../src/profilePic.png';
import Image from 'next/image';

export default class CarrouselSlider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 3,

        };
        return (
            <main className={styles.main}>
                <div className={styles.carrouselSlider}>
                    <h2 className={styles.designerAndFilmaker}> Designer and Filmaker </h2>
                    <h2 className={styles.AppsThatIUse}> Apps that I use </h2>
                    <Slider {...settings}>
                        <div className={styles.image}><Image src={profilePic} /></div>
                        <div className={styles.image}><Image src={profilePic} /></div>
                        <div className={styles.image}><Image src={profilePic} /></div>
                        <div className={styles.image}><Image src={profilePic} /></div>
                        <div className={styles.image}><Image src={profilePic} /></div>
                        <div className={styles.image}><Image src={profilePic} /></div>
                    </Slider>
                </div>
            </main >
        );
    }
}
