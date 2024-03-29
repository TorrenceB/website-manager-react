import { ChangeEventHandler } from "react";

interface Props {
  id: string;
  value?: string | number;
  label?: string;
  name?: string;
  placeholder?: string;
  hasError?: boolean;
  errorMessage?: string;
  type?: "text" | "number" | "email" | "password";
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const Input = ({
  onChange,
  value,
  label,
  name,
  placeholder,
  id,
  type,
  hasError,
  errorMessage,
}: Props) => {
  return (
    <div className="flex flex-col gap-y-1 w-full">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="p-2 rounded shadow w-full focus:ouline-none leading-tight"
      />
      {hasError && (
        <p className="text-red-500 text-xs font-bold">{errorMessage}</p>
      )}
    </div>
  );
};

export default Input;
