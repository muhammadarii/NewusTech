import React from "react";
import DataList from "../components/DataList";

const LandingPage = () => {
  return (
    <div className="font-poppins container mx-auto w-screen h-screen flex justify-center items-center bg-gradient-to-t from-gray-100 to-gray-300">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl shadow-lg font-bold text-center mb-10 bg-white rounded-full px-4 py-2">
          API Integration dan Error Handling
        </h1>
        <DataList />
      </div>
    </div>
  );
};

export default LandingPage;
