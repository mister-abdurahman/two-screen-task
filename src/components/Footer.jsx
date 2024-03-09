import { GrMultimedia } from "react-icons/gr";
import { MdOndemandVideo, MdOutlineCastConnected } from "react-icons/md";
import { motion } from "framer-motion";

export const Footer = () => {
  const scaleVariants = {
    footer: {
      scale: [0, 1],
      opacity: [0, 1],
      y: [-10, 0],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.footer
      variants={scaleVariants}
      whileInView={scaleVariants.footer}
      className="flex justify-between items-center px-8 text-sm text-gray-500 absolute w-full bottom-8"
    >
      <p>Your Smile. Our Passion</p>
      <div>
        <div className="flex gap-2 items-center">
          <span>
            <GrMultimedia />
          </span>
          <span>
            <MdOndemandVideo />
          </span>
          <span>
            <MdOutlineCastConnected />
          </span>
        </div>
        <p>For more Info:</p>
      </div>
    </motion.footer>
  );
};
