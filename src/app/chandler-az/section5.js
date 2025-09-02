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
          <h2 className="text-3xl font-bold text-[var(--black-color)] mb-4">
           Chandler Moving Company, AZ for Home & Office Moves - Book Now
          </h2>


           <p>
             When it comes to moving company in Chandler, we stand out for our commitment to exceptional service and customer satisfaction. With competitive pricing, reliable service, and personalized attention, we are the trusted choice for both residential and commercial moves in Chandler and beyond. <br /> <br />

              Get a Free Quote from the Expert Chandler Moving Company – <br /><br />

              If you’re planning a move, contact Making Moves Matter today. Our experienced local movers in Chandler and long-distance movers are ready to make your relocation smooth and stress-free. <br /><br />

              Call us now or request a free quote online — because every move matters, and we’re here to make yours a success.<br /><br />

              Let the top-rated Chandler moving company handle the heavy lifting while you settle into your new home with ease
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
                src={'/images/chendler4.png'}
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
