import { ReactNode } from "react";

const bgColor = {
  primary: "bg-primary-100 text-primary-700",
  green: "bg-green-100 text-green-700",
  yellow: "bg-yellow-100 text-yellow-700",
};

type StatPropsType = {
  value: number | string;
  title: string;
  icon?: ReactNode;
  color?: keyof typeof bgColor;
  className?: string;
};

function Stat({
  icon,
  className,
  title,
  value,
  color = "primary",
}: StatPropsType) {
  return (
    <div className="col-span-1 grid grid-rows-2 grid-cols-[6.4rem_1fr] bg-secondary-0 p-4 rounded-lg gap-x-4">
      <div
        className={`row-span-2 flex items-center justify-center p-2 aspect-square rounded-full ${bgColor[color]} ${className}`}
      >
        {icon}
      </div>
      <h5 className="font-bold text-secondary-500 text-lg self-center">
        {title}
      </h5>
      <p className="text-3xl font-bold text-secondary-900">{value}</p>
    </div>
  );
}

export default Stat;
