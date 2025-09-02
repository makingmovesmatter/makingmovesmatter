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
           Welcome to Making Moves Matter: Your Trusted Gilbert Moving Company
          </h2>


           <p>
             Planning a move in or to Gilbert, AZ? Making Moves Matter is the go-to moving company in Gilbert, AZ, offering professional, full-service relocation solutions for homeowners and businesses alike. Our licensed and insured movers in Gilbert, AZ handle everything—from packing and loading to secure storage and long-distance transport—ensuring a smooth, worry-free experience.<br /> <br /> 

Whether you’re relocating a household across town or moving your office across the state, our team is dedicated to making your transition simple, efficient, and affordable. We pride ourselves on exceptional customer service, transparent pricing, and a no-hassle move from start to finish.<br /> <br /> 

We are fully licensed, insured, and dedicated to delivering top-tier service with every move.
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
                src={'/images/gendeal2.png'}
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
