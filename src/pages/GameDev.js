import React from "react";
import styles from "../styles/GameDev.module.css";
export default function GameDev() {
  console.log(styles, "styles");
  return <div className={`${styles.gamedevContainer} flexgrow`}>GameDev</div>;
}
