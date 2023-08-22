import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import SideNav from "./components/SideNav";
import { Typewriter } from "react-simple-typewriter";
import SideAccordion from "./components/SideAccordion";

export default function App() {
  const magic = useRef(null);

  useEffect(() => {
    const magicWHalf = magic.current.offsetWidth / 2;
    const handleMouseMove = (e) => {
      magic.current.style.left = e.pageX - magicWHalf + "px";
      magic.current.style.top = e.pageY - magicWHalf + "px";
    };
    document.body.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // const [mousePosition, setMousePosition] = useState({
  //   x: 0,
  //   y: 0,
  // });
  const [cursorVarient, setCursorVarient] = useState("default");

  // useEffect(() => {
  //   const mouseMove = (e) => {
  //     // setMousePosition({ x: e.clientX, y: e.clientY
  //     //  });
  //   };
  //   window.addEventListener("mousemove", mouseMove);
  //   return () => {
  //     window.removeEventListener("mousemove", mouseMove);
  //   };
  // }, []);

  const variants = {
    default: {
      // x: mousePosition.x - 16,
      // y: mousePosition.y - 16,
      color: "red",
    },
    text: {
      color: "red",

      height: 250,
      width: 250,
      // x: mousePosition.x - 75,
      // y: mousePosition.y - 75,
      // backgroundColor: "yellow",
      // background: "center center no-repeat fixed",
      // backgroundImage: "url('/src/assets/images/background.jpg')",

      // backgroundRepeat: "no-repeat",
      // backgroundAttachment: "fixed",
      // backgroundPosition: "center",
      // position: "absolute",
      // mixBlendMode: "difference",
    },
  };
  const textEnter = () => setCursorVarient("text");
  const textLeave = () => setCursorVarient("default");

  return (
    <div className="cursor-none relative h-screen w-full">
      <section className="grid grid-cols-12 h-full">
        <SideNav />

        <main
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="h-full col-span-8 overflow-hidden flex flex-col gap-y-4 items-start justify-end pb-20 "
        >
          <h1 className="text-primary font-Montserrat text-7xl font-black  uppercase font-test relative z-10">
            IM MASOUME <br /> MOHEBBI.
          </h1>
          <div className=" text-primary font-paceMono z-20 font-bold text-[18px]">
            Im a freelance{" "}
            <span className=" bg-[#f7bf00] p-2">
              <Typewriter
                words={[
                  "front end engineer.",
                  "web developer.",
                  "coffee drinker.",
                ]}
                loop={0}
                typeSpeed={120}
                deleteSpeed={80}
                delaySpeed={1000}
                cursorStyle="|"
                cursor
              />
            </span>
            <br />
            From IR.
          </div>
          {/* <div
          ref={magicRef}
          className="magic bg-[url('/src/assets/images/background.jpg')] absolute w-40 h-40  bg-center bg-no-repeat bg-fixed rounded-full z-5"
        ></div> */}
        </main>

        <SideAccordion />
      </section>

      {/* <motion.div
        variants={variants}
        animate={cursorVarient}
        className="cursor w-4 h-4 bg-[url('/src/assets/images/background.jpg')] bg-fixed rounded-full  top-0 left-0 pointer-events-none bg-primary absolute"
      ></motion.div> */}
      <motion.div
        variants={variants}
        animate={cursorVarient}
        className="cursor"
        ref={magic}
      ></motion.div>
    </div>
  );
}
