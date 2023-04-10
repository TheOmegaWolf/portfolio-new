import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/CompSci.module.css";
export default function ComputerScience() {
  return (
    <motion.div
      animate={{ scale : 1 }}
      className={`${styles.compsciContainer} flexgrow`}
    >
      ComputerScience
    </motion.div>
  );
}
