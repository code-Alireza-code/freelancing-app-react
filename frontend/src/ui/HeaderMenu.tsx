import Logout from "../features/authentication/Logout";

function HeaderMenu() {
  return (
    <ul className="flex items-center gap-x-4">
      <li className="flex">
        <Logout />
      </li>
    </ul>
  );
}

export default HeaderMenu;
