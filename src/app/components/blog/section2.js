import React from "react";
import Link from "next/link";
import Image from "next/image";
import Section3 from "./section3";

const Section2 = () => {
  return (
    <div className="w-full flex flex-row relative py-16 bg-white">
      <div className="px-10 md:w-9/12 w-full">
        <h2 className="text-3xl font-bold text-[var(--red-gray-color)] uppercase mb-2">
          Featured Blog
        </h2>

        {/* Blog Card */}
        <div className="relative w-full h-64 md:h-[500px] rounded-xl overflow-hidden shadow-md">
          {/* Blog Image */}
          <Image
            src="/images/blog.jpeg"
            alt="How Much Should You Tip Movers in Scottsdale?"
            layout="fill"
            objectFit="cover"
            priority
          />

          {/* Overlay content */}
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
            <h3 className="text-2xl md:text-4xl font-semibold text-white mb-4 drop-shadow">
              How Much Should You Tip Movers in Scottsdale?
            </h3>
            <Link
              href="/blog"
              className="text-white bg-[var(--red-gray-color)] px-6 py-2 rounded-full font-medium hover:bg-red-700 transition"
            >
              Read More
            </Link>
          </div>
        </div>
        <Section3 />
      </div>
      <div className="px-10  md:w-3/12 w-full">
        <div className=" sticky top-10 max-h-[100vh] bottom-0 ">
          <div className="p-5 rounded-2xl shadow-[0_0_15px_2px] shadow-red-600">
            <h2 className="text-4xl font-bold text-[var(--red-gray-color)] text-center uppercase pt-6 py-2">
              Free Moving Estimate
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

export default Section2;
