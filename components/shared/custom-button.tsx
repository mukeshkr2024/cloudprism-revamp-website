import Link from "next/link";
import React from "react";

interface ButtonProps {
  text: string;
  href?: string;
  className?: string;
}

// TODO  add button hover effect

export default function CustomButton({ text, href, className }: ButtonProps) {
  return (
    <button
      className={`background_button rounded-3xl px-5 py-1.5  ${className}`}
      style={{
        boxShadow:
          "0px 1px 2px 0px #3BE88E61, 0px 4px 4px 0px #3BE88E54, 0px 8px 5px 0px #3BE88E30, 0px 14px 6px 0px #3BE88E0F, 0px 23px 6px 0px #3BE88E03",
      }}
    >
      {href ? (
        <Link href={href}>
          <p className="text-sm font-semibold text-black  sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            {text}
          </p>
        </Link>
      ) : (
        <p className="font-semibold text-black md:text-2xl">{text}</p>
      )}
    </button>
  );
}
