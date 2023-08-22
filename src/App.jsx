import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SideNav from "./components/SideNav";
import { Typewriter } from "react-simple-typewriter";
import SideAccordion from "./components/SideAccordion";

export default function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVarient, setCursorVarient] = useState("default");
  useEffect(() => {
    const mouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "yellow",
      mixBlendMode: "difference",
    },
  };
  const textEnter = () => setCursorVarient("text");
  const textLeave = () => setCursorVarient("default");

  return (
    <div className="cursor-none">
      <section className="grid grid-cols-12 h-screen">
        <SideNav />

        <main
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="h-full col-span-8 overflow-hidden flex flex-col gap-y-4 items-start justify-end pb-20 "
        >
          <h1 className="font-Montserrat text-7xl font-black text-primary uppercase font-test relative z-10">
            IM MASOUME <br /> MOHEBBI.
          </h1>
          <div className="font-paceMono">
            Im a freelance{" "}
            <span className="text-primary bg-[#f7bf00] p-2 text-[18px]">
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

      <motion.div
        variants={variants}
        animate={cursorVarient}
        className="cursor  w-4 h-4 rounded-full  top-0 left-0 pointer-events-none bg-black fixed"
      ></motion.div>
    </div>
  );
}
