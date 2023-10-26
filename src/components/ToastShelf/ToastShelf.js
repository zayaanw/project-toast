import { ToastContext } from "../ToastProvider/ToastProvider";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { useContext } from "react";

function ToastShelf({}) {
  const { ToastInfo } = useContext(ToastContext);

  return (
    <ol
      role="region"
      aria-live="polite"
      aria-label="Notification"
      className={styles.wrapper}
    >
      {ToastInfo.map(({ message, variant, id }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast id={id} variant={variant}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
