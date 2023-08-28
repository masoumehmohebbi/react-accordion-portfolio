import {
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoGithub,
  BiHomeHeart,
} from "react-icons/bi";
import DarkModeToggle from "./DarkModeToggle";

function SideNav() {
  return (
    <nav className="z-50 cursor-default h-full sticky top-0 flex flex-col justify-between w-[72px] border-r-[1px] border-primary dark:border-secondary">
      <div className="flex items-center justify-center ">
        <BiHomeHeart className="w-11 h-11 mt-1 text-primary dark:text-secondary" />
      </div>
      <ul>
        <li>
          <DarkModeToggle />
        </li>
        <li>
          <a href="#">
            <BiLogoInstagram className="w-9 h-9" />
          </a>
        </li>
        <li>
          <a href="#">
            <BiLogoGithub className="w-9 h-9" />
          </a>
        </li>
        <li>
          <a href="#">
            <BiLogoLinkedin className="w-9 h-9" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default SideNav;
