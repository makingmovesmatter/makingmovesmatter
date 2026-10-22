"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Section8 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="w-full bg-white py-14 mt-16 mb-16" ref={ref}>
      <div className="container mx-auto px-5 flex flex-col lg:flex-row items-stretch gap-10">
        

       <motion.div
          className="w-full flex flex-col justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-[var(--heading-text-color)] mb-4">
          A Brief History of Mesa, AZ
          </h2>


           <p>
             We designed our professional packing services to save you time and reduce stress. And we offer packing services in Mesa for everything from basic boxes to delicate items. Our team uses high-quality packing materials like bubble wrap, padding, and boxes to keep your belongings safe during transport. We also label everything to ensure an easy and organized unpacking process.
           </p><br />


           <p>
             We designed our professional packing services to save you time and reduce stress. And we offer packing services in Mesa for everything from basic boxes to delicate items. Our team uses high-quality packing materials like bubble wrap, padding, and boxes to keep your belongings safe during transport. We also label everything to ensure an easy and organized unpacking process.
           </p><br />


           <p>
             We designed our professional packing services to save you time and reduce stress. And we offer packing services in Mesa for everything from basic boxes to delicate items. Our team uses high-quality packing materials like bubble wrap, padding, and boxes to keep your belongings safe during transport. We also label everything to ensure an easy and organized unpacking process.
           </p><br /> 


           <p>
             We designed our professional packing services to save you time and reduce stress. And we offer packing services in Mesa for everything from basic boxes to delicate items. Our team uses high-quality packing materials like bubble wrap, padding, and boxes to keep your belongings safe during transport. We also label everything to ensure an easy and organized unpacking process.
           </p><br />


           <p>
             We designed our professional packing services to save you time and reduce stress. And we offer packing services in Mesa for everything from basic boxes to delicate items. Our team uses high-quality packing materials like bubble wrap, padding, and boxes to keep your belongings safe during transport. We also label everything to ensure an easy and organized unpacking process.
           </p><br />

       </motion.div>


      </div>
    </section>
  );
};

export default Section8;
