"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaCompass, FaUserCheck, FaFileInvoiceDollar, FaRegClock, FaStar, FaGoogle, FaPhoneAlt } from "react-icons/fa";

const reasons = [
  {
    icon: <FaCompass className="text-[#f99c00] text-2xl" />,
    title: "15 Years of Local Mesa Expertise",
    text: "After 15 years of being local movers in Mesa, AZ, we know the city well and can navigate its neighborhoods, making your move easier and faster. Our local experience helps us find the best routes and comprehend Mesa’s specific issues."
  },
  {
    icon: <FaUserCheck className="text-[#f99c00] text-2xl" />,
    title: "Trained & Background-Checked Workforce",
    text: "Our workforce is professionally trained and background-checked for your peace of mind, making us one of the most trusted in the industry. Making Moves Matter prioritizes your items’ security. No matter the size or complexity, we train each team member to handle your relocation professionally and carefully."
  },
  {
    icon: <FaFileInvoiceDollar className="text-[#f99c00] text-2xl" />,
    title: "Upfront Pricing with No Hidden Fees",
    text: "We believe in upfront pricing with no hidden fees, which is rare in moving. We provide a comprehensive pricing breakdown before your relocation so there are no surprises on moving day. Our clients like knowing what they’ll pay for local or long-distance relocation."
  },
  {
    icon: <FaRegClock className="text-[#f99c00] text-2xl" />,
    title: "Reliable Scheduling & Speedy Turnaround",
    text: "We prioritize reliable scheduling and speedy turnaround because moving is time-sensitive. We prevent delays and complete your move on schedule. Our fast, careful team handles your items with relentless precision."
  },
  {
    icon: <FaGoogle className="text-[#f99c00] text-2xl" />,
    title: "Verified 5-Star Google Evaluations",
    text: "If you don’t believe us, read our Google evaluations. Many customers praise our professionalism, attention to detail, and fast, effective service. Let us demonstrate why we are Mesa, AZ’s best moving company."
  }
];

const Section7 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="w-full bg-white py-16" ref={ref} id="why-choose-us">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#f99c00] font-semibold text-xs tracking-wider uppercase mb-3">
            The Making Moves Matter Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--heading-text-color)] capitalize">
            Why Choose Our Mesa Moving Company?
          </h2>
          <p className="text-gray-600 text-base mt-3 max-w-none">
            Built on trust, honesty, and local pride—discover what makes us Mesa, Arizona’s top choice for relocation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className={`p-6 rounded-xl border border-neutral-200 bg-neutral-50/60 hover:border-[#f99c00] transition-all duration-300 flex flex-col justify-between ${
                idx === 4 ? "md:col-span-2 lg:col-span-2 bg-gradient-to-r from-orange-50/50 to-neutral-50" : ""
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-orange-50 border border-orange-200/60 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--heading-text-color)] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>

              {idx === 4 && (
                <div className="mt-6 pt-4 border-t border-orange-200/50 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <div className="flex text-[#f99c00] text-sm">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-gray-800">4.9 / 5.0 Rating Across Mesa, AZ</span>
                  </div>
                  <a
                    href="tel:4809348218"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#011234] hover:bg-slate-800 text-white text-xs font-semibold transition-colors"
                  >
                    <FaPhoneAlt className="text-[10px] text-[#f99c00]" />
                    Call for Immediate Booking
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section7;
