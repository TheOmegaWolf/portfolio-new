import React from "react";
import styles from "../styles/CompSci.module.css";
import localFont from "@next/font/local";
import { AnimatePresence, motion } from "framer-motion";
const yosterFont = localFont({ src: "./fonts/yoster.ttf" });
const prStartFont = localFont({ src: "./fonts/arcadeclassic.ttf" });
const manaspcFont = localFont({ src: "./fonts/manaspc.ttf" });
const priceDownFont = localFont({ src: "./fonts/pricedown bl.otf" });
import Window from "../pages/components/floatingWindow/Window";
export default function ComputerScience() {
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`${styles.compsciContainer} flexgrow`}
        >
          <Window
            id="react-window"
            height={500}
            width={400}
            titleBar={{
              icon: "🍟",
              title: "Hello",
              buttons: { minimize: true, maximize: true },
            }}
          >
            <div className="cover">...</div>
          </Window>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
