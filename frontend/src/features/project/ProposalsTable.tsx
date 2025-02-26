import { Proposal } from "../../types/projects";
import Empty from "../../ui/Empty";
import Table from "../../ui/Table";
import ProposalRow from "./ProposalRow";

type ProposalsTablePropsType = {
  proposals: Proposal[];
};

function ProposalsTable({ proposals }: ProposalsTablePropsType) {
  if (!proposals.length) return <Empty resourceName="درخواستی" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>فریلنسر</th>
        <th>توضیحات</th>
        <th>زمان تحویل</th>
        <th>هزینه</th>
        <th>وضعیت درخواست</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {proposals.map((proposal, index) => (
          <ProposalRow key={proposal._id} proposal={proposal} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProposalsTable;
