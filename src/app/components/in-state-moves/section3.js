import React from "react";
import Image from "next/image";

const Section3 = () => {
  return (
    <div className="w-full py-10 bg-[var(--red-light-background)]">
      <div className="container mx-auto flex flex-col md:flex-row py-10 gap-6">
        <div className="w-full flex justify-center items-center">
          <div className="p-5 rounded-2xl shadow-[0_0_15px_2px] shadow-red-600">
            <h2 className="text-4xl font-normal text-[var(--black-color)] text-center capitalize pt-6 py-2">
              request a <b className="uppercase italic">Moving Quote</b>
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-red-500"
                    placeholder="First"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-red-500"
                    placeholder="Last"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Phone *
                </label>
                <input
                  type="tel"
                  required
                  className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-red-500"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-red-500"
                  placeholder="Your email address"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Move Date *
                </label>
                <input
                  type="date"
                  required
                  className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Moving From *
                </label>
                <input
                  type="number"
                  required
                  className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Moving To *
                </label>
                <input
                  type="number"
                  required
                  className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>
              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="bg-[var(--red-gray-color)] hover:bg-red-700 text-white font-bold py-2 px-6 rounded-md transition-all"
                >
                  Get Estimate
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
