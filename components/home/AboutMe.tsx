import styles from "./AboutMe.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutMe = () => {
  const easing = [0, 0.5, 0.91, 0.99];

  const fadeInDown = {
    initial: { y: -1000, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: easing } },
  };

  return (
    <main>
      <motion.div
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
        variants={fadeInDown}
      >
        <div className={styles.about}>
          <h1 className={styles.aboutTitle}> About </h1>
          <h1 className={styles.aboutText}>
            {" "}
            I'm a webdeveloper, designer and filmaker based in Cordoba,
            Argentina
          </h1>
          <h1 className={styles.aboutSecondText}>
            {" "}
            I've been learning filmmaking and Photograph manipulation since
            2008. And I started learning code in 2020. I'm always open to new
            challenges and I'm minded to learning new programs, languages,
            frameworks, and libraries based on the client's needs.
          </h1>
          <div className={styles.image}>
            <Image
              src="/home/aboutMeDiv/AboutPic.webp"
              width={1200}
              height={800}
              priority={true}
            />
          </div>
          <div className={styles.mobileImage}>
            <Image
              src="/home/aboutMeDiv/AboutPicMobile.webp"
              width={1200}
              height={800}
              priority={true}
            />
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default AboutMe;
