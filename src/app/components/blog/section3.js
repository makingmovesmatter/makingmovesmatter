"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const blogs = [
  {
    title: "Getting Rid Of Unwanted Furniture",
    date: "Feb 8, 2021",
    image: "/images/blog.jpeg",
  },
  {
    title: "Packing Clothes Tips",
    date: "Jan 21, 2021",
    image: "/images/blog.jpeg",
  },
  {
    title: "Should You Hire Professional Movers",
    date: "Dec 8, 2020",
    image: "/images/blog.jpeg",
  },
  {
    title: "Packing Before Moving Day",
    date: "Nov 18, 2020",
    image: "/images/blog.jpeg",
  },
  {
    title: "Apartment Moving in Scottsdale",
    date: "Jul 29, 2025",
    image: "/images/blog.jpeg",
  },
  {
    title: "Apartment Moving in Phoenix",
    date: "Jul 29, 2025",
    image: "/images/blog.jpeg",
  },
];

const Section3 = () => {
  const sliderRef = useRef(null);

  const settings = {
    arrows: false,
    dots: true,
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
    <div className="w-full py-10 px-6 bg-white relative">
      {/* Custom Arrows */}
      <div className="absolute left-0 top-[calc(20%+50px)] z-10">
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className="bg-gray-200 hover:bg-red-500 hover:text-white p-3 rounded-full transition ml-2"
          aria-label="Previous Slide"
        >
          <FaChevronLeft />
        </button>
      </div>
      <div className="absolute right-0 top-[calc(20%+50px)] z-10">
        <button
          onClick={() => sliderRef.current?.slickNext()}
          className="bg-gray-200 hover:bg-red-500 hover:text-white p-3 rounded-full transition mr-2"
          aria-label="Next Slide"
        >
          <FaChevronRight />
        </button>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {blogs.map((blog, index) => (
          <div key={index} className="px-3 ">
            <div className="bg-white rounded-xl overflow-hidden shadow-md transition hover:shadow-xl h-full flex flex-col">
              <div className="relative w-full h-48">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-xl"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[var(--black-color)] my-2">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-700">{blog.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Section3;
