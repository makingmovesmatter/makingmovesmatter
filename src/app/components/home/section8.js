"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";

const features = [
  {
    title: "Residential Moving",
    image: "/images/mobile.jpeg",
  },
  {
    title: "Moving Labor",
    image: "/images/mobile.jpeg",
  },
  {
    title: "Commercial Moves",
    image: "/images/mobile.jpeg",
  },
  {
    title: "Packing & Unpacking",
    image: "/images/mobile.jpeg",
  },
  {
    title: "Furniture Assembly",
    image: "/images/mobile.jpeg",
  },
];

const Section8 = () => {
  const settings = {
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 5 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <div className="w-full py-10 px-10 bg-white">
      <Slider {...settings}>
        {features.map((item, index) => (
          <div key={index} className="px-3">
            <div className="rounded-xl overflow-hidden shadow-md ">
              <div className="relative w-full h-40">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Section8;
