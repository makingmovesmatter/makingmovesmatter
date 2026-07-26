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

        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-[var(--heading-text-color)] mb-4">
            Arizona&apos;s Trusted Long Distance Moving Company
          </h2>

          <p className="text-gray-700 text-base leading-relaxed">
            At <strong>Making Moves Matter</strong>, we specialize in
            professional long-distance moving services for families,
            individuals, and businesses relocating from Arizona. Whether
            you&apos;re moving for a new job, family, or a fresh start, our
            experienced team is committed to making your move smooth,
            stress-free, and affordable.
          </p>

          <br />
          <br />

          <h2 className="text-3xl font-bold text-[var(--heading-text-color)]">
            Personalized Long-Distance Moving Services
          </h2>

          <br />

          <p className="text-gray-700 text-base leading-relaxed">
            Unlike large van lines that treat you like just another number,
            Making Moves Matter provides personalized service, experienced
            movers, and reliable communication throughout your entire
            relocation. We carefully handle every item as if it were our own,
            ensuring your belongings arrive safely, securely, and on time.
          </p>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2 }}
        >
          <div className="relative w-full h-full min-h-[400px] rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/longdistances.png"
              alt="Long Distance Movers from Arizona"
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