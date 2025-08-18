import React from "react";
import { FaHome } from "react-icons/fa";

const Section2 = () => {
  return (
    <div className="w-full py-10 bg-[var(--red-light-background)]">
      <div className="container mx-auto">
        <h2 className="text-4xl text-center font-bold text-[var(--red-gray-color)] uppercase pt-6 py-2">
          About Smart Move Moving & Storage
        </h2>
        <p className="text-[var(--black-color)] text-md pb-5">
          At Smart Move Moving Company, we’re more than just a moving service –
          we’re a family. Spanning three generations, our family-owned and
          operated moving company has a rich heritage in providing top-notch
          moving services. From local to direct service moves, our experience
          and dedication shine through in every job we undertake.
        </p>
        <p className="text-[var(--black-color)] text-md pb-2">
          Our commercial and residential packers and movers aren’t just skilled
          – they’re passionate about making your move as stress-free as
          possible. From packing to unpacking, and providing the labor in
          between, we put our heart into every move. When you choose Smart Move,
          you’re not just a customer, you’re part of our family. Trust in us for
          all your moving needs and let us show you the difference a family
          touch can make.
        </p>
      </div>
    </div>
  );
};

export default Section2;
