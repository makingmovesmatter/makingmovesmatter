"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Section5 = () => {
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
           Fun Things to Do in Tempe, AZ
          </h2>


           <p>
             Explore the Outdoors <br />
Enjoy Tempe Town Lake with kayaking and lakeside strolls, hike Papago Park’s red rock trails, or visit Kiwanis Park for family-friendly bike paths and playgrounds. Don’t miss Hayden Butte Preserve for city views and the Desert Botanical Garden for beautiful desert flora. <br /> <br /> 


Arts, Culture & History<br />
Discover contemporary art at the ASU Art Museum, learn Tempe’s story at the Tempe History Museum, and experience world-class performances at Gammage Auditorium, a Frank Lloyd Wright masterpiece.<br /> <br /> 


Family-Friendly Fun<br />
Engage with marine life at the SEA LIFE Arizona Aquarium, build and explore at Legoland Discovery Center, or enjoy splash pads and riverside fun at Tempe Beach Park.<br /> <br /> 


Unique Experiences<br />
Stroll Downtown Tempe for shops and restaurants, visit the Tempe Marketplace, or relax at the peaceful Desert Arboretum Park.
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
                src={'/images/temp4.png'}
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

export default Section5;
