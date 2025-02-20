import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type CustomNavLinkPropsType = {
  children: ReactNode;
  path: string;
};

function CustomNavLink({ children, path }: CustomNavLinkPropsType) {
  const navLinkClasses =
    "flex items-center gap-x-2 hover:bg-primary-100/50 hover:text-primary-900 px-2 py-1.5 rounded-lg text-secondary-600 transition-all duration-300";

  return (
    <NavLink
      className={({ isActive }) =>
        `${navLinkClasses} ${
          isActive && "!bg-primary-100/30 !text-primary-900"
        }`
      }
      to={path}
    >
      {children}
    </NavLink>
  );
}

export default CustomNavLink;
