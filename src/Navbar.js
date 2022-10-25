import React from "react";

const IMG_SRC = "./snoopy.png";
const IMG_ALT = "snoopy";
function Navbar() {
  return (
    <nav className="flex bg-red-200 justify-between items-center px-4 shadow-lg p-2">
      <div className="">
        <img
          src={IMG_SRC}
          alt={IMG_ALT}
          className=" h-[48px] w-[48px] rounded-full object-fill shadow-md border-3 border-gray-300 hover:scale-95 duration-150 cursor-pointer "
        />
      </div>
      <div className="flex space-x-2 font-bold text-gray-600 cursor-pointer">
        <div className=" hover:scale-110duration-150  hover:text-cyan-100 ">
          Home
        </div>
        <div className=" hover:scale-110 duration-150  hover:text-cyan-100 ">
          Works
        </div>
        <div className=" hover:scale-110 duration-150  hover:text-cyan-100 ">
          About
        </div>
        <div className=" hover:scale-110 duration-150  hover:text-cyan-100 ">
          Projects
        </div>
        <div className=" hover:scale-110 duration-150  hover:text-cyan-100 ">
          Services
        </div>
      </div>
      <div className="p-1 text-gray-600 font-bold rounded-md bg-white shadow-full border-2 border-gray-300 hover:scale-95 duration-150 cursor-pointer">
        Lets Chat
      </div>
    </nav>
  );
}

export default Navbar;
