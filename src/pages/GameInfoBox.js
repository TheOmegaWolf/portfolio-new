import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styles from "../styles/components/GameInfoBox.module.css";
import localFont from "@next/font/local";
const yosterFont = localFont({ src: "./fonts/yoster.ttf" });
const prStartFont = localFont({ src: "./fonts/arcadeclassic.ttf" });
const ka1Font = localFont({ src: "./fonts/ka1.ttf" });
const manaspcFont = localFont({ src: "./fonts/manaspc.ttf" });
const priceDownFont = localFont({ src: "./fonts/pricedown bl.otf" });
export default function GameInfoBox(props) {
  const [content, setContent] = useState([{}]);
  useEffect(() => {
    if (props.type === "babysteps") {
      setContent([
        {
          text: `  8th Grade Akshay had a spark. `,
          size: "25px",
          color: "black",
        },
        {
          text: `A Shark animation was to be done and I was lagging behind, my friends laughed at me then. `,
          size: "25px",
          color: "black",
        },
        {
          text: `* cue rocky bgm *`,
          size: "30px",
          color: "red",
        },
        {
          text: `That’s when I realized I’ve to show them, I could make games.`,
          size: "25px",
          color: "black",
        },
        {
          text: `Learnt Alice and Anim8or for my baby steps`,
          size: "25px",
          color: "black",
        },
        {
          text: `and created a small ✈ simulation game`,
          size: "25px",
          color: "blue",
        },
      ]);
    }
    if (props.type === "firstyear") {
      setContent([
        {
          text: `1st Year at College`,
          size: "25px",
          color: "black",
        },
        {
          text: `AR session sponsored by Unity`,
          size: "25px",
          color: "black",
        },
        {
          text: `The Vuforia Samurai.`,
          size: "30px",
          color: "darkblue",
        },
        {
          text: `Augmented Reality shifted my focus from`,
          size: "25px",
          color: "black",
        },
        {
          text: `Everyday programming`,
          size: "25px",
          color: "blue",
        },
        {
          text: `to`,
          size: "25px",
          color: "black",
        },
        {
          text: `Creative Endeavors`,
          size: "25px",
          color: "red",
        },
      ]);
    }
    if (props.type === "secondyear") {
      setContent([
        {
          text: `2nd Year: the summer internship`,
          size: "25px",
          color: "black",
        },
        {
          text: `Takeleap gave me the opportunity to work on`,
          size: "25px",
          color: "black",
        },
        {
          text: ` Hell a lot of prototypes`,
          size: "30px",
          color: "darkblue",
        },
        {
          text: `and update myself on`,
          size: "25px",
          color: "black",
        },
        {
          text: `gamedev/AR/VR sectors`,
          size: "30px",
          color: "blue",
        },
      ]);
    }
    if (props.type === "thirdyear") {
      setContent([
        {
          text: `3rd Year : The First Game`,
          size: "25px",
          color: "black",
        },
        {
          text: `This game dev elective I picked`,
          size: "25px",
          color: "black",
        },
        {
          text: `gave me scope and time`,
          size: "25px",
          color: "darkblue",
        },
        {
          text: `on my first game`,
          size: "35px",
          color: "black",
        },
      ]);
    }
    if (props.type === "transcend") {
      setContent([
        {
          text: `Letting go of gamedev was never easy,`,
          size: "25px",
          color: "black",
        },
        {
          text: `So I chose not to :P`,
          size: "30px",
          color: "red",
        },
        {
          text: `Along with @adarsh from Vifr Tech (one cooool company)`,
          size: "25px",
          color: "darkblue",
        },
        {
          text: `Transcend was sketched.`,
          size: "35px",
          color: "black",
        },
        {
          text: `A VR Comic Mini Golf game for JioGlass and Android`,
          size: "30px",
          color: "blue",
        },
        {
          text: `( Soon gonna blow your minds with it 🤯 )`,
          size: "20px",
          color: "green",
        },
      ]);
    }
    if (props.type === "halara") {
      setContent([
        {
          text: `Vifr also gave me an Opportunity to work on their product`,
          size: "25px",
          color: "black",
        },
        {
          text: `Halara`,
          size: "35px",
          color: "blue",
        },
        {
          text: `that serves a greater good.`,
          size: "25px",
          color: "black",
        },
        {
          text: `Autistic children gain an opportunity to`,
          size: "25px",
          color: "black",
        },
        {
          text: `learn and expand their horizons`,
          size: "25px",
          color: "blue",
        },
        {
          text: `through a VR application`,
          size: "30px",
          color: "red",
        },
        {
          text: `( Soon to hit the markets )`,
          size: "20px",
          color: "green",
        },
      ]);
    }
  }, [props.type]);
  if (props.type === "intro") {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="gameinfobox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`${styles.container} dflex alignBoth ${manaspcFont.className}`}
        >
          Scroll to Continue ...
        </motion.div>
      </AnimatePresence>
    );
  }
  if (
    props.type === "babysteps" ||
    props.type === "firstyear" ||
    props.type === "secondyear" ||
    props.type === "thirdyear" ||
    props.type === "transcend" ||
    props.type === "halara"
  ) {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={props.type}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`${styles.infoContainer} ${prStartFont.className} dflex alignBoth flexcolumn`}
        >
          <AnimatePresence>
            {content.map((text, index) => (
              <motion.div
                style={{
                  fontSize: text.size ? text.size : "inherit",
                  color: text.color ? text.color : "inherit",
                  marginTop: "5px",
                }}
                initial={{
                  y: -20,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: index * 2,
                }}
              >
                {text.text}
              </motion.div>
            ))}
            {props.type === "thirdyear" ? (
              <AnimatePresence>
                <motion.a
                  href="https://play.google.com/store/apps/details?id=com.TheOmegaWolfCorp.Darxo"
                  target="_blank"
                  style={{
                    fontSize: "20px",
                    color: "blue",
                    marginTop: "5px",
                  }}
                  initial={{
                    y: -20,
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    delay: content.length * 2,
                  }}
                >
                  Click to see Darxo!
                </motion.a>

                <motion.div
                  style={{
                    fontSize: "20px",
                    color: "black",
                    marginTop: "5px",
                  }}
                  initial={{
                    y: -20,
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    delay: content.length * 2,
                  }}
                >
                  {`( Game Developer `}
                  <motion.a
                    href="https://www.instagram.com/the._.omegawolf/"
                    target="_blank"
                    style={{
                      fontSize: "20px",
                      color: "red",
                    }}
                    initial={{
                      y: -20,
                      opacity: 0,
                    }}
                    animate={{
                      y: 0,
                      opacity: 1,
                    }}
                    transition={{
                      delay: content.length * 2,
                    }}
                  >
                    @the._.omegawolf
                  </motion.a>
                  {`  is born )`}
                </motion.div>
              </AnimatePresence>
            ) : (
              <></>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    );
  }
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="defaultInfoBox"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`${styles.infoContainer} dflex alignBoth ${ka1Font.className}`}
      >
        Press button to start 👉
      </motion.div>
    </AnimatePresence>
  );
}
