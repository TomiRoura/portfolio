import { motion } from "framer-motion";
import { useRef } from "react";
import ReactHlsPlayer from "react-hls-player";
import Backdrop from "./backdrop";
import styles from "./toggles.module.scss";

const dropIn = {
  hidden: {
    opacity: 0,
    scale: 0.1,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

export type Slide = {
  image: string;
  video: string;
};

type Props = {
  isOpen: boolean;
  handleClose: () => void;
  currentSlide: Slide | null;
};

const vidToggle = ({ handleClose, currentSlide }: Props) => {
  const videoRef = useRef(null);
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className={styles.vidToggle}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <ReactHlsPlayer
          playerRef={videoRef}
          autoPlay
          loop
          controls
          src={currentSlide.video}
          className={styles.vidToggle}
        />
        <button className={styles.crossVidButton} onClick={handleClose}>
          <span />
          <span />
        </button>
      </motion.div>
    </Backdrop>
  );
};

export default vidToggle;
