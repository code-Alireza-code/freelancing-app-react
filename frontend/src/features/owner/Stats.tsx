import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import { ProjectType } from "../../types/projects";
import Stat from "../../ui/Stat";
import { toPersianNumbers } from "../../utils/toPersianNumbers";

function Stats({ projects }: { projects: ProjectType[] }) {
  const numOfProjects = projects.length;
  const numOfAcceptedProjects = projects.filter((p) => p.freelancer).length;
  const numOfProposals = projects.reduce(
    (acc, curr) => curr.proposals.length + acc,
    0
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8">
      <Stat
        className="bg-primary-100 text-primary-700"
        title="پروژه ها"
        value={toPersianNumbers(numOfProjects.toString())}
        icon={<HiOutlineViewGrid className="size-20" />}
      />
      <Stat
        title="پروژه های واگذار شده"
        value={toPersianNumbers(numOfAcceptedProjects.toString())}
        icon={<HiCurrencyDollar className="size-20" />}
        color="green"
      />
      <Stat
        title="درخواست ها"
        value={toPersianNumbers(numOfProposals.toString())}
        icon={<HiCollection className="size-20" />}
        color="yellow"
      />
    </div>
  );
}

export default Stats;
