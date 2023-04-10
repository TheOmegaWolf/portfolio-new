import React from "react";
import styles from "../styles/Base.module.css";
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";
import { AwesomeButton } from "react-awesome-button";
import Head from "next/head";
import { Fjalla_One } from "next/font/google";
const Fjalla = Fjalla_One({ weight: "400", subsets: ["latin"] });
export default function Base() {
  return (
    <>
      <div className={`${styles.homeContainer} dflex alignBoth`}>
        <div
          className={`${styles.menuBox} dflex alignBoth flexcolumn ${Fjalla.className}`}
        >
          <AwesomeButton cssModule={AwesomeButtonStyles}>
            Game on?
          </AwesomeButton>
          <AwesomeButton
            cssModule={AwesomeButtonStyles}
            type="secondary"
            className={`${styles["aws-btn"]}`}
          >
            Code on?
          </AwesomeButton>
          <AwesomeButton cssModule={AwesomeButtonStyles} type="primary">
            Who aaare you?
          </AwesomeButton>
          <AwesomeButton cssModule={AwesomeButtonStyles} type="secondary">
            Let's connect
          </AwesomeButton>
        </div>
      </div>
    </>
  );
}
