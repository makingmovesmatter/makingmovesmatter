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

        {/* Image Side */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2 }}
        >
          <div className="relative w-full h-full min-h-[400px] rounded-lg overflow-hidden shadow-md">
            <Image
              src={"/images/queencreek3.png"}
              alt={"Queen Creek History Image"}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
              priority
            />
          </div>
        </motion.div>

        {/* Text Side */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-[var(--heading-text-color)] mb-4">
            Discover the Heart of Queen Creek, AZ
          </h2>

          <p>
            Nestled in the southeast corner of the Phoenix metro area, <strong>Queen Creek, Arizona</strong> offers the perfect blend of small-town charm and modern living. 
            Known for its scenic desert views, family-friendly atmosphere, and rich agricultural roots, Queen Creek has grown into one of the most desirable places to live in Arizona.
            <br /> <br />
            Once a quiet farming community, Queen Creek has evolved into a thriving hub with local farms, fresh markets, and beautiful neighborhoods surrounded by open desert and mountain trails.
            Residents enjoy access to outdoor recreation, local events, and a strong sense of community.
            <br /> <br />
            Whether you’re moving to Queen Creek for work, family, or a fresh start, this town offers the ideal mix of peaceful living and easy access to nearby cities like Gilbert, Chandler, and Mesa.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Section3;
