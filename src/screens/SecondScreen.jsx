import { Card } from "../components/Card";
import { TbBrandTailwind, TbBrandTypescript } from "react-icons/tb";
import { GrMultimedia } from "react-icons/gr";
import { MdOndemandVideo, MdOutlineCastConnected } from "react-icons/md";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import { FaNodeJs } from "react-icons/fa";

import tyepscriptImage from "../assets/typescript1.png";
import reactImage from "../assets/react11.png";
import nodeImage from "../assets/node1.png";
import tailwindImage from "../assets/tailwind2.png";
import { GoArrowDown } from "react-icons/go";
import { Link } from "react-scroll";

export const SecondScreen = () => {
  const scaleVariants = {
    card: {
      scale: [0, 1],
      opacity: [1, 0],
      y: [-100, 0],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div id="secondScreen" className="h-screen relative">
      <Header />
      <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl font-medium uppercase text-center">
        <p className="tracking-widest">Our Advantages</p>
      </div>
      <Card rotate={"-rotate-12"}>
        <span className="bg-white rounded-lg absolute left-1/2 -translate-x-1/2 mt-2 px-3 flex items-center gap-2">
          Typescript <TbBrandTypescript />
        </span>
        <img
          src={tyepscriptImage}
          alt="typescript image"
          className="w-full h-full object-cover rounded-sm"
        />
      </Card>

      <Card rotate={"-rotate-6"}>
        <span className="bg-white rounded-lg absolute left-1/2 -translate-x-1/2 mt-2 px-3 flex items-center gap-2">
          Tailwind <TbBrandTailwind />
        </span>
        <img
          src={tailwindImage}
          alt="tailwind image"
          className="w-full h-full object-cover rounded-sm"
        />
      </Card>
      <Card rotate={"-rotate-3"}>
        <span className="bg-white rounded-lg absolute left-1/2 -translate-x-1/2 mt-2 px-3 flex items-center gap-2">
          NodeJs <FaNodeJs />
        </span>
        <img
          src={nodeImage}
          alt="node image"
          className="w-full h-full object-cover rounded-sm"
        />
      </Card>
      <Footer />

      <Link
        to="thirdScreen"
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
