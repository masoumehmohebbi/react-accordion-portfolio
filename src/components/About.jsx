import Slider from "./Slider";

function About() {
  return (
    <section>
      <h1 className=" font-Montserrat px-11 py-4 text-3xl font-bold uppercase">
        {" "}
        About me
      </h1>
      <div className="h-[1px] w-11/12 bg-primary dark:bg-secondary mx-auto"></div>
      <Slider />
    </section>
  );
}

export default About;
