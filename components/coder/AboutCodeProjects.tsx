import React from "react";
import styles from "./AboutCodeProjects.module.scss";
import { motion } from "framer-motion";




function AboutCodeProjects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      className={styles.main}>
      <h1> In most projects, I take both the
        <span className={styles.CapitalWord}> "full-stack developer" </span>
        and
        <span className={styles.CapitalWord}>  "designer"  </span>
        roles. prioritizing the website design and
        functionality based on the client's needs.</h1>
    </motion.div>
  );
}

export default AboutCodeProjects;
