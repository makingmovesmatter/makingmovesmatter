import React from "react";
import Image from "next/image";

const Section8 = () => {
  return (
    <div className="w-full py-10 bg-[var(--red-light-background)]">
      <div className="container mx-auto flex flex-col md:flex-row py-10 gap-6">
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
        <div className="md:w-2/3 w-full">
          <h2 className="text-4xl text-center font-bold text-[var(--red-gray-color)] uppercase pt-6 py-2">
            Expert Local Moving Service
          </h2>
          <p className="text-[var(--black-color)] text-md pb-2">
            Our professional movers are here to serve you and your family. We
            perform a complete range of residential and commercial moving
            services designed to take the stress out of moving day. As an
            independent moving company, we have the freedom to offer the best
            quality products at a competitive price. Check out some of our most
            popular services.
          </p>
          <ul className="list-disc list-inside text-lg font-bold text-gray-700">
            <li>Local Residential Moving</li>
            <li>Local Commercial Moving</li>
            <li>Intra State Moves</li>
            <li>Pro Piano Movers</li>
            <li>Labor Only Services</li>
            <li>Professional Packing Services</li>
            <li>Pool Tables</li>
          </ul>

          <p className="text-[var(--black-color)] text-md pb-2">
            Our company is built on a foundation of honesty and respect. We
            promise to treat you fairly, and we stand behind our services 100%.
            Schedule a free quote from Smart Move and let us take care of your
            next move. You’ll be glad that you did.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section8;
