import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useGlitch } from "react-powerglitch";

const GlitchTransition = ({ children }) => {
  const glitchEffect = useGlitch();
  return (
    <AnimatePresence>
      <motion.div ref={glitchEffect.ref} className={"cover"}>
        <div className={"cover"}>{children}</div>
      </motion.div>
    </AnimatePresence>
  );
};

export default GlitchTransition;
