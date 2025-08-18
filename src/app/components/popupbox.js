"use client";

import { useState } from "react";
import Popup from "./popup";

export default function PopupBox() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <button
        onClick={() => setShowPopup(true)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
      >
        Show Popup
      </button>

      <Popup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        title="Welcome to Smart Move"
        subtitle="Free Moving Estimate"
        description="Get a personalized estimate for your move in just a few clicks. We're here to make your move stress-free!"
      />
    </main>
  );
}
