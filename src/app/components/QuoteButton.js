// components/QuoteButton.jsx
"use client";

import React, { useState, useEffect } from "react";
import Quote from "./quote";

const QuoteButton = () => {
  const [open, setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleOpen = () => {
    setOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    setOpen(false);
    document.body.style.overflow = "auto";
  };

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.keyCode === 27) handleClose();
    };
    
    if (open) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [open]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      {/* Floating Quote Button */}
      {isMounted && (
        <button
          onClick={handleOpen}
          className="fixed top-1/2 -mt-30 right-0 z-40 w-28 hover:w-52 p-5 rounded-l-2xl bg-[var(--accent-color)] cursor-pointer shadow-2xl flex items-center justify-center text-white text-sm transition-all duration-500 hover:shadow-xl hover:brightness-110 group"
          title="Get a Quote"
          aria-label="Get a Quote"
        >
          <div className="flex flex-col items-center">
            <i className="fas fa-file-invoice-dollar mb-1 group-hover:scale-110 transition-transform text-3xl"></i>
            <span className="font-medium transition-opacity">
              Get Free Quote
            </span>
          </div>
        </button>
      )}

      {/* Backdrop */}
      {open && (
        <div 
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm quote-world"
          onClick={handleClose}
        >
          <div 
            className="rounded-2xl shadow-2xl w-full max-w-md relative animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute -top-12 right-5 text-white hover:text-blue-300 text-3xl font-light transition-colors duration-300"
              aria-label="Close quote form"
            >
              <i className="fas fa-times-circle"></i>
            </button>

            {/* Quote Form */}
            <Quote onSuccess={handleClose} />
          </div>
        </div>
      )}
    </>
  );
};

export default QuoteButton;