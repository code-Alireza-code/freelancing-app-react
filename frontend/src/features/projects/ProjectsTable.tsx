import { useOwnerProjects } from "../../hooks/useProject";
import { ProjectType } from "../../types/peojects";
import Empty from "../../ui/Empty";
import Loading from "../../ui/Loading";
import toLocaleDateShort from "../../utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";

function ProjectsTable() {
  const { data, isLoading } = useOwnerProjects();
  const { projects } = data || {};

  if (isLoading) return <Loading />;
  if (!projects.length) return <Empty resourceName="پروژه" />;

  return (
    <div className="bg-secondary-0 overflow-x-auto">
      <table>
        <thead>
          <tr className="title-row">
            <th>#</th>
            <th>عنوان پروژه</th>
            <th>دسته بندی</th>
            <th>بودجه</th>
            <th>ددلاین</th>
            <th>تگ ها</th>
            <th>فریلنسر</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {(projects as ProjectType[]).map((project, index) => (
            <tr key={project._id}>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectsTable;
