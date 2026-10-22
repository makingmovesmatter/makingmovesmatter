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
        
        {/* Text Content */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-[var(--heading-text-color)] mb-4">
            Welcome to Making Moves Matter: Trusted Movers in San Tan Valley
          </h2>

          <p>
            At <strong>Making Moves Matter</strong>, we provide professional moving services for homes and businesses in <strong>San Tan Valley, AZ</strong>. Our licensed and insured team handles every move with care, ensuring your belongings arrive safely and on time.<br /><br />
            
            We offer expert packing, secure storage, and reliable delivery for local and long-distance relocations. Whether you’re moving across town or across the state, our trained crew makes the process smooth, efficient, and stress-free.<br /><br />

            With transparent pricing, personalized service, and years of experience, we are the go-to movers for San Tan Valley residents. Contact us today to schedule your move and experience a hassle free relocation.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2 }}
        >
          <div className="relative w-full h-full min-h-[400px] rounded-lg overflow-hidden shadow-md">
            <Image
              src={"/images/santan4.png"}
              alt="San Tan Valley Moving Services"
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
