import { ProjectType } from "../../types/projects";
import { useUpdateProjectStatus } from "./useProject";
import Toggle from "../../ui/Toggle";

type ToggleProjectStatusPropsType = {
  project: ProjectType;
};
export type StatusValueType = "OPEN" | "CLOSED";

function ToggleProjectStatus({ project }: ToggleProjectStatusPropsType) {
  const enabled = project.status === "OPEN" ? true : false;

  const { isUpdatingStatus, updateStatus } = useUpdateProjectStatus();

  const handleChangeStatus = async () => {
    const value: StatusValueType = enabled ? "CLOSED" : "OPEN";
    const statusData = { status: value };
    await updateStatus({ data: statusData, projectId: project._id });
  };

  return (
    <div className="flex items-center min-w-[6rem] justify-center">
      <Toggle
        checked={enabled}
        onChange={handleChangeStatus}
        label={enabled ? "باز" : "بسته"}
        labelClass="min-w-[2rem]"
        disabled={isUpdatingStatus}
      />
    </div>
  );
}

export default ToggleProjectStatus;
