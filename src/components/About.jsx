// import Slider from "./Slider";
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
    <section className="w-full dark:text-secondary">
      <h1 className=" font-Montserrat px-11 py-4 text-3xl font-bold uppercase">
        {" "}
        About me
      </h1>
      <div className="h-[1px] w-11/12 bg-primary dark:bg-secondary mx-auto"></div>

      <section className="flex justify-between mt-7 gap-x-11">
        <SliderImage />

        <div className="flex flex-col w-1/2 font-jetbrains pr-14">
          <h1 className=" text-2xl font-bold">
            <span className="underline underline-offset-8">Ma</span>
            soume Mohebbi
          </h1>
          <h5 className="text-sm py-2">Freelancer Extraordinaire</h5>
          <div className="my-4 h-[1px] w-full bg-primary dark:bg-secondary mx-left"></div>
          <p>
            Vivamus sed nulla volutpat, eleifend quam vel, pulvinar elit.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Sed faucibus risus lacus, feugiat egestas
            lacus auctor sit amet. Suspendisse vitae dolor ullamcorper,
            tristique lorem id, faucibus massa.
          </p>
          <button
            type="submit"
            className="mt-11 flex items-center justify-evenly border-[1px] hover:border-primary dark:hover:border-secondary hover:bg-transparent hover:text-primary dark:hover:text-secondary  dark:hover:bg-transparent rounded-3xl bg-primary dark:bg-secondary dark:text-primary text-secondary p-2 w-40 uppercase text-xs duration-500"
          >
            Download CV
            <BiDownload className="text-lg" />
          </button>
          <div className="mt-4 h-[1px] w-full bg-primary dark:bg-secondary mx-left"></div>
        </div>
      </section>

      <SkillBar />

      <div className="my-5 h-[1px] w-11/12 bg-primary dark:bg-secondary mx-auto"></div>

      <SliderText />
      <Footer />
    </section>
  );
}

export default About;

function SliderImage() {
  return (
    <div
      style={{
        width: "45%",
        height: "460px",
      }}
    >
      <AliceCarousel disableDotsControls infinite>
        <img
          src={image1}
          className="w-full h-[400px] object-cover border border-primary"
          alt=""
        />

        <img
          src={image2}
          className="w-full h-[400px] object-cover border border-primary"
          alt=""
        />

        <img
          src={image3}
          className="w-full h-[400px] object-cover border border-primary"
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
      <h6 className="capitalize mb-24">Testomonials</h6>
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
                className="w-[60%] pl-5 border-l-4 border-primary dark:border-secondary"
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
