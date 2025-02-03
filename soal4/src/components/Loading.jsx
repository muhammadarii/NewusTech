import React from "react";

const Loading = () => {
  return (
    <div className="relative">
      <div class="h-8 w-8 rounded-full border-t-4 border-b-4 border-gray-200"></div>
      <div class="absolute top-0 left-0 h-8 w-8 rounded-full border-t-4 border-b-4 border-blue-500 animate-spin"></div>
    </div>
  );
};

export default Loading;
