import React from "react";

const LoadingPage = () => {
  return (
    <div className="fixed left-0 top-0 flex size-full items-center justify-center ">
      <div className="size-20 animate-spin rounded-full border-y-2 border-gray-400"></div>
    </div>
  );
};

export default LoadingPage;
