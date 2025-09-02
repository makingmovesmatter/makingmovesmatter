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
           Residential & Apartment Moves
          </h2>


           <p>
             Whether you’re moving from a cozy apartment or a spacious home, we have the tools and expertise to manage moves of all sizes. From fragile items like glassware and electronics to large appliances and furniture, we ensure everything is packed securely for the journey. Our team handles your residential moving services with care, making sure that your items are carefully unloaded and placed in their new home. <br/>

             No matter the scale of your move, we ensure that every detail is taken care of, offering a seamless experience.
           </p><br /> <br /> 


          <h2 className="text-3xl font-bold text-[var(--black-color)] mb-4">
           Commercial & Office Moves
          </h2>


         <p> 
            Moving a business requires a different level of expertise, and at Making Moves Matter, we’re well-equipped to handle office moves for businesses in Mesa. Whether you’re moving office furniture, electronics, or specialized equipment, we transport everything safely and efficiently. We understand that business downtime is costly, so we offer after-hours moving to ensure minimal disruption to your workday. <br /> <br />

              Our commercial moving services are designed to meet the unique needs of small and medium-sized businesses in Mesa, ensuring a fast and smooth transition to your new workspace.
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
                src={'/images/mesa4.png'}
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
