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
           Welcome to Making Moves Matter: Your Premier Scottsdale Moving Company
          </h2>


           <p>
              Are you planning a move to or from Scottsdale, AZ? At Making Moves Matter, we specialize in delivering top-notch, stress-free moving services in Scottsdale and surrounding areas. Our experienced Scottsdale movers are here to make your residential or commercial relocation seamless, efficient, and worry-free. <br /> <br />

              As one of the most trusted moving companies in Scottsdale, we take pride in offering personalized services that meet the needs of every customer. <br /><br />

              We are fully licensed, insured, and dedicated to providing exceptional customer service with every move.
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
                src={'/images/scottedeal2.png'}
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
