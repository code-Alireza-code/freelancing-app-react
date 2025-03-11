import { useState } from "react";
import { UserType } from "../../../types/user";
import Modal from "../../../ui/Modal";
import Table from "../../../ui/Table";
import { toPersianNumbers } from "../../../utils/toPersianNumbers";
import ChangeUserStatusForm from "./ChangeUserStatusForm";

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

type UserRowPropsType = {
  index: number;
  user: UserType;
};

function UserRow({ user, index }: UserRowPropsType) {
  const [open, setOpen] = useState(false);

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{toPersianNumbers(user.phoneNumber?.toString() as string)}</td>
      <td>{user.role.toLowerCase()}</td>
      <td>
        <span className={`badge ${statusStyle[user.status].className}`}>
          {statusStyle[user.status].label}
        </span>
      </td>
      <td>
        <button
          className="underline underline-offset-4 text-primary-900 hover:no-underline disabled:cursor-not-allowed disabled:text-gray-600/50 disabled:no-underline disabled:dark:text-gray-200/50"
          onClick={() => setOpen(true)}
          disabled={user.role === "ADMIN"}
        >
          تغییر وضعیت
        </button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title={`تغییر وضعیت ${user.name}`}
        >
          <ChangeUserStatusForm
            userId={user._id}
            onClose={() => setOpen(false)}
          />
        </Modal>
      </td>
    </Table.Row>
  );
}

export default UserRow;
