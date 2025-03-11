import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Select from "../../../ui/Select";
import Loading from "../../../ui/Loading";
import { useChangeUserStatus } from "../useUsers";

type ChangeUserStatusFormPropsType = {
  userId: string;
  onClose: () => void;
};

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
  status: z.enum(["0", "1", "2"], { message: "یک وضعیت انتخاب کنید" }),
});

export type ChangeUserStatusFormDataType = z.infer<typeof validationSchema>;

function ChangeUserStatusForm({
  userId,
  onClose,
}: ChangeUserStatusFormPropsType) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ChangeUserStatusFormDataType>({
    resolver: zodResolver(validationSchema),
  });
  const { changeUserSatus, isChangingStatus } = useChangeUserStatus();

  const handleChangeUserStatus = async (
    formData: ChangeUserStatusFormDataType
  ) => {
    await changeUserSatus(
      { data: formData, userId },
      {
        onSuccess: () => {
          onClose();
        },
      }
    );
  };

  return (
    <div>
      <form
        noValidate
        className="space-y-6"
        onSubmit={handleSubmit(handleChangeUserStatus)}
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

export default ChangeUserStatusForm;

// add change staus form + ....
