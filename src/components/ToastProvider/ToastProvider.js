import React, { useState } from "react";
import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [ToastInfo, setToastInfo] = useState([]);

  function createToast(message, variant) {
    const nextToast = {
      message,
      variant,
      id: crypto.randomUUID(),
    };
    setToastInfo([...ToastInfo, nextToast]);
  }

  function dismissToast(id) {
    const updatedToasts = ToastInfo.filter((toast) => toast.id !== id);
    setToastInfo(updatedToasts);
  }

  useEscapeKey(() => setToastInfo([]));

  return (
    <ToastContext.Provider value={{ ToastInfo, createToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
