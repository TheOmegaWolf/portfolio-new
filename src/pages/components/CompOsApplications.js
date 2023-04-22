import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import useWindowSize from "../components/WindowSize";
import styles from "../../styles/CompOs.module.css";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";

//images

import cLogo from "../../assets/CompSciStuff/Skills/C.png";
import cppLogo from "../../assets/CompSciStuff/Skills/C++.png";
import javaLogo from "../../assets/CompSciStuff/Skills/Java.png";

import csharpLogo from "../../assets/CompSciStuff/Skills/Csharp.png";
import unityLogo from "../../assets/CompSciStuff/Skills/unity.png";
import blenderLogo from "../../assets/CompSciStuff/Skills/blender.png";

import mongodbLogo from "../../assets/CompSciStuff/Skills/mongodb.png";
import pythonLogo from "../../assets/CompSciStuff/Skills/python.png";
import mysqlLogo from "../../assets/CompSciStuff/Skills/mysql.png";

import htmlLogo from "../../assets/CompSciStuff/Skills/html.png";
import cssLogo from "../../assets/CompSciStuff/Skills/css.png";
import jsLogo from "../../assets/CompSciStuff/Skills/js.png";

import nodejsLogo from "../../assets/CompSciStuff/Skills/nodejs.png";
import reactjsLogo from "../../assets/CompSciStuff/Skills/reactjs.png";
import webpackLogo from "../../assets/CompSciStuff/Skills/webpack.png";

export default function CompOsApplications(props) {
  const { iconVariables } = props;
  const [windowWidth, windowHeight] = useWindowSize();
  const [showSkills, setShowSkills] = useState(false);
  const logos = [
    cLogo,
    cppLogo,
    javaLogo,
    csharpLogo,
    unityLogo,
    blenderLogo,
    mongodbLogo,
    pythonLogo,
    mysqlLogo,
    htmlLogo,
    cssLogo,
    jsLogo,
    nodejsLogo,
    reactjsLogo,
    webpackLogo,
  ];
  const sizes = [
    { height: "80px", width: "80px" },
    { height: "80px", width: "80px" },
    { height: "80px", width: "80px" },

    { height: "80px", width: "80px" },
    { height: "80px", width: "80px" },
    { height: "80px", width: "80px" },

    { height: "80px", width: "80px" },
    { height: "80px", width: "80px" },
    { height: "80px", width: "80px" },

    { height: "80px", width: "80px" },
    { height: "80px", width: "60px" },
    { height: "80px", width: "80px" },

    { height: "70px", width: "70px" },
    { height: "80px", width: "140px" },
    { height: "80px", width: "140px" },
  ];
  if (windowWidth && windowHeight) {
    console.log(sizes)
    return (
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ margin: "0 auto", y: windowHeight + 50 }}
          animate={{ margin: "0 auto", y: windowHeight - 60 }}
          transition={{ duration: 1 }}
          className={`${styles.navigator} dflex alignBoth`}
        >
          {Object.keys(iconVariables).map((icon, index) => {
            if (index !== 4) {
              return (
                <>
                  <motion.span
                    className={`${styles.icon}`}
                    onClick={() =>
                      iconVariables[icon].setShowWindow(
                        !iconVariables[icon].show
                      )
                    }
                  >
                    {iconVariables[icon] && iconVariables[icon].logo
                      ? iconVariables[icon].logo
                      : "😂"}
                  </motion.span>
                </>
              );
            } else {
              return (
                <>
                  <AnimatePresence mode="wait">
                    {showSkills ? (
                      <AnimatePresence mode="wait">
                        <motion.div
                          initial={{ opacity: 0, bottom: "50px" }}
                          animate={{ opacity: 1, bottom: "70px" }}
                          transition={{}}
                          exit={{ opacity: 0 }}
                          className={`${styles.skills} dflex alignBoth`}
                        >
                          <div
                            className={`${styles.CardGrid} cover dflex alignBoth`}
                          >
                            {logos.map((logo, index) => (
                              <motion.div
                                initial={{ scale: 1, opacity: 0.6 }}
                                whileHover={{ scale: 1.5, opacity: 1 }}
                                className="dflex alignBoth cover"
                              >
                                <img
                                  className={`${styles.Card}`}
                                  src={logo.src}
                                  height={sizes[index].height}
                                  width={sizes[index].width}
                                ></img>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    ) : (
                      <></>
                    )}
                    <motion.img
                      src={iconVariables[icon].logo.src}
                      height="60px"
                      width="60px"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 1, duration: 1 }}
                      className={`${styles.logo}`}
                      onClick={() => setShowSkills(!showSkills)}
                    ></motion.img>
                  </AnimatePresence>
                </>
              );
            }
          })}
        </motion.div>
      </AnimatePresence>
    );
  }
  return <></>;
}
