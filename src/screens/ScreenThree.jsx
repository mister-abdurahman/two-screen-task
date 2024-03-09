import { FaArrowCircleUp } from "react-icons/fa";
import { Link } from "react-scroll";

export const ScreenThree = () => {
  return (
    <div
      id="screenThree"
      className="relative bg-black text-3xl text-white h-screen flex items-center justify-center"
    >
      <Link
        to="screenTwo"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        className="absolute flex justify-center top-12"
      >
        <FaArrowCircleUp className="w-10 h-10" />
      </Link>
      <p>Screen Three</p>
    </div>
  );
};
