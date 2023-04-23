import { motion } from "framer-motion";
import React, { useState } from "react";
import styles from "../../styles/GameDevSnake.module.css";
import tongue from "../../../public/aseprite/spritesheet-tongue.gif";
import SnakeBodyTile from "./SnakeBodyTile";
import { useRouter } from "next/router";
export default function SnakeOne(props) {
  const router = useRouter();
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
        className={`${styles.snakeHead1}`}
        initial={{
          x: windowDimensions.width - 150,
          y: windowDimensions.height - 200,
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
      <SnakeBodyTile offset={{ x: -150, y: -120 }}>
        <motion.span
          whileHover={{ scale: 1.5 }}
          className="dflex alignBoth"
          style={{ height: "100%" }}
          onClick={() => props.setType("babysteps")}
        >
          👶
        </motion.span>
      </SnakeBodyTile>
      <SnakeBodyTile offset={{ x: -150, y: 0 }}>
        <motion.span
          whileHover={{ scale: 1.5, rotate: [0, 45, -45, 0] }}
          initial={{ rotate: 0 }}
          className="dflex alignBoth"
          style={{ height: "100%" }}
        >
          👇🏻
        </motion.span>
      </SnakeBodyTile>
      <SnakeBodyTile offset={{ x: -150, y: 120 }}>
        <motion.span
          whileHover={{ scale: 1.5, rotate: [0, 45, -45, 0] }}
          initial={{ rotate: 0 }}
          className="dflex alignBoth"
          style={{ height: "100%" }}
        >
          👇🏻
        </motion.span>
      </SnakeBodyTile>
      
      <SnakeBodyTile offset={{ x: -150, y: 240 }}>
        <motion.span
          whileHover={{ scale: 1.5 }}
          className="dflex alignBoth"
          style={{ height: "100%" }}
          onClick={() => props.setType("firstyear")}
        >
          🎒
        </motion.span>
      </SnakeBodyTile>
      <SnakeBodyTile offset={{ x: -150, y: 360 }}>
        <motion.span
          whileHover={{ scale: 1.5, rotate: [0, 45, -45, 0] }}
          initial={{ rotate: 0 }}
          className="dflex alignBoth"
          style={{ height: "100%" }}
        >
          👇🏻
        </motion.span>
      </SnakeBodyTile>
      <SnakeBodyTile offset={{ x: -150, y: 480 }}>
        <motion.span
          whileHover={{ scale: 1.5, rotate: [0, 45, -45, 0] }}
          initial={{ rotate: 0 }}
          className="dflex alignBoth"
          style={{ height: "100%" }}
        >
          👇🏻
        </motion.span>
      </SnakeBodyTile>
      <SnakeBodyTile offset={{ x: -150, y: 600 }}>
        <motion.span
          whileHover={{ scale: 1.5 }}
          className="dflex alignBoth"
          style={{ height: "100%" }}
          onClick={() => props.setType("secondyear")}
        >
          🌞
        </motion.span>
      </SnakeBodyTile>

      <SnakeBodyTile offset={{ x: -150, y: 720 }}>
        <motion.span
          whileHover={{ scale: 1.5, rotate: [0, 45, -45, 0] }}
          initial={{ rotate: 0 }}
          className="dflex alignBoth"
          style={{ height: "100%" }}
        >
          👇🏻
        </motion.span>
      </SnakeBodyTile>
      <SnakeBodyTile offset={{ x: -150, y: 840 }}>
        <motion.span
          whileHover={{ scale: 1.5, rotate: [0, 45, -45, 0] }}
          initial={{ rotate: 0 }}
          className="dflex alignBoth"
          style={{ height: "100%" }}
        >
          👇🏻
        </motion.span>
      </SnakeBodyTile>
      <SnakeBodyTile offset={{ x: -150, y: 960 }}>
        <motion.span
          whileHover={{ scale: 1.5 }}
          className="dflex alignBoth"
          style={{ height: "100%" }}
          onClick={() => props.setType("thirdyear")}
        >
          👨‍💻
        </motion.span>
      </SnakeBodyTile>
      <SnakeBodyTile offset={{ x: -150, y: 1080 }}>
        <motion.span
          whileHover={{ scale: 1.5, rotate: [0, 45, -45, 0] }}
          initial={{ rotate: 0 }}
          className="dflex alignBoth"
          style={{ height: "100%" }}
        >
          👇🏻
        </motion.span>
      </SnakeBodyTile>
      <SnakeBodyTile offset={{ x: -150, y: 1200 }}>
        <motion.span
          whileHover={{ scale: 1.5, rotate: [0, 45, -45, 0] }}
          initial={{ rotate: 0 }}
          className="dflex alignBoth"
          style={{ height: "100%" }}
        >
          👇🏻
        </motion.span>
      </SnakeBodyTile>
      <SnakeBodyTile offset={{ x: -150, y: 1320 }}>
        <motion.span
          whileHover={{ scale: 1.5 }}
          className="dflex alignBoth"
          style={{ height: "100%" }}
          onClick={() => props.setType("transcend")}
        >
          👓
        </motion.span>
      </SnakeBodyTile>
      <SnakeBodyTile offset={{ x: -150, y: 1440 }}>
        <motion.span
          whileHover={{ scale: 1.5, rotate: [0, 45, -45, 0] }}
          initial={{ rotate: 0 }}
          className="dflex alignBoth"
          style={{ height: "100%" }}
        >
          👇🏻
        </motion.span>
      </SnakeBodyTile>
      <SnakeBodyTile offset={{ x: -150, y: 1560 }}>
        <motion.span
          whileHover={{ scale: 1.5, rotate: [0, 45, -45, 0] }}
          initial={{ rotate: 0 }}
          className="dflex alignBoth"
          style={{ height: "100%" }}
        >
          👇🏻
        </motion.span>
      </SnakeBodyTile>
      <SnakeBodyTile offset={{ x: -150, y: 1680 }}>
        <motion.span
          whileHover={{ scale: 1.5 }}
          className="dflex alignBoth"
          style={{ height: "100%" }}
          onClick={() => props.setType("halara")}
        >
          📕
        </motion.span>
      </SnakeBodyTile>
      <SnakeBodyTile offset={{ x: -150, y: 1800 }}>
        <motion.span
          whileHover={{ scale: 1.5, rotate: [0, 45, -45, 0] }}
          initial={{ rotate: 0 }}
          className="dflex alignBoth"
          style={{ height: "100%" }}
        >
          👇🏻
        </motion.span>
      </SnakeBodyTile>
      <SnakeBodyTile offset={{ x: -150, y: 1920 }}>
        <motion.span
          whileHover={{ scale: 1.5, rotate: [0, 45, -45, 0] }}
          initial={{ rotate: 0 }}
          className="dflex alignBoth"
          style={{ height: "100%" }}
        >
          👇🏻
        </motion.span>
      </SnakeBodyTile>
      <SnakeBodyTile offset={{ x: -150, y: 2040 }}>
        <motion.span
          whileHover={{ scale: 1.5 }}
          className="dflex alignBoth"
          style={{ height: "100%" }}
          onClick={() => props.setType("reset")}
        >
          🪃
        </motion.span>
      </SnakeBodyTile>
      <SnakeBodyTile offset={{ x: -150, y: 2160 }}>
        <motion.span
          whileHover={{ scale: 1.5 }}
          className="dflex alignBoth"
          style={{ height: "100%" }}
          onClick={() => router.push("./")}
        >
          🏠
        </motion.span>
      </SnakeBodyTile>
    </>
  );
}
