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
           Professional Packing and Unpacking Services in Mesa, AZ – Making Moves Matter
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
           Packing for a move can be overwhelming and time-consuming. At Making Moves Matter, we offer top-quality packing and unpacking services in Mesa, AZ, ensuring your belongings are safely and securely packed for transport. Whether you’re moving locally or long-distance, our experienced Mesa packing and moving team provides expert packing solutions to protect your valuables and make your relocation stress-free.
           </p> <br /> <br /> 


            <h2 className="text-3xl font-bold">Trusted Packing and Moving Services in Mesa</h2><br />

            <p className="text-gray-700 text-base leading-relaxed">
              As one of the best moving companies in Mesa, we understand the importance of properly packing your items to prevent damage during transit. Our skilled Mesa movers use high-quality packing materials and proven techniques to keep everything secure—whether it’s fragile dishes, bulky furniture, or important documents.
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
                src={'/images/image copy 8.png'}
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
