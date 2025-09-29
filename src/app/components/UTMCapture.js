"use client";

import { useEffect } from "react";

export default function UTMCapture() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const urlParams = new URLSearchParams(window.location.search);
    const utmParams = ["utm_source","utm_medium","utm_campaign","utm_term","utm_content","gclid"];

    utmParams.forEach(param => {
      const value = urlParams.get(param);
      if (value) {
        // Save in localStorage (persistent across pages)
        localStorage.setItem(param, value);
      }
    });
  }, []);

  return null; // no UI
}
