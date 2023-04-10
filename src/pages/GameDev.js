import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/GameDev.module.css";
export default function GameDev() {
  const variants = {
    initial: { x: -100 },
    animate: { x: 0 },
    exit: { x: -100 },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.5 }}
      className={`${styles.gamedevContainer} flexgrow`}
    >
      GameDev
    </motion.div>
  );
}
