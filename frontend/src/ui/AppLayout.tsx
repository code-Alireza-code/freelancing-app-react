import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="h-screen grid grid-rows-[auto_1fr] grid-cols-[20%_1fr]">
      <div className="bg-green-100 px-8 py-4">app header</div>
      <div className="bg-red-100 row-start-1 row-span-2">app sidebar</div>
      <div className="p-8 overflow-y-auto">
        <div className="bg-amber-200 flex flex-col gap-y-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
