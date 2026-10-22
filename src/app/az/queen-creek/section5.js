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

        {/* Text Section */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-[var(--heading-text-color)] mb-4">
            Why Choose Our Queen Creek Moving Company?
          </h2>

          <p className="mb-8">
            Looking for trusted movers in Queen Creek? Our team delivers dependable, 
            affordable, and stress-free moving solutions for local residents and 
            businesses. From packing to unloading, we make every move smooth and efficient.
          </p>

          <h2 className="text-3xl font-bold text-[var(--heading-text-color)] mb-4">
            Get a Free Quote Today
          </h2>

          <p>
            Planning a move in or out of Queen Creek? Contact{" "}
            <strong>Making Moves Matter</strong> for your free moving estimate. 
            Our experienced crew ensures your belongings are handled with care 
            and your move is completed on time. <br /> <br />
            Let us handle the heavy lifting — you just enjoy settling into your 
            new home or office with confidence.
          </p>
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
              src="/images/queencreek.png"
              alt="Queen Creek Movers"
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
