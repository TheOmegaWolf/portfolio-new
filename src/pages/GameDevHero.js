import React from "react";
import styles from "../styles/GameDev.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { useGlitch } from "react-powerglitch";

export default function GameDevHero(props) {
  const glitch = useGlitch({
    playMode: "always",
    createContainers: true,
    hideOverflow: false,
    timing: {
      duration: 3050,
      iterations: 1,
      easing: "ease-in-out",
    },
    glitchTimeSpan: {
      start: 0.5,
      end: 0.7,
    },
    shake: {
      velocity: 15,
      amplitudeX: 0.2,
      amplitudeY: 0.2,
    },
    slice: {
      count: 6,
      velocity: 15,
      minHeight: 0.02,
      maxHeight: 0.15,
      hueRotate: true,
    },
    pulse: false,
  });
  return (
    <motion.div
      key="gamedevcomp"
      className={`${styles.gamedevContainer} flexgrow`}
      onClick={() => {
        props.selectPage("GameDev");
      }}
      ref={glitch.ref}
    >
      <div className={`dflex alignBoth cover`}>GameDev</div>
    </motion.div>
  );
}
