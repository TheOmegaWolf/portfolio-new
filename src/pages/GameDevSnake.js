import React, { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import SnakeOne from "./components/SnakeOne";
import styles from "../styles/GameDevSnake.module.css";
import GameInfoBox from "./GameInfoBox";
export default function GameDevSnake() {
  const { scrollY } = useScroll();
  const [initialHeight, setInitialHeight] = useState(0);
  const [initialWidth, setInitialWidth] = useState(0);
  const [type, setType] = useState("intro");
  const [currentY, setCurrentY] = useState(0);
  useMotionValueEvent(scrollY, "change", (latest) => {
    setCurrentY(latest);
  });
  useEffect(() => {
    if (currentY > 20 && type === "intro") {
      setType("introDone");
    }
  }, [currentY]);
  return (
    <>
      <AnimatePresence>
        <motion.div
          key="gamedevsnake"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`${styles.container}`}
        >
          <div className={`cover ${styles.snakeContainer} dflex`}>
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: type === "intro" ? currentY : currentY + 125 }}
              className="cover"
            >
              <GameInfoBox type={type} />
            </motion.div>
            <SnakeOne setType={setType} />
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
