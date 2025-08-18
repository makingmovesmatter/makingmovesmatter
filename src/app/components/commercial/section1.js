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
           Top Commercial Movers in Mesa, AZ – Making Moves Matter
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Relocating your business? Making Moves Matter is the leading commercial moving company in Mesa, AZ, providing efficient, organized, and stress-free office and business relocations. Our expert Mesa commercial movers understand the importance of minimizing downtime, ensuring your business is up and running as quickly as possible. Whether you’re moving a small office, retail store, or large corporate headquarters, we’ve got the expertise to handle every aspect of your move.         
           </p> <br /> <br /> 


            <h2 className="text-3xl font-bold">Reliable & Professional Commercial Moving Services in Mesa</h2><br />

            <p className="text-gray-700 text-base leading-relaxed">
              Moving a business requires careful planning and precision. As one of the best commercial moving companies in Mesa, we specialize in office relocations, warehouse moves, and corporate transitions, ensuring your assets, equipment, and furniture are moved safely and efficiently.
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
                src={'/images/image copy 10.png'}
                alt={'SHhaed'}
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
