import type { NextPage } from 'next';
import styles from './/AboutMe.module.scss';
import profilePic from '../src/profilePic.png';
import Image from 'next/image';

const AboutMe: NextPage = () => {
    return (
        <main >
            <div className={styles.about}>
                <div className={styles.image}><Image src={profilePic} width={400} height={400} /></div>
                <h1 className={styles.aboutTitle}> About </h1>
                <h1 className={styles.aboutText}> I'm a webdeveloper, designer and filmaker based in Cordoba, Argentina</h1>
                <h1 className={styles.aboutSecondText}> I've been learning filmmaking and Photograph manipulation since 2008. And I started learning code in 2020. I'm always open to new challenges and I'm minded to learning new programs, languages, frameworks, and libraries based on the client's needs.</h1>
            </div>
        </main>
    )
}


export default AboutMe