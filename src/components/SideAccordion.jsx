import { useState } from "react";
import pdfFile from "../assets/pdf/CV-MasoumeMohebbi.pdf";
import Contact from "./Contact";
import About from "./About";
import Portfolio from "./Portfolio";

function SideAccordion() {
  const [open, setOpen] = useState(null);

  const [accordionBanner] = useState([
    { id: "01", title: "About", component: <About /> },
    { id: "02", title: "Portfolio", component: <Portfolio /> },
    { id: "03", title: "CV", component: <PdfViewer /> },
    { id: "04", title: "Contact", component: <Contact /> },
  ]);
  return (
    <aside
      className={`cursor-grabbing z-50 h-full flex absolute right-0 
    ${open ? "bg-secondary dark:bg-primary" : ""} `}
    >
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
      className={`overflow-hidden group flex ${
        isOpen ? "w-[68.1rem] relative" : ""
      }`}
      key={banner.id}
      onClick={() => setOpen(banner.id === open ? null : banner.id)}
    >
      <mask
        className={
          isOpen ? " border-r-[5px] border-primary absolute h-1/4 right-0" : ""
        }
      ></mask>
      <section className="flex overflow-hidden">
        <main>
          <h1 className="group-hover:-ml-12 group-hover:text-lg group-hover:scale-[3.3] group-hover:font-Londrina">
            {banner.id}
          </h1>
          <h2 className=" rotate-180 [writing-mode:vertical-lr] font-jetbrains ">
            {banner.title}
          </h2>
        </main>
        {isOpen ? (
          <article className="w-[64.9rem]">{banner.component}</article>
        ) : (
          ""
        )}
      </section>
    </section>
  );
}

// Pdf Viewer Cmp
function PdfViewer() {
  return (
    <object width="100%" height="100%" data={pdfFile} type="application/pdf">
      {" "}
    </object>
  );
}
