import React, { useEffect } from "react";
import styles from "../styles/Base.module.css";
// import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";
// import { AwesomeButton } from "react-awesome-button";
// import Head from "next/head";
import localFont from "@next/font/local";
import { useState } from "react";
import { useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import MenuButton from "./components/MenuButton";
const yosterFont = localFont({ src: "./fonts/yoster.ttf" });
const prStartFont = localFont({ src: "./fonts/arcadeclassic.ttf" });
const manaspcFont = localFont({ src: "./fonts/manaspc.ttf" });
const priceDownFont = localFont({ src: "./fonts/pricedown bl.otf" });
export default function Base(props) {
  const [typeIntro, setSetTypeIntro] = useState(true);
  const [text, helper] = useTypewriter({
    words: ["Welcome!"],
  });
  const [name, nameHelper] = useTypewriter({
    words: [`Hey! It's me Akshay Prassanna`],
  });
  const { isDone } = helper;
  useEffect(() => {
    if (isDone) {
      setTimeout(() => {
        setSetTypeIntro(false);
      }, 2000);
    }
  }, [isDone]);
  return (
    <>
      <motion.div
        key="base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`${styles.homeContainer} dflex alignBoth ${yosterFont.className}`}
      >
        <div className={` dflex alignBoth flexcolumn `}>
          {typeIntro ? (
            // <Typewriter
            //   words={["Hello There", "Welcome!"]}
            //   onLoopDone={() => console.log("done!")}
            // />
            <div className={`${styles.titleCard}`}>{text}</div>
          ) : (
            <div>
              <motion.div
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                className={`${styles.menu} ${manaspcFont.className}`}
              >
                <span
                  className={`${priceDownFont.className} dflex alignHorizontal`}
                  style={{
                    color: "#202A44",
                  }}
                >
                  Menu
                </span>
                <div className={`${styles.buttonContainer}`}>
                  <MenuButton
                    text={"Games Projects eh?"}
                    setPage={props.setPage}
                    type={"gamedev"}
                  />
                  <MenuButton
                    text={"Coding Projects eh?"}
                    setPage={props.setPage}
                    type={"programming"}
                  />
                  <MenuButton
                    text={"Wait a minute, who areee you?"}
                    setPage={props.setPage}
                    type={"aboutme"}
                  />
                  <MenuButton
                    text={"Let's get in touch!"}
                    setPage={props.setPage}
                    type={"contactme"}
                  />
                </div>
              </motion.div>
            </div>
          )}
          {/* <AwesomeButton cssModule={AwesomeButtonStyles}>
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
          </AwesomeButton> */}
        </div>
      </motion.div>
    </>
  );
}
