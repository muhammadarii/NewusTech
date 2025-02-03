import React from "react";
import Tables from "../components/Tables";

const landingPage = () => {
  return (
    <div className="container mx-auto w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold text-center mb-10">
          API Integration dan Error Handling
        </h1>
        <Tables />
      </div>
    </div>
  );
};

export default landingPage;
