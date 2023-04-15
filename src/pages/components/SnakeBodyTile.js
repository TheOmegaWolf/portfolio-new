import React, { useState } from "react";
import style from "../../styles/components/SnakeBodyTile.module.css";
import { motion } from "framer-motion";
export default function SnakeBodyTile(props) {
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
          className={style.snakeBodyTile}
          initial={{
            x: windowDimensions.width + props.offset.x,
            y: windowDimensions.height + props.offset.y,
          }}
        >
          {props.children}
        </motion.div>
      </>
    );
  }
  return <></>;
}
