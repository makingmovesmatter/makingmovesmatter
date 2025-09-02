"use client";
import Quote from './quote';
import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration:2,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Header = ({ headerImg }) => {
       const [isQuoteOpen, setIsQuoteOpen] = useState(false);
       const openQuote = () => setIsQuoteOpen(true);
       const closeQuote = () => setIsQuoteOpen(false);


      const widgetRef = useRef(null);
      
        useEffect(() => {
          if (!widgetRef.current) return;


          const script = document.createElement("script");
          script.src = "https://cdn.trustindex.io/loader.js?39fba24523654658741656d7ece";
          script.async = true;
          widgetRef.current.appendChild(script);
        }, []);


  return (
    <>
      <header 
        className="w-full bg-cover bg-center bg-no-repeat min-h-[100vh] relative flex justify-center items-center pt-20"
        style={{ backgroundImage: `url(${headerImg})` }}
      >
        <div className="container header-container w-full h-full py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto my-12">
            <motion.div 
              className="text-white  justify-center items-center gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div className="mb-8 lg:mb-0 lg:w-2/3" variants={fadeInUp}>
                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:leading-24 font-black">
                  <span className="block text-maain-color">MOVING</span>
                  <span className='text-[var(--primary)]'>AND</span>
                  <span className="block">STORAGE</span>
                </h1>
                <div className="text-xl sm:text-2xl md:text-2xl font-normal mt-9 capitalize">
                   We are a one stop solution and customized service provider for all moving need for our all customers
                </div>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-black">
                    <a href='' className="btn btn-primary">Call Now</a>
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


                </div>
              </motion.div>
            </motion.div>
          </div>

          <div
            ref={widgetRef}
            className="ti-widget"
            data-widget-id="39fba24523654658741656d7ece"
          ></div>

          
        </div>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='bg-[var(--primary)] text-white py-4'
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'LICENSED AND INSURED',
              'TRAINED PROFESSIONALS',
              'PROFESSIONAL EQUIPMENT',
              'UPFRONT PRICING'
            ].map((text, idx) => (
              <div key={idx} className="flex items-center justify-center sm:justify-start gap-2">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="w-full h-8 bg-[var(--primary)] opacity-50" style={{
        clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 100%)'
      }}></div>
    </>
  );
};

export default Header;