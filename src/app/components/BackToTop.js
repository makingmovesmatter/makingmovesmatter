"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const halfPage = window.scrollY > document.body.scrollHeight / 2;
      setShow(halfPage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="backtotop"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-42 right-15 z-50 hidden sm:block"
        >
         <motion.span
            className="absolute inset-0 rounded-full border-[var(--accent-color)] w-14 h-14  border-2 opacity-30 animate-ping"
          />


          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-4 rounded-full bg-[var(--accent-color)] text-white shadow-lg cursor-pointer"
            aria-label="Back to top"
          >
            <FaArrowUp className="text-xl" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
