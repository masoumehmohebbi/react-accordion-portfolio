import {
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoGithub,
  BiHomeHeart,
} from "react-icons/bi";
import DarkModeToggle from "./DarkModeToggle";

function SideNav() {
  return (
    <nav className="z-50 fixed +md:static top-0 cursor-default h-full flex flex-col justify-between w-[50px] +md:w-[72px] border-r-[1px] border-primary dark:border-secondary">
      <div className="flex items-center justify-center ">
        <BiHomeHeart className="w-9 h-9 +md:w-11 +md:h-11 mt-1 text-primary dark:text-secondary" />
      </div>
      <ul>
        <li>
          <DarkModeToggle className="w-8 h-8 +md:w-9 +md:h-9" />
        </li>
        <li>
          <a href="#">
            <BiLogoInstagram className="w-8 h-8 +md:w-9 +md:h-9" />
          </a>
        </li>
        <li>
          <a href="#">
            <BiLogoGithub className="w-8 h-8 +md:w-9 +md:h-9" />
          </a>
        </li>
        <li>
          <a href="#">
            <BiLogoLinkedin className="w-8 h-8 +md:w-9 +md:h-9" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default SideNav;
