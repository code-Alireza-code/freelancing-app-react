import { useGetAllProjects } from "../../hooks/useProjects";
import DashboardHeader from "../../ui/DashboardHeader";
import Loading from "../../ui/Loading";
import { useGetAllProposals } from "../proposals/useProposals";
import Stats from "./Stats";
import { useUsers } from "./useUsers";

function DashboardLayout() {
  const { isLoadingUsers, users } = useUsers();
  const { isLoadingAllProjects, projects } = useGetAllProjects();
  const { isLoadingProposals, proposals } = useGetAllProposals();

  if (isLoadingAllProjects || isLoadingProposals || isLoadingUsers)
    return <Loading />;

  return (
    <div>
      <DashboardHeader />
      <Stats
        projects={projects.length}
        proposals={proposals.length}
        users={users.length}
      />
    </div>
  );
}

export default DashboardLayout;
