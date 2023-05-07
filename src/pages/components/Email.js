import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/router";
import localFont from "@next/font/local";
import styles from "../../styles/Contacts.module.css";
const manaspcFont = localFont({ src: "../fonts/manaspc.ttf" });
const PixAntiqua = localFont({ src: "../fonts/PixAntiqua.ttf" });
const Gibberesque = localFont({ src: "../fonts/Gibberesque.ttf" });
const ContactUs = () => {
  const form = useRef();
  const router = useRouter();
  const [result, setResult] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_3icztps",
        "template_la80opq",
        form.current,
        "Amh78aV1xoVABjkSt"
      )
      .then(
        (result) => {
          setResult("I'll get back to you soon :)");
        },
        (error) => {
          setResult("error");
        }
      );
  };
  useEffect(() => {
    if (result === `I'll get back to you soon :)`) {
      setTimeout(() => {
        window.location.reload(false);
      }, 3000);
    }
    if (result === "error") {
      setTimeout(() => {
        setResult("");
      }, 3000);
    }
  }, [result]);
  if (result === `I'll get back to you soon :)`) {
    return <div className="dflex alignBoth">I'll get back to you soon :)</div>;
  }
  if (result === `error`) {
    return (
      <div className="dflex alignBoth">
        Oh no.. Something wrong happened! Try again :/{" "}
      </div>
    );
  }
  if (result === "") {
    return (
      <form
        ref={form}
        onSubmit={sendEmail}
        className="dflex alignBoth flexcolumn"
      >
        <label>Name</label>
        <input
          type="text"
          name="from_name"
          style={{ width: 200 }}
          className={`${Gibberesque.className} ${styles.mt10}`}
        />
        <label>Email</label>
        <input
          type="email"
          name="user_email"
          style={{ width: 250 }}
          className={`${PixAntiqua.className} ${styles.mt10}`}
        />
        <label>Message</label>
        <textarea
          name="message"
          className={` ${styles.mt10} ${styles.textareaBox}`}
          rows={10}
          columns={20}
        />
        <input
          type="submit"
          value="Send"
          style={{
            backgroundColor: "#69CDFF",
            color: "black",
            padding: 5,
            borderRadius: 5,
          }}
          className={`${styles.mt10}`}
        />
      </form>
    );
  }
  return <></>;
};
export default ContactUs;
