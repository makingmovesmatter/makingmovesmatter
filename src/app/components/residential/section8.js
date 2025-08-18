"use client";

import React, { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { RxDividerHorizontal } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Section8 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How far in advance should I book a move?",
      answer:
        "It’s best to book at least 2–4 weeks ahead, especially during busy seasons. We can often help with last-minute moves too.",
    },
    {
      question: "Do you offer weekend or evening moves?",
      answer:
        "Yes! We offer flexible scheduling, including weekends and after hours, to fit your timeline.",
    },
    {
      question: "Can I hire you just to help load a truck or pod?",
      answer:
        "Absolutely. We offer labor-only services if you already have transportation and just need the muscle.",
    },
  ];

  return (
    <div className="w-full py-10 bg-[var(--red-light-background)]">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-[var(--black-color)] capitalize py-2">
          Frequently Asked Questions
        </h2>

        {/* FAQ Accordion */}
        <div className="mt-10 space-y-4 px-5">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-sm p-4 shadow-sm">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="text-xl font-bold text-[var(--black-color)]">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <RxDividerHorizontal className="text-gray-500" />
                ) : (
                  <FaPlus className="text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <p className="mt-3 text-gray-700 text-md">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section8;
