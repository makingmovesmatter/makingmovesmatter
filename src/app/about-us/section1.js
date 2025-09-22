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
           ABOUT MAKING MOVES MATTER
          </h2>


           <p>
              At Making Moves Matter we are proud to be Mesa, AZ’s trusted partner for stress-free, reliable, and efficient moving services. Whether you’re relocating across town or moving to a new city in Arizona, our dedicated team of professional movers is here to handle every step of the process with care and expertise. We specialize in residential and commercial moves, offering a full range of services that include packing, loading, unloading, and the safe transportation of specialty items such as fragile antiques, bulky furniture, and sensitive electronics. <br /> <br /> 

We understand that every move is unique, which is why we tailor our services to fit your specific needs. From carefully wrapping your belongings to navigating tight spaces and ensuring secure transport, we prioritize the protection of your possessions every step of the way. With years of experience and a deep understanding of the Mesa community, we take pride in delivering prompt, dependable service that keeps your move on schedule and within budget.<br /> <br /> 

As a customer-focused moving company, we believe in transparency and clear communication. You’ll never encounter hidden fees, and our friendly team is always available to answer your questions and provide updates throughout your move. When searching for “best moving companies in Mesa, AZ,” “affordable movers near me,” or “trusted local movers,” we aim to be the name that stands out for quality and exceptional service.<br /> <br /> 

Make your next move simple, seamless, and stress-free with Making Moves Matter. Contact us today for a customized quote and experience the difference of working with a moving company that truly cares.
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
                src={'/images/about1.png'}
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

export default Section1;
