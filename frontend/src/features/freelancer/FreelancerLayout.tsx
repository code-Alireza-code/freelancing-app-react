import { MdAssignment, MdDashboard } from "react-icons/md";
import AppLayout from "../../ui/AppLayout";
import CustomNavLink from "../../ui/CustomNavLink";
import Sidebar from "../../ui/Sidebar";
import { BsCollectionFill } from "react-icons/bs";

function FreelancerLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <CustomNavLink path="/freelancer/dashboard">
          <MdDashboard />
          <span>داشبورد</span>
        </CustomNavLink>

        <CustomNavLink path="/freelancer/projects">
          <BsCollectionFill />
          <span>پروژه ها</span>
        </CustomNavLink>
        <CustomNavLink path="/freelancer/proposals">
          <MdAssignment />
          <span>درخواست ها</span>
        </CustomNavLink>
      </Sidebar>
    </AppLayout>
  );
}

export default FreelancerLayout;
