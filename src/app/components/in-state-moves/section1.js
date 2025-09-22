import React from "react";
import { FaHome } from "react-icons/fa";

const Section1 = () => {
  return (
    <div className="w-full py-10 bg-[var(--white-background)]">
      <div className="container mx-auto">
        <h2 className="text-4xl text-center font-bold text-[var(--red-gray-color)] uppercase pt-6 py-2">
          Direct Service anywhere in-state
        </h2>
        <p className="text-[var(--heading-text-color)] text-md pb-5">
          Our Direct Service Moves offer a simple and fast moving experience.
          Your belongings go straight from their original location to your new
          destination without any stops or other people’s stuff. This makes your
          move more efficient and secure.
        </p>
      </div>
    </div>
  );
};

export default Section1;
