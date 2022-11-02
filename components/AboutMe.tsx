import type { NextPage } from 'next';
import styles from './/AboutMe.module.scss';
import profilePic from '../src/profilePic.png';
import Image from 'next/image';
import { motion } from 'framer-motion';


const AboutMe: NextPage = () => {

    const easing = [0, .50, .91, .99]

    const fadeInDown = {
        initial: {
            y: -1000,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: easing,
            }
        },
    }

    return (
        <main>
            <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate' variants={fadeInDown}>
                <div className={styles.about}>
                    <h1 className={styles.aboutTitle}> About </h1>
                    <h1 className={styles.aboutText}> I'm a webdeveloper, designer and filmaker based in Cordoba, Argentina</h1>
                    <h1 className={styles.aboutSecondText}> I've been learning filmmaking and Photograph manipulation since 2008. And I started learning code in 2020. I'm always open to new challenges and I'm minded to learning new programs, languages, frameworks, and libraries based on the client's needs.</h1>
                    <div className={styles.image}><Image src={profilePic} /></div>
                </div>
            </motion.div>
        </main >
    )
}


export default AboutMe