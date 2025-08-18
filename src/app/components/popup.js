"use client";

import { useEffect } from "react";

export default function Popup({
  isOpen,
  onClose,
  title,
  subtitle,
  description,
}) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  // Close when clicking the background
  const handleOverlayClick = () => {
    onClose();
  };

  // Prevent background click when clicking inside box
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50"
      onClick={handleOverlayClick}
    >
      <div
        onClick={stopPropagation}
        className="bg-white border-4 border-green-600 rounded-2xl shadow-xl max-w-md w-full p-6 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
        >
          &times;
        </button>
        <div className="flex items-center justify-around gap-4 mb-4">
          <div className="h-[3px] w-10 bg-green-500" />
          <h2 className="text-2xl text-center font-bold text-green-600 whitespace-nowrap">
            {title}
          </h2>
          <div className="h-[3px] w-10 bg-green-500" />
        </div>
        <p className="text-lg text-center text-gray-600 mt-2">{subtitle}</p>
        <p className="text-sm text-center text-gray-500 mt-4">{description}</p>
        <div className="mt-6 flex justify-center">
          <button
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-full shadow-md transition"
            onClick={() => alert("Calling +1 (800) 123-4567...")}
          >
            📞 +1 (800) 123-4567
          </button>
        </div>
      </div>
    </div>
  );
}
