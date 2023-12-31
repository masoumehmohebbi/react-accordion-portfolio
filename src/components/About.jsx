import image1 from "../assets/images/slide1.jpg";
import image2 from "../assets/images/slide2.jpg";
import image3 from "../assets/images/slide3.jpg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { BiDownload } from "react-icons/bi";
import Footer from "./Footer";
import { useState } from "react";
import SkillBar from "./SkillBar";

function About() {
  return (
    <section id="about" className="w-full dark:text-secondary font-jetbrains">
      <h1 className="sm:px-11 py-4 text-2xl sm:text-3xl font-bold uppercase">
        {" "}
        About me
      </h1>
      <div className="h-[1px] w-11/12 bg-primary dark:bg-secondary mx-auto"></div>

      <section className="flex flex-col lg:flex-row justify-between mt-7 gap-x-11">
        <SliderImage />

        <div className="flex flex-col w-full lg:w-1/2 font-jetbrains mt-5 +md:mt-0 pr-4 +md:pr-14">
          <h1 className="text-lg sm:text-2xl font-bold">
            <span className="underline underline-offset-8">Ma</span>
            soume Mohebbi
          </h1>
          <h5 className="text-sm py-2">Freelancer Extraordinaire</h5>
          <div className="my-4 h-[1px] w-full bg-primary dark:bg-secondary mx-left"></div>
          <p className="text-xs lg:text-base">
            Vivamus sed nulla volutpat, eleifend quam vel, pulvinar elit.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Sed faucibus risus lacus, feugiat egestas
            lacus auctor sit amet. Suspendisse vitae dolor ullamcorper,
            tristique lorem id, faucibus massa.
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.docdroid.net/file/download/ci4rsMA/cv-masoumemohebbi-pdf.pdf"
            className="mt-11 flex items-center justify-evenly border-[1px] hover:border-primary dark:hover:border-secondary hover:bg-transparent hover:text-primary dark:hover:text-secondary  dark:hover:bg-transparent rounded-3xl bg-primary dark:bg-secondary dark:text-primary text-secondary p-2 w-32 +md:w-40 uppercase text-xs duration-500"
          >
            Download CV
            <BiDownload className="text-lg" />
          </a>
          <div className="mt-4 h-[1px] w-full bg-primary dark:bg-secondary mx-left"></div>
        </div>
      </section>

      <SkillBar />

      <div className="hidden mt-[400px] lg:mt-0 +md:block my-5 h-[1px] w-11/12 bg-primary dark:bg-secondary mx-auto"></div>

      <SliderText />
      <span className="hidden +md:block">
        <Footer />
      </span>
    </section>
  );
}

export default About;

function SliderImage() {
  return (
    <div className="w-11/12 lg:w-[45%] +md:h-[460px]">
      <AliceCarousel disableDotsControls infinite>
        <img
          src={image1}
          className="w-full max-h-[360px] +md:h-[400px] object-cover border border-primary"
          alt=""
        />

        <img
          src={image2}
          className="w-full  max-h-[360px] +md:h-[400px] object-cover border border-primary"
          alt=""
        />

        <img
          src={image3}
          className="w-full  max-h-[360px] lg:h-[400px] object-cover border border-primary"
          alt=""
        />
      </AliceCarousel>
    </div>
  );
}

function SliderText() {
  const [data] = useState([
    {
      id: 1,
      title:
        "Lorem1 ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur venenatis euismod. Cras ac velit accumsan, convallis nunc nec, volutpat sapien. Ut placerat, arcu sit amet euismod elementum, orci lorem consequat nulla, in feugiat turpis ligula sit amet est.",
      author: " BOB FOX. / CEO AT STOCK INDUSTRIES",
    },
    {
      id: 2,
      title:
        "Lorem2 ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur venenatis euismod. Cras ac velit accumsan, convallis nunc nec, volutpat sapien. Ut placerat, arcu sit amet euismod elementum, orci lorem consequat nulla, in feugiat turpis ligula sit amet est.",
      author: " BOB FOX. / CEO AT STOCK INDUSTRIES",
    },
    {
      id: 3,
      title:
        "Lorem3 ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur venenatis euismod. Cras ac velit accumsan, convallis nunc nec, volutpat sapien. Ut placerat, arcu sit amet euismod elementum, orci lorem consequat nulla, in feugiat turpis ligula sit amet est.",
      author: " BOB FOX. / CEO AT STOCK INDUSTRIES",
    },
  ]);
  return (
    <section className="font-jetbrains dark:text-secondary">
      <h6 className="capitalize mb-9">Testomonials</h6>
      <div
        style={{
          width: "100%",
          fontSize: "1.4rem",
        }}
      >
        <AliceCarousel disableDotsControls infinite>
          {data &&
            data.map((d) => (
              <p
                key={d.id}
                className="+md:w-[60%] text-xs +md:text-base pl-5 border-l-4 border-primary dark:border-secondary"
              >
                {d.title}
                <h6 className="capitalize pt-10 pb-2 text-xs">{d.author}</h6>
              </p>
            ))}
        </AliceCarousel>
      </div>
    </section>
  );
}
