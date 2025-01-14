import React from "react";

type Props = {
  actionName: string;
  onClick?: () => void;
  type: "submit" | "button";
  isDisabled?: boolean;
};

function Button({
  actionName,
  onClick,
  type = "button",
  isDisabled = false,
}: Props) {
  return (
    <button
      type={type}
      onClick={type === "button" ? onClick : undefined}
      disabled={isDisabled}
      className={`w-full py-3.5 rounded-lg font-medium transition-colors mt-4 ${
        isDisabled
          ? "bg-gray-400 text-gray-700 cursor-not-allowed"
          : "bg-[#f5a623] text-white hover:bg-[#e69516]"
      }`}
    >
      {actionName}
    </button>
  );
}

export default Button;
