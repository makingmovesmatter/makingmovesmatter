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
           Trusted Local Movers in Mesa, AZ – Making Moves Matter
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Looking for reliable local movers in Mesa, AZ? Making Moves Matter is your go-to local moving company for stress-free, affordable, and efficient moving services. Whether you’re relocating to a new home, apartment, or office within Mesa, Gilbert, Chandler, Tempe, or Scottsdale, our expert Mesa local movers ensure a smooth and hassle-free experience from start to finish.
           </p> <br /> <br /> 


            <h2 className="text-3xl font-bold">Your Go-To Local Moving Company in Mesa</h2><br />

            <p className="text-gray-700 text-base leading-relaxed">
              As one of the best local moving companies in Mesa, we understand that moving within the same city can still be a challenging process. That’s why we offer professional local moving services tailored to your specific needs. Our experienced team takes care of everything, from packing to furniture assembly, so you can focus on settling into your new home or office.
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
                src={'/images/localmoving2.png'}
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
