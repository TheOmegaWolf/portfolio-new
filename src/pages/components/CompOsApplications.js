import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import useWindowSize from "../components/WindowSize";
import styles from "../../styles/CompOs.module.css";
import towLogo from "../../assets/OmegaFinal.png";
export default function CompOsApplications(props) {
  const { iconVariables } = props;
  const [windowWidth, windowHeight] = useWindowSize();
  if (windowWidth && windowHeight) {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ margin: "0 auto", y: windowHeight + 50 }}
          animate={{ margin: "0 auto", y: windowHeight - 60 }}
          transition={{ duration: 1 }}
          className={`${styles.navigator} dflex alignBoth`}
        >
          <motion.span
            className={`${styles.icon}`}
            onClick={() =>
              iconVariables.fireOsWindow.setShowWindow(
                !iconVariables.fireOsWindow.show
              )
            }
          >
            🔥
          </motion.span>
          <motion.span className={`${styles.icon}`}>🔥</motion.span>
          <motion.span className={`${styles.icon}`}>🔥</motion.span>
          <motion.span className={`${styles.icon}`}>🔥</motion.span>
          <motion.img
            src={towLogo.src}
            height="60px"
            width="60px"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            style={{ margin: "0 8px" }}
          ></motion.img>
          <motion.span className={`${styles.icon}`}>🔥</motion.span>
          <motion.span className={`${styles.icon}`}>🔥</motion.span>
          <motion.span className={`${styles.icon}`}>🔥</motion.span>
          <motion.span className={`${styles.icon}`}>🔥</motion.span>
        </motion.div>
      </AnimatePresence>
    );
  }
  return <></>;
}
