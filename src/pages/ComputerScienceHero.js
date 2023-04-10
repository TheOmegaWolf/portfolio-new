import React from "react";
import styles from "../styles/CompSci.module.css";
import { motion } from "framer-motion";
export default function ComputerScienceHero(props) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className={`${styles.compsciContainer} flexgrow`}
      onClick={() => {
        props.selectPage("ComputerScience");
      }}
    >
      <div className={`dflex alignBoth cover`}>Computer Science</div>
    </motion.div>
  );
}
