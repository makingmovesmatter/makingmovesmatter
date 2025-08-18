"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Section1 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="w-full bg-white py-14 mt-16 mb-16" ref={ref}>
      <div className="container mx-auto px-5 flex flex-col lg:flex-row items-stretch gap-10">
        
        
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-[var(--black-color)] mb-4">
           Reliable Furniture Assembly Services in Mesa, AZ
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Making Moves Matter provides reliable furniture assembly services in Mesa, AZ, to homeowners who want to save their time and enjoy an efficient moving experience. Disassembly and reassembly can seem like simple processes at first glance. Our professional movers will disassemble your furniture into its parts before moving it. Because of our experience, we can finish this process quickly, without any mistakes. If you don’t want to be bothered with assembling furniture during your next move, just let us know, and we’ll do it for you.        
           </p> <br /> <br /> 


            <h2 className="text-3xl font-bold">Accurate Quotes For Services</h2><br />

            <p className="text-gray-700 text-base leading-relaxed">
              Furniture disassembly and reassembly are one of the most important steps of the moving process, and they can be time-consuming. When moving into your new home, furniture doesn’t fit through doorways as simply as you might expect due to spiral staircases, narrow staircases, tight corners, etc. Disassembly is not only the safest way to move furniture but, in many cases, it is required. We’ll provide you with a quote based on the type and number of pieces of furniture that needs to be assembled.
            </p>
        </motion.div>


        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2 }}
        >
          <div className="relative w-full h-full min-h-[400px] rounded-lg overflow-hidden shadow-md">
              <Image
                src={'/images/image copy 2.png'}
                alt={'Banner Image'}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                priority
              />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section1;
