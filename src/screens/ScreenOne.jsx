import { FaArrowCircleDown } from "react-icons/fa";
import { Link } from "react-scroll";

export const ScreenOne = () => {
  return (
    <div
      id="screenOne"
      className="relative bg-black text-3xl text-white h-screen flex flex-col items-center justify-center"
    >
      <p>Screen One</p>

      <Link
        to="screenTwo"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        className="absolute flex justify-center bottom-12"
      >
        <FaArrowCircleDown className="w-10 h-10" />
      </Link>
    </div>
  );
};
