import {
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoGithub,
  BiLogoTelegram,
} from "react-icons/bi";

export default function Footer() {
  return (
    <footer className="mt-4">
      <div className="h-[1px] w-11/12 bg-primary dark:bg-secondary mx-auto mt-9"></div>

      <div className="flex flex-col text-primary dark:text-secondary gap-y-6 w-full items-end mt-6 p-5">
        <h5>© 2023 Masoumeh Mohebbi | Portfolio.</h5>
        <span className="flex gap-x-5 text-2xl ">
          <BiLogoInstagram />
          <BiLogoTelegram />
          <BiLogoLinkedin />
          <BiLogoGithub />
        </span>
      </div>
    </footer>
  );
}
