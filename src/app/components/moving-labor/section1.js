"use client";

import React, { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { RxDividerHorizontal } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Section1 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Loading",
      answer:
        "Our loading services make your move easy and smooth. We can help with all your moving labor needs. Our team makes sure your things are handled with care and skill. Below, you’ll find detailed descriptions of each service we offer to meet your needs and budget. We can help load your:",
      question1: "Pods",
      answer1:
        "Our team is great at loading pods. We pack your items safely and use the space well to protect them from damage during the move.",

      question2: "Rental Trucks",
      answer2:
        "We offer expert loading services for rental trucks. Our team knows how to load trucks to keep everything balanced and safe. We handle all kinds of items, from delicate antiques to big furniture.",
      question3: "Containers",
      answer3:
        "Our loading service for containers makes the best use of space and keeps your belongings safe. We carefully arrange and secure your items to stop them from moving and getting damaged during",
    },
    {
      question: "Unloading",
      answer:
        "Our unloading services make the end of your move as easy and smooth as possible. We can help with all your moving labor needs. Our team makes sure your things are handled with care and skill. Below, you’ll find detailed descriptions of each service we offer to meet your needs and budget. We can help unload your: ",
      question1: "Pods",
      answer1:
        "Our team is skilled at unloading pods. We carefully unpack your items and place them safely in your new space, ensuring nothing is damaged in the process.",

      question2: "Rental Trucks",
      answer2:
        "We offer expert unloading services for rental trucks. Our team unloads your items strategically, making sure everything is handled with care and placed where you need it.",
      question3: "Containers",
      answer3:
        "Our unloading service for containers ensures your belongings are safely and efficiently removed. We carefully unpack and organize your items to prevent any damage and make your move-in process smooth.",
    },
    {
      question: "Home Staging",
      answer:
        "Our staging services help make your home look its best for potential buyers. We can assist with all your staging needs. Our team ensures your items are arranged with care and style. Below, you’ll find detailed descriptions of each service we offer to meet your needs and budget. We can help with:",
      question1: "Staging for Selling Your Home",
      answer1:
        "We create a warm and inviting space by arranging furniture and décor to highlight your home’s best features, making it appealing to buyers.",

      question2: "Arranging Furniture",
      answer2:
        "Our team arranges furniture in a way that maximizes space and enhances the aesthetic appeal of your home, ensuring each room is set up to show its full potential.",
      question3: "Staging for Home Repairs",
      answer3:
        "If you need to clear rooms for home repairs, we can place your furniture in the garage or another storage area, keeping your items safe while work is being done.",
    },
  ];

  return (
    <div className="w-full p-20 flex flex-row bg-[var(--white-background)]">
      <div className="px-10 md:w-9/12 w-full">
        <h2 className="text-4xl font-bold text-[var(--heading-text-color)] capitalize py-2">
          Moving Labor Service
        </h2>
        <p className="text-[var(--heading-text-color)] text-lg pb-4">
          Our moving labor services include specialized options to assist you
          during your move or home staging process. We offer a variety of
          services to meet your needs and budget, aiming to streamline and
          simplify your experience. Each service focuses on making your move
          smooth and stress-free.
        </p>

        {/* FAQ Accordion */}
        <div className="space-y-4 py-10">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-sm p-4 shadow-sm ${
                openIndex === index
                  ? "bg-[var(--white-background)]"
                  : "bg-[var(--light-color)]"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="text-2xl font-bold text-[var(--heading-text-color)]">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <RxDividerHorizontal className="text-gray-500" />
                ) : (
                  <FaPlus className="text-gray-500" />
                )}
              </button>

              {openIndex === index && (
                <div className="mt-3 text-gray-700 text-md space-y-4">
                  <p className="whitespace-pre-line">{faq.answer}</p>
                  <div>
                    <h4 className="font-bold text-[var(--heading-text-color)] text-xl pt-2">
                      {faq.question1}
                    </h4>
                    <p>{faq.answer1}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--heading-text-color)] text-lg pt-2">
                      {faq.question2}
                    </h4>
                    <p>{faq.answer2}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--heading-text-color)] text-lg pt-2">
                      {faq.question3}
                    </h4>
                    <p>{faq.answer3}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="px-10  md:w-3/12 w-full">
        <div className=" ">
          <div className="p-5 py-10 rounded-2xl shadow-[0_0_15px_2px] shadow-red-600">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-red-500"
                    placeholder="First"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-red-500"
                    placeholder="Last"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Phone *
                </label>
                <input
                  type="tel"
                  required
                  className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-red-500"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-red-500"
                  placeholder="Your email address"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Move Date *
                </label>
                <input
                  type="date"
                  required
                  className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Moving From *
                </label>
                <input
                  type="number"
                  required
                  className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Moving To *
                </label>
                <input
                  type="number"
                  required
                  className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>
              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="bg-[var(--red-gray-color)] hover:bg-red-700 text-white font-bold py-2 px-6 rounded-md transition-all"
                >
                  Get Estimate
                </button>
              </div>
            </form>
          </div>
        </div>
        <h2 className="text-4xl pt-10 font-bold text-[var(--heading-text-color)] capitalize py-2">
          Need Help With Other Moving Services?
        </h2>
        <p className="text-[var(--heading-text-color)] text-lg pb-4">
          Click the link below to find out more
        </p>
        <p className="text-red-600 underline">MOVING SERVICES</p>
      </div>
    </div>
  );
};

export default Section1;
