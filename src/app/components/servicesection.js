"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Commercial Moving",
    description: "Expert relocation for offices, retail stores, and businesses, ensuring minimal downtime and maximum efficiency.",
    image: "/images/image copy 10.png",
    link: "/commercial-services",
  },
  {
    title: "Furniture Assembly",
    description: "Professional assembly and disassembly of furniture to make your move smooth and stress-free.",
    image: "/images/image copy 11.png",
    link: "/furniture-assembly",
  },
  {
    title: "Packing & Unpacking Services",
    description: "Full-service packing with premium materials to safeguard your belongings during every stage of the move.",
    image: "/images/image copy 8.png",
    link: "/packing-and-unpacking-services",
  },
  {
    title: "Storage Solutions",
    description: "Secure, climate-controlled storage for short-term or long-term needs, with easy access when you need it.",
    image: "/images/image copy 9.png",
    link: "/storage",
  },
  {
    title: "Local Moves",
    description: "Fast, affordable, and reliable moving services within your city or nearby neighborhoods.",
    image: "/images/image copy 7.png",
    link: "/local-moving",
  },
  {
    title: "Long Distance",
    description: "Trusted long-distance moving solutions with careful planning, safe transport, and on-time delivery across states.",
    image: "/images/image copy 6.png",
    link: "/long-distance-moving",
  },  
  {
    title: "Large and Heavy Item Moving",
    description: "Specialized handling for oversized or heavy items like pianos, safes, and industrial equipment.",
    image: "/images/image copy 12.png",
    link: "/large-and-heavy-item-moving",
  },  
  {
    title: "Hot Tub Relocation",
    description: "Safe and efficient hot tub moving with the right equipment and techniques to prevent damage.",
    image: "/images/image copy 13.png",
    link: "/hot-tub-relocation",
  },
  {
    title: "Furniture Moving",
    description: "Careful transportation of all types of furniture, from delicate antiques to large sectional sofas.",
    image: "/images/image copy 14.png",
    link: "/furniture-moving",
  },
];


const ServiceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="paddingTopBottom w-full py-16 bg-gray-100" ref={ref}>
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration:1 }}
          className="text-5xl font-bold text-[var(--heading-text-color)] mb-2"
        >
          Our Moving Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration:1, delay: 1 }}
          className="text-gray-700 text-lg mb-12"
        >
          We help with moves big and small—whether you’re relocating from a studio apartment, a multi-bedroom home, or an entire office. Below are some of the most requested moving services we provide for homes and businesses across the country.
        </motion.p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
          
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative rounded-xl overflow-hidden shadow-lg group"
            >
              <Link href={service.link}>
              <div className="relative w-full h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                  priority
                />
                
                {/* Text on image bottom */}
                <div className="absolute bottom-0 left-0 w-full p-4 z-20 text-left text-white bg-gradient-to-t from-black/100 via-black/80 to-transparent">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-sm">{service.description}</p>
                </div>
              </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
