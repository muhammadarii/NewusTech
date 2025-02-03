import React from "react";
import Tables from "../components/Tables";

const LandingPage = () => {
  return (
    <div className="font-poppins container mx-auto w-screen h-screen flex justify-center items-center bg-gradient-to-t from-gray-100 to-gray-300">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-center mb-10 bg-white rounded-full px-4 py-2">
          API Integration dan Error Handling
        </h1>
        <Tables />
      </div>
    </div>
  );
};

export default LandingPage;
