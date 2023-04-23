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
import Image from "next/image";

// images
import fireos from "../assets/CompSciStuff/fireos.png";
import geolocationFinder from "../assets/CompSciStuff/geolocationFinder.png";
import musicPlayer from "../assets/CompSciStuff/music player.png";
import housePrediction from "../assets/CompSciStuff/bangalore house prediction.png";
import towLogo from "../assets/OmegaFinal.png";
import videoPlayer from "../assets/CompSciStuff/VideoPlayer.png";
import wikibot from "../assets/CompSciStuff/wikibot.png";
import yoloImage from "../assets/CompSciStuff/yolo person detector.png";
import workshake from "../assets/CompSciStuff/Workshake.png";
import backBtn from "../assets/CompSciStuff/back.png";
import { useRouter } from "next/router";

export default function ComputerScience() {
  
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
      link: {text :`https://github.com/TheOmegaWolf/FireOs`, fontsize: "12px"},
      width: 500,
      height: 375,
      padding: "40px 70px",
      images: [fireos],
      imageSize:{
        width : 500,
        height: 375
      }
    },
    geolocationFinder: {
      titleBar: {
        icon: "🔎",
        title: "Geolocation Finder",
        buttons: { minimize: true, close: true },
      },
      text: [
        {
          text: "Python/Android/Html  Based project",
          color: "#80A1F2",
          fontSize: "14px",
        },
        {
          text: "that allows a user to get his coordinates, ",
          color: "#fff",
          fontSize: "12px",
        },
        {
          text: "post it in an Html site and allows his distance",
          color: "#fff",
          fontSize: "12px",
        },
        {
          text: " to be precisely located by Values given by a python code",
          color: "#C5EBFE",
          fontSize: "14px",
        },
      ],
      width: 500,
      height: 300,
      padding: "40px 70px",
      images: [geolocationFinder],
      imageSize:{
        width : 400,
        height: 275
      }
    },
    musicPlayer: {
      titleBar: {
        icon: "🎶",
        title: "Music Player",
        buttons: { minimize: true, close: true },
      },
      text: [
        {
          text: "A Sleek Html/Css/Js/Bootstrap based template",
          color: "#80A1F2",
          fontSize: "14px",
        },
        {
          text: "that allows a user to download / Drag and drop his own mp3 files,",
          color: "#fff",
          fontSize: "12px",
        },
        {
          text: "listen to Music in a minimalistic way",
          color: "#C5EBFE",
          fontSize: "14px",
        },
        {
          text: " and also record feedback",
          color: "#fff",
          fontSize: "12px",
        },
      ],
      width: 450,
      height: 320,
      padding: "40px 70px",
      images: [musicPlayer],
      imageSize:{
        width : 375,
        height: 375
      }
    },
    housePrediction: {
      titleBar: {
        icon: "🏠",
        title: "House Prediction",
        buttons: { minimize: true, close: true },
      },
      text: [
        {
          text: "Price Prediction of Houses in Bangalore based on a simple dataset",
          color: "#80A1F2",
          fontSize: "14px",
        },
        {
          text: "based on Linear Regression Model, ",
          color: "#fff",
          fontSize: "12px",
        },
        {
          text: "and Simple Flask implementation in HTML, CSS and Js Website",
          color: "#C5EBFE",
          fontSize: "14px",
        }
      ],
      width: 600,
      height: 400,
      padding: "40px 70px",
      images: [housePrediction],
      imageSize:{
        width : 500,
        height: 375
      },
      link: {text :`https://github.com/TheOmegaWolf/HousePrediction`, fontsize: "11px"}
    },
    videoPlayer: {
      titleBar: {
        icon: "▶️",
        title: "Video Player",
        buttons: { minimize: true, close: true },
      },
      text: [
        {
          text: "JavaFX Player",
          color: "#80A1F2",
          fontSize: "14px",
        },
        {
          text: "that can browse the directory in which we have an MP3/MP4 file",
          color: "#fff",
          fontSize: "12px",
        },
        {
          text: "and Play that media with",
          color: "#fff",
          fontSize: "12px",
        },
        {
          text: " Start, Stop, Pause, Rewind, Drag Timer, 2x, 3x and Stop features",
          color: "#C5EBFE",
          fontSize: "14px",
        }
      ],
      width: 600,
      height: 320,
      padding: "40px 70px",
      images: [videoPlayer],
      imageSize:{
        width : 400,
        height: 275
      },
      link: {text :`https://github.com/TheOmegaWolf/MediaPlayer`, fontsize: "12px"}
    },
    imageDetection: {
      titleBar: {
        icon: "🕵️",
        title: "Yolov3 Image detection",
        buttons: { minimize: true, close: true },
      },
      text: [
        {
          text: "Yolov3 Implementation using darknet weights",
          color: "#80A1F2",
          fontSize: "14px",
        },
        {
          text: "to identify the humans in a particular video",
          color: "#fff",
          fontSize: "12px",
        },
        {
          text: "using cv2 , imagegrab and python",
          color: "#C5EBFE",
          fontSize: "14px",
        }
      ],
      width: 450,
      height: 320,
      padding: "40px 70px",
      images: [yoloImage],
      imageSize:{
        width : 425,
        height: 275
      },
      link: {text :`https://github.com/TheOmegaWolf/ImageDetection`, fontsize: "12px"}
    },
    wikibot: {
      titleBar: {
        icon: "🤖",
        title: "Wikibot",
        buttons: { minimize: true, close: true },
      },
      text: [
        {
          text: "This is a Python Chatbot that can hear what you are saying in the microphone",
          color: "#80A1F2",
          fontSize: "14px",
        },
        {
          text: " and Speak out what it means or ",
          color: "#fff",
          fontSize: "12px",
        },
        {
          text: "describe the word you said to it",
          color: "#fff",
          fontSize: "12px",
        },
        {
          text: "by using the word's Wikipedia Page",
          color: "#C5EBFE",
          fontSize: "14px",
        }
      ],
      width: 600,
      height: 320,
      padding: "40px 70px",
      images: [wikibot],
      imageSize:{
        width : 500,
        height: 275
      },
      link: {text :`https://github.com/TheOmegaWolf/WikiBot`, fontsize: "12px"}
    },
    workshake: {
      titleBar: {
        icon: "⚒️",
        title: "Workshake",
        buttons: { minimize: true, close: true },
      },
      text: [
        {
          text: "Social Networking platform with",
          color: "#80A1F2",
          fontSize: "14px",
        },
        {
          text: "chat, following, posts, profiles and more",
          color: "#C5EBFE",
          fontSize: "13px",
        },
        {
          text: "Designed mainly for partnering with like minded people",
          color: "#C5EBFE",
          fontSize: "13px",
        },
        {
          text: "Solves Project management and Time Management problems using PERT and CPM algorithms",
          color: "#C5EBFE",
          fontSize: "14px",
        }
      ],
      width: 600,
      height: 320,
      padding: "40px 70px",
      images: [workshake],
      imageSize:{
        width : 500,
        height: 275
      },
      link: {text :`https://github.com/TheOmegaWolf/TheWorkshakeProject`, fontsize: "11px"}
    },
  };
  const [showFireOsWindow, setFireOsWindow] = useState(false);
  const [showGeolocationFinderWindow, setGeolocationFinderWindow] = useState(false);
  const [showMusicPlayerWindow, setMusicPlayerWindow] = useState(false);
  const [showHousePredictionWindow, setHousePredictionWindow] = useState(false);
  const [showVideoPlayerWindow, setVideoPlayerWindow] = useState(false);
  const [showImageDetectionWindow, setImageDetectionWindow] = useState(false);
  const [showWikibotWindow, setWikibotWindow] = useState(false);
  const [showWorkshakeWindow, setWorkshakeWindow] = useState(false);

  const router = useRouter();
  const iconVariables = {
    fireos: {
      show: showFireOsWindow,
      setShowWindow: setFireOsWindow,
      logo: content['fireos'].titleBar.icon,
    },
    geolocationFinder: {
      show: showGeolocationFinderWindow,
      setShowWindow: setGeolocationFinderWindow,
      logo: content['geolocationFinder'].titleBar.icon,
    },
    musicPlayer: {
      show: showMusicPlayerWindow,
      setShowWindow: setMusicPlayerWindow,
      logo: content['musicPlayer'].titleBar.icon,
    },
    housePrediction: {
      show: showHousePredictionWindow,
      setShowWindow: setHousePredictionWindow,
      logo: content['housePrediction'].titleBar.icon,
    },
    theOmegaWolf :{
      logo: towLogo
    },
    videoPlayer: {
      show: showVideoPlayerWindow,
      setShowWindow: setVideoPlayerWindow,
      logo: content['videoPlayer'].titleBar.icon,
    },
    imageDetection: {
      show: showImageDetectionWindow,
      setShowWindow: setImageDetectionWindow,
      logo: content['imageDetection'].titleBar.icon,
    },
    wikibot: {
      show: showWikibotWindow,
      setShowWindow: setWikibotWindow,
      logo: content['wikibot'].titleBar.icon,
    },
    workshake: {
      show: showWorkshakeWindow,
      setShowWindow: setWorkshakeWindow,
      logo: content['workshake'].titleBar.icon,
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
          <span className={`${styles.backBtn}`}>
            <Image src={backBtn.src} width={33} height={30} onClick={()=>router.push('/')}></Image>
          </span>
          {Object.keys(iconVariables).map((variable) => {
            return iconVariables[variable].show ? (
              <AnimatePresence>
                <motion.div
                  key="reactWindow"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Window
                    id="react-window"
                    height={content[variable].height}
                    width={content[variable].width}
                    titleBar={content[variable].titleBar}
                    setShowWindow={iconVariables[variable].setShowWindow}
                  >
                    <FloatingWindowContent
                      content={content[variable].text}
                      link={content[variable].link}
                      padding={content[variable].padding}
                      images={content[variable].images}
                      imageSize={content[variable].imageSize}
                    />
                  </Window>
                </motion.div>
              </AnimatePresence>
            ) : (
              <></>
            );
          })}

          <CompOsApplications iconVariables={iconVariables} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
