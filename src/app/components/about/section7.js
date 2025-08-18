import React from "react";

const Section7 = () => {
  return (
    <div className="w-full py-10 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row py-10 gap-6">
        <div className="md:w-7/12 md:pr-5 w-full">
          <h2 className="text-4xl text-center font-bold text-[var(--red-gray-color)] uppercase pt-6 py-2">
            Included in every move
          </h2>
          <p className="text-[var(--black-color)] text-md pb-2">
            Contact our professional movers for a free quote on your next move.
            We’re excited about the opportunity to help you enjoy a successful
            move that is carried out at top efficiency. Reach out to us today so
            that we can put together a plan to get you moved to your new
            location.
          </p>
          <h4 className="text-lg font-semibold text-[var(--black-color)] capitalize py-1">
            FULLY EQUIPPED 26 FOOT MOVING VANS
          </h4>
          <p className="text-[var(--black-color)] text-md pb-2">
            Smart Move uses full sized 26ft moving vans. Our moving vans are
            equipped with lift gates as well as ramps to help keep your move
            fast and simple.
          </p>
          <h4 className="text-lg font-semibold text-[var(--black-color)] capitalize py-1">
            IN HOME FURNITURE PROTECTION
          </h4>
          <p className="text-[var(--black-color)] text-md pb-2">
            Before any piece of furniture is moved out of your home it is pad
            wrapped and shrink wrapped. This process ensures that your furniture
            will not get damaged when we perform our local moving.
          </p>
          <h4 className="text-lg font-semibold text-[var(--black-color)] capitalize py-1">
            GET DETAILED ORGANIZATION
          </h4>
          <p className="text-[var(--black-color)] text-md pb-2">
            Another key factor to keeping your move on time and on budget is
            organization. Our moving and storage company has a step by step
            process for every move to make sure that your move goes smoothly.
          </p>
          <h4 className="text-lg font-semibold text-[var(--black-color)] capitalize py-1">
            ITRAINED PROFESSIONAL MOVERS
          </h4>
          <p className="text-[var(--black-color)] text-md pb-2">
            Our Smart Movers are hand picked to ensure that they are capable of
            providing exceptional local moving services in Tucson. We realize
            that good customer service and a positive attitude are the key.
          </p>
        </div>

        <div className="md:w-5/12 w-full pt-6 px-8 ">
          <div className="p-5 rounded-2xl shadow-[0_0_15px_2px] shadow-red-600">
            <h2 className="text-4xl font-bold text-[var(--red-gray-color)] text-center uppercase py-2">
              Request A Quote
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

export default Section7;
