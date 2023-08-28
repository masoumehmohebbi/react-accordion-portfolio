import { useState } from "react";
import pdfFile from "../assets/pdf/CV-MasoumeMohebbi.pdf";
import Contact from "./Contact";
import About from "./About";
import Portfolio from "./Portfolio";

// import PDFViewer from "tailwind-pdf-viewer";
// import "tailwind-pdf-viewer/style.css";

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
      className={` hidden +md:flex cursor-grabbing z-50 h-full  absolute right-0 top-0
    ${open ? "bg-secondary dark:bg-primary w-[calc(100%-65px)]" : ""} `}
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
    <div
      className={`overflow-hidden group flex ${
        isOpen ? "w-[calc(100%-70px)] relative" : ""
      }`}
    >
      <div
        key={banner.id}
        onClick={() => setOpen(banner.id === open ? null : banner.id)}
      >
        <section className="flex overflow-hidden h-full w-full">
          <main>
            <h1
              className={`${
                isOpen ? "text-red-600" : ""
              } group-hover:-ml-12 group-hover:text-lg group-hover:scale-[3.3] group-hover:font-Londrina`}
            >
              {banner.id}
            </h1>
            <h2 className=" rotate-180 [writing-mode:vertical-lr] font-jetbrains ">
              {banner.title}
            </h2>
          </main>
        </section>
      </div>
      {isOpen ? (
        <article className="w-[calc(100%-70px)] overflow-y-visible overflow-x-hidden">
          {banner.component}
        </article>
      ) : (
        ""
      )}
    </div>
  );
}

// Pdf Viewer Cmp
function PdfViewer() {
  // return <PDFViewer pdfURL={pdfFile} />;
  return (
    <object width="100%" height="100%" data={pdfFile} type="application/pdf" />
  );
}
