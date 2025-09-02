"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Section3 = () => {
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
                src={'/images/chendler3.png'}
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
          <h2 className="text-3xl font-bold text-[var(--black-color)] mb-4">
           Why Choose Us as Your Chandler Movers?
          </h2>


           <p>
             When choosing a Chandler Moving Company, AZ, it’s essential to partner with a team that understands the unique needs of the community and offers tailored solutions. Here’s why Making Moves Matter stands out from other movers in Chandler, AZ:
           </p><br /> <br /> 


          <h2 className="text-xl font-bold text-[var(--black-color)] mb-4">
         1.  Full-Service Residential Moving
          </h2>
          <p>
            We are Making Moves Matter- Chandler Moving Company, AZ, focusing on residential relocations.
          </p>

          <h2 className="text-xl font-bold text-[var(--black-color)] mb-4 mt-4">
         2.  Efficient Commercial Moving Services
          </h2>
          <p>
            In addition to residential moves, we specialize in commercial moving services in Chandler. We help businesses relocate quickly and with minimal downtime, which is crucial to maintaining daily operations.
          </p>

          <h2 className="text-xl font-bold text-[var(--black-color)] mb-4 mt-4">
          3. Specialty Moving Services for Fragile Items
          </h2>
          <p>
            Not all belongings are created equal, and some require extra care during the moving process.
          </p>


          <h2 className="text-xl font-bold text-[var(--black-color)] mb-4 mt-4">
          4. Secure Storage Solutions
          </h2>
          <p>
            When moving, sometimes there’s a need for temporary storage. Our Chandler moving company offers secure, climate-controlled storage units.
          </p>



          <h2 className="text-xl font-bold text-[var(--black-color)] mb-4 mt-4">
          5. Long-Distance Moves with Confidence
          </h2>
          <p>
            Relocating across state lines can be stressful, but with Making Moves Matter, you can rest assured that your long-distance move will be handled professionally.
          </p>





       </motion.div>


      </div>
    </section>
  );
};

export default Section3;
