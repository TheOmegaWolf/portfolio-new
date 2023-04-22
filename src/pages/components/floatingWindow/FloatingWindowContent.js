import React from "react";
import styles from "../../../styles/components/FloatingWindowContent.module.css";
import localFont from "@next/font/local";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
const yosterFont = localFont({ src: "../../fonts/yoster.ttf" });
const prStartFont = localFont({ src: "../../fonts/arcadeclassic.ttf" });
const manaspcFont = localFont({ src: "../../fonts/manaspc.ttf" });
const priceDownFont = localFont({ src: "../../fonts/pricedown bl.otf" });
export default function FloatingWindowContent(props) {
  console.log(props.images);
  return (
    <>
      {/* <div className={`dflex ${styles.mainContainer} ${manaspcFont.className}`}> */}
      <Carousel
        className={`dflex ${styles.mainContainer} ${manaspcFont.className}`}
      >
        <Carousel.Item key={`${props.content[0].text.split(" ")[0]}_text`}>
          <div
            className={`dflex flexcolumn alignHorizontal `}
            style={{ padding: props.padding }}
          >
            {props.content && props.content.map((element, index) => (
              <div
                key={`${element.text.split(" ")[0]}_${index}`}
                className={`${styles.textContent}`}
                style={{ color: element.color }}
              >
                {element.text}
              </div>
            ))}
            <a href={props.link} target="blank" className={`${styles.link}`}>
              {props.link}
            </a>
          </div>
        </Carousel.Item>
        <Carousel.Item key={`${props.content[0].text.split(" ")[0]}_images`}>
          <div className={`dflex flexcolumn alignHorizontal `}>
            { props.images && props.images.map((image) => (
              <>
                <img src={image.src} width={500} height={340} key={image.src} />
              </>
            ))}
          </div>
        </Carousel.Item>
      </Carousel>
      {/* </div> */}
    </>
  );
}
