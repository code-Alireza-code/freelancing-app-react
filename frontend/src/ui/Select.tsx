import { HtmlHTMLAttributes } from "react";
import { FieldErrors } from "react-hook-form";

type SelectPropsType = {
  name: string;
  label?: string;
  className?: string;
  options: {
    _id: string;
    title: string;
    [key: string]: unknown;
  }[];
  errors: FieldErrors;
  rest?: HtmlHTMLAttributes<HTMLSelectElement>;
};

function Select({
  name,
  label,
  className,
  options,
  errors,
  ...rest
}: SelectPropsType) {
  return (
    <>
      <div>
        <label className="mb-2 block text-secondary-700" htmlFor={name}>
          {label}
        </label>
        <select
          {...rest}
          name={name}
          id={name}
          className={`textField__input ${className}`}
        >
          <option value="">یک دسته بندی انتخاب کنید</option>
          {options?.map((option) => (
            <option key={option._id} value={option._id}>
              {option.title}
            </option>
          ))}
        </select>
      </div>
      {errors && errors[name] && (
        <span className="text-error text-xs">
          {errors[name]!.message as string}
        </span>
      )}
    </>
  );
}

export default Select;
