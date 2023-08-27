import { BiMailSend, BiMap, BiPhoneCall } from "react-icons/bi";
import Footer from "./Footer";
import { useState } from "react";
import Loader from "./Loader";

function Contact() {
  return (
    <section className="font-jetbrains">
      <Map />
      <div className="flex w-[64.9rem] gap-x-16 p-11">
        <Messages />
        <Details />
      </div>
      <Footer />
    </section>
  );
}

export default Contact;

// Messages Form CMP
function Messages() {
  const HandleSubmitForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-1 flex-col text-primary dark:text-secondary">
      <h1 className=" text-2xl font-bold pb-9">
        <span className="underline underline-offset-8">Me</span>
        ssage Me
      </h1>
      <form
        onSubmit={HandleSubmitForm}
        action="#"
        className="gap-y-8 flex flex-col"
      >
        <input placeholder="Name" type="text" />
        <input placeholder="Email" type="email" />
        <input placeholder="Subject" type="text" />
        <textarea placeholder="Message" rows={4} />
        <button
          type="submit"
          className="flex items-center justify-evenly border-[1px] hover:border-primary dark:hover:border-secondary hover:bg-transparent hover:text-primary dark:hover:text-secondary  dark:hover:bg-transparent rounded-3xl bg-primary dark:bg-secondary dark:text-primary text-secondary p-2 w-32 uppercase text-xs duration-500"
        >
          send mail
          <BiMailSend className="text-lg" />
        </button>
      </form>
    </div>
  );
}

// Details CMP
function Details() {
  return (
    <div className="flex flex-1 flex-col text-primary dark:text-secondary">
      <h1 className="  text-2xl font-bold pb-9">
        <span className="underline underline-offset-8">My</span> Details
      </h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        consequatur quam? Nemo amet ad quas nam illo suscipit aspernatur
        eligendi exercitationem nihil quod corporis, deserunt aperiam
        consequuntur nulla velit ipsum.
      </p>
      <div className="flex flex-col gap-y-4 mt-8">
        <span className="flex gap-x-2 font-semibold text-sm">
          <BiMailSend className=" p-1 bg-primary dark:bg-secondary text-3xl text-secondary dark:text-primary" />
          Masoumeh.mohebbi@gmail.com
        </span>
        <span className="flex gap-x-2 font-semibold text-sm">
          <BiPhoneCall className=" p-1 bg-primary dark:bg-secondary text-3xl text-secondary dark:text-primary" />
          09394296023
        </span>
        <span className="flex gap-x-2 font-semibold text-sm">
          <BiMap className=" p-1 bg-primary dark:bg-secondary text-3xl text-secondary dark:text-primary" />
          IR, Guilan, Rasht
        </span>
      </div>
    </div>
  );
}

// Map
function Map() {
  const [loaded, setLoaded] = useState(true);
  return (
    <section className="mt-16 text-primary dark:text-secondary">
      <h1 className=" font-Montserrat px-11 py-4 text-3xl font-bold">
        {" "}
        GET IN TOUCH
      </h1>
      <div className="h-[1px] w-11/12 bg-primary dark:bg-secondary mx-auto"></div>
      {loaded && <Loader />}
      <iframe
        onLoad={() => setLoaded(!loaded)}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6349.957596401076!2d49.59718440074156!3d37.27192985743835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ff5620d43f15675%3A0x41dd40f9931cfbf6!2z2LHYtNiq2Iwg2KfYs9iq2KfZhiDar9uM2YTYp9mG2Iwg2KfbjNix2KfZhg!5e0!3m2!1sfa!2snl!4v1692967977726!5m2!1sfa!2snl"
        allowfullscreen=""
        loading="lazy"
        className={`border border-primary m-11 duration-500 
        ${loaded ? "opacity-0 w-0 h-0" : "opacity-100 w-[90%] h-[300px]"}`}
      ></iframe>
    </section>
  );
}
