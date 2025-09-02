"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Section10 = () => {
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
           Neighborhoods We Serve in Mesa, AZ – Expert Moving Services Across the City
          </h2>

           <p>
             Downtown Mesa – The heart of the city with its rich history and urban lifestyle.
           </p><br />

           <p>
             Eastmark – A growing community known for its modern homes and family-friendly atmosphere.
           </p><br />
           
           <p>
             Red Mountain Ranch – A beautiful neighborhood with scenic views and peaceful surroundings.
           </p><br />
           
           <p>
             Dobson Ranch – Ideal for those who want a suburban setting with easy access to amenities.
           </p><br />
           
           <p>
             Superstition Springs – Perfect for those who love shopping, entertainment, and a vibrant community.
           </p><br />
           

            <p> 
            Whether you’re moving to or from these areas or any other neighborhood in Mesa, we ensure a smooth and efficient relocation process every time.
           </p><br />
       </motion.div>
        
       <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2 }}
        >
          <div className="relative w-full h-full min-h-[400px] rounded-lg overflow-hidden shadow-md">
              <Image
                src={'/images/mesa8.png'}
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

export default Section10;
