import React from "react";
import { FiHome } from "react-icons/fi";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const Section1 = () => {
  const features = [
    {
      title: "Large Office Moves",
      description: `Are you planning a large office move? Our professional team is here to help make your move smooth and easy. We specialize in moving big offices, from heavy furniture and computers to important documents. We carefully pack and transport all your items to ensure they arrive safely at your new location. On moving day, our friendly movers work quickly and efficiently to set up your new office just the way you want it. We understand how important it is to keep your business running, so we minimize downtime and handle all the details for you. Let us take care of your large office move, so you can focus on what matters most—your business.`,
      icon: <FiHome />,
    },
    {
      title: "Small Office Moves",
      description: `Thinking about moving your small office? Let our experienced team make the process simple and stress-free. We handle everything from packing up your desks and computers to safely transporting them to your new location. On moving day, our friendly movers arrive on time and set up your new office just the way you want it. We work quickly to keep your business running smoothly with minimal downtime. Trust us to take care of all the details, so you can focus on what you do best—running your business. Choose us for your small office move and enjoy a hassle-free transition to your new workspace.`,
      icon: <FiHome />,
    },
    {
      title: "Government Moves",
      description: `We specialize in government moves to make the process secure and efficient. Our experienced team handles everything—from packing sensitive documents and important equipment to transporting and setting up your new workspace. We ensure all procedures follow regulations and keep everything confidential throughout the move. On moving day, our professional movers work quickly to minimize any disruptions to your operations. Let us take care of your government relocation smoothly and reliably, so you can focus on your important work without any worries.`,
      icon: <FiHome />,
    },
    {
      title: "Large Office Moves",
      description: `Are you planning a large office move? Our professional team is here to help make your move smooth and easy. We specialize in moving big offices, from heavy furniture and computers to important documents. We carefully pack and transport all your items to ensure they arrive safely at your new location. On moving day, our friendly movers work quickly and efficiently to set up your new office just the way you want it. We understand how important it is to keep your business running, so we minimize downtime and handle all the details for you. Let us take care of your large office move, so you can focus on what matters most—your business.`,
      icon: <FiHome />,
    },
    {
      title: "Small Office Moves",
      description: `Thinking about moving your small office? Let our experienced team make the process simple and stress-free. We handle everything from packing up your desks and computers to safely transporting them to your new location. On moving day, our friendly movers arrive on time and set up your new office just the way you want it. We work quickly to keep your business running smoothly with minimal downtime. Trust us to take care of all the details, so you can focus on what you do best—running your business. Choose us for your small office move and enjoy a hassle-free transition to your new workspace.`,
      icon: <FiHome />,
    },
    {
      title: "Government Moves",
      description: `We specialize in government moves to make the process secure and efficient. Our experienced team handles everything—from packing sensitive documents and important equipment to transporting and setting up your new workspace. We ensure all procedures follow regulations and keep everything confidential throughout the move. On moving day, our professional movers work quickly to minimize any disruptions to your operations. Let us take care of your government relocation smoothly and reliably, so you can focus on your important work without any worries.`,
      icon: <FiHome />,
    },
  ];
  return (
    <div className="w-full py-10 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-[var(--heading-text-color)] capitalize py-2">
          Packing and Unpacking
        </h2>
        <p className="text-[var(--heading-text-color)] text-md pb-8">
          Smart Move Moving & Storage offers full packing and unpacking services
          to make your move easy and stress-free. Our team of trained
          professionals is here to handle all your packing and unpacking needs
          with care and efficiency.
        </p>

        <div className="flex items-center justify-center gap-4 mb-2">
          <div className="h-[3px] w-full bg-[var(--primary-color)]" />
          <span className="text-[var(--primary-color)] text-3xl">
            <MdOutlineKeyboardDoubleArrowDown />
          </span>{" "}
          {/* Down arrow */}
          <div className="h-[3px] w-full bg-[var(--primary-color)]" />
        </div>

        <h3 className="text-2xl font-bold text-[var(--heading-text-color)] capitalize py-2">
          Packing and Unpacking
        </h3>
        <p className="text-[var(--heading-text-color)] text-md pb-2">
          Smart Move offers expert packing services to ensure all your
          belongings are securely packed. We use high-quality materials to
          protect your items. We take special care with fragile and valuable
          items, wrapping them carefully to prevent any damage during the move.
          Whether it’s dishes, glassware, electronics, or furniture, we pack
          everything with precision and care.
        </p>

        <h3 className="text-2xl font-bold text-[var(--heading-text-color)] capitalize py-2">
          Custom Packing Solutions
        </h3>
        <p className="text-[var(--heading-text-color)] text-md pb-2">
          At Smart Move, we know that every move is different. That’s why we
          offer custom packing solutions to fit your needs. Whether you need
          help packing your whole home or just a few rooms, our team can handle
          it. You can choose to have us pack as much or as little as you need.
        </p>

        <h3 className="text-2xl font-bold text-[var(--heading-text-color)] capitalize py-2">
          Efficient Unpacking
        </h3>
        <p className="text-[var(--heading-text-color)] text-md pb-2">
          When you arrive at your new place, Smart Move’s unpacking services
          help you settle in quickly. Our team will carefully unpack your items
          and place them in the rooms you choose, helping you get organized in
          your new space.
        </p>

        <h3 className="text-2xl font-bold text-[var(--heading-text-color)] capitalize py-2">
          Save Time and Reduce Stress
        </h3>
        <p className="text-[var(--heading-text-color)] text-md pb-2">
          With Smart Move’s packing and unpacking services, you save time and
          reduce the stress of moving. Our professional team takes care of the
          hard work, so you can focus on other important things.
        </p>

        <h3 className="text-2xl font-bold text-[var(--heading-text-color)] capitalize py-2">
          Comprehensive Service
        </h3>
        <p className="text-[var(--heading-text-color)] text-md pb-2">
          Our packing and unpacking services make your entire move easy. From
          packing your belongings at your old place to unpacking them at your
          new one, Smart Move Moving & Storage makes sure everything goes
          smoothly.
        </p>
        <p className="text-[var(--heading-text-color)] text-md pb-2">
          Trust Smart Move Moving & Storage to handle all your packing and
          unpacking needs with care and professionalism. Contact us today to
          learn more about our services and to get a personalized quote. Let us
          make your move as easy and stress-free as possible!
        </p>

        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-[3px] w-full bg-[var(--primary-color)]" />
          <span className="text-[var(--primary-color)] text-3xl">
            <MdOutlineKeyboardDoubleArrowDown />
          </span>{" "}
          {/* Down arrow */}
          <div className="h-[3px] w-full bg-[var(--primary-color)]" />
        </div>
      </div>
    </div>
  );
};

export default Section1;
