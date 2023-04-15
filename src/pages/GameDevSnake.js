import React, { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import styles from "../styles/GameDevSnake.module.css";
export default function GameDevSnake() {
  const { scrollY } = useScroll();
  const [initialHeight, setInitialHeight] = useState(0);
  const [initialWidth, setInitialWidth] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  useMotionValueEvent(scrollY, "change", (latest) => {
    setCurrentY(latest);
  });
  const hasWindow = typeof window !== "undefined";
  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  return (
    <>
      <motion.div
        key="gamedevsnake"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`${styles.container}`}
      >
        <div className={`cover ${styles.snakeContainer}`}>
          <motion.div
            className={`${styles.snakeHead1}`}
            initial={{
              x: windowDimensions.width - 150,
              y: windowDimensions.height,
            }}
            animate={{
              x: windowDimensions.width - 150,
              y: currentY,
            }}
          ></motion.div>
        </div>
      </motion.div>
    </>
  );
}
