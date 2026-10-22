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
           Reliable Furniture Moving Services in Mesa, AZ
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Making Moves Matter provides reliable furniture moving services in Mesa, AZ, to homeowners who want to ensure the safety of their furniture during transportation. Our professional movers are highly-trained in handling cherished furniture. We have transported a variety of furniture, from home décor and antique furniture to heavy desks and office equipment. To ensure the safety of your cherished furniture, our professionals can go the extra mile. We also offer fair, honest, and up-front pricing along with no-obligation estimates.      
           </p> <br /> <br /> 


            <h2 className="text-3xl font-bold">Swift Moving Process</h2><br />

            <p className="text-gray-700 text-base leading-relaxed">
              Our team of professional movers is focused on making the moving experience of our customers a breeze. We provide a wide range of furniture moving services which include transportation of your furniture, packing and loading it, unloading and arranging your furniture after delivering it to your house. Whether it is a big dining table or an antique chair, our professionals will make sure that every last piece of your furniture is placed where you want it.
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
                src={'/images/farnitureoving1.png'}
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
