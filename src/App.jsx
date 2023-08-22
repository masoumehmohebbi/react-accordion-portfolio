import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import NavBar from "./components/NavBar";

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
        <NavBar />

        <main
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="h-full col-span-8 overflow-hidden p-48 text-center"
        >
          <h1 className="text-7xl text-black uppercase font-test relative z-10">
            IM MASOUME <br /> MOHEBBI.
          </h1>
          {/* <div
          ref={magicRef}
          className="magic bg-[url('/src/assets/images/background.jpg')] absolute w-40 h-40  bg-center bg-no-repeat bg-fixed rounded-full z-5"
        ></div> */}
        </main>

        <aside className="col-span-3 h-full bg-blue-500">aside</aside>
      </section>

      <motion.div
        variants={variants}
        animate={cursorVarient}
        className="cursor  w-4 h-4 rounded-full  top-0 left-0 pointer-events-none bg-black fixed"
      ></motion.div>
    </div>
  );
}
