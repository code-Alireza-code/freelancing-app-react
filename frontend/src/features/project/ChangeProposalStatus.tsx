import { useForm } from "react-hook-form";
import Select from "../../ui/Select";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useChangeProposalStatus } from "./useProject";
import Loading from "../../ui/Loading";
import { useParams } from "react-router-dom";

const statusOptions = [
  {
    _id: "0",
    title: "رد شده",
  },
  {
    _id: "1",
    title: "در انتظار تایید",
  },
  {
    _id: "2",
    title: "تایید شده",
  },
];

const validationSchema = z.object({
  status: z.enum(["0", "1", "2"], { message: "یک وضعیت را انتخاب کنید !" }),
});

export type ProposalStatusFormDataType = z.infer<typeof validationSchema>;

type ChangeProposalStatusPropsType = {
  proposalStatus: 0 | 1 | 2;
  proposalId: string;
  onClose: () => void;
};

function ChangeProposalStatus({
  proposalStatus,
  proposalId,
  onClose,
}: ChangeProposalStatusPropsType) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProposalStatusFormDataType>({
    resolver: zodResolver(validationSchema),
    defaultValues: { status: String(proposalStatus) as "0" | "1" | "2" },
  });
  const { id } = useParams();

  const { changeStatus, isChangingStatus } = useChangeProposalStatus(
    id as string
  );

  const handleChangeProposalStatus = async (
    formData: ProposalStatusFormDataType
  ) => {
    await changeStatus(
      { data: { ...formData, projectId: id as string }, proposalId },
      {
        onSuccess: () => onClose(),
      }
    );
  };

  return (
    <div>
      <form
        className="space-y-6"
        onSubmit={handleSubmit(handleChangeProposalStatus)}
      >
        <Select
          {...register("status")}
          errors={errors}
          name="status"
          options={statusOptions}
          label="تغییر وضعیت"
        />
        {isChangingStatus ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            تایید
          </button>
        )}
      </form>
    </div>
  );
}

export default ChangeProposalStatus;
