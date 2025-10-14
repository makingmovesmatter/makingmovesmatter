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

        {/* Image */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2 }}
        >
          <div className="relative w-full h-full min-h-[400px] rounded-lg overflow-hidden shadow-md">
            <Image
              src={"/images/santan5.png"}
              alt="San Tan Valley Overview"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
              priority
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-[var(--heading-text-color)] mb-4">
            Discover San Tan Valley, AZ
          </h2>

          <p>
            San Tan Valley, located in southeast Arizona, is a growing and welcoming community known for its spacious desert landscapes, family-friendly neighborhoods, and modern amenities. Residents enjoy a variety of parks, hiking and biking trails, local farms, and recreational areas, making it ideal for families and active lifestyles.<br /><br />

            Conveniently situated near Queen Creek, Gilbert, and Mesa, San Tan Valley offers easy access to shopping, dining, and entertainment while maintaining a peaceful suburban atmosphere. Whether you’re relocating for work, family, or a fresh start, moving to San Tan Valley combines comfort, convenience, and community, making it a perfect choice for your next home.<br /><br />

            At Making Moves Matter, we help you settle into this vibrant community smoothly and efficiently, handling every aspect of your move with care and professionalism.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Section3;
