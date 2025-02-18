import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="h-screen grid grid-rows-[auto_1fr] grid-cols-[20%_1fr]">
      <Header />
      <Sidebar />
      <div className="p-8 overflow-y-auto">
        <div className="flex flex-col gap-y-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
