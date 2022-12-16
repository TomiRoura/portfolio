import { motion } from "framer-motion";
import Backdrop from "./backdrop";
import styles from "./toggles.module.scss";
import Image from "next/image";
import { useState } from "react";

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

export type ImgSlide = {
  image: string;
  editedImage: string;
};

type Props = {
  isOpen: boolean;
  handleClose: () => void;
  slide: ImgSlide;
};

const PicToggle = ({ handleClose, slide }: Props) => {
  const [showEditedImage, setToggleNext] = useState(false);

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(event) => {
          event.stopPropagation();
          setToggleNext(!showEditedImage);
        }}
        className={styles.picToggle}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Image
          src={slide.image}
          className={styles.image}
          width={400}
          height={600}
        />
        <div
          className={[
            styles.image,
            showEditedImage ? styles.hiddenImage : styles.visibleImage,
          ].join(" ")}
        >
          <Image src={slide.editedImage} width={400} height={600} />
        </div>
        <button className={styles.crossPicButton} onClick={handleClose}>
          <span />
          <span />
        </button>
      </motion.div>
    </Backdrop>
  );
};

export default PicToggle;
