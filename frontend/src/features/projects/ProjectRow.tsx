import { FaRegTrashAlt } from "react-icons/fa";
import { ProjectType } from "../../types/projects";
import Table from "../../ui/Table";
import toLocaleDateShort from "../../utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";
import Modal from "../../ui/Modal";
import { useState } from "react";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useRemoveProject } from "./useProject";
import { TbPencilMinus } from "react-icons/tb";
import CreateProjectForm from "./CreateProjectForm";
import ToggleProjectStatus from "./ToggleProjectStatus";

type ProjectRowPropsType = {
  project: ProjectType;
  index: number;
};

function ProjectRow({ project, index }: ProjectRowPropsType) {
  const [isRemoveOpen, setIsRemoveOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const { isDeleting, removeProject } = useRemoveProject();

  const handleRemoveProject = async (projectId: string) => {
    await removeProject(projectId);
  };

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
        <ToggleProjectStatus project={project} />
      </td>
      <td>
        <div className="flex items-center gap-x-4">
          <>
            <button onClick={() => setIsEditOpen(true)}>
              <TbPencilMinus className="w-5 h-5 text-primary-900" />
            </button>
          </>
          <Modal
            title={`ویرایش ${project.title}`}
            onClose={() => setIsEditOpen(false)}
            open={isEditOpen}
          >
            <CreateProjectForm
              onClose={() => setIsEditOpen(false)}
              project={project}
            />
          </Modal>
          <>
            <button onClick={() => setIsRemoveOpen(true)}>
              <FaRegTrashAlt className="w-5 h-5 text-error" />
            </button>
            <Modal
              title={`حذف ${project.title}`}
              open={isRemoveOpen}
              onClose={() => setIsRemoveOpen(false)}
            >
              <ConfirmDelete
                resourceName={project.title}
                onClose={() => setIsRemoveOpen(false)}
                onConfirm={() => handleRemoveProject(project._id)}
                disabled={isDeleting}
              />
            </Modal>
          </>
        </div>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
