import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import { ProposalType } from "../../types/proposals";
import Stat from "../../ui/Stat";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../utils/toPersianNumbers";

type StatsPropsType = {
  proposals: ProposalType[];
};

function Stats({ proposals }: StatsPropsType) {
  const numOfProposals = proposals.length;
  const numOfAcceptedProposals = proposals.filter((p) => p.status === 2).length;
  const totalSalary = proposals
    .filter((p) => p.status === 2)
    .reduce((total, curr) => (total += curr.price), 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8">
      <Stat
        className="bg-primary-100 text-primary-700"
        title="درخواست ها"
        value={toPersianNumbers(String(numOfProposals))}
        icon={<HiOutlineViewGrid className="size-20" />}
      />
      <Stat
        title="درخواست های تایید شده"
        value={toPersianNumbers(String(numOfAcceptedProposals))}
        icon={<HiCurrencyDollar className="size-20" />}
        color="green"
      />
      <Stat
        title="مجموع درآمد"
        value={toPersianNumbersWithComma(totalSalary)}
        icon={<HiCollection className="size-20" />}
        color="yellow"
      />
    </div>
  );
}

export default Stats;
