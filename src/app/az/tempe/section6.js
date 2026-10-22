"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Section6 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="w-full bg-white py-14 mt-16 mb-16" ref={ref}>
      <div className="container mx-auto px-5 flex flex-col lg:flex-row items-stretch gap-10">
        
       <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2 }}
        >
          <div className="relative w-full h-full min-h-[400px] rounded-lg overflow-hidden shadow-md">
              <Image
                src={'/images/temp5.png'}
                alt={'Banner Image'}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                priority
              />
          </div>
       </motion.div>


       <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-[var(--heading-text-color)] mb-4">
           Why Choose Our Tempe Moving Company?
          </h2>


           <p>
             When it comes to moving companies in Tempe, Making Moves Matter stands out for our commitment to excellence, competitive pricing, and personalized service. We understand the unique challenges of moving in Tempe and are here to make your relocation experience stress-free. <br /> <br /> 

Get a Free Quote from the Top Movers in Tempe

If you’re planning a move, contact Making Moves Matter today. Our experienced local movers in Tempe and long-distance movers are ready to help you with a seamless and stress-free relocation. <br /> <br /> 

Call us now or request a free quote online — because every move matters, and we’re here to make yours a success. <br /> <br /> 

Let the top-rated Tempe moving company handle the heavy lifting while you settle into your new home with ease.
           </p><br /> <br /> 

       </motion.div>


      </div>
    </section>
  );
};

export default Section6;
