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
                src={'/images/mesa3.png'}
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
           Local Moving Services in Mesa, AZ
          </h2>


           <p>
             Relocating within Mesa can be a breeze with the help of our local movers in Mesa, AZ. From bustling areas like Downtown Mesa to peaceful neighborhoods such as Superstition Springs or Eastmark, we know Mesa inside and out. Our team specializes in apartment moves, house relocations, and any same-city transitions, ensuring your belongings arrive safely and promptly to your new home or office.
              Whether you’re moving down the street or to another part of the city, we make it a stress-free experience, offering efficient solutions tailored to your needs.
           </p><br /> <br /> 


          <h2 className="text-3xl font-bold text-[var(--black-color)] mb-4">
           Long-Distance & Nationwide Moving
          </h2>


         <p> 
            For those planning a move outside Arizona, we offer expert long-distance moving and nationwide movers services. From Mesa, AZ, we provide door-to-door service, handling the logistics of interstate moves with ease. Your belongings are safely transported across state lines or even across the country, giving you peace of mind throughout the journey. <br /> <br /> 

              Our experienced team makes moving to places like California, Texas, or beyond as smooth as possible, with timely deliveries and safe handling.
           </p><br /> <br /> 

       </motion.div>


      </div>
    </section>
  );
};

export default Section3;
