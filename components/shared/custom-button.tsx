"use client";

import React, { useState } from "react";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
}

export default function CustomButton({ children, className }: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`background_button   ${className}`}
      style={{
        boxShadow: isHovered
          ? "0px 1px 2px 0px #3BE88E61,0px 4px 4px 0px #3BE88E54 "
          : "0px 1px 2px 0px #3BE88E61, 0px 4px 4px 0px #3BE88E54, 0px 8px 5px 0px #3BE88E30, 0px 14px 6px 0px #3BE88E0F, 0px 23px 6px 0px #3BE88E03",
        transition: "box-shadow 0.3s ease;",
      }}
    >
      {children}
    </button>
  );
}
