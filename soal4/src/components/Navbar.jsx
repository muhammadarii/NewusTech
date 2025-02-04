import React from "react";

const Navbar = () => {
  return (
    <nav className="absolute top-0 bg-[#3674B5] p-4 flex flex-row justify-between w-screen">
      <div className="text-xl font-bold">NewusTech</div>
      <div className="flex flex-row gap-4 font-semibold cursor-pointer">
        <p className="hover:text-white">Home</p>
        <p className="hover:text-white">About</p>
        <p className="hover:text-white">Service</p>
      </div>
    </nav>
  );
};

export default Navbar;
