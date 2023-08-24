import useDarkMode from "../hooks/UseDarkMode";
import { BiSun, BiMoon } from "react-icons/bi";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <div>
      <button onClick={() => setDarkMode()}>
        {!darkMode ? (
          <BiMoon className="w-9 h-9 " />
        ) : (
          <BiSun className="w-9 h-9 " />
        )}
      </button>
    </div>
  );
};

export default DarkModeToggle;
