import { useEffect, useRef, useState } from "react";
import SideNav from "./components/SideNav";
import { Typewriter } from "react-simple-typewriter";
import SideAccordion from "./components/SideAccordion";
import { motion } from "framer-motion";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

export default function App() {
  const [openMobileNav, setOpenMobileNav] = useState(false);
  console.log(openMobileNav);
  return (
    <section className="dark:bg-primary +md:cursor-none relative w-full h-full overflow-hidden">
      <div className="flex h-screen justify-between w-full pt-5 lg:pt-0">
        <SideNav
          openMobileNav={openMobileNav}
          setOpenMobileNav={setOpenMobileNav}
        />
        <Content openMobileNav={openMobileNav} />
        <SideAccordion />
      </div>

      <div
        className={` ${
          openMobileNav ? "ml-[220px]" : ""
        } +md:hidden ml-[64px] +md:ml-0 pr-4`}
      >
        <About />
        <Portfolio />
        <Contact openMobileNav={openMobileNav} />
      </div>
    </section>
  );
}

function Content({ openMobileNav }) {
  const magic = useRef(null);
  const [cursorVarient, setCursorVarient] = useState("default");

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  useEffect(() => {
    const magicWHalf = magic.current.offsetWidth / 2;
    const handleMouseMove = (e) => {
      magic.current.style.left = e.pageX - magicWHalf + "px";
      magic.current.style.top = e.pageY - magicWHalf + "px";
    };
    width > 1200 &&
      document.body.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  }, [width]);

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
    <>
      <main
        onMouseEnter={width > 1200 && textEnter}
        onMouseLeave={width > 1200 && textLeave}
        id="home"
        className={` ${
          openMobileNav ? "ml-[140px]" : ""
        } h-full p-20 flex-1 sm:w-[calc(100%-65px)] col-span-8 overflow-hidden flex flex-col gap-y-8 items-start justify-end`}
      >
        <h1 className="font-Montserrat text-primary dark:text-secondary text-2xl sm:text-4xl lg:text-7xl font-black  uppercase font-test relative">
          IM MASOUME <br /> MOHEBBI.
        </h1>
        <div className="font-rubik text-[14px] flex flex-col text-primary dark:text-secondary">
          <span className="flex flex-col sm:flex-row sm:items-center gap-x-1">
            Im a freelance{" "}
            <h2 className="bg-[#f7bf00] sm:p-2">
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
            </h2>
          </span>
          <span> From IR.</span>
        </div>
      </main>
      <motion.div
        style={{ mixBlendMode: "difference" }}
        variants={variants}
        animate={cursorVarient}
        className="cursor -z-20 dark:z-[5] absolute w-4 h-4 bg-[url('/src/assets/images/background.jpg')] bg-[50%_50%] bg-fixed rounded-full bg-no-repeat bg-cover"
        ref={magic}
      ></motion.div>
    </>
  );
}
