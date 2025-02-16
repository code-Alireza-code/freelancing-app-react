import { HTMLInputTypeAttribute } from "react";

type TextFieldPropsType = {
  label?: string;
  type?: HTMLInputTypeAttribute;
  name: string;
  id?: string;
  rest?: React.InputHTMLAttributes<HTMLInputElement>;
  className?: string;
  placeholder?: string;
  dir?: "ltr" | "rtl";
};

function TextField({
  label = "",
  type = "text",
  name,
  id = "",
  className = "",
  placeholder,
  dir = "rtl",
  ...rest
}: TextFieldPropsType) {
  return (
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
  );
}

export default TextField;
