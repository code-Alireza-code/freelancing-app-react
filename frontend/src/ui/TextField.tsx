import { HTMLInputTypeAttribute } from "react";

type TextFieldPropsType = {
  label: string;
  type?: HTMLInputTypeAttribute;
  name: string;
  id?: string;
  rest?: unknown;
  className?: string;
  placeholder?: string;
};

function TextField({
  label,
  type = "text",
  name,
  id = "",
  className = "",
  placeholder,
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
        autoComplete="off"
        placeholder={placeholder}
        {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
      />
    </div>
  );
}

export default TextField;
