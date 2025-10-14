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
            Why Choose Our San Tan Valley Movers?
          </h2>

          <p className="mb-6">
            At <strong>Making Moves Matter</strong>, we provide trusted, professional moving services throughout San Tan Valley. 
            Our team is experienced in handling residential and commercial moves, ensuring every item is packed, transported, and delivered safely and efficiently. 
            With transparent pricing, trained staff, and modern moving equipment, we make your relocation smooth and stress-free.
          </p>

          <h2 className="text-3xl font-bold text-[var(--heading-text-color)] mb-4">
            Get a Free Quote Today
          </h2>

          <p>
            Planning a move? Contact us for a free, no-obligation quote. 
            Our San Tan Valley movers will guide you through every step of your relocation, taking care of the heavy lifting so you can focus on settling into your new home or office. 
            Reliable, efficient, and customer-focused your move matters to us.
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
              src="/images/santan3.png"
              alt="San Tan Valley Movers"
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
