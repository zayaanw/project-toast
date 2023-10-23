import React, { useState } from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf/ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState(VARIANT_OPTIONS[0]);
  const [showToast, setShowToast] = useState(false);
  const [ToastInfo, setToastInfo] = useState([]);

  function handleClick(e) {
    e.preventDefault();
    const nextToast = {
      message,
      variant,
      shown: true,
      id: crypto.randomUUID(),
    };
    setToastInfo([...ToastInfo, nextToast]);
    setShowToast(true);
    setMessage("");
    setVariant(VARIANT_OPTIONS[0]);
  }

  function handleDismiss(e, id) {
    const updatedToasts = ToastInfo.filter((toast) => toast.id !== id);
    setToastInfo(updatedToasts);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf
        ToastInfo={ToastInfo}
        variant={variant}
        showToast={showToast}
        handleDismiss={handleDismiss}
      ></ToastShelf>

      <form className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option, index) => (
              <label key={index} htmlFor={option}>
                <input
                  id={option}
                  type="radio"
                  name="variant"
                  checked={option === variant}
                  value={option}
                  onChange={(e) => setVariant(e.target.value)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button onClick={handleClick}>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
