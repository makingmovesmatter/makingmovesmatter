"use client";

import React, { useState } from "react";
import { RxDividerHorizontal } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";
import { motion } from "framer-motion";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How much does a move cost?",
      answer:
        "It depends on the size of your move, how far you’re going, and the services you need. We offer transparent, upfront pricing with no hidden fees. Contact us for a quick, custom quote.",
    },
    {
      question: "Are your movers licensed and insured?",
      answer:
        "Yes! We’re fully licensed and insured for your peace of mind. Our team follows all state and federal moving regulations, so your belongings are protected every step of the way.",
    },
    {
      question: "Do you offer packing services?",
      answer:
        "We do! We offer full packing and unpacking services using professional materials and proven systems to protect your items and save you time.",
    },
    {
      question: "Can I hire you just for moving labor?",
      answer:
        "Yes. If you already have a truck or storage container, we can provide trained movers to help with loading, unloading, or rearranging.",
    },
    {
      question: "Do you move specialty items like pianos or gym equipment?",
      answer:
        "Absolutely. Our team is experienced with heavy, awkward, or delicate items and comes equipped with the tools needed to move them safely.",
    },
    {
      question: "How far in advance should I book my move?",
      answer:
        "We recommend booking as early as possible, especially during peak moving season. Ideally, try to book at least 2–4 weeks in advance.",
    },
  ];

  return (
    <div className="w-full py-24">
      <div className="container mx-auto flex flex-col md:flex-row items-start gap-10 px-5">
        
        {/* Left Section */}
        <div className="md:w-1/2">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h1>
             <span>Your Moving Questions,</span> Answered Clearly
            </h1>
          </motion.h2>

          <motion.p
            className="text-xl text-[var(--gray)] mt-4 leading-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            We believe that moving should be an exciting new chapter, not a stressful challenge. Our mission is to make the entire process as simple, smooth, and worry-free as possible. In this FAQ section, you’ll find clear answers, practical tips, and expert guidance to help you prepare before the move, stay organized during the transition, and settle in comfortably afterward
          </motion.p>

          <motion.a
            href="/contact"
            className="btn btn-primary relative top-9"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Contact Us
          </motion.a>
        </div>

        {/* Right Section - FAQ */}
        <div className="md:w-1/2 py-9 mt-5">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="faq-contant-card rounded-md p-5 shadow-sm"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <span className="text-lg text-[var(--black-color)]">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <RxDividerHorizontal className="text-[var(--gray)] text-xl" />
                  ) : (
                    <FaPlus className="text-[var(--gray)] text-xl" />
                  )}
                </button>
                {openIndex === index && (
                  <motion.p
                    className="mt-3 text-[var(--gray)] faq-answer text-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Faq;
