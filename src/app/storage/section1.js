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
          <h2 className="text-3xl font-bold text-[var(--black-color)] mb-4">
           Secure Storage Services in Mesa, AZ
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Making Moves Matter provides safe and secure storage services in Mesa, AZ, to homeowners who want to temporarily store their items during their move. We have a spacious storage facility that has been fitted with a state-of-the-art security system and weather-control system. We regularly inspect our storage facility to ensure that all the systems are functioning perfectly and the items stored in it are fine. To ensure the security of the items, we store the items of our customers packed in wooden pallet boxes. If you want to store your goods temporarily in some secure storage, reach out to us and hire our storage services.
           </p> <br /> <br /> 


            <h2 className="text-3xl font-bold">Thoroughly Equipped Storage Facility</h2><br />

            <p className="text-gray-700 text-base leading-relaxed">
              We have built our storage facility by focusing on the security and confidentiality of our customers. Our storage facility is armed with a modern security system that monitors every movement inside the facility. To ensure the safety of your belongings from the weather, we have installed our facility with the latest weather-control systems through which the humidity and temperature of the facility can be controlled according to the needs. Whether you need to store your wooden furniture or pieces of fine art, you can rely on us by storing them in our facility.
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
                src={'/images/storage2.png'}
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
