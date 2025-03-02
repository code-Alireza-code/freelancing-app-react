import { MdDashboard } from "react-icons/md";
import AppLayout from "../../ui/AppLayout";
import CustomNavLink from "../../ui/CustomNavLink";
import Sidebar from "../../ui/Sidebar";
import { BsCollectionFill } from "react-icons/bs";

function OwnerLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <CustomNavLink path="/owner/dashboard">
          <MdDashboard />
          <span>داشبورد</span>
        </CustomNavLink>

        <CustomNavLink path="/owner/projects">
          <BsCollectionFill />
          <span>پروژه ها</span>
        </CustomNavLink>
      </Sidebar>
    </AppLayout>
  );
}

export default OwnerLayout;
