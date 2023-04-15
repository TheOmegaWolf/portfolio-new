import React, { useEffect, useState } from "react";
import arrow from "../../assets/arrow.png";
import style from "../../styles/components/MenuButton.module.css";
export default function MenuButton(props) {
  return (
    <div className={`dflex alignBoth ${style.btn}`}>
      <img src={arrow.src} className={style.arrow}></img>
      <button
        className={`${style.button} ${style.link}`}
        onClick={() => {
          props.setPage(props.type);
        }}
      >
        <span className={style.linkText}>{props.text}</span>
      </button>
    </div>
  );
}
