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
        
        
       <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-[var(--heading-text-color)] mb-4">
            Why Choose Our Gilbert Moving Company?
          </h2>


           <p>
             Making Moves Matter, we’re more than just movers—we’re your neighbors. Our team of expert Gilbert movers understands the local landscape, neighborhoods, and the logistics that make for a successful relocation.<br /> <br />

              We offer:<br />

              Transparent pricing with no hidden fees<br />

              Personalized care for each customer<br />

              Timely, efficient, and courteous moving crews<br />

              Free moving quotes and professional consultations<br />

              Ready to make your move? Call us now or request a free quote online—because every move matters.<br /><br />

              Let the top-rated moving company in Gilbert, AZ handle your relocation so you can settle into your new home or office with ease.
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
                src={'/images/gendeal4.png'}
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

export default Section5;
