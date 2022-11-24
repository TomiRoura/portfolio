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

type Props = {
  isOpen: boolean;
  handleClose: () => void;
  currentImage: string;
};

const vidToggle = ({ handleClose, currentImage }: Props) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className={styles.picToggle}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Image src={currentImage} className={styles.picToggle} />
        <button onClick={handleClose}>cross</button>
      </motion.div>
    </Backdrop>
  );
};

export default vidToggle;
