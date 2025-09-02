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
                src={'/images/scottedeal3.png'}
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
           A Rich History of Scottsdale, AZ
          </h2>


           <p>
             Scottsdale, often referred to as “The West’s Most Western Town,” has a fascinating history that blends Native American heritage, cowboy culture, and modern luxury living. <br /><br />

The area was originally inhabited by the Hohokam people, who created an intricate canal system that enabled them to farm the arid desert landscape. After the Hohokam civilization faded, the region remained largely undeveloped until the late 1800s when Army Chaplain Winfield Scott purchased land in what is now downtown Scottsdale. His investment laid the foundation for the town’s development.<br /><br />

Throughout the early 20th century, Scottsdale attracted artists, writers, and visionaries drawn to the area’s natural beauty and open landscapes. By the mid-1900s, the town became known for its upscale resorts and vibrant art scene.<br /><br />

Today, Scottsdale is one of Arizona’s premier destinations, known for its luxurious lifestyle, world-class golf courses, fine dining, and thriving arts and cultural scene. It seamlessly blends Old West charm with modern sophistication, making it a unique and highly desirable place to live and work.
           </p><br /> <br /> 


       </motion.div>


      </div>
    </section>
  );
};

export default Section3;
