import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './/CarrouselPicSlider.module.scss';
import profilePic from '../src/testing.webp';
import Image from 'next/image';

export default class CarrouselPicSlider extends Component {
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
                    <h2 className={styles.Title}> some of my last photography projects</h2>
                    <div className={styles.imageSlider}>
                        <Slider {...settings}>
                            <div className={styles.image}><Image src={profilePic} /></div>
                            <div className={styles.image}><Image src={profilePic} /></div>
                            <div className={styles.image}><Image src={profilePic} /></div>
                            <div className={styles.image}><Image src={profilePic} /></div>
                            <div className={styles.image}><Image src={profilePic} /></div>
                            <div className={styles.image}><Image src={profilePic} /></div>
                        </Slider>
                    </div>
                </div>
            </main >
        );
    }
}