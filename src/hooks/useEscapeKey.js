import { useEffect, useState } from "react";

function useEscapeKey(callback) {
  useEffect(() => {
    function handleEscape(e) {
      if (e.code === "Escape") {
        callback();
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [callback]);
}

export default useEscapeKey;
