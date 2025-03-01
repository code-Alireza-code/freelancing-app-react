import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useDarkMode } from "../hooks/useDarkMode";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={async () => toggleDarkMode()}>
      {isDarkMode ? (
        <HiOutlineMoon className="size-5 text-primary-900" />
      ) : (
        <HiOutlineSun className="size-5 text-primary-900" />
      )}
    </button>
  );
}

export default DarkModeToggle;
