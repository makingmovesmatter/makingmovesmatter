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
                src={'/images/temp3.png'}
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
           A Rich History of Tempe, AZ
          </h2>


           <p>
             Tempe, Arizona, has a fascinating history that dates back thousands of years. The area was originally inhabited by the Hohokam people, who built an extensive canal system to support agriculture in the arid desert landscape. These ancient canals laid the groundwork for modern irrigation systems still used today. <br /> <br /> 

The city’s modern roots began in the 1860s when Charles Trumbull Hayden, a key figure in the region’s development, established a ferry service across the Salt River and founded a flour mill. This area, known as Hayden’s Ferry, would later be renamed Tempe, inspired by the Vale of Tempe in Greece. <br /> <br /> 

Tempe quickly became a center of commerce and education. In 1885, the Arizona Territorial Normal School was established, which eventually evolved into Arizona State University (ASU), one of the largest and most prestigious universities in the country. <br /> <br /> 

Today, Tempe is a bustling city known for its vibrant culture, thriving arts scene, and strong ties to education and innovation. With its central location in the Phoenix metro area, Tempe continues to attract families, students, and businesses alike.
           </p><br /> <br /> 

       </motion.div>


      </div>
    </section>
  );
};

export default Section3;
