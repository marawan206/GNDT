import React from "react";

type ButtonSize = "sm" | "md" | "lg" | "xl";

export type ButtonProps = {
  title: string;
  onClick?: () => void;
  backgroundColor?: string; // e.g. "#181D27" or "rgb(0,0,0)"
  textColor?: string; // e.g. "#FFFFFF"
  borderRadius?: number | string; // number interprets as px
  size?: ButtonSize;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
};

const sizeToClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-2.5 text-sm",
  lg: "px-5 py-3 text-base",
  xl: "px-6 py-3.5 text-lg",
};

export default function Button({
  title,
  onClick,
  backgroundColor,
  textColor,
  borderRadius,
  size = "md",
  type = "button",
  disabled = false,
  className,
}: ButtonProps) {
  const resolvedRadius =
    typeof borderRadius === "number" ? `${borderRadius}px` : borderRadius;

  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${sizeToClasses[size]} ${className ?? ""}`}
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        borderRadius: resolvedRadius,
      }}
    >
      {title}
    </button>
  );
}
