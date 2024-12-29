import React from "react";

export const Input = React.forwardRef(
  ({ type, placeholder, className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        className={`p-2 border rounded ${className}`}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
