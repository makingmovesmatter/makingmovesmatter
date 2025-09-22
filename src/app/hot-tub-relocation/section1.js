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
           Reliable Hot Tub Relocation Services in Mesa, AZ
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Making Moves Matter provides reliable hot tub relocation services in Mesa, AZ, to homeowners who want to avoid the hassle of moving hot tubs by themselves. Whether you are moving your house to a new location or want us to move your hot tub within your garden, we can pull off all your moving goals. Our services are flexible and can be customized to meet the needs of our clients. We have a team of experienced hot tub relocators who can remove your tub and position it to the place you desire. If you want to safely move your tub to a new location, give us a call.
           </p> <br /> <br /> 


            <h2 className="text-3xl font-bold">Suitable Vehicles For Hot Tub Relocation</h2><br />

            <p className="text-gray-700 text-base leading-relaxed">
              To make the relocation of hot tubs efficient and swift, we make use of suitable vehicles to transport hot tubs. We also own purpose-built dollies that are optimum for moving hot tubs. These dollies can fit inside any type of way and home. So, you should rest assured that your hot tub will be collected or delivered to any type and size of home. We can also provide you with extra labor if the previously provided labor is not sufficient for the hot tub removal and relocation.
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
                src={'/images/hottub1.png'}
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
