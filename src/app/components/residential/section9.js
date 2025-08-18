"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const blogs = [
  {
    title: "How to Pack Kitchen Utensils for Moving",
    description:
      "Discover step-by-step methods to safely pack your kitchen utensils using the right materials, so they stay organized, protected, and damage-free during your entire move.",
  },
  {
    title: "The Ultimate Moving Checklist",
    description:
      "Stay on track and stress-free with our comprehensive moving checklist. From packing to scheduling, this guide ensures nothing is forgotten on moving day.",
  },
  {
    title: "How to Take the Stress Out of Moving",
    description:
      "Moving doesn’t have to be chaotic. Use these practical tips to reduce stress, stay focused, and enjoy a smoother transition into your new home.",
  },
  {
    title: "How to Turn Moving Into an Adventure",
    description:
      "Make moving a fun experience for the whole family. Turn chores into games, explore your new area, and treat moving as a positive journey.",
  },
  {
    title: "Apartment Moving in Scottsdale",
    description:
      "Learn essential tips for apartment moves in Scottsdale, including elevator reservations, parking arrangements, and how to navigate complex building rules efficiently.",
  },
  {
    title: "Apartment Moving in Phoenix",
    description:
      "Moving into or out of a Phoenix apartment? Here’s how to streamline the process, minimize disruption, and ensure nothing is left behind or overlooked.",
  },
];
const Section9 = () => {
  const sliderRef = useRef(null);

  const settings = {
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="w-full py-14 px-6 bg-white">
      <div className="container mx-auto px-20">
        <h2 className="text-3xl font-bold text-[var(--black-color)] mb-4">
          Helpful Articles and Tips for a Smoother Residential Move
        </h2>
        <p className=" text-gray-600 mb-10 max-w-2xl">
          Explore our blog for moving tips, packing how-tos, and practical
          advice to make your next move smooth and stress-free.
        </p>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {blogs.map((blog, index) => (
          <div key={index} className="px-3">
            <div className="border border-gray-300 p-6 rounded-xl shadow-sm h-full flex flex-col justify-between hover:shadow-lg transition">
              <div>
                <h3 className="text-[20px] text-center font-semibold text-gray-800 mb-2">
                  {blog.title}
                </h3>
                <hr className="h-[5px] bg-red-600 border-none mb-4" />
                <p className="text-sm text-center text-gray-600">
                  {blog.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Section9;
