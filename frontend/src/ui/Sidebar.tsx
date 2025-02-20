import { BsCollectionFill } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import CustomNavLink from "./CustomNavLink";

function Sidebar() {
  return (
    <div className="bg-secondary-0 row-start-1 row-span-2 border-l border-secondary-200 p-4">
      <ul className="flex flex-col gap-y-4">
        <li>
          <CustomNavLink path="/owner/dashboard">
            <MdDashboard />
            <span>داشبورد</span>
          </CustomNavLink>
        </li>
        <li>
          <CustomNavLink path="/owner/projects">
            <BsCollectionFill />
            <span>پروژه ها</span>
          </CustomNavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
