"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Section1 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="w-full bg-white py-14 mt-16 paddingTopBottom" ref={ref}>
      <div className="container mx-auto px-5 flex flex-col lg:flex-row items-stretch gap-10">
        
        {/* Left: Image */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2 }}
        >
          <div className="relative w-full h-full min-h-[400px] rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/home1.png" // ✅ Make sure this path is correct and the file exists
              alt="Our Service"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </motion.div>

        {/* Right: Text */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-[var(--heading-text-color)] mb-4">
              About Us
          </h2>
          
          <h2 className="text-4xl font-bold text-[var(--heading-text-color)] mb-4">
           Making Moves Matter
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            At Making Moves Matter, we’re proud to be
            Mesa, AZ’s trusted choice for reliable and stress-free moves. <br />

            Whether you’re relocating across town or to a new Arizona city,
            our team of experienced movers is here to help. <br />

            We specialize in both residential and commercial moves,
            handling everything from packing and loading
            to unloading and safe transport. <br />

            Our services include moving fragile antiques,
            oversized furniture, and sensitive electronics
            — with extra care every step of the way. <br />

            Every move is different, so we tailor our services
            to fit your specific needs and schedule. <br />
 
            From tight corners to long distances,
            we protect your belongings like they’re our own. <br />

            We know Mesa inside and out,
            bringing local knowledge and efficiency to every job. <br />

            No hidden fees. No surprises. Just clear, honest service.

            Our friendly team is always ready to answer questions
            and keep you informed throughout the move. <br />

            When you search for “affordable movers near me”
            or “best moving company in Mesa,” we want to be your first call. <br />

            Let us make your move simple and smooth —
            Contact Making Moves Matter today for a personalized quote.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Section1;
