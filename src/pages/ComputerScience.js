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
import FloatingWindowContent from "./components/floatingWindow/FloatingWindowContent";

// images 
import fireos from "../assets/CompSciStuff/fireos.png";
import geolocationFinder from "../assets/CompSciStuff/geolocationFinder.png";
import musicPlayer from "../assets/CompSciStuff/music player.png";
import housePrediction from "../assets/CompSciStuff/bangalore house prediction.png";
import wikibot from "../assets/CompSciStuff/wikibot.png";
import yoloImage from "../assets/CompSciStuff/yolo person detector.png"
const content = {
  fireos: {
    titleBar: {
      icon: "🔥",
      title: "FireOS",
      buttons: { minimize: true, close: true },
    },
    text: [
      {
        text: "A Simple Operating System",
        color: "#fff",
        fontSize: "12px",
      },
      {
        text: "which can do Multiple Features such as ",
        color: "#fff",
        fontSize: "12px",
      },
      {
        text: "Sticky Notes, Bingo, Tic Tac Toe, Stopwatch, Calendar, Calculator, Wallpaper Changer and a Power off Switch",
        color: "#80A1F2",
        fontSize: "14px",
      },
      {
        text: "Won best computer science project AISSCE 2017 ( 12th grade ) ",
        color: "#C5EBFE",
        fontSize: "14px",
      },
    ],
    link: `https://github.com/TheOmegaWolf/FireOs`,
    width: 500,
    height: 375,
    padding: "40px 70px",
    images: [fireos]
  },
  geolocationFinder: {
    titleBar: {
      icon: "🔎",
      title: "Geolocation Finder",
      buttons: { minimize: true, close: true },
    },
    text: [
      {
        text: "Python/Android/HTML Based project",
        color: "#80A1F2",
        fontSize: "14px",
      },
      {
        text: "that allows a user to get his coordinates, ",
        color: "#fff",
        fontSize: "12px",
      },
      {
        text: "post it in an HTML site and allows his",
        color: "#fff",
        fontSize: "12px",
      },
      {
        text: "distance to be precisely located by Values given by a python code",
        color: "#C5EBFE",
        fontSize: "14px",
      },
    ],
    width: 500,
    height: 375,
    padding: "40px 70px",
    images: [geolocationFinder]
  },
};
export default function ComputerScience() {
  const [showWindow, setShowWindow] = useState(false);
  const iconVariables = {
    fireos: {
      show: showWindow,
      setShowWindow: setShowWindow,
      logo: content.fireos.titleBar.icon
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
                  height={content.fireos.height}
                  width={content.fireos.width}
                  titleBar={content.fireos.titleBar}
                  setShowWindow={setShowWindow}
                >
                  <FloatingWindowContent
                    content={content.fireos.text}
                    link={content.fireos.link}
                    padding={content.fireos.padding}
                    images={content.fireos.images}
                  />
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
