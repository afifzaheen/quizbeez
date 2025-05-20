"use client"

import type React from "react"

// Step 1️⃣: UI Implementation - Custom Button Component
interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: "primary" | "secondary" | "link"
  className?: string
  type?: "button" | "submit" | "reset"
}

export default function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyles = "px-4 py-2 rounded font-medium focus:outline-none focus:ring-2 focus:ring-offset-2"

  const variantStyles = {
    primary: "bg-yellow-400 hover:bg-yellow-500 text-black focus:ring-yellow-500",
    secondary: "border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 focus:ring-gray-500",
    link: "bg-transparent hover:underline text-blue-600 p-0",
  }

  return (
    <button type={type} className={`${baseStyles} ${variantStyles[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}
