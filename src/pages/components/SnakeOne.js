import { motion } from "framer-motion";
import React, { useState } from "react";
import styles from "../../styles/GameDevSnake.module.css";
import tongue from "../../../public/aseprite/spritesheet-tongue.gif";
import SnakeBodyTile from "./SnakeBodyTile";
export default function SnakeOne(props) {
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
  if (
    windowDimensions.width + props.offset.x &&
    windowDimensions.height + props.offset.y
  ) {
    return (
      <>
        <motion.div
          className={`${styles.snakeHead1}`}
          initial={{
            x: windowDimensions.width - 150,
            y: windowDimensions.height,
          }}
        >
          <motion.img
            src={tongue.src}
            className={`${styles.tongue}`}
            initial={{
              x: 20,
              y: -50,
            }}
          ></motion.img>
        </motion.div>
        <SnakeBodyTile offset={{ x: -150, y: 80 }}>
          <motion.span
            whileHover={{ scale: 1.5 }}
            className="dflex alignBoth"
            style={{ height: "100%" }}
            onClick={() => props.setType("babysteps")}
          >
            👶
          </motion.span>
        </SnakeBodyTile>
        <SnakeBodyTile offset={{ x: -150, y: 200 }}>
          <motion.span
            whileHover={{ scale: 1.5, rotate: [0, 45, -45, 0] }}
            initial={{ rotate: 0 }}
            className="dflex alignBoth"
            style={{ height: "100%" }}
          >
            🐱‍👤
          </motion.span>
        </SnakeBodyTile>
        <SnakeBodyTile offset={{ x: -150, y: 320 }}>
          <motion.span
            whileHover={{ scale: 1.5, rotate: [0, 45, -45, 0] }}
            initial={{ rotate: 0 }}
            className="dflex alignBoth"
            style={{ height: "100%" }}
          >
            ✨
          </motion.span>
        </SnakeBodyTile>
        <SnakeBodyTile offset={{ x: -150, y: 440 }}>
          <motion.span
            whileHover={{ scale: 1.5, rotate: [0, 45, -45, 0] }}
            initial={{ rotate: 0 }}
            className="dflex alignBoth"
            style={{ height: "100%" }}
          >
            🐱‍🐉
          </motion.span>
        </SnakeBodyTile>
        <SnakeBodyTile offset={{ x: -150, y: 560 }}>
          <motion.span
            whileHover={{ scale: 1.5 }}
            className="dflex alignBoth"
            style={{ height: "100%" }}
            onClick={() => props.setType("firstyear")}
          >
            🎒
          </motion.span>
        </SnakeBodyTile>
        <SnakeBodyTile offset={{ x: -150, y: 680 }}>
          <motion.span
            whileHover={{ scale: 1.5, rotate: [0, 45, -45, 0] }}
            initial={{ rotate: 0 }}
            className="dflex alignBoth"
            style={{ height: "100%" }}
          >
            🥶
          </motion.span>
        </SnakeBodyTile>
        <SnakeBodyTile offset={{ x: -150, y: 800 }}>
          <motion.span
            whileHover={{ scale: 1.5 }}
            className="dflex alignBoth"
            style={{ height: "100%" }}
            onClick={() => props.setType("secondyear")}
          >
            🌞
          </motion.span>
        </SnakeBodyTile>

        <SnakeBodyTile offset={{ x: -150, y: 920 }}>
          <motion.span
            whileHover={{ scale: 1.5, rotate: [0, 45, -45, 0] }}
            initial={{ rotate: 0 }}
            className="dflex alignBoth"
            style={{ height: "100%" }}
          >
            👺
          </motion.span>
        </SnakeBodyTile>
        <SnakeBodyTile offset={{ x: -150, y: 1040 }}>
          <motion.span
            whileHover={{ scale: 1.5, rotate: [0, 45, -45, 0] }}
            initial={{ rotate: 0 }}
            className="dflex alignBoth"
            style={{ height: "100%" }}
          >
            🐱‍🚀
          </motion.span>
        </SnakeBodyTile>
        <SnakeBodyTile offset={{ x: -150, y: 1160 }}>
          <motion.span
            whileHover={{ scale: 1.5 }}
            className="dflex alignBoth"
            style={{ height: "100%" }}
            onClick={() => props.setType("thirdyear")}
          >
            👨‍💻
          </motion.span>
        </SnakeBodyTile>
        <SnakeBodyTile offset={{ x: -150, y: 1280 }}>
          <motion.span
            whileHover={{ scale: 1.5, rotate: [0, 45, -45, 0] }}
            initial={{ rotate: 0 }}
            className="dflex alignBoth"
            style={{ height: "100%" }}
          >
            🏏
          </motion.span>
        </SnakeBodyTile>
        <SnakeBodyTile offset={{ x: -150, y: 1400 }}>
          <motion.span
            whileHover={{ scale: 1.5, rotate: [0, 45, -45, 0] }}
            initial={{ rotate: 0 }}
            className="dflex alignBoth"
            style={{ height: "100%" }}
          >
            ⚽
          </motion.span>
        </SnakeBodyTile>
        <SnakeBodyTile offset={{ x: -150, y: 1520 }}>
          <motion.span
            whileHover={{ scale: 1.5 }}
            className="dflex alignBoth"
            style={{ height: "100%" }}
            onClick={() => props.setType("transcend")}
          >
            👓
          </motion.span>
        </SnakeBodyTile>
        <SnakeBodyTile offset={{ x: -150, y: 1640 }}>
          <motion.span
            whileHover={{ scale: 1.5, rotate: [0, 45, -45, 0] }}
            initial={{ rotate: 0 }}
            className="dflex alignBoth"
            style={{ height: "100%" }}
          >
            🔮
          </motion.span>
        </SnakeBodyTile>
        <SnakeBodyTile offset={{ x: -150, y: 1760 }}>
          <motion.span
            whileHover={{ scale: 1.5, rotate: [0, 45, -45, 0] }}
            initial={{ rotate: 0 }}
            className="dflex alignBoth"
            style={{ height: "100%" }}
          >
            🍕
          </motion.span>
        </SnakeBodyTile>
        <SnakeBodyTile offset={{ x: -150, y: 1880 }}>
          <motion.span
            whileHover={{ scale: 1.5 }}
            className="dflex alignBoth"
            style={{ height: "100%" }}
            onClick={() => props.setType("halara")}
          >
            📕
          </motion.span>
        </SnakeBodyTile>
        <SnakeBodyTile offset={{ x: -150, y: 2000 }}>
          <motion.span
            whileHover={{ scale: 1.5, rotate: [0, 45, -45, 0] }}
            initial={{ rotate: 0 }}
            className="dflex alignBoth"
            style={{ height: "100%" }}
          >
            🔮
          </motion.span>
        </SnakeBodyTile>
        <SnakeBodyTile offset={{ x: -150, y: 2120 }}>
          <motion.span
            whileHover={{ scale: 1.5, rotate: [0, 45, -45, 0] }}
            initial={{ rotate: 0 }}
            className="dflex alignBoth"
            style={{ height: "100%" }}
          >
            🍕
          </motion.span>
        </SnakeBodyTile>
        <SnakeBodyTile offset={{ x: -150, y: 2240 }}>
          <motion.span
            whileHover={{ scale: 1.5 }}
            className="dflex alignBoth"
            style={{ height: "100%" }}
            onClick={() => props.setType("reset")}
          >
            🔁
          </motion.span>
        </SnakeBodyTile>
      </>
    );
  }
  return <></>;
}
