import { MdAssignment, MdDashboard } from "react-icons/md";
import AppLayout from "../../ui/AppLayout";
import CustomNavLink from "../../ui/CustomNavLink";
import Sidebar from "../../ui/Sidebar";
import { BsCollectionFill } from "react-icons/bs";
import { HiUser } from "react-icons/hi2";

function AdminLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <CustomNavLink path="/admin/dashboard">
          <MdDashboard />
          <span>داشبورد</span>
        </CustomNavLink>

        <CustomNavLink path="/admin/users">
          <HiUser />
          <span>کاربران</span>
        </CustomNavLink>
        <CustomNavLink path="/admin/projects">
          <BsCollectionFill />
          <span>پروژه ها</span>
        </CustomNavLink>
        <CustomNavLink path="/admin/proposals">
          <MdAssignment />
          <span>درخواست ها</span>
        </CustomNavLink>
      </Sidebar>
    </AppLayout>
  );
}

export default AdminLayout;
