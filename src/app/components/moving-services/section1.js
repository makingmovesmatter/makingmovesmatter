import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineHomeWork } from "react-icons/md";

const services = [
  {
    icon: MdOutlineHomeWork,
    title: "Residential Moving",
    description:
      "Relocating to a new home? Our dedicated team offers customized residential moving services designed to fit your needs. We take great care in packing and transporting your belongings safely and efficiently.",
    linkText: "RESIDENTIAL MOVING SERVICE",
  },
  {
    icon: MdOutlineHomeWork,
    title: "Commercial Moving",
    description:
      "Relocating your business? Our expert team provides tailored commercial moving services to ensure a seamless transition. We specialize in efficiently transporting office furniture, equipment, and sensitive documents with minimal disruption to your operations. Let us handle the logistics so you can keep your focus on running your business smoothly.",
    linkText: "COMMERCIAL MOVING SERVICE",
  },
  {
    icon: MdOutlineHomeWork,
    title: "Moving Labor",
    description:
      "Need an extra hand with your move? Our reliable team offers professional moving labor services to assist with packing, loading, unloading, and more. Whether you’re renting a truck, storage unit, or need help rearranging furniture, we provide the muscle and expertise to get the job done efficiently. Save time and effort by letting us handle the heavy lifting.",
    linkText: "Moving Labor SERVICE",
  },
  {
    icon: MdOutlineHomeWork,
    title: "Packing/Unpacking",
    description:
      "Our professional packing and unpacking services are here to help with your move. We expertly pack your belongings with care and precision, ensuring they arrive safely at your new home. Once there, we unpack and organize everything to make your new space feel like home. Let us handle the hard work so you can focus on settling in and enjoying your new place. Discover how our packing and unpacking services can transform your moving experience into a smooth and successful transition.",
    linkText: "Packing/Unpacking SERVICE",
  },
  {
    icon: MdOutlineHomeWork,
    title: "Direct Service",
    description:
      "Our direct moving service ensures your belongings are transported straight from your old location to your new one without any stops in between. We do not combine loads, so you don’t have to worry about mixing shipments or potential damage from handling multiple moves. This dedicated service guarantees that your items are handled with the utmost care and arrive safely and securely at your new destination. Enjoy peace of mind with our efficient and reliable direct moving service.",
    linkText: "Direct Service",
  },
];

const Section1 = () => {
  return (
    <>
      {services.map((service, index) => (
        <div className="w-full py-10 bg-[var(--white-background)]">
          <div className="container mx-auto flex flex-col md:flex-row py-10 gap-6">
            <div className="md:w-6/12 w-full pt-6 px-8 ">
              <div className="rounded-xl">
                <div className="flex justify-center items-center p-10 w-full h-full">
                  <MdOutlineHomeWork className="text-8xl text-[var(--red-gray-color)]" />
                </div>
              </div>
            </div>

            <div className="md:w-6/12 w-full px-10">
              <h2 className="text-4xl font-bold text-[var(--heading-text-color)] uppercase pt-6 py-2">
                Residential Moving
              </h2>

              <p className="text-[var(--heading-text-color)] text-md py-2 pb-3">
                Relocating to a new home? Our dedicated team offers customized
                residential moving services designed to fit your needs. We take
                great care in packing and transporting your belongings safely
                and efficiently. Trust us to handle the move, saving you time
                and allowing you to focus on settling into your new home.
              </p>

              <p className="text-[var(--heading-text-color)] text-md py-2 pb-5">
                Learn more about our{" "}
                <Link
                  href="#"
                  className="text-[var(--red-gray-color)] font-bold"
                >
                  RESIDENTIAL MOVING SERVICE
                </Link>
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Section1;
