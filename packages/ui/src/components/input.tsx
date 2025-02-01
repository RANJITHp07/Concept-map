import * as React from "react";

import { cn } from "@repo/ui/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "w-full px-4 py-3.5 rounded-lg border focus:outline-none focus:ring-1 focus:ring-[#f5a623] text-gray-600 placeholder-gray-400",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
