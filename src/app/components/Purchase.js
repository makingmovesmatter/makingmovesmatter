"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { IoMdNotificationsOutline } from "react-icons/io";

const purchases = [
  { id: 1, message: "Residential moving service"},
  { id: 2, message: "Furniture delivery"},
  { id: 3, message: "Long-distance move"},
  { id: 4, message: "Local moving service"},
  { id: 5, message: "Furniture assembly"},
  { id: 6, message: "Large item moving"},
  { id: 7, message: "Packing and unpacking services"},
  { id: 8, message: "Hot tub relocation"},
  { id: 9, message: "Storage services"},
  { id: 10, message: "Commarcial moving service"},
];


const Purchase = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showPurchase = () => {
      // Pick a random purchase
      setIndex(Math.floor(Math.random() * purchases.length));
      setVisible(true);

      // Hide after 8 seconds
      setTimeout(() => setVisible(false), 8000);
    };

    // Show first after 18s
    const interval = setInterval(showPurchase, 18000);

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
    <div className="fixed bottom-2 left-6 z-50 w-72 h-28 overflow-hidden purchase">
      <Link href={'/contact-us'}>
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

            <div className="message-icon absolute top-5 right-5 bg-red-700 p-1 rounded-4xl"> 
              <IoMdNotificationsOutline className="text-xl text-white" />
            </div>

{/* 
            <img
              src={purchases[index].profile}
              alt={purchases[index].name}
              className="w-12 h-12 rounded-full border shadow"
            /> */}

            {/* Info */}
            <div className="flex flex-col">
              <span className="flex gap-1">
                 <span className="text-sm text-gray-700 mt-1 line-clamp-2 flex">{purchases[index].message}</span>
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </Link>
    </div>
  );
};

export default Purchase;
