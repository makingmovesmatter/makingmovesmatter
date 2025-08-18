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
          <p className="text-gray-700 text-base leading-relaxed">
            Making Moves Matter, we take pride in offering a comprehensive range of moving services to residents and businesses in Mesa, AZ. Whether you’re relocating within the city or moving across the country, our team has the expertise to handle every aspect of your move with care, precision, and reliability. Here’s how we can assist you:
           </p> <br /> <br /> 

          <h2 className="text-3xl font-bold text-[var(--black-color)] mb-4">
           Making Moves Matter: Your Trusted Movers in Mesa, AZ for Local & Long-Distance Moves
          </h2>


           <p>
              We alleviate your relocation stress by managing everything from loading and packing to transporting and unpacking. Our goal is to make your move as hassle-free as possible. With our commitment to on-time delivery and transparent pricing, free of hidden fees, your move will be both efficient and affordable.
           </p><br /> <br /> 
        </motion.div>


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
      </div>
    </section>
  );
};

export default Section1;
