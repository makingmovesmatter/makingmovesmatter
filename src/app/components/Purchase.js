// components/Purchase.js
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const purchases = [
  { id: 1, name: "Sophia Johnson", ago: "2 min ago", message: "Booked a residential moving service 🏡", profile: "https://i.pravatar.cc/150?img=1" },
  { id: 2, name: "Liam Smith", ago: "5 min ago", message: "Scheduled a furniture delivery 🚛", profile: "https://i.pravatar.cc/150?img=2" },
  { id: 3, name: "Olivia Martinez", ago: "8 min ago", message: "Reserved a long-distance move 📦", profile: "https://i.pravatar.cc/150?img=3" },
  // ... keep your full purchase list here
];

const Purchase = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showPurchase = () => {
      // Pick a random purchase
      setIndex(Math.floor(Math.random() * purchases.length));
      setVisible(true);

      // Hide after 5 seconds
      setTimeout(() => setVisible(false), 5000);
    };

    // Show first after 25s
    const interval = setInterval(showPurchase, 20000);

    // Optional: show one immediately on first load
    // showPurchase();

    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: { y: 100, opacity: 0 },
    center: { y: 0, opacity: 1 },
    exit: { y: -100, opacity: 0 },
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 w-72 h-28 overflow-hidden purchase">
      <AnimatePresence>
        {visible && (
          <motion.div
            key={purchases[index].id}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute w-full bg-white rounded-xl shadow-xl flex items-center gap-4 p-4 border border-gray-200"
          >
            {/* Profile Image */}
            <img
              src={purchases[index].profile}
              alt={purchases[index].name}
              className="w-12 h-12 rounded-full border shadow"
            />

            {/* Info */}
            <div className="flex flex-col">
              <span className="font-semibold text-gray-800 line-clamp-1">{purchases[index].name}</span>
              <span className="text-xs text-gray-500 line-clamp-1">{purchases[index].ago}</span>
              <span className="text-sm text-gray-700 mt-1 line-clamp-2">{purchases[index].message}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Purchase;
