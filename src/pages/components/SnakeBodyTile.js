import React, { useState, useEffect } from "react";
import style from "../../styles/components/SnakeBodyTile.module.css";
import useWindowSize from "../components/WindowSize";
import { motion } from "framer-motion";
export default function SnakeBodyTile(props) {
  const size = useWindowSize();
  if (size.width && size.height) {
    return (
      <>
        <motion.div
          className={style.snakeBodyTile}
          initial={{
            x: size.width + props.offset.x,
            y: size.height + props.offset.y,
          }}
        >
          {props.children}
        </motion.div>
      </>
    );
  }
  return <></>;
}
