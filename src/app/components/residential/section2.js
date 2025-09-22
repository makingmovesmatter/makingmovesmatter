import React from "react";

const Section2 = () => {
  return (
    <div className="w-full py-10 bg-white">
      <div className="px-20 mx-auto flex flex-col md:flex-row gap-6">
        <div className="md:w-9/12 md:pr-10 w-full">
          <h2 className="text-4xl font-bold text-[var(--heading-text-color)] capitalize py-2">
            Full-Service Residential Moving Built Around Your Needs
          </h2>
          <p className="text-black text-md [word-spacing:3px] pb-2">
            Moving doesn’t have to be stressful. Whether you’re relocating from
            a house, condo, or apartment, we’re here to make your move simple
            and worry-free. Our residential moving services are designed to fit
            your schedule, your budget, and your life.
          </p>
          <h3 className="text-xl font-bold text-[var(--heading-text-color)] capitalize">
            Homes, Apartments, and Condos — We Handle It All
          </h3>
          <p className="text-black text-md [word-spacing:3px] pb-2">
            No matter the size of your home, we’ve got you covered. From
            single-bedroom apartments to five-bedroom houses, our team knows how
            to move your belongings safely and efficiently.
          </p>
          <h3 className="text-xl font-bold text-[var(--heading-text-color)] capitalize">
            Flexible Scheduling and Transparent Pricing
          </h3>
          <p className="text-black text-md [word-spacing:3px] pb-2">
            We work around your availability—evenings, weekends, or short
            notice. Our pricing is upfront, with no hidden fees, so you always
            know what to expect.
          </p>
          <h3 className="text-xl font-bold text-[var(--heading-text-color)] capitalize">
            Packing, Loading, and Setup Included (If You Want It)
          </h3>
          <p className="text-black text-md [word-spacing:3px] pb-2">
            Need help packing or setting up? We can take care of everything from
            boxing your kitchen to placing furniture where you want it. Just
            tell us what you need, and we’ll handle the rest.
          </p>
        </div>

        <div className="md:w-3/12 w-full bg-white px-8 ">
          <h4 className="mb-4 text-lg font-semibold">Table of Contents</h4>
          <ul className=" text-red-color text-sm  space-y-1 ">
            <li>Real Feedback from Real Customers</li>
            <li>Our Moving Services</li>
            <li>Professional Movers You Can Count On</li>
            <li>Get a Free Moving Quote—Your Way</li>
            <li>Areas We Serve</li>
            <li>Frequently Asked Questions</li>
            <li>About Smart Move Moving & Storage</li>
            <li>Our Moving Blog: Tips, Checklists, and Expert Advice</li>
            <li>Locations</li>
            <li>Quick Links</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Section2;
