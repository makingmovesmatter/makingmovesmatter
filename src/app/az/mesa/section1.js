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
          <h2 className="text-3xl font-bold text-[var(--heading-text-color)] mb-4">
           Making Moves Matter: Your Trusted Movers in Mesa, AZ for Local & Long-Distance Moves
          </h2>

          <p className="text-gray-700 text-base leading-relaxed mb-4">
            At Making Moves Matter, we take pride in offering a comprehensive range of professional moving services to residents and businesses throughout Mesa, AZ. Whether you’re relocating within the city, moving to a nearby East Valley community, or moving across the country, our team has the expertise to handle every aspect of your move with care, precision, and reliability.
          </p>

          <p className="text-gray-700 text-base leading-relaxed">
            We alleviate your relocation stress by managing everything from packing and wrapping to loading, transport, and careful unloading. With our commitment to on-time arrival and transparent, upfront pricing with zero hidden fees, your move in Mesa will be smooth, efficient, and affordable.
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
                src={'/images/mesa2.png'}
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
