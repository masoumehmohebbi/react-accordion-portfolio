import { useState } from "react";

function SideAccordion() {
  const [open, setOpen] = useState(null);

  const [accordionBanner] = useState([
    { id: "01", title: "About" },
    { id: "02", title: "Portfolio" },
    { id: "03", title: "CV" },
    { id: "04", title: "Contact" },
  ]);
  return (
    <aside className="z-50 h-full flex absolute right-0">
      {accordionBanner.map((banner) => (
        <AccordionItem
          key={banner.id}
          banner={banner}
          setOpen={setOpen}
          open={open}
        />
      ))}
    </aside>
  );
}

export default SideAccordion;

function AccordionItem({ banner, setOpen, open }) {
  const isOpen = banner.id === open;

  return (
    <section
      className={` overflow-hidden group flex ${
        isOpen ? " bg-red-500 w-[64.7rem]" : ""
      }`}
      key={banner.id}
      onClick={() => setOpen(banner.id === open ? null : banner.id)}
    >
      <section className="flex overflow-hidden">
        <div>
          <h1 className="group-hover:-ml-12 group-hover:text-lg group-hover:scale-[3.3] group-hover:font-Londrina">
            {banner.id}
          </h1>
          <h2 className="rotate-90">{banner.title}</h2>
        </div>
        <article
          className={`  transition-all duration-150 ease-out text-center ${
            isOpen ? " bg-green-500 w-[64.7rem] opacity-100" : "opacity-0"
          }`}
        >
          jjh
        </article>
      </section>
    </section>
  );
}
