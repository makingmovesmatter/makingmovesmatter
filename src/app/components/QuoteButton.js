// components/QuoteButton.jsx
"use client";

import React, { useEffect, useState } from "react";
import Quote from "./quote";
import { PiQuotes } from "react-icons/pi";

const QuoteButton = () => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [animClass, setAnimClass] = useState("");

  useEffect(() => {
    setMounted(true);

    const interval = setInterval(() => {
      if (window.innerWidth < 1024) {
        // Mobile & Tablet → slide in/out
        setAnimClass("slide-in");
        setTimeout(() => setAnimClass("slide-out"), 15000);
      } else {
        setAnimClass("shake");
        setTimeout(() => setAnimClass(""), 1000);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleOpen = () => {
    setOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    setOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      {mounted && (
        <button
          onClick={handleOpen}
          aria-label="Get a Quote"
          className={`
            quote-btn fixed top-1/2 cursor-pointer -translate-y-1/2 z-[60] 
            bg-[var(--accent-color)] text-white rounded-l-sm shadow-2xl 
            flex flex-col items-center justify-center text-sm font-medium 
            ${animClass}
          `}
        >
          <PiQuotes />
          Get Free Quote
        </button>
      )}

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-[70] bg-black/70 backdrop-blur-[2px] flex items-center justify-center p-3 quote-world"
          onClick={handleClose}
        >
          <div
            className="w-full max-w-md bg-white rounded-2xl shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute -top-12 right-4 text-[var(--accent-color)] bg-white px-2 rounded-4xl text-3xl cursor-pointer"
              aria-label="Close"
            >
              ×
            </button>
            <Quote onSuccess={handleClose} />
          </div>
        </div>
      )}
    </>
  );
};

export default QuoteButton;