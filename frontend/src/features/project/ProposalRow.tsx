import { Proposal } from "../../types/projects";
import Table from "../../ui/Table";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";

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
      <td>*</td>
    </Table.Row>
  );
}

export default ProposalRow;
