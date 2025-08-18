import React from "react";
import Image from "next/image";

const Section6 = () => {
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
            AWARD WINNING SERVICE
          </h2>
          <p className="text-[var(--black-color)] text-md pb-2">
            Welcome to our award-winning moving service, a three-time recipient
            of the ‘Best Mover’ Readers’ Choice Award. Our full-time,
            professional movers take pride in providing superior service,
            setting us apart in the industry.
          </p>

          <p className="text-[var(--black-color)] text-md pb-2">
            With over 30 years of experience, our legacy speaks for itself. Our
            movers don’t just do a job, they deliver excellence, earning us
            recognition year after year. Experience our award-winning service
            and understand why our moving company is the top choice for your
            next move.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section6;
