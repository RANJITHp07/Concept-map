import React from "react";

type Props = {
  actionName: string;
  onClick?: () => void;
  type: "submit" | "button";
  isDisabled?: boolean;
  loadingName?: string;
};

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
      onClick={type === "button" ? onClick : undefined}
      disabled={isDisabled}
      className={`w-full py-3.5 rounded-lg font-medium bg-[#f5a623] transition-colors mt-4 ${
        isDisabled
          ? "opacity-75 cursor-not-allowed"
          : " text-white hover:bg-[#e69516]"
      }`}
    >
      {isDisabled ? loadingName : actionName}
    </button>
  );
}

export default Button;
