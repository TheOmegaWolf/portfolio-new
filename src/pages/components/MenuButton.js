import React from "react";
import arrow from "../../assets/arrow.png";
import style from "../../styles/components/MenuButton.module.css";
import { AnimatePresence, motion } from "framer-motion";
export default function MenuButton(props) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`dflex alignBoth ${style.btn}`}
      >
        <img src={arrow.src} className={style.arrow}></img>
        <button
          className={`${style.button} ${style.link}`}
          onClick={() => {
            props.setPage(props.type);
          }}
        >
          <span className={style.linkText}>{props.text}</span>
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
