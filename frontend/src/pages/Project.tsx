import { useParams } from "react-router-dom";
import { useGetSingleProject } from "../features/project/useProject";
import Loading from "../ui/Loading";
import ProjectHeader from "../features/project/ProjectHeader";
import ProposalsTable from "../features/project/ProposalsTable";

function Project() {
  const { id } = useParams();
  const { project, isLoadingProject } = useGetSingleProject(id as string);
  console.log(project);

  if (isLoadingProject) return <Loading />;

  return (
    <div>
      <ProjectHeader />
      <ProposalsTable />
    </div>
  );
}

export default Project;
