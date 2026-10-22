"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Section8 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="w-full bg-white py-14 mt-16 mb-16" ref={ref}>
      <div className="container mx-auto px-5 flex flex-col lg:flex-row items-stretch gap-10">
        

       <motion.div
          className="w-full flex flex-col justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-[var(--heading-text-color)] mb-4">
          A Brief History of Chandler, AZ
          </h2>

Chandler, Arizona, has a rich history rooted in innovation and agriculture. The city was founded in 1912 by Dr. Alexander John Chandler, Arizona’s first veterinary surgeon. He purchased land southeast of Phoenix and envisioned a thriving community that would capitalize on the desert’s potential for farming and development. <br /> <br />

Dr. Chandler’s efforts paid off when he developed an innovative irrigation system using water from the Salt River. This system transformed the arid desert landscape into fertile farmland, supporting crops such as cotton, alfalfa, and citrus. The town officially incorporated in 1920 and began to grow as more settlers were attracted to the area’s agricultural success. <br /><br />

In the mid-20th century, Chandler shifted from an agricultural hub to a center of technological innovation. The establishment of the Williams Air Force Base and the arrival of major technology companies, including Intel, spurred economic growth and transformed the city into a thriving urban area. <br /><br />

Today, Chandler is known as a hub for innovation and technology, often referred to as part of the “Silicon Desert.” With a vibrant downtown, excellent schools, and diverse recreational opportunities, it remains one of the most desirable places to live in Arizona. <br /><br />

After your move with the best Chandler moving company, take some time to explore the city’s many attractions. <br /><br />

       </motion.div>


      </div>
    </section>
  );
};

export default Section8;
