'use client';
import React, { useEffect, useRef } from "react";

const Section2 = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    if (!widgetRef.current) return;

    const script = document.createElement("script");
    script.src = "https://cdn.trustindex.io/loader.js?b539768520d3023ab18679430be";
    script.async = true;
    widgetRef.current.appendChild(script);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 review">
      <div
        ref={widgetRef}
        className="ti-widget"
        data-widget-id="b539768520d3023ab18679430be"
      ></div>
    </div>
  );
};

export default Section2;
