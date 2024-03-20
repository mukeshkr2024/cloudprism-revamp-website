"use client";

import React, { useEffect, useState } from "react";

export default function ScrollBarProgress({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed left-0 top-0 z-[1] h-4  w-full">
        <div
          className="h-[3px] w-[15%] rounded-md  "
          style={{
            width: `${scrollTop}%`,
            background:
              "linear-gradient(90deg, rgba(241, 202, 100, 0) -1.95%, #F1CA64 23.8%, #02FFB3 99.49%);",
          }}
        />
      </div>
      {children}
    </>
  );
}

// bg-gradient-to-r from-transparent via-yellow-400 to-teal-400
