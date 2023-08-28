function Portfolio() {
  return (
    <section>
      <div className="flex flex-col">
        {/* Tab header */}
        <div className="flex justify-between">
          <h1 className=" font-Montserrat px-11 py-4 text-3xl font-bold uppercase">
            {" "}
            My work
          </h1>
          <ul className="flex gap-x-6 uppercase p-9">
            <li className="cursor-pointer">All</li>
            <li className="cursor-pointer">ReactJs</li>
            <li className="cursor-pointer">Vanilla Js</li>
          </ul>
        </div>
        <div className="h-[1px] w-11/12 bg-primary dark:bg-secondary mx-auto"></div>

        {/* Tab content */}
        <div>tab portfolio</div>
      </div>
    </section>
  );
}

export default Portfolio;
