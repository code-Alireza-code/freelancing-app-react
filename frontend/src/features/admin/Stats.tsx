import { HiUser } from "react-icons/hi2";
import { toPersianNumbers } from "../../utils/toPersianNumbers";
import Stat from "../../ui/Stat";
import { HiCollection, HiOutlineViewGrid } from "react-icons/hi";

type StatsPropsType = {
  proposals: number;
  projects: number;
  users: number;
};

function Stats({ proposals, users, projects }: StatsPropsType) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8">
      <Stat
        className="bg-primary-100 text-primary-700"
        title="کاربران"
        value={toPersianNumbers(users.toString())}
        icon={<HiUser className="size-20" />}
      />
      <Stat
        title="درخواست ها"
        value={toPersianNumbers(proposals.toString())}
        icon={<HiOutlineViewGrid className="size-20" />}
        color="green"
      />
      <Stat
        title="پروژه ها"
        value={toPersianNumbers(projects.toString())}
        icon={<HiCollection className="size-20" />}
        color="yellow"
      />
    </div>
  );
}

export default Stats;
