"use client";

import { motion } from "framer-motion";
import { config } from "@/lib/config";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 cursor-pointer select-none";

  const variants = {
    primary:
      "bg-[#c9922a] hover:bg-[#e8b84b] text-black px-7 py-3.5 text-sm tracking-wide shadow-lg hover:shadow-[0_0_24px_rgba(201,146,42,0.4)]",
    secondary:
      "border border-[#c9922a]/40 hover:border-[#c9922a] text-[#c9922a] hover:text-[#e8b84b] px-7 py-3.5 text-sm tracking-wide bg-transparent hover:bg-[#c9922a]/5",
    ghost:
      "text-[#888888] hover:text-[#f5f5f5] px-4 py-2 text-sm underline-offset-4 hover:underline",
  };

  const finalClass = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={finalClass}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={finalClass}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

export function GetStartedButton({
  size = "md",
  className = "",
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-sm",
    lg: "px-9 py-4 text-base",
  };

  return (
    <motion.a
      href={config.platformUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 font-semibold bg-[#c9922a] hover:bg-[#e8b84b] text-black rounded-lg tracking-wide shadow-lg hover:shadow-[0_0_28px_rgba(201,146,42,0.45)] transition-all duration-200 cursor-pointer ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      Get Started
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className="shrink-0"
      >
        <path
          d="M3 8h10M9 4l4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.a>
  );
}
