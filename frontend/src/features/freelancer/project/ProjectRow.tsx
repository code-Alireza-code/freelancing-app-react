import { MdAssignment } from "react-icons/md";
import { ProjectType } from "../../../types/projects";
import Table from "../../../ui/Table";
import toLocaleDateShort from "../../../utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../../../utils/toPersianNumbers";

type ProjectRowPropsType = {
  index: number;
  project: ProjectType;
};

const statusStyle = {
  OPEN: {
    label: "باز",
    className: "badge--success",
  },
  CLOSED: {
    label: "بسته",
    className: "badge--danger",
  },
};

function ProjectRow({ index, project }: ProjectRowPropsType) {
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{project.title}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{toLocaleDateShort(project.deadline)}</td>
      <td>
        <span className={`badge ${statusStyle[project.status].className}`}>
          {statusStyle[project.status].label}
        </span>
      </td>
      <td>
        <button>
          <MdAssignment className="size-5 text-primary-900" />
        </button>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
