import HoverVideoPlayer from "react-hover-video-player";
import styles from ".//HoverVideos.module.scss";
import profilePic from "../../src/profilePic.png";
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
          <Image width={400} height={400} src={profilePic} />
        </div>
        <div className={styles.MprofilePic}>
          <Image width={400} height={400} src={profilePic} />
        </div>
        <div className={styles.HoverVideos}>
          <HoverVideoPlayer
            style={{ width: "50%", height: "50%", left: "0rem" }}
            videoSrc="/designerVideo.webm"
            pausedOverlay={
              <img
                src="/wallpaperComplete.webp"
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            }
            loadingOverlay={
              <div className="loading-overlay">
                <div className="loading-spinner" />
              </div>
            }
          />
          <HoverVideoPlayer
            style={{ width: "50%", height: "50%", right: "0rem" }}
            videoSrc="/coderVideo.webm"
            pausedOverlay={
              <img
                src="/wallpaperComplete2.webp"
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                }}
              />
            }
            loadingOverlay={
              <div className="loading-overlay">
                <div className="loading-spinner" />
              </div>
            }
          />
        </div>
        <div className={styles.videos}>
          <video src={"/designerVideo.webm"} autoPlay loop muted />
          <video src={"/coderVideo.webm"} autoPlay loop muted />
        </div>
        <div className={styles.mainBox}></div>
      </motion.div>
    </main>
  );
};

export default HoverVideos;
