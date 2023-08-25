function Contact() {
  return (
    <section>
      <div className="flex w-[64.9rem] gap-x-16 p-11">
        <HandleMessages />
        <Details />
      </div>
    </section>
  );
}

export default Contact;

// Messages Form CMP
function HandleMessages() {
  return (
    <div className="flex flex-1 flex-col">
      <h1>Message Me</h1>
      <form action="#" className="gap-y-8 flex flex-col">
        <input
          placeholder="Name"
          className=" border-b-[1px] border-primary bg-transparent "
          type="text"
        />
        <input
          placeholder="Email"
          className=" border-b-[1px] border-primary bg-transparent "
          type="text"
        />
        <input
          placeholder="Subject"
          className=" border-b-[1px] border-primary bg-transparent "
          type="text"
        />
        <textarea
          placeholder="Message"
          className=" border-b-[1px] border-primary  bg-transparent"
          rows={4}
        />

        <input
          type="submit"
          value="send mail"
          className=" rounded-3xl bg-primary text-secondary p-2 w-32 uppercase text-xs"
        />
      </form>
    </div>
  );
}

// Details CMP
function Details() {
  return (
    <div className="flex flex-1 flex-col">
      <h1>My Details</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        consequatur quam? Nemo amet ad quas nam illo suscipit aspernatur
        eligendi exercitationem nihil quod corporis, deserunt aperiam
        consequuntur nulla velit ipsum.
      </p>
    </div>
  );
}
