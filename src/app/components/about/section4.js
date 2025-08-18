import React from "react";
import Image from "next/image";

const Section4 = () => {
  return (
    <div className="w-full py-10 bg-[var(--red-light-background)]">
      <div className="container mx-auto flex flex-col md:flex-row py-10 gap-6">
        <div className="md:w-2/3 w-full">
          <h2 className="text-4xl text-center font-bold text-[var(--red-gray-color)] uppercase pt-6 py-2">
            Our Mission and Values
          </h2>
          <p className="text-[var(--black-color)] text-md pb-2">
            We believe in making moving as seamless and stress-free as possible.
            Our mission is simple:
          </p>

          <ul className="flex flex-col justify-start items-start text-lg text-gray-700  md:text-center">
            <li>
              ✅ <strong>Deliver Excellence:</strong> Provide professional,
              reliable, and efficient moving services.
            </li>
            <li>
              ✅ <strong>Prioritize Customers:</strong> Treat every customer
              with respect and care, as if they’re family.
            </li>
            <li>
              ✅ <strong>Commit to Improvement:</strong> Continuously refine our
              processes to offer the best service possible.
            </li>
          </ul>
        </div>

        <div className="md:w-1/3 w-full pt-6 px-8 ">
          <div className="rounded-xl overflow-hidden shadow-md ">
            <div className="relative w-full h-80">
              <Image
                src={"/images/mobile.jpeg"}
                alt="imagsfd"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
