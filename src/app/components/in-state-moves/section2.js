import React from "react";
import Image from "next/image";

const Section2 = () => {
  return (
    <div className="w-full py-10 bg-[var(--white-background)]">
      <div className="container mx-auto flex flex-col md:flex-row py-10 gap-6">
        <div className="md:w-7/12 w-full">
          <h2 className="text-4xl text-center font-normal text-[var(--heading-text-color)] uppercase pt-6 py-2">
            why choose our <b>In-State Moving Service</b>
          </h2>

          <h4 className="text-xl font-bold">
            The Movers That Pick Up Are the Movers That Deliver
          </h4>
          <p className="text-[var(--heading-text-color)] text-md py-2 pb-5">
            From start to finish, you’ll work with the same trusted team—no
            hand-offs, no unfamiliar faces. The movers who carefully load your
            belongings are the same ones who drive the truck and complete your
            delivery. This consistency ensures greater accountability, better
            communication, and a more personalized moving experience.
          </p>

          <hr />
          <h4 className="text-xl font-bold pt-2">We Don’t Combine Shipments</h4>
          <p className="text-[var(--heading-text-color)] text-md py-2 pb-5">
            Your move is exactly that—your move. We never mix your belongings
            with another customer’s, so there’s no risk of delays, lost items,
            or detours. With a dedicated truck and crew, your items travel
            directly from your old space to your new one, safely and securely.
          </p>

          <hr />
          <h4 className="text-xl font-bold pt-2">Streamlined Process</h4>
          <p className="text-[var(--heading-text-color)] text-md py-2 pb-5">
            We’ve fine-tuned every part of the moving process to keep things
            simple and stress-free. From planning and packing to delivery and
            setup, our team handles the details so you can focus on the big
            picture. No guesswork, no unnecessary steps—just an efficient,
            well-organized move.
          </p>
          <hr />
          <h4 className="text-xl font-bold pt-2">
            Planned Pickup and Arrival Plan
          </h4>
          <p className="text-[var(--heading-text-color)] text-md py-2 pb-5">
            No vague windows or last-minute changes—we give you a clear,
            dependable schedule upfront. Your move comes with a confirmed pickup
            time and a solid delivery timeline, so you can plan the rest of your
            day (or week) with confidence. We stay in touch throughout, keeping
            everything on track and on time.
          </p>
        </div>

        <div className="md:w-5/12 w-full pt-6 px-8 ">
          <div className="rounded-xl overflow-hidden shadow-md ">
            <div className="relative w-full h-96 md:h-[550px]">
              <Image
                src={"/images/phone.jpg"}
                alt="imagsfd"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
