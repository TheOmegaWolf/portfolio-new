import React, { useState } from "react";
import styles from "../styles/CompSci.module.css";
import localFont from "@next/font/local";
import { AnimatePresence, motion } from "framer-motion";
const yosterFont = localFont({ src: "./fonts/yoster.ttf" });
const prStartFont = localFont({ src: "./fonts/arcadeclassic.ttf" });
const manaspcFont = localFont({ src: "./fonts/manaspc.ttf" });
const priceDownFont = localFont({ src: "./fonts/pricedown bl.otf" });
import Window from "../pages/components/floatingWindow/Window";
import CompOsApplications from "./components/CompOsApplications";
import WindowCustom from "./components/floatingWindow/WindowCustom";
export default function ComputerScience() {
  const [showWindow, setShowWindow] = useState(false);
  const iconVariables = {
    fireOsWindow: {
      show: showWindow,
      setShowWindow: setShowWindow,
    },
  };
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key="reactWindowContainer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`${styles.compsciContainer} flexgrow overHdn`}
        >
          <WindowCustom />
          {showWindow ? (
            <AnimatePresence>
              <motion.div
                key="reactWindow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Window
                  id="react-window"
                  height={200}
                  width={400}
                  titleBar={{
                    icon: "🔥",
                    title: "FireOS",
                    buttons: { minimize: true, close: true },
                  }}
                  setShowWindow={setShowWindow}
                >
                  <div className="cover">FireOS</div>
                </Window>
              </motion.div>
            </AnimatePresence>
          ) : (
            <></>
          )}

          <CompOsApplications iconVariables={iconVariables} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
