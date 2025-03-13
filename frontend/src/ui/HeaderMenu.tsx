import { FaRegUser } from "react-icons/fa";
import Logout from "../features/authentication/Logout";
import DarkModeToggle from "./DarkModeToggle";
import { Link } from "react-router-dom";
import { useAuthorize, useUser } from "../features/authentication/useUser";

function HeaderMenu() {
  const { user } = useUser();
  const { isAuthenticated, isAuthorized } = useAuthorize();

  return (
    <ul className="flex items-center gap-x-4">
      {isAuthenticated && isAuthorized && (
        <>
          <li className="flex">
            <Logout />
          </li>
          <li className="flex">
            <Link to={`/${user?.role.toLowerCase()}/dashboard`}>
              <FaRegUser className="size-5 text-primary-900" />
            </Link>
          </li>
        </>
      )}
      <li className="flex">
        <DarkModeToggle />
      </li>
    </ul>
  );
}

export default HeaderMenu;
