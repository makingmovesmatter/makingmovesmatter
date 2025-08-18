import React from "react";

const Section4 = () => {
  return (
    <div className="w-full py-10 bg-[var(--red-light-background)]">
      <div className="px-20 mx-auto flex flex-col md:flex-row py-10 gap-6">
        <div className="md:w-2/3 md:pr-10 w-full">
          <h2 className="text-4xl font-bold text-[var(--black-color)] capitalize pt-6 py-2">
            Professional Movers You Can Count On
          </h2>
          <p className="text-[var(--black-color)] text-md pb-2">
            Whether you’d rather talk to a real person or handle everything
            online, getting started is easy. You can call us for a quick quote,
            fill out our simple online form, or schedule a free in-home estimate
            for a more detailed walkthrough. Whatever works best for you—we’re
            here to help.
          </p>
          <h4 className="text-2xl font-bold text-[var(--black-color)] capitalize py-1">
            Call Us for a Quick Moving Quote
          </h4>
          <p className="text-[var(--black-color)] text-md pb-2">
            Speak directly with a moving specialist and get an accurate estimate
            right over the phone—fast and hassle-free.
          </p>
          <h4 className="text-2xl font-bold text-[var(--black-color)] capitalize py-1">
            Request a Quote Online
          </h4>
          <p className="text-[var(--black-color)] text-md pb-2">
            Prefer to skip the call? Just fill out our short form and we’ll send
            a custom quote straight to your inbox.
          </p>
          <h4 className="text-2xl font-bold text-[var(--black-color)] capitalize py-1">
            Schedule a Free In-Home Estimate
          </h4>
          <p className="text-[var(--black-color)] text-md pb-2">
            Want a more hands-on approach? We’ll send a team member to your home
            to review the details and provide an on-the-spot estimate.
          </p>
        </div>

        <div className="md:w-1/3 w-full pt-6 px-8 ">
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

export default Section4;
