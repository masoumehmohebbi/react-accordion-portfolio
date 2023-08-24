import { useState } from "react";

function SideAccordion() {
  const [accordionBanner] = useState([
    { id: "01", title: "About" },
    { id: "02", title: "Portfolio" },
    { id: "03", title: "CV" },
    { id: "04", title: "Contact" },
  ]);
  return (
    <aside className="z-50 h-full flex absolute right-0">
      {accordionBanner.map((banner) => (
        <AccordionItem key={banner.id} banner={banner} />
      ))}
    </aside>
  );
}

export default SideAccordion;

function AccordionItem({ banner }) {
  // bg-red-500 w-[95%] absolute right-0
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`group flex ${isOpen ? " bg-red-500 w-[67.8rem]" : ""}`}
      key={banner.id}
      onClick={() => setIsOpen((pervIs) => !pervIs)}
    >
      <h1 className="group-hover:-ml-12 group-hover:text-lg group-hover:scale-[3.3] group-hover:font-Londrina">
        {banner.id}
      </h1>
      <h2 className="rotate-90">{banner.title}</h2>
    </div>
  );
}
