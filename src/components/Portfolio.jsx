import { useState } from "react";
import TodoListAppImg from "../assets/images/todo_list.png";
import FitnessAppImg from "../assets/images/react-fitness-app.png";
import ContactListImg from "../assets/images/react-mui-contactlist-app.png";
import NikeShopImg from "../assets/images/nike-shop.png";
import { BiShow, BiLogoGithub } from "react-icons/bi";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

function Portfolio() {
  const [activeTab, setActiveTab] = useState(1);

  const handleActive = (id) => {
    setActiveTab(id);
  };

  const portfolioData = [
    {
      id: 1,
      title: "Fitness App",
      image: FitnessAppImg,
      category: "React_Js",
      deploy: "https://masoumehmohebbi.github.io/react-fitness-app/",
      github: "https://github.com/masoumehmohebbi/react-fitness-app",
      detail: "Hml & TailwindCss & ReactJs & RapidApi",
    },
    {
      id: 2,
      title: "TodoList app",
      image: TodoListAppImg,
      category: "React_Js",
      deploy: "https://masoumehmohebbi.github.io/react-todo-app/",
      github: "https://github.com/masoumehmohebbi/react-todo-app",
      detail: "Hml & TailwindCss & ReactJs",
    },
    {
      id: 3,
      title: "ContactList App",
      image: ContactListImg,
      category: "React_Js",
      deploy: "https://masoumehmohebbi.github.io/react-mui-contactlist-app/",
      github: "https://github.com/masoumehmohebbi/react-mui-contactlist-app",
      detail: "Hml & MaterialUI & ReactJs & Supabase",
    },
    {
      id: 4,
      title: "Nike Shop",
      image: NikeShopImg,
      category: "Vanilla_Js",
      deploy: "https://masoumehmohebbi.github.io/tailwind-css-nike-shop/",
      github: "https://github.com/masoumehmohebbi/tailwind-css-nike-shop",
      detail: "Hml & TailwindCss & VanillaJs",
    },
  ];

  const [tabData] = useState([
    {
      id: 1,
      title: "All",
      content: <ReactProjects portfolioData={portfolioData} title="All" />,
    },
    {
      id: 2,
      title: "React_Js",
      content: <ReactProjects portfolioData={portfolioData} title="React_Js" />,
    },
    {
      id: 3,
      title: "Vanilla_Js",
      content: (
        <ReactProjects portfolioData={portfolioData} title="Vanilla_Js" />
      ),
    },
  ]);

  return (
    <section
      id="portfolio"
      className="font-jetbrains text-primary dark:text-secondary sm:mt-12 md:mt-0"
    >
      <div className="flex flex-col">
        {/* Tab header */}
        <div className="flex justify-between +md:px-16 py-2 flex-col sm:flex-row">
          <h1 className="text-2xl sm:text-3xl font-bold uppercase my-9 sm:my-0">
            {" "}
            My work
          </h1>
          <ul className="flex gap-x-6 uppercase text-xs +md:text-base pl-5 sm:pl-0 sm:pr-9">
            {tabData &&
              tabData.map((tab) => (
                <motion.li
                  whileHover={{
                    scale: 1.2,
                    originX: 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: "300",
                  }}
                  key={tab.id}
                  onClick={() => handleActive(tab.id)}
                  className={`cursor-pointer ${
                    tab.id === activeTab && "font-black"
                  }`}
                >
                  {tab.title}
                </motion.li>
              ))}
          </ul>
        </div>
        <div className="h-[1px] w-11/12 bg-primary dark:bg-secondary mx-auto"></div>

        {/* Tab content */}
        <div className="pt-9 pr-4 +md:px-16">
          {tabData[activeTab - 1].content}
        </div>
      </div>
      <span className="hidden +md:block">
        <Footer />
      </span>
    </section>
  );
}

export default Portfolio;

function ReactProjects({ portfolioData, title }) {
  const currentTab = title;
  const filteredData =
    currentTab === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.category === currentTab);

  return (
    <section className="w-full grid grid-cols-1 sm:grid-cols-2 gap-16  pb-[50px]">
      {filteredData &&
        filteredData.map((item) => (
          <div
            key={item.id}
            className=" relative h-48 +md:h-56 lg:!h-80 w-full shadow-lg border rounded-md overflow-hidden
            
            "
          >
            <img
              src={item.image}
              alt={item.title}
              className="object-cover w-full h-full object-left absolute inset-0 bg-cover z-0"
            />
            <span className="flex gap-y-9 lg:gap-y-24 flex-col opacity-0 hover:opacity-100 transition-opacity ease-linear delay-75 duration-500 absolute inset-0 z-10 justify-center items-center text-secondary bg-primary">
              <div className="text-4xl flex gap-4">
                <motion.a
                  href={item.deploy}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{
                    scale: 1.1,
                    originX: 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: "300",
                  }}
                >
                  <BiShow className="hover:text-green-500 duration-500" />
                </motion.a>

                <motion.a
                  href={item.github}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{
                    scale: 1.1,
                    originX: 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: "300",
                  }}
                >
                  <BiLogoGithub className="hover:text-blue-500 duration-500" />
                </motion.a>
              </div>
              <div className="flex flex-col gap-5 items-center">
                <h5 className="font-black text-lg">{item.title}</h5>
                <p className="text-sm p-2 text-center text-secondary">
                  {item.detail}
                </p>
              </div>
            </span>
          </div>
        ))}
    </section>
  );
}
