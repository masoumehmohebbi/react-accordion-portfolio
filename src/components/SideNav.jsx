import {
  BiLogoInstagram,
  BiSun,
  BiLogoLinkedin,
  BiLogoGithub,
  BiHomeHeart,
} from "react-icons/bi";

function SideNav() {
  return (
    <nav className=" z-50 cursor-default col-span-1 h-full flex flex-col justify-between w-[72px] border-r-[1px] border-primary">
      <div className="flex items-center justify-center ">
        <BiHomeHeart className="w-11 h-11 mt-1 text-slate-800" />
      </div>
      <ul>
        <li className="border-t-[1px] border-primary flex items-center justify-center">
          <span className="py-4 flex items-center justify-center hover:bg-primary hover:text-white text-primary w-full duration-500">
            <BiSun className="w-9 h-9 " />
          </span>
        </li>
        <li className="border-t-[1px] border-primary flex items-center justify-center">
          <a
            href="#"
            className="py-4 flex items-center justify-center hover:bg-primary hover:text-white text-primary w-full duration-500"
          >
            <BiLogoInstagram className="w-9 h-9" />
          </a>
        </li>
        <li className="border-t-[1px] border-primary flex items-center justify-center">
          <a
            href="#"
            className="py-4 flex items-center justify-center hover:bg-primary hover:text-white text-primary w-full duration-500"
          >
            <BiLogoGithub className="w-9 h-9" />
          </a>
        </li>
        <li className="border-t-[1px] border-primary">
          <a
            href="#"
            className="py-4 flex items-center justify-center hover:bg-primary hover:text-white text-primary w-full duration-500"
          >
            <BiLogoLinkedin className="w-9 h-9" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default SideNav;
