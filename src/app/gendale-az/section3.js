"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Section3 = () => {
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
                src={'/images/gendeal3.png'}
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
          <h2 className="text-3xl font-bold text-[var(--black-color)] mb-4">
           A Rich History of Gilbert, AZ
          </h2>


           <p>
             Gilbert, Arizona, has grown from a humble agricultural community into one of the fastest-growing and most desirable towns in the state. Known as the “Hay Shipping Capital of the World” during its early years, Gilbert played a vital role in supporting the state’s farming industry.<br /> <br />

The town’s roots trace back to 1902 when a man named William “Bobby” Gilbert provided land for a railway line connecting Phoenix to Florence. This railway spurred growth and development, transforming the area into a bustling agricultural hub.<br /> <br />

Incorporated in 1920, Gilbert remained a small farming town for much of the 20th century. However, with the expansion of the Phoenix metropolitan area, Gilbert experienced rapid growth starting in the 1980s. It evolved into a thriving suburban community with a strong economy, excellent schools, and a high quality of life.<br /> <br />

Today, Gilbert is recognized for its family-friendly atmosphere, beautiful parks, and vibrant downtown area. Despite its modern developments, the town proudly preserves its agricultural heritage through events and historic landmarks.<br /> <br />
           </p><br /> <br /> 
       </motion.div>


      </div>
    </section>
  );
};

export default Section3;
