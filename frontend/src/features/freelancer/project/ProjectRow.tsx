import { MdAssignment } from "react-icons/md";
import { ProjectType } from "../../../types/projects";
import Table from "../../../ui/Table";
import toLocaleDateShort from "../../../utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../../../utils/toPersianNumbers";
import { useState } from "react";
import Modal from "../../../ui/Modal";
import CreateProposalForm from "../../proposals/CreateProposalForm";

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
  const [open, setOpen] = useState(false);

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
        <button onClick={() => setOpen(true)}>
          <MdAssignment className="size-5 text-primary-900" />
        </button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title={`درخواست انجام ${project.title}`}
        >
          <CreateProposalForm
            onClose={() => setOpen(false)}
            projectId={project._id}
          />
        </Modal>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
