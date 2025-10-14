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
        
        {/* Text Section */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-[var(--heading-text-color)] mb-4">
            Welcome to Making Moves Matter: Your Reliable Moving Experts in Queen Creek, AZ
          </h2>

          <p>
            With over 15 years of hands-on experience, <strong>Making Moves Matter</strong> is proud to be 
            the most trusted <strong>Queen Creek moving company</strong> fully licensed, insured, 
            and locally operated. <br /><br />
            
            Whether you’re relocating within <strong>Queen Creek</strong> or moving long-distance, 
            our dedicated team ensures every step of your journey is stress-free and efficient. 
            From professional packing and careful loading to secure storage and timely delivery, 
            we go above and beyond to protect what matters most to you. <br /><br />

            Our trained movers handle <strong>residential</strong>, <strong>commercial</strong>, and 
            <strong> specialty moves</strong> with precision and care all while providing clear pricing 
            and open communication every step of the way. <br /><br />

            Discover why Queen Creek families and businesses continue to choose us for smooth, 
            affordable, and dependable moving solutions that truly make your move matter.
          </p><br /><br />
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2 }}
        >
          <div className="relative w-full h-full min-h-[400px] rounded-lg overflow-hidden shadow-md">
            <Image
              src={"/images/queen-creek2.png"}
              alt="Professional Queen Creek movers handling a residential move"
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
