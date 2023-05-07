import React, { useState, useEffect } from "react";
import style from "../../styles/components/SnakeBodyTile.module.css";
import useWindowSize from "../components/WindowSize";
import { motion } from "framer-motion";
export default function SnakeBodyTile(props) {
  const [windowWidth, windowHeight] = useWindowSize();
  if (windowWidth && windowHeight) {
    console.log(props);
    return (
      <>
        <motion.div
          className={style.snakeBodyTile}
          initial={{
            x: windowWidth + props.offset.x,
            y: windowHeight + props.offset.y,
          }}
          // style={{ position: "relative" }}
        >
          {props.type === "action" ? (
            <span className={style.blackDot}></span>
          ) : (
            <></>
          )}
          {props.children}
        </motion.div>
      </>
    );
  }
  return <></>;
}
