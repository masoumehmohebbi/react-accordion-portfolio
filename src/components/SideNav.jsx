import {
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoGithub,
  BiHomeHeart,
  BiX,
  BiMenu,
} from "react-icons/bi";
import DarkModeToggle from "./DarkModeToggle";

function SideNav({ openMobileNav, setOpenMobileNav }) {
  return (
    <div>
      {openMobileNav ? (
        <MobileSideNav setOpenMobileNav={setOpenMobileNav} />
      ) : (
        ""
      )}
      <nav
        className={`z-50 ${
          openMobileNav ? "ml-[117px]" : "ml-0"
        }  fixed +md:static top-0 cursor-default h-full flex flex-col justify-between w-[50px] +md:w-[72px] border-r-[1px] border-primary dark:border-secondary`}
      >
        <a href="#home" className="flex items-center justify-center z-50">
          <BiHomeHeart className="hidden +md:block +md:w-11 +md:h-11 mt-1 text-primary dark:text-secondary" />

          <span
            className="+md:hidden"
            onClick={() => setOpenMobileNav(!openMobileNav)}
          >
            {openMobileNav ? (
              <BiX className="w-9 h-9 text-primary dark:text-secondary mt-1" />
            ) : (
              <BiMenu className="w-9 h-9 text-primary dark:text-secondary mt-1" />
            )}
          </span>
        </a>

        <ul className="z-50">
          <li>
            <DarkModeToggle className="w-8 h-8 +md:w-9 +md:h-9" />
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://instagram.com/masoume.frontend.js"
            >
              <BiLogoInstagram className="w-8 h-8 +md:w-9 +md:h-9" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/masoumehmohebbi"
            >
              <BiLogoGithub className="w-8 h-8 +md:w-9 +md:h-9" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/masoumemohebbi"
            >
              <BiLogoLinkedin className="w-8 h-8 +md:w-9 +md:h-9" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideNav;

function MobileSideNav({ setOpenMobileNav }) {
  return (
    <div className="z-50 font-jetbrains transition-all duration-500 bg-primary dark:bg-secondary fixed +md:hidden top-0 cursor-default h-full flex flex-col justify-between border-r-[1px] border-primary dark:border-secondary">
      <ul>
        <li className="border-b border-b-[#333] uppercase py-5 pl-2 pr-11">
          <a
            onClick={() => setOpenMobileNav(false)}
            href="#home"
            className=" text-[#ffffffcc] dark:text-primary text-xs "
          >
            Home
          </a>
        </li>
        <li className="border-b border-b-[#333] py-5 pl-2 pr-11 uppercase">
          <a
            onClick={() => setOpenMobileNav(false)}
            href="#about"
            className=" text-[#ffffffcc] dark:text-primary text-xs w-full "
          >
            About
          </a>
        </li>
        <li className="border-b border-b-[#333]  py-5 pl-2 pr-11 uppercase">
          <a
            onClick={() => setOpenMobileNav(false)}
            href="#portfolio"
            className=" text-[#ffffffcc] dark:text-primary text-xs"
          >
            Portfolio
          </a>
        </li>
        <li className="border-b border-b-[#333] py-5 pl-2 pr-11 uppercase">
          <a
            onClick={() => setOpenMobileNav(false)}
            href="#contact"
            className=" text-[#ffffffcc] dark:text-primary text-xs"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
