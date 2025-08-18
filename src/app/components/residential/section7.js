import React from "react";
import { FaHome } from "react-icons/fa";

const Section7 = () => {
  return (
    <div className="w-full py-10 bg-[var(--white-background)]">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-[var(--black-color)] capitalize pt-6 py-2">
          What to Expect From Our Residential Moving Process
        </h2>
        <p className="text-[var(--black-color)] text-md pb-2">
          We keep it simple with clear steps and open communication from start
          to finish.
        </p>

        <h4 className="text-xl font-semibold text-[var(--black-color)] capitalize">
          Free Quote and Consultation
        </h4>
        <p className="text-[var(--black-color)] text-md pb-2">
          Start with a no-obligation quote. We’ll ask a few questions and give
          you a price that fits your needs.
        </p>

        <h4 className="text-xl font-semibold text-[var(--black-color)] capitalize">
          Custom Move Plan and Timeline
        </h4>
        <p className="text-[var(--black-color)] text-md pb-2">
          We work with you to build a move plan that fits your schedule and your
          goals.
        </p>

        <h4 className="text-xl font-semibold text-[var(--black-color)] capitalize">
          Moving Day Execution
        </h4>
        <p className="text-[var(--black-color)] text-md pb-2">
          Our team shows up on time, ready to work. We move efficiently, protect
          your items, and keep you updated as we go.
        </p>
        <h4 className="text-xl font-semibold text-[var(--black-color)] capitalize">
          Final Walkthrough and Unloading
        </h4>
        <p className="text-[var(--black-color)] text-md pb-2">
          We don’t leave until everything is unloaded and where you want it.
          We’ll do a final check to make sure you’re happy with the results.
        </p>
      </div>
    </div>
  );
};

export default Section7;
