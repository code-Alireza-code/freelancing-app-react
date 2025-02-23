import { HTMLInputTypeAttribute } from "react";
import { FieldErrors } from "react-hook-form";
import { AddProjectFormDataType } from "../features/projects/CreateProjectForm";

type TextFieldPropsType = {
  label?: string;
  type?: HTMLInputTypeAttribute;
  name: string;
  id?: string;
  rest?: React.InputHTMLAttributes<HTMLInputElement>;
  className?: string;
  placeholder?: string;
  dir?: "ltr" | "rtl";
  errors?: FieldErrors<AddProjectFormDataType> | null;
};

function TextField({
  label = "",
  type = "text",
  name,
  id = "",
  className = "",
  placeholder,
  dir = "rtl",
  errors = null,
  ...rest
}: TextFieldPropsType) {
  return (
    <>
      <div>
        <label className="mb-2 block" htmlFor={name}>
          {label}
        </label>
        <input
          className={`textField__input ${className}`}
          type={type}
          name={name}
          id={id || name}
          dir={dir}
          autoComplete="off"
          placeholder={placeholder}
          {...rest}
        />
      </div>
      {errors && errors[name as keyof AddProjectFormDataType] && (
        <span className="text-error text-xs">
          {errors[name as keyof AddProjectFormDataType]!.message}
        </span>
      )}
    </>
  );
}

export default TextField;
