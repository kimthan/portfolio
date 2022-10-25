import React from "react";

const IMG_SRC = "./snoopy.png";
const IMG_ALT = "snoopy";
function Navbar() {
  return (
    <nav className="flex bg-[#313132] justify-between items-center px-4 shadow-lg p-2">
      <div className="">
        <img
          src={IMG_SRC}
          alt={IMG_ALT}
          className=" h-[48px] w-[48px] rounded-full object-fill shadow-md border-2 border-gray-300 hover:scale-95 duration-150 cursor-pointer "
        />
      </div>
      <div className="flex flex-col sm:flex-row text-cyan-100 cursor-pointer font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        <div className=" hover:scale-110duration-150  hover:text-cyan-500 self-center text-4xl m-4 border-b-2 sm:border-none sm:text-1xl sm:m-2">
          Home
        </div>

        <div className=" hover:scale-110 duration-150  hover:text-cyan-500  self-center text-4xl m-4 border-b-2 sm:border-none sm:text-1xl sm:m-2">
          About
        </div>
        <div className=" hover:scale-110 duration-150  hover:text-cyan-500  self-center text-4xl m-4 border-b-2 sm:border-none sm:text-1xl sm:m-2">
          Projects
        </div>
        <div className=" hover:scale-110 duration-150  hover:text-cyan-500  self-center text-4xl m-4 border-b-2 sm:border-none sm:text-1xl sm:m-2">
          Services
        </div>
      </div>
      <div className="p-1 text-gray-600 rounded-md bg-[#c6c6d3] shadow-full border-2 border-gray-300 hover:scale-95 duration-150 cursor-pointer font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Lets Chat
      </div>
    </nav>
  );
}

export default Navbar;
