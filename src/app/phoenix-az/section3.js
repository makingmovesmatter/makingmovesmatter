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
                src={'/images/phoenix3.png'}
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
           A Rich History of Phoenix, AZ
          </h2>


           <p>
            Phoenix, the capital of Arizona, boasts a deep and fascinating history. The region was initially home to the Hohokam people, an innovative civilization that thrived between 300 and 1450 AD. They built an extensive canal system to irrigate the dry desert landscape, a system so advanced that modern engineers have incorporated parts of it into Phoenix’s current irrigation network.<br /> <br /> 

            After the Hohokam mysteriously abandoned the area, the land remained largely uninhabited until the mid-19th century. In 1867, Jack Swilling, a former Confederate soldier, saw the potential for agriculture in the Salt River Valley. Inspired by the ancient canal system, he worked to bring water back to the region, creating a foundation for modern farming.<br /> <br /> 

            The settlement, initially called Swilling’s Mill, was later renamed Phoenix. The name, suggested by pioneer Darrell Duppa, symbolized the city’s rise from the ashes of the ancient Hohokam civilization, much like the mythical phoenix bird.<br /> <br /> 

            Phoenix officially became a city in 1881, and its growth accelerated with the arrival of the Southern Pacific Railroad in 1887, connecting the city to national markets. Agriculture, including cotton, citrus, and cattle, drove the local economy during the early years.
           </p><br /> <br /> 


       </motion.div>


      </div>
    </section>
  );
};

export default Section3;
