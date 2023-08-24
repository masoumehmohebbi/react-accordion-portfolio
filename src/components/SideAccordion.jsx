import { useState } from "react";

function SideAccordion() {
  const [accordionBanner] = useState([
    { id: "01", title: "About" },
    // { id: "02", title: "Portfolio" },
    // { id: "03", title: "CV" },
    // { id: "04", title: "Contact" },
  ]);
  return (
    <aside className="z-50 col-span-3 h-full flex justify-end ">
      {accordionBanner.map((banner) => (
        <Accordion key={banner.id} banner={banner} />
      ))}
    </aside>
  );
}

export default SideAccordion;

function Accordion({ banner }) {
  return (
    <div className="group" key={banner.id}>
      <h1 className="group-hover:-ml-12 group-hover:text-lg group-hover:scale-[3.3] group-hover:font-Londrina">
        {banner.id}
      </h1>
      <h2 className="rotate-90">{banner.title}</h2>
    </div>
  );
}
