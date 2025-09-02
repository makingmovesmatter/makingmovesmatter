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
           Welcome to Making Moves Matter: Your Trusted Tempe Moving Company
          </h2>


           <p>
              Planning a move to or from Tempe, AZ? At Making Moves Matter, we specialize in providing top-tier, stress-free relocation services across Tempe and the surrounding metro area. As a leading moving company in Tempe, AZ, our team of skilled professionals is experienced in handling every phase of your move—from packing and loading to transport, storage, and final delivery. <br /> <br /> 

Whether you’re transitioning into a new home or relocating your business, our dedicated movers in Tempe, AZ are ready to provide a seamless, efficient, and affordable experience tailored to your unique needs.<br /> <br /> 

We’re fully licensed, insured, and committed to delivering exceptional service with every move.
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
                src={'/images/temp2.png'}
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
