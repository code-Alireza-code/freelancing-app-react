import { HTMLInputTypeAttribute } from "react";
import { FieldErrors, FieldValues } from "react-hook-form";

type TextFieldPropsType<T extends FieldValues> = {
  label?: string;
  type?: HTMLInputTypeAttribute;
  name: string;
  id?: string;
  rest?: React.InputHTMLAttributes<HTMLInputElement>;
  className?: string;
  placeholder?: string;
  dir?: "ltr" | "rtl";
  errors?: FieldErrors<T> | null;
};

function TextField<T extends FieldValues>({
  label = "",
  type = "text",
  name,
  id = "",
  className = "",
  placeholder,
  dir = "rtl",
  errors = null,
  ...rest
}: TextFieldPropsType<T>) {
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
      {errors && errors[name as keyof T] && (
        <span className="text-error text-xs">
          {errors[name as keyof T]?.message as string}
        </span>
      )}
    </>
  );
}

export default TextField;
