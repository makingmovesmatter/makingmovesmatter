import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

const Section6 = () => {
  const features = [
    {
      title: "Residential Moving",
      icon: <IoLocationSharp />,
    },
    {
      title: "Moving Labor",
      icon: <IoLocationSharp />,
    },
    {
      title: "Commercial Moves",
      icon: <IoLocationSharp />,
    },
    {
      title: "Packing & Unpacking",
      icon: <IoLocationSharp />,
    },
    {
      title: "Furniture Assembly",
      icon: <FaArrowRight />,
    },
  ];
  return (
    <div className="w-full py-16 section-area-serve">
      <div className="container mx-auto">
        <h2 className="text-4xl pt-6 font-bold text-[var(--heading-text-color)] capitalize py-2">
          Areas We Serve
        </h2>
        <p className="text-[var(--heading-text-color)] text-md pb-4">
          We provide professional moving services across multiple regions and
          are always expanding into new areas. Whether you’re relocating across
          town or moving to a new state, our team is ready to help. Explore our
          current service areas below to see if we’re available near you.
        </p>

        <div className="grid grid-cols-1  md:grid-cols-2 gap-5 p-5">
          {features.map((pro, index) => (
            <div
              key={index + 2}
              className="flex flex-row justify-start items-center p-5"
            >
              <div className="text-[var(--red-gray-color)] pr-5 text-5xl">
                {pro.icon}
              </div>
              <h3 className="text-3xl font-bold text-[var(--heading-text-color)] capitalize py-2">
                {pro.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section6;
