"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Section9 = () => {
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
          <h2 className="text-3xl font-bold text-[var(--heading-text-color)] mb-4">
           Essential Moving Tips for Mesa Residents – Local Insights for a Smooth Move
          </h2>


           <p>
             Moving to or from Mesa, AZ can be a smooth process with a little preparation. Here are some tips to ensure your move goes as effortlessly as possible:
           </p><br />


         <p> 
            Best Months to Move: Mesa’s summer temperatures can be extreme, so it’s best to plan your move during the cooler months (late fall or early spring). Moving during these months can make the process much more comfortable, especially for both you and your movers in Mesa, AZ.
           </p><br />


           <p> 
           Parking Considerations: Be mindful of parking regulations in your neighborhood. In some areas, such as Downtown Mesa, securing a parking spot for the moving truck may require a permit or advanced planning. Check with the city or your building for specific parking rules ahead of time.
           </p><br />



            <p> 
            Heat Considerations: During the hotter months, ensure your moving services in Mesa, AZ are prepared to handle extreme temperatures. It’s essential to hydrate, protect your electronics, and pack carefully to prevent any items from being damaged by the heat.
           </p><br />
       </motion.div>


      </div>
    </section>
  );
};

export default Section9;
