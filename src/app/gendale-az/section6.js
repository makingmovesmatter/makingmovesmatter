"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Section6 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="w-full bg-white py-14 mt-16 mb-16" ref={ref}>
      <div className="container mx-auto px-5 flex flex-col lg:flex-row items-stretch gap-10">
        
       <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2 }}
        >
          <div className="relative w-full h-full min-h-[400px] rounded-lg overflow-hidden shadow-md">
              <Image
                src={'/images/image copy 6.png'}
                alt={'Banner Image'}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                priority
              />
          </div>
       </motion.div>


       <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-[var(--black-color)] mb-4">
           Professional Packing Services
          </h2>


           <p>
             We designed our professional packing services to save you time and reduce stress. And we offer packing services in Mesa for everything from basic boxes to delicate items. Our team uses high-quality packing materials like bubble wrap, padding, and boxes to keep your belongings safe during transport. We also label everything to ensure an easy and organized unpacking process.
           </p><br /> <br /> 


          <h2 className="text-3xl font-bold text-[var(--black-color)] mb-4">
           Secure Storage Solutions
          </h2>


         <p> 
            If you need somewhere to store your belongings during the moving process, we offer secure storage solutions to give you peace of mind. Whether you need temporary storage during a transition or long-term storage for extra items, We monitor our climate-controlled units 24/7 for your peace of mind. keep your belongings safe and in top condition. Our facilities are monitored 24/7, providing you with added security and confidence in your storage choices.
           </p><br /> <br /> 

       </motion.div>


      </div>
    </section>
  );
};

export default Section6;
