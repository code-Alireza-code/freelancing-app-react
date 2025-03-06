import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useCreateProposal } from "./useProposals";
import Loading from "../../ui/Loading";

type CreateProposalFormPropsType = {
  onClose: () => void;
  projectId: string;
};

const validationSchema = z.object({
  description: z
    .string()
    .nonempty("توضیحات الزامی است !")
    .max(70, "طول توضیحات بیش از حد مجاز است "),
  price: z
    .string()
    .nonempty("دستمزد الزامی است !")
    .min(6, "دستمزد کمتر از ۱۰۰ هزار تومان ممکن نیست‌ !"),
  duration: z
    .string()
    .nonempty("زمان تحویل پروژه ضروری است")
    .max(3, "زمان تحویل خیلی طولانی است !"),
});

export type CreateProposalFormDataType = z.infer<typeof validationSchema>;

function CreateProposalForm({
  onClose,
  projectId,
}: CreateProposalFormPropsType) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CreateProposalFormDataType>({
    resolver: zodResolver(validationSchema),
  });

  useEffect(() => {
    toast("برای وارد کردن اعداد زبان کیبورد خود را به انگلیسی تغییر دهید", {
      duration: 5000,
    });
  }, []);

  const { createProposal, isCreatingProposal } = useCreateProposal();

  const handleCreateProposal = async (formData: CreateProposalFormDataType) => {
    await createProposal(
      { ...formData, projectId },
      {
        onSuccess: () => onClose(),
      }
    );
  };

  return (
    <div>
      <form
        noValidate
        className="space-y-6 text-secondary-800"
        onSubmit={handleSubmit(handleCreateProposal)}
      >
        <TextField
          label="توضیحات"
          {...register("description")}
          errors={errors}
        />
        <TextField
          {...register("price")}
          label="دستمزد مورد نظر(تومان)"
          errors={errors}
          type="number"
        />
        <TextField
          label="زمان لازم برای انجام پروژه (روز)"
          {...register("duration")}
          errors={errors}
          type="number"
        />
        {isCreatingProposal ? (
          <Loading height="50" />
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            ایجاد درخواست
          </button>
        )}
      </form>
    </div>
  );
}

export default CreateProposalForm;
