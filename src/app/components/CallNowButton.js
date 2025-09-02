// components/CallNowButton.jsx
"use client";

import React from "react";

const CallNowButton = () => {
  return (
    <a
      href="tel:4809348218"
      className="call-now-bbtn fixed bottom-14 right-11 z-50 w-16 h-16 rounded-full bg-[var(--accent-color)] shadow-lg flex items-center justify-center text-white text-2xl animate-pulse hover:scale-110 transition-transform duration-500"
      title="Call Now"
    >
      <i className="fas fa-phone-alt"></i>
      <span className="absolute w-20 h-20 rounded-full border-2 border-red-400 opacity-30 animate-ping"></span>
    </a>
  );
};

export default CallNowButton;