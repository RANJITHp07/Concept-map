import React from 'react'

type Props={
  actionName: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  isDisabled?: boolean;
  loadingName?: string;
}

function Button({
  actionName,
  onClick,
  type = "button",
  isDisabled = false,
  loadingName = "",
}: Props) {
  return (
    <button
      type={type}
      onClick={!isDisabled && type === "button" ? onClick : undefined}
      disabled={isDisabled}
      className={`w-full py-3.5 rounded-lg font-medium transition-colors mt-4 ${
        isDisabled
          ? "bg-gray-400 text-gray-700 cursor-not-allowed"
          : "bg-[#f5a623] text-white hover:bg-[#e69516]"
      }`}
    >
      {isDisabled ? loadingName : actionName}
    </button>
  );
}

export default Button
