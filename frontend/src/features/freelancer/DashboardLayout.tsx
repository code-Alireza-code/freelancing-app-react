import DashboardHeader from "../../ui/DashboardHeader";
import Loading from "../../ui/Loading";
import { useGetAllProposals } from "../proposals/useProposals";

import Stats from "./Stats";

function DashboardLayout() {
  const { isLoadingProposals, proposals } = useGetAllProposals();

  if (isLoadingProposals) return <Loading />;
  return (
    <div>
      <DashboardHeader />
      <Stats proposals={proposals} />
    </div>
  );
}

export default DashboardLayout;
