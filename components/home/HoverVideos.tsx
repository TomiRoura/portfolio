import HoverVideoPlayer from "react-hover-video-player";
import styles from "./HoverVideos.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

const easing = [0, 0.9, 0.11, 0.99];

const fadeInUp = {
  initial: { y: -1000, opacity: 1 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.6, ease: easing } },
};

const HoverVideos = () => {
  return (
    <main className={styles.main}>
      <motion.div
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        <div className={styles.profilePic}>
          <Image
            width={500}
            height={500}
            src="/home/hoverDiv/ProfilePic.webp"
            priority
          />
        </div>
        <div className={styles.MprofilePic}>
          <Image
            width={500}
            height={500}
            src="/home/hoverDiv/ProfilePicMobile.webp"
            priority
          />
        </div>
        <div className={styles.HoverPics}>
          <Image src="/home/hoverDiv/DesignerPicSide.webp"
            width={713}
            height={401}
            priority
            className={styles.HoverDesignerPicture}>
          </Image>
          <Image src="/home/hoverDiv/CoderPicSide.webp"
            width={713}
            height={401}
            priority
            className={styles.HoverCoderPicture}>
          </Image>
        </div>
        <div className={styles.HoverVideos}>
          <video loop autoPlay muted src="/home/hoverDiv/DesignerSide.webm" className={styles.HoverVideoDesigner}></video>
          <video loop autoPlay muted src="/home/hoverDiv/CoderSide.webm" className={styles.HoverVideoCoder} ></video>
        </div>
        <div className={styles.HoverPicsM}>
          <Image src="/home/hoverDiv/DesignerPicSide.webp"
            width={713}
            height={401}
            priority
          >
          </Image>
          <Image src="/home/hoverDiv/CoderPicSide.webp"
            width={713}
            height={401}
            priority
          >
          </Image>
        </div>
        <div className={styles.HoverVideosM}>
          <video loop autoPlay muted src="/home/hoverDiv/DesignerSide.webm" className={styles.HVideoDesignerM}></video>
          <video loop autoPlay muted src="/home/hoverDiv/CoderSide.webm" className={styles.HVideoCoderM} ></video>
        </div>
        <div className={styles.mainBox}></div>
      </motion.div>
    </main>
  );
};

export default HoverVideos;
