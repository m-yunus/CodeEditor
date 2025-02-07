import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-12 bg-black flex items-center justify-between px-4">
      <h1 className="text-white text-lg font-bold">Code Editor</h1>
      <p className="text-white text-sm"> <span>Created By</span> Uns</p>
    </div>
  );
};

export default Navbar;
