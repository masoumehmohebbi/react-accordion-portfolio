import { useState } from "react";
import { motion, animate } from "framer-motion";
import { useEffect, useRef } from "react";

export default function SkillBar() {
  const [toggleState, setToggleState] = useState(1);

  const [tabData] = useState([
    { id: 1, title: "Programming skills", content: <Progressbar /> },
    { id: 2, title: "Education", content: <Education /> },
    { id: 3, title: "Experience", content: <Experience /> },
  ]);
  const toggleTab = (id) => {
    setToggleState(id);
  };
  return (
    <section className="mt-24 h-screen relative">
      {tabData &&
        tabData.map((tab) => (
          <div key={tab.id} className="flex m-6 h-[140px]">
            <ul className="uppercase flex flex-col gap-y-4">
              <li
                onClick={() => toggleTab(tab.id)}
                className={` flex items-end justify-center pb-2  ${
                  toggleState === tab.id
                    ? "bg-primary text-secondary border border-primary"
                    : "bg-secondary text-primary"
                } h-60 w-60 text-primary border border-primary`}
              >
                {tab.title}
              </li>
            </ul>
            <div>
              <div
                className={`opacity-0 transition-opacity duration-500 ease-out ${
                  toggleState === tab.id ? "opacity-100" : "opacity-0"
                }`}
              >
                {tab.content}
              </div>
            </div>
          </div>
        ))}
    </section>
  );
}

// Progressbar CMP
function Progressbar({ value }) {
  const [skillData] = useState([
    { id: 1, title: "html", percent: 90 },
    { id: 2, title: "css", percent: 80 },
    { id: 3, title: "javascript", percent: 70 },
    { id: 4, title: "react js", percent: 40 },
    { id: 5, title: "tailwindcss", percent: 90 },
    { id: 6, title: "material ui", percent: 20 },
    { id: 7, title: "bootstrap", percent: 40 },
    { id: 8, title: "git & github", percent: 50 },
  ]);

  const progressTextRef = useRef(null);

  useEffect(() => {
    const progressText = progressTextRef.current?.textContent;
    if (progressText != null) {
      animate(parseInt(progressText), value, {
        duration: 2,
        onUpdate: (cv) => {
          progressTextRef.current.textContent = cv.toFixed(0);
        },
      });
    }
  }, [value]);
  return (
    <section className=" flex flex-col font-jetbrains pl-16 gap-y-11">
      {skillData &&
        skillData.map((item) => (
          <article key={item.id} className="flex flex-col">
            <div className="flex justify-between text-base pb-3">
              <h1 className="uppercase">{item.title}</h1>
              <div className="flex">
                <p ref={progressTextRef}>{item.percent}</p>
                <p>%</p>
              </div>
            </div>
            <div className="w-[450px] flex justify-start items-stretch rounded-2xl bg-white overflow-hidden">
              <motion.div
                className="w-[0%] border-b-4 border-inset border-primary"
                animate={{
                  width: `${item.percent}%`,
                }}
                transition={{
                  duration: 2,
                }}
              />
            </div>
          </article>
        ))}
    </section>
  );
}

// Education CMP
function Education() {
  const [educationData] = useState([
    {
      id: 1,
      field: "Computer software engineering",
      university: "Dr.Moein College",
      year: "Sep 2013 - Jun 2015",
      level: "Associate's degree",
    },
    {
      id: 2,
      field: "Computer software engineering",
      university: "Ahrar University",
      year: "Sep 2015 - Jun 2017",
      level: "Bachelor's degree",
    },
    {
      id: 3,
      field: "software",
      university: "Mehrastan University",
      year: "Nov 2018 - Jun 2020",
      level: "Master",
    },
  ]);

  return (
    <section className="absolute top-0 pl-16 pt-7 w-[60%] font-jetbrains">
      <div className=" flex flex-col">
        {educationData &&
          educationData.map((item) => (
            <div key={item.id}>
              <span className="flex justify-between">
                <h1 className="font-semibold">{item.field}</h1>
                <h5>{item.year}</h5>
              </span>
              <h6 className="text-xs pt-2 pb-9">{item.university}</h6>
              <p>
                <span className="font-bold text-sm">Degree:</span> {item.level}
              </p>
              <div className="my-9 h-[1px] w-full bg-primary dark:bg-secondary mx-auto"></div>
            </div>
          ))}
      </div>
    </section>
  );
}

// Experience CMP
function Experience() {
  return (
    <section className="absolute top-0 pl-16 pt-7 w-[60%] font-jetbrains">
      <span className="flex justify-between">
        <h1 className="font-semibold">Front End | Web Developer</h1>
        <h5>2021 - 2023</h5>
      </span>
      <h6 className="text-xs pt-2 pb-9">FREELANCE</h6>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore fuga
        autem cumque dolorum mollitia vel laboriosam sunt modi nostrum explicabo
        distinctio at sequi adipisci consequuntur, quod tenetur deserunt magnam
        doloribus.
      </p>
      <div className="my-9 h-[1px] w-full bg-primary dark:bg-secondary mx-auto"></div>
    </section>
  );
}
