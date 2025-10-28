import React from "react";

export default function Button({
    children,
    onClick,
    variant = "primary",
    size = "medium",
    ...props
}) {
    const baseClasses =
        "font-semibold rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variantClasses = {
        primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500",
        secondary:
            "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500",
        outline:
            "bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-50",
        pink: "bg-pink-500 text-white hover:bg-pink-600 focus:ring-pink-500",
    };

    const sizeClasses = {
        small: "px-3 py-1 text-sm",
        medium: "px-4 py-2 text-base",
        large: "px-6 py-3 text-lg",
    };

    // Combine all classes
  const buttonClasses = `${baseClasses} ${variantClasses[variant] || variantClasses.primary} ${sizeClasses[size]} `;

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
