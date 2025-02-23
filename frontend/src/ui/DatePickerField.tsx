import { Control, Controller, FieldErrors } from "react-hook-form";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { AddProjectFormDataType } from "../features/projects/CreateProjectForm";

type DatePickerFieldPropsType = {
  label?: string;
  control: Control<AddProjectFormDataType>;
  name: string;
  errors: FieldErrors<AddProjectFormDataType>;
};

function DatePickerField({
  label = "",
  control,
  name,
  errors,
}: DatePickerFieldPropsType) {
  return (
    <div>
      <label htmlFor="DatePicker">{label}</label>
      <Controller
        name={name as keyof AddProjectFormDataType}
        control={control}
        render={({ field }) => (
          <DatePicker
            containerClassName="w-full"
            inputClass="textField__input"
            value={
              field.value ? new Date(field.value as string).toISOString() : ""
            }
            onChange={(date) =>
              field.onChange(date ? new Date(date.toDate()).toISOString() : "")
            }
            format="YYYY/MM/DD"
            calendar={persian}
            locale={persian_fa}
          />
        )}
      />
      {errors && errors[name as keyof AddProjectFormDataType] && (
        <span className="text-error text-xs">
          {errors[name as keyof AddProjectFormDataType]!.message}
        </span>
      )}
    </div>
  );
}

export default DatePickerField;
