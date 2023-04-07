import React from "react";
import styles from "../styles/GameDev.module.css";
import { motion } from "framer-motion";

export default function GameDevHero(props) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className={`${styles.gamedevContainer} flexgrow`}
      onClick={() => {
        props.selectPage("GameDev");
      }}
    >
      <div className={`dflex alignBoth cover`}>GameDev</div>
    </motion.div>
  );
}
