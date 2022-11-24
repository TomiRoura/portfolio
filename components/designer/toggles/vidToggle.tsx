import { motion } from "framer-motion";
import Backdrop from "./backdrop";
import styles from "./toggles.module.scss";
import Image from "next/image";

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
  exit: {
    opacity: 0,
    scale: 0.5,
    transition: { duration: 0.1 },
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
        <Image src={currentSlide.image} className={styles.vidToggle} />
        <video
          autoPlay
          muted
          loop
          controls
          src={currentSlide.video}
          className={styles.vidToggle}
        />
        <button onClick={handleClose}>cross</button>
      </motion.div>
    </Backdrop>
  );
};

export default vidToggle;
