import { Outlet } from "react-router-dom";
import Header from "./Header";
import { ReactNode } from "react";

function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen grid grid-rows-[auto_1fr] grid-cols-[20%_1fr]">
      <Header />
      {children}
      <div className="bg-secondary-100 p-8 overflow-y-auto">
        <div className="flex mx-auto max-w-screen-xl flex-col gap-y-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
