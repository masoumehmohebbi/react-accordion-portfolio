import useDarkMode from "../hooks/UseDarkMode";
import { BiSun, BiMoon } from "react-icons/bi";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <a href="#" onClick={() => setDarkMode()}>
      {!darkMode ? (
        <BiMoon className="w-9 h-9 " />
      ) : (
        <BiSun className="w-9 h-9 " />
      )}
    </a>
  );
};

export default DarkModeToggle;
