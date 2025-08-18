import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Section1 = () => {
  return (
    <>
      <div className="w-full py-10 bg-[var(--red-gray-background)]">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <h2 className="text-center uppercase text-5xl font-bold text-[var(--secondary-color)]">
            About Us
          </h2>
        </div>
        {/* Breadcrumb */}
      </div>
      <div className="mt-4  text-md bg-white">
        <div className="flex justify-center items-center space-x-2 ">
          <Link href="/" className="hover:underline">
            <FaHome className="text-red-500" />
          </Link>
          <span>
            <MdOutlineKeyboardArrowRight />
          </span>
          <span className="text-black cursor-default">About Us</span>
        </div>
      </div>
    </>
  );
};

export default Section1;
