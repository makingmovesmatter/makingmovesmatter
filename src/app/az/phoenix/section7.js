"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaHome, FaBuilding, FaDollyFlatbed, FaWarehouse, FaGlobeAmericas, FaStar, FaGoogle, FaPhoneAlt } from "react-icons/fa";
import { openQuoteModal } from "../../components/QuoteButton";

const reasons = [
  {
    icon: <FaHome className="text-[#f99c00] text-2xl" />,
    number: "01",
    title: "1. Residential Moving Excellence",
    text: "We specialize in personalized home, condo, and apartment relocations across Phoenix. From delicate kitchen packing and wardrobe boxes to precise furniture assembly, we deliver white-glove respect."
  },
  {
    icon: <FaBuilding className="text-[#f99c00] text-2xl" />,
    number: "02",
    title: "2. Commercial and Office Relocations",
    text: "Phoenix's thriving corporate centers, law firms, and medical suites rely on our streamlined moving strategies. We provide flexible evening and weekend dispatch for zero operational disruption."
  },
  {
    icon: <FaDollyFlatbed className="text-[#f99c00] text-2xl" />,
    number: "03",
    title: "3. Specialty Item Moving for Fragile Items",
    text: "Not all belongings are standard. We provide custom wooden crating, heavy-duty rigging, and padded transport for pianos, heavy gun safes, priceless antiques, and delicate electronics."
  },
  {
    icon: <FaWarehouse className="text-[#f99c00] text-2xl" />,
    number: "04",
    title: "4. Secure Climate-Controlled Storage",
    text: "Whether your new Phoenix residence is being renovated or your business needs transitional holding, our climate-controlled facilities feature 24/7 video monitoring and computerized security."
  },
  {
    icon: <FaGlobeAmericas className="text-[#f99c00] text-2xl" />,
    number: "05",
    title: "5. 15 Years of Experience & Full Insurance",
    text: "We are fully licensed, insured, and committed to delivering exceptional customer service with every move. Competitive pricing, transparent flat rates, and reliable communication from start to finish."
  }
];

const Section7 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="w-full bg-white py-16" ref={ref} id="why-choose-phoenix">
      <div className="container mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#f99c00] font-semibold text-xs tracking-wider uppercase mb-3">
            The Making Moves Matter Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--heading-text-color)] capitalize">
            Why Choose Our Phoenix Moving Company?
          </h2>
          <p className="text-gray-600 text-base mt-3 max-w-none">
            When it comes to moving companies in Phoenix, our team stands out for delivering exceptional service at every step of your relocation journey. With competitive pricing, reliable service, and a commitment to customer satisfaction, we are the preferred choice for both residential and commercial moves in the Valley of the Sun.
          </p>
        </div>

        {/* 5 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="p-6 rounded-xl bg-neutral-50 border border-neutral-200 hover:border-[#f99c00] transition-all duration-300 flex flex-col justify-between group hover:bg-white"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-white border border-neutral-200 text-gray-700">
                    {item.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[var(--heading-text-color)] mb-2 group-hover:text-[#f99c00] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Review Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            className="p-6 rounded-xl bg-[#011234] text-white border border-slate-800 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FaGoogle className="text-white text-lg" />
                <div className="flex text-[#f99c00] text-sm">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <span className="text-xs font-bold text-slate-300 ml-auto">Verified Review</span>
              </div>
              <h4 className="font-bold text-base text-white mb-2">
                "Best Moving Experience in Phoenix!"
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed italic">
                "Making Moves Matter moved our household into Arcadia without a hitch. The crew was extremely careful with our hardwood floors and high-value paintings. On time, polite, and completely upfront on pricing."
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between mt-4">
              <span className="text-xs font-semibold text-[#f99c00]">— Brandon & Jessica M., Phoenix AZ</span>
              <span className="text-[10px] text-slate-400">Residential Relocation</span>
            </div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <div className="text-center pt-4">
          <button
            type="button"
            onClick={openQuoteModal}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#f99c00] hover:bg-[#e08b00] text-white font-bold text-sm transition-colors cursor-pointer shadow-lg shadow-orange-500/20"
          >
            Request Your Free Phoenix Moving Quote
          </button>
        </div>

      </div>
    </section>
  );
};

export default Section7;
