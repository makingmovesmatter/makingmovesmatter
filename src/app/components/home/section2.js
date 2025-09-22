'use client';
import React, { useEffect, useRef } from "react";
import { FaMessage } from "react-icons/fa6";

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

      <div className="review-ctr flex justify-center items-center flex-col mb-8">
        <h2 className="text-4xl font-bold text-[var(--heading-text-color)] capitalize py-4">What Our Clients Say</h2>
        <button className="btn btn-primary hover:shadow-xl">
          <a href="https://www.google.com/maps/place//data=!4m3!3m2!1s0xb69fbad24f48ec5:0x94a02e5409598218!12e1?source=g.page.m._&laa=merchant-review-solicitation" target="_blank" className="flex gap-2 items-center">
           <FaMessage /> Leave a Review
          </a>
        </button>
      </div>


      <div
        ref={widgetRef}
        className="ti-widget"
        data-widget-id="c27ab5653fb53561a356a9af3ec"
      ></div>

    </div>
  );
};

export default Section2;
