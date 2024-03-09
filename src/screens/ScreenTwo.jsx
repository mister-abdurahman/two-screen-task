import reactImage from "../assets/react11.png";
import nodeImage from "../assets/node1.png";
import tailwindImage from "../assets/tailwind2.png";
import tyepscriptImage from "../assets/typescript1.png";
import { Link } from "react-scroll";
import {
  FaNodeJs,
  FaReact,
  FaArrowCircleUp,
  FaArrowCircleDown,
} from "react-icons/fa";
import { TbBrandTypescript, TbBrandTailwind } from "react-icons/tb";
import { Card } from "../components/Card";

export const ScreenTwo = () => {
  //   useEffect(function () {
  //     const card = document.getElementById("myCard");
  //     const callBackFn = () => {
  //       card.classList.add("hide");
  //     };
  //     card.addEventListener("click", callBackFn);

  //     return card.removeEventListener("click", callBackFn);
  //   }, []);

  //   const [addClass, setAddClass] = useState(false);

  //   function handleAnimation() {
  //     setAddClass(true);
  //   }

  return (
    <div className="h-screen flex flex-col justify-between">
      <Link
        to="screenOne"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        className="flex justify-center mt-12"
      >
        <FaArrowCircleUp className="w-10 h-10" />
      </Link>
      <div className="relative flex items-center justify-center">
        <p className="text-6xl">A large font of text</p>
        <Card>
          <span className="bg-white rounded-lg absolute left-1/2 -translate-x-1/2 mt-2 px-3 flex items-center gap-2">
            React <FaReact />
          </span>
          <img
            src={reactImage}
            alt="react image"
            className="w-full h-full object-cover rounded-sm"
          />
        </Card>
        <Card>
          <span className="bg-white rounded-lg absolute left-1/2 -translate-x-1/2 mt-2 px-3 flex items-center gap-2">
            NodeJs <FaNodeJs />
          </span>
          <img
            src={nodeImage}
            alt="node image"
            className="w-full h-full object-cover rounded-sm"
          />
        </Card>
        <Card>
          <span className="bg-white rounded-lg absolute left-1/2 -translate-x-1/2 mt-2 px-3 flex items-center gap-2">
            Tailwind <TbBrandTailwind />
          </span>
          <img
            src={tailwindImage}
            alt="tailwind image"
            className="w-full h-full object-cover rounded-sm"
          />
        </Card>

        <Card>
          <span className="bg-white rounded-lg absolute left-1/2 -translate-x-1/2 mt-2 px-3 flex items-center gap-2">
            Typescript <TbBrandTypescript />
          </span>
          <img
            src={tyepscriptImage}
            alt="typescript image"
            className="w-full h-full object-cover rounded-sm"
          />
        </Card>
      </div>

      <Link
        to="screenThree"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        className="flex justify-center mb-12"
      >
        <FaArrowCircleDown className="w-10 h-10" />
      </Link>
    </div>
  );
};
