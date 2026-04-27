"use client";

import React from "react";
import Link from "next/link";
import { motion, MotionProps } from "motion/react";
import { LucideIcon } from "lucide-react";

const MotionLink = motion.create(Link);

interface ButtonProps extends MotionProps {
  title: string;
  className?: string;
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  href?: string;
  target?: string;
  rel?: string;
  isLink?: boolean;
}

function Button({
  title,
  className = "",
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  disabled = false,
  onClick,
  type = "button",
  variant = "primary",
  href,
  target,
  rel,
  isLink = false,
  ...motionProps
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center gap-1 rounded-lg font-medium transition";

  const variantStyles = {
    primary:
      "h-10 overflow-hidden bg-neutral-950 px-4 text-sm text-white sm:px-5 group relative",
    secondary:
      "h-10 items-center justify-center gap-1 border border-black/10 bg-white/72 px-4 text-base text-[#141414] backdrop-blur-md hover:bg-white",
  };

  const buttonContent = (
    <>
      {LeftIcon && <LeftIcon size={16} className="relative z-10" />}
      <span className="relative z-10">{title}</span>
      {RightIcon && (
        <RightIcon
          size={16}
          className="relative z-10 transition-all duration-200"
        />
      )}
    </>
  );

  const animationProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    ...motionProps,
  };

  if (isLink && href) {
    const isExternal =
      /^https?:\/\//.test(href) || href.startsWith("#") || target === "_blank";

    if (isExternal) {
      return (
        <motion.a
          href={href}
          target={target}
          rel={rel}
          className={`${baseStyles} ${variantStyles[variant]} ${className}`}
          {...animationProps}
        >
          {variant === "primary" && (
            <>
              <span className="pointer-events-none absolute inset-y-1 -left-10 w-10 rounded-full bg-white/40 opacity-0 blur-md transition-all duration-500 ease-out group-hover:left-[calc(100%+0.5rem)] group-hover:opacity-100" />
              <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.02)_38%,rgba(255,255,255,0.09)_50%,rgba(255,255,255,0.02)_62%,transparent_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </>
          )}
          {buttonContent}
        </motion.a>
      );
    }

    return (
      <MotionLink
        href={href}
        target={target}
        rel={rel}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        {...animationProps}
      >
        {variant === "primary" && (
          <>
            <span className="pointer-events-none absolute inset-y-1 -left-10 w-10 rounded-full bg-white/40 opacity-0 blur-md transition-all duration-500 ease-out group-hover:left-[calc(100%+0.5rem)] group-hover:opacity-100" />
            <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.02)_38%,rgba(255,255,255,0.09)_50%,rgba(255,255,255,0.02)_62%,transparent_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </>
        )}
        {buttonContent}
      </MotionLink>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...animationProps}
    >
      {variant === "primary" && (
        <>
          <span className="pointer-events-none absolute inset-y-1 -left-10 w-10 rounded-full bg-white/40 opacity-0 blur-md transition-all duration-500 ease-out group-hover:left-[calc(100%+0.5rem)] group-hover:opacity-100" />
          <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.02)_38%,rgba(255,255,255,0.09)_50%,rgba(255,255,255,0.02)_62%,transparent_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </>
      )}
      {buttonContent}
    </motion.button>
  );
}

export default Button;
