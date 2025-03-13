import { useState } from "react";
import { Proposal } from "../../types/projects";
import Modal from "../../ui/Modal";
import Table from "../../ui/Table";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";
import ChangeProposalStatus from "./ChangeProposalStatus";

const statusStyle = [
  {
    label: "رد شده",
    className: "badge--danger",
  },
  {
    label: "در انتظار تایید",
    className: "badge--secondary",
  },
  {
    label: "تایید شده",
    className: "badge--success",
  },
];

type ProposalRowPropsType = {
  proposal: Proposal;
  index: number;
};

function ProposalRow({ proposal, index }: ProposalRowPropsType) {
  const [open, setOpen] = useState(false);
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{proposal.user?.name || "---"}</td>
      <td>
        <p>{truncateText(proposal.description, 50)}</p>
      </td>
      <td>{toPersianNumbers(proposal.duration.toString())} روز </td>
      <td>{toPersianNumbersWithComma(proposal.price)}</td>
      <td>
        <span className={`badge ${statusStyle[proposal.status].className}`}>
          {statusStyle[proposal.status].label}
        </span>
      </td>
      <td>
        <button
          onClick={() => setOpen(true)}
          className="underline underline-offset-4 text-primary-900 hover:text-primary-600"
        >
          تغییر وضعیت
        </button>
        <Modal
          title="تغییر وضعیت درخواست"
          onClose={() => setOpen(false)}
          open={open}
        >
          <ChangeProposalStatus
            proposalStatus={proposal.status}
            proposalId={proposal._id}
            onClose={() => setOpen(false)}
          />
        </Modal>
      </td>
    </Table.Row>
  );
}

export default ProposalRow;
