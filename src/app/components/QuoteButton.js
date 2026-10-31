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

    return () => {
      window.removeEventListener("open-quote-modal", handleCustomOpen);
    };
  }, []);

  return (
    <>
      {mounted && (
        <button
          onClick={handleOpen}
          aria-label="Get a Free Quote"
          className="fixed top-1/2 right-0 -translate-y-1/2 z-[60] bg-[var(--accent-color)] hover:opacity-90 text-white rounded-l-xl border-l border-t border-b border-white/30 px-2.5 sm:px-3 py-3.5 sm:py-4 flex flex-col items-center justify-center gap-1.5 text-xs font-semibold cursor-pointer transition-transform hover:-translate-x-1"
        >
          <PiQuotes className="text-xl" />
          <span className="[writing-mode:vertical-rl] rotate-180 tracking-wider uppercase text-[11px] font-semibold">
            Free Quote
          </span>
        </button>
      )}

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-[9999999] bg-[#011234]/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 quote-world overflow-y-auto"
          onClick={handleClose}
        >
          <div
            className="w-full max-w-2xl bg-white rounded-2xl relative my-auto border border-neutral-200 overflow-hidden max-h-[94vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top-Right Close Button inside modal */}
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
