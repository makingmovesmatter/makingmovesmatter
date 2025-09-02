"use client";
import React, {useState} from "react";
import { motion } from "framer-motion";
import Quote from './quote';

const FooterCtr = () => {

       const [isQuoteOpen, setIsQuoteOpen] = useState(false);
       const openQuote = () => setIsQuoteOpen(true);
       const closeQuote = () => setIsQuoteOpen(false);
  // parent container variant
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // delay between children
      },
    },
  };
  
  // child animation variant
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="footer-ctr"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container z-10 footer-ctr-container flex flex-col lg:flex-row justify-between items-center gap-8 py-10">
        {/* Left Banner */}
        <motion.div
          className="banner-left-img flex flex-col lg:flex-row gap-6 items-center lg:items-start"
          variants={itemVariants}
        >
          <motion.img
            src="/images/image copy 2.png"
            alt="banner-image"
            variants={itemVariants}
          />
          <div>
            <motion.div className="section-title" variants={itemVariants}>
              <h1 className="text-3xl font-bold">Need Assistance?</h1>
            </motion.div>
            <motion.div
              className="section-subtitles text-[var(--gray)] text-lg mt-2 max-w-md"
              variants={itemVariants}
            >
              <p>
                We provide expert guidance and professional solutions tailored to
                your business and personal needs. Contact us today for a free
                consultation and start achieving your goals efficiently.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Buttons */}
        <motion.div className="buttons flex flex-col sm:flex-row gap-3" variants={itemVariants}>
          <a
              href="#"
              className="btn btn-secondary"
              onClick={(e) => {
              e.preventDefault();
              setIsQuoteOpen(true);
              }}
       >
              Get A Free Quote
       </a>

              {isQuoteOpen && (
              <motion.div
              className="fixed inset-0 flex justify-center items-center overlays main-index"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              >
              <motion.div
                     className="rounded-xl w-full max-w-lg relative mt-20"
                     initial={{ scale: 0.8, opacity: 0 }}
                     animate={{ scale: 1, opacity: 1 }}
                     exit={{ scale: 0.8, opacity: 0 }}
                     transition={{ duration: 0.3 }}
              >
                     
                     <button
                     className="absolute top-2 right-2 z-50 text-4xl text-[var(--primary)] rounded-3xl"
                     onClick={() => setIsQuoteOpen(false)}
                     >
                     ×
                     </button>
                     <Quote />
              </motion.div>
              </motion.div>
              )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FooterCtr;
