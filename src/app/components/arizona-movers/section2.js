import React from "react";
import Image from "next/image";

const Section2 = () => {
  return (
    <div className="w-full py-10 bg-[var(--white-background)]">
      <div className="md:px-20 mx-auto flex flex-col md:flex-row py-10 gap-6">
        <div className="md:w-3/12 pt-10 w-full  px-12 ">
          <div className="p-5  rounded-2xl shadow-[0_0_15px_2px] shadow-red-600">
            <h2 className="text-4xl font-normal uppercase text-[var(--red-gray-color)] text-center  pt-6 py-2">
              Get Your <br />
              <b className=" italic">Free Moving estimate</b>
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
        <div className="md:w-9/12 md:px-10 w-full px-10">
          <h2 className="text-4xl  font-bold text-[var(--heading-text-color)] uppercase  py-5">
            PROFESSIONAL ARIZONA MOVERS
          </h2>

          <p className="text-[var(--heading-text-color)] text-md py-2 pb-5">
            Looking for a trusted moving company in Arizona? You’re in the right
            place. At Smart Move Moving & Storage, we proudly serve customers
            all across the state. No matter where you’re moving to or from in
            Arizona, our experienced movers are ready to help.
          </p>

          <p className="text-[var(--heading-text-color)] text-md py-2 pb-5">
            From large cities to small towns, we provide professional moving
            services throughout Arizona — delivering the same high-quality,
            reliable service we’re known for. Whether it’s a local move down the
            street or a relocation across the state, we’ve got you covered.
          </p>

          <h2 className="text-4xl  font-bold text-[var(--heading-text-color)] uppercase  py-5">
            PROFESSIONAL ARIZONA MOVERS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-[var(--red-gray-color)] pt-4">
            <div>
              <h3 className="font-semibold text-xl">Phoenix</h3>
              <ul className="list-disc text-md list-inside mt-2 space-y-1">
                <li>Chandler</li>
                <li>Gilbert</li>
                <li>Mesa</li>
                <li>Scottsdale</li>
                <li>Tempe</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-xl">Tucson</h3>
              <ul className="list-disc text-md list-inside mt-2 space-y-1">
                <li>Avra Valley</li>
                <li>Catalina Foothills</li>
                <li>Dove Mountain</li>
                <li>Green Valley</li>
                <li>Marana</li>
                <li>Oracle</li>
                <li>Oro Valley</li>
                <li>Sahuarita</li>
                <li>Vail</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
