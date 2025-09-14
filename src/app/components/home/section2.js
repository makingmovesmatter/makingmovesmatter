'use client';
import React, { useEffect, useRef } from "react";

const Section2 = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    if (!widgetRef.current) return;

    const script = document.createElement("script");
    script.src = "https://cdn.trustindex.io/loader.js?5c439d6544fa109c0b06f501e27";
    script.async = true;
    widgetRef.current.appendChild(script);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 review">
      <div
        ref={widgetRef}
        className="ti-widget"
        data-widget-id="c27ab5653fb53561a356a9af3ec"
      ></div>
    </div>
  );
};

export default Section2;
