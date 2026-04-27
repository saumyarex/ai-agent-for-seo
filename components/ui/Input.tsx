"use client";

import React, { forwardRef } from "react";
import { LucideIcon } from "lucide-react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  rightIcon?: LucideIcon;
  onRightIconClick?: () => void;
  containerClassName?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    label,
    error,
    rightIcon: RightIcon,
    onRightIconClick,
    className = "",
    containerClassName = "",
    id,
    name,
    ...rest
  },
  ref,
) {
  const inputId = id ?? name;

  return (
    <div className={`flex w-full flex-col gap-1.5 ${containerClassName}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-[#141414]"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <input
          ref={ref}
          id={inputId}
          name={name}
          className={`h-10 w-full rounded-lg border border-black/10 bg-white/72 px-4 ${
            RightIcon ? "pr-10" : ""
          } text-base text-[#141414] backdrop-blur-md transition placeholder:text-neutral-400 focus:border-(--brand) focus:outline-none focus:ring-2 focus:ring-(--brand)/20 ${
            error ? "border-red-500/60 focus:border-red-500 focus:ring-red-500/20" : ""
          } ${className}`}
          {...rest}
        />
        {RightIcon && (
          <button
            type="button"
            tabIndex={onRightIconClick ? 0 : -1}
            onClick={onRightIconClick}
            className="absolute top-1/2 right-3 -translate-y-1/2 text-neutral-500 transition hover:text-[#141414]"
            aria-hidden={!onRightIconClick}
          >
            <RightIcon size={16} />
          </button>
        )}
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
});

export default Input;
