// components/QuoteButton.jsx
"use client";

import React, { useEffect, useState } from "react";
import Quote from "./quote";
import { PiQuotes } from "react-icons/pi";

export const openQuoteModal = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-quote-modal"));
  }
};

const QuoteButton = () => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [animClass, setAnimClass] = useState("");

  const handleOpen = () => {
    setOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    setOpen(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    setMounted(true);

    const handleCustomOpen = () => {
      handleOpen();
    };

    window.addEventListener("open-quote-modal", handleCustomOpen);

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

    return () => {
      clearInterval(interval);
      window.removeEventListener("open-quote-modal", handleCustomOpen);
    };
  }, []);

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
          className="fixed inset-0 z-[9999999] bg-[#011234]/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 quote-world overflow-y-auto"
          onClick={handleClose}
        >
          <div
            className="w-full max-w-2xl bg-white rounded-2xl relative my-auto shadow-2xl border border-neutral-200 overflow-hidden max-h-[94vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Safe Top-Right Close Button inside modal */}
            <button
              onClick={handleClose}
              className="absolute top-3.5 right-3.5 z-30 w-9 h-9 rounded-full bg-white/20 hover:bg-white/35 text-white flex items-center justify-center text-xl font-bold cursor-pointer transition-colors backdrop-blur-sm border border-white/30"
              aria-label="Close quote modal"
            >
              ×
            </button>
            <div className="overflow-y-auto w-full">
              <Quote onSuccess={handleClose} isModal={true} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default QuoteButton;