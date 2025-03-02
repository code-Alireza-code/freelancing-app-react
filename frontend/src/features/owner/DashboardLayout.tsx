import Loading from "../../ui/Loading";
import { useOwnerProjects } from "../projects/useProjects";
import DashboardHeader from "./DashboardHeader";
import Stats from "./Stats";

function DashboardLayout() {
  const { projects, isLoadingProjects } = useOwnerProjects();

  if (isLoadingProjects) return <Loading />;

  return (
    <div>
      <DashboardHeader />
      <Stats projects={projects} />
    </div>
  );
}

export default DashboardLayout;
