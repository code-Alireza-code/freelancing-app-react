type RadioInputProps = {
  label: string;
  value?: string;
  className?: string;
  rest?: React.HtmlHTMLAttributes<HTMLInputElement>;
};

function RadioInput({ label, value, className, ...rest }: RadioInputProps) {
  return (
    <div>
      <input
        type="radio"
        id={value}
        value={value}
        className={`form-radio ml-2 text-primary-900 focus:ring-offset-1 ${className}`}
        {...rest}
      />
      <label htmlFor={value}>{label}</label>
    </div>
  );
}

export default RadioInput;
