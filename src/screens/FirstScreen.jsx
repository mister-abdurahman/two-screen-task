import { motion } from "framer-motion";
import { GoArrowDown } from "react-icons/go";
import { PiTooth } from "react-icons/pi";
import { Link } from "react-scroll";

export const FirstScreen = () => {
  const scaleVariants = {
    logo: {
      scale: [0, 1],
      opacity: [0, 1],
      x: [100, 0],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    text: {
      scale: [0, 1],
      opacity: [0, 1],
      y: [100, 0],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="h-screen relative ">
      <div className="flex flex-col gap-3 items-center justify-center h-full">
        <motion.div
          className="bg-orange-500 rounded-full w-fit"
          variants={scaleVariants}
          whileInView={scaleVariants.logo}
          // className="bg-orange-500 rounded-full absolute top-[45%] left-[50%] translate-x-[50%] -translate-y-[40%]"
        >
          <PiTooth className="w-16 h-16 text-white p-2" />
        </motion.div>

        <motion.p
          className="uppercase text-orange-400 text-xl font-semibold"
          variants={scaleVariants}
          whileInView={scaleVariants.text}
          // className="absolute top-[35%] left-[20%] translate-x-[50%] -translate-y-[40%]"
        >
          DentyTech
        </motion.p>
      </div>

      <Link
        to="secondScreen"
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
