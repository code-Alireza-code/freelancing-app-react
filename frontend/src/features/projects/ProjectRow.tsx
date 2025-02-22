import { ProjectType } from "../../types/projects";
import Table from "../../ui/Table";
import toLocaleDateShort from "../../utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";

type ProjectRowPropsType = {
  project: ProjectType;
  index: number;
};

function ProjectRow({ project, index }: ProjectRowPropsType) {
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(project.title, 20)}</td>
      <td>{project.category.title}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{toLocaleDateShort(project.deadline)}</td>
      <td>
        <div className="flex flex-wrap justify-center items-center gap-2 max-w-[200px]">
          {project.tags.map((tag) => (
            <span className="badge badge--primary" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td>{project?.freelancer?.name || "---"}</td>
      <td>
        {project.status === "OPEN" ? (
          <span className="badge badge--success">باز</span>
        ) : (
          <span className="badge badge--danger">بسته</span>
        )}
      </td>
      <td>عملیات...</td>
    </Table.Row>
  );
}

export default ProjectRow;
