'use client';
import React, { useEffect, useRef } from "react";

const Section2 = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    if (!widgetRef.current) return;

    const script = document.createElement("script");
    script.src = "https://cdn.trustindex.io/loader.js?ChIJxY70JK37aQsRGIJZCVQuoJQ";
    script.async = true;
    widgetRef.current.appendChild(script);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 review">
      <div
        ref={widgetRef}
        className="ti-widget"
        data-widget-id="ChIJxY70JK37aQsRGIJZCVQuoJQ"
      ></div>
    </div>
  );
};

export default Section2;
