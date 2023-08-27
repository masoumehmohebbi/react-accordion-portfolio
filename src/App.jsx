import { useEffect, useRef, useState } from "react";
import SideNav from "./components/SideNav";
import { Typewriter } from "react-simple-typewriter";
import SideAccordion from "./components/SideAccordion";
import { motion } from "framer-motion";
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

  const [cursorVarient, setCursorVarient] = useState("default");

  const variants = {
    default: {
      zIndex: 5,
    },
    text: {
      height: 240,
      width: 240,
    },
  };
  const textEnter = () => setCursorVarient("text");
  const textLeave = () => setCursorVarient("default");

  return (
    <div className="dark:bg-primary cursor-none relative h-screen w-full ">
      <section className="flex h-full justify-between">
        <SideNav />

        <main
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="h-full p-20 w-full col-span-8 overflow-hidden flex flex-col gap-y-8 items-start justify-end"
        >
          <h1 className="font-Montserrat text-primary dark:text-secondary text-7xl font-black  uppercase font-test relative">
            IM MASOUME <br /> MOHEBBI.
          </h1>
          <div className="font-rubik text-[14px] text-primary dark:text-secondary">
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

      <motion.div
        variants={variants}
        animate={cursorVarient}
        className="cursor -z-20 dark:z-[5] absolute w-4 h-4 bg-[url('/src/assets/images/background.jpg')] bg-[50%_50%] bg-fixed rounded-full bg-no-repeat bg-cover"
        ref={magic}
      ></motion.div>
    </div>
  );
}
