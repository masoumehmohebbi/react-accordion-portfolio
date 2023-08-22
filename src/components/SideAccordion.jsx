function SideAccordion() {
  return (
    <aside className="col-span-3 h-full flex justify-end">
      <div className="flex flex-col items-center border-l-[1px] border-primary justify-between h-full w-[70px] py-11">
        <h1>01</h1>
        <h1 className=" rotate-90 ">About</h1>
      </div>
      <div className="flex flex-col items-center border-l-[1px] border-primary justify-between h-full w-[70px] py-11">
        <h1>02</h1>
        <h1 className=" rotate-90 ">About</h1>
      </div>
      <div className="flex flex-col items-center border-l-[1px] border-primary justify-between h-full w-[70px] py-11">
        <h1>03</h1>
        <h1 className=" rotate-90 ">About</h1>
      </div>
      <div className="flex flex-col items-center border-l-[1px] border-primary justify-between h-full w-[70px] py-11">
        <h1>04</h1>
        <h1 className=" rotate-90 ">About</h1>
      </div>
    </aside>
  );
}

export default SideAccordion;
