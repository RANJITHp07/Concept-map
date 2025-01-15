import React, { useState } from "react";

type Props = {
  label: string;
  htmlFor: string;
  value?: string | number;
  type: string; // text | email | number | password
  onChange?: (data: string | number) => void;
  isRequired?: boolean;
  isDisabled?: boolean;
  placeholder?: string;
  inputId?: string;
  className?: string;
  errorMessage?: string | null;
};

function TextInput({
  label,
  htmlFor,
  value = "",
  type,
  onChange,
  isRequired = false,
  isDisabled = false,
  placeholder = "",
  inputId = "",
  className = "",
  errorMessage = null,
}: Props) {
  const [state, setState] = useState<number | string>(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setState(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div>
      <label htmlFor={htmlFor} className={`block ${errorMessage ? "text-red-400" : "text-gray-400"} text-sm mb-1`}>
        {label}
      </label>
      <input
        id={inputId || htmlFor}
        type={type}
        value={state}
        onChange={handleChange}
        placeholder={placeholder}
        className={`w-full px-4 py-3.5 rounded-lg border  ${errorMessage ? "border-red-400" : "border-gray-300"} focus:outline-none focus:ring-1 focus:ring-[#f5a623] text-gray-600 placeholder-gray-400 ${className}`}
        required={isRequired}
        disabled={isDisabled}
      />
      {errorMessage && <p className="text-xs text-red-400">{errorMessage}</p>}
    </div>
  );
}

export default TextInput;
