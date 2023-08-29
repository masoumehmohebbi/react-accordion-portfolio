import { useState } from "react";
import TodoListAppImg from "../assets/images/todo_list.png";
import FitnessAppImg from "../assets/images/react-fitness-app.png";
import ContactListImg from "../assets/images/react-mui-contactlist-app.png";

function Portfolio() {
  const [activeTab, setActiveTab] = useState(1);

  const handleActive = (id) => {
    setActiveTab(id);
  };

  const portfolioData = [
    {
      id: 1,
      title: "TodoList app",
      image: TodoListAppImg,
      category: "React_Js",
    },
    {
      id: 2,
      title: "Fitness App",
      image: FitnessAppImg,
      category: "React_Js",
    },
    {
      id: 3,
      title: "ContactList App",
      image: ContactListImg,
      category: "React_Js",
    },
    {
      id: 4,
      title: "ContactList App",
      image: ContactListImg,
      category: "Vanilla_Js",
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
    <section className="mt-11 font-jetbrains text-primary">
      <div className="flex flex-col">
        {/* Tab header */}
        <div className="flex justify-between px-16 py-2">
          <h1 className="text-3xl font-bold uppercase"> My work</h1>
          <ul className="flex gap-x-6 uppercase">
            {tabData &&
              tabData.map((tab) => (
                <li
                  key={tab.id}
                  onClick={() => handleActive(tab.id)}
                  className={`cursor-pointer ${
                    tab.id === activeTab && "font-black"
                  }`}
                >
                  {tab.title}
                </li>
              ))}
          </ul>
        </div>
        <div className="h-[1px] w-11/12 bg-primary dark:bg-secondary mx-auto"></div>

        {/* Tab content */}
        <div className="pt-9 px-16">{tabData[activeTab - 1].content}</div>
      </div>
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
    <section className="w-full grid grid-cols-2 gap-5  pb-[50px]">
      {filteredData &&
        filteredData.map((item) => (
          <div
            key={item.id}
            className="h-80 w-full shadow-md rounded-md overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="object-cover w-full h-full object-left "
            />
          </div>
        ))}
    </section>
  );
}
