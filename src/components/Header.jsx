import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { PiTooth } from "react-icons/pi";
import { motion } from "framer-motion";

export const Header = () => {
  const scaleVariants = {
    header: {
      scale: [1],
      opacity: [0, 1],
      y: [100, 0],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.header
      variants={scaleVariants}
      whileInView={scaleVariants.header}
      className="flex justify-between items-center px-6"
    >
      <div className="flex items-center gap-3">
        <button className="border-2 border-black px-2 rounded-2xl">View</button>
        <button className="border-2 border-black px-2 py-1 rounded-full">
          <GiHamburgerMenu />
        </button>
      </div>
      <div className="uppercase flex items-center gap-2">
        <span className="bg-orange-500 text-white rounded-full w-7 h-7 flex justify-center items-center">
          <PiTooth />
        </span>
        Denytech
      </div>
      <div className="flex gap-2">
        <button className="rounded-2xl border-2 border-black px-2">
          Login
        </button>
        <button className="bg-orange-500 text-white rounded-2xl px-2">
          Signup
        </button>
      </div>
    </motion.header>
  );
};
