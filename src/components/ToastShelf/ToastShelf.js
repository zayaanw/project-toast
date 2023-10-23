import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ handleDismiss, ToastInfo, showToast }) {
  return (
    <ol className={styles.wrapper}>
      {ToastInfo.map(({ message, variant, id }) => (
        <li key={id} className={styles.toastWrapper}>
          {showToast && (
            <Toast id={id} handleDismiss={handleDismiss} variant={variant}>
              {message}
            </Toast>
          )}
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
