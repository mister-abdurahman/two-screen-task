import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { GoArrowDown } from "react-icons/go";

export const ThirdScreen = () => {
  const scaleVariants = {
    h1a: {
      scale: [1],
      opacity: [0, 1],
      x: [80, -80, 0],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    h1b: {
      scale: [1],
      opacity: [0, 1],
      x: [120, 0],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    h1c: {
      scale: [1],
      opacity: [0, 1],
      x: [-80, 80, 0],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    btn: {
      scale: [3, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div id="thirdScreen" className="h-screen relative">
      <Header />
      <main className="flex flex-col items-center justify-center mt-10 gap-4 ">
        <motion.h1
          variants={scaleVariants}
          whileInView={scaleVariants.h1a}
          className="text-8xl uppercase tracking-wider"
        >
          Revotionalizing
        </motion.h1>
        <motion.h1
          variants={scaleVariants}
          whileInView={scaleVariants.h1b}
          className="text-8xl uppercase tracking-wider"
        >
          Dental Care
        </motion.h1>
        <motion.h1
          variants={scaleVariants}
          whileInView={scaleVariants.h1c}
          className="text-8xl uppercase tracking-wider"
        >
          With Technology
        </motion.h1>

        <motion.button
          variants={scaleVariants}
          whileInView={scaleVariants.btn}
          className="uppercase bg-orange-500 text-white font-bold rounded-full shadow-lg w-28 h-28"
        >
          Get <br /> Started
        </motion.button>
      </main>
      <Footer />

      <Link
        to="fourthScreen"
        spy={true}
        smooth={true}
        offset={-5}
        duration={500}
        className="absolute cursor-pointer bottom-6 left-[49%] -translate-x-1/2 text-orange-500 p-3 rounded-full border-2 border-orange-500 animate-bounce"
      >
        <span className="h-6 w-6">
          <GoArrowDown className="h-full w-full" />
        </span>
      </Link>
    </div>
  );
};
