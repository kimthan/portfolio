import React from "react";

function Main() {
  return (
    <div>
      <div className="max-w-[400px] h-screen flex flex-col w-1/2 text-center mx-auto justify-center">
        <div className="bg-[#f2f1f1c7] p-4 shadow-md rounded-lg border-2">
          <img
            src="./snoopy.png"
            alt=""
            className="w-64 h-64 rounded-full mx-auto object-cover border-2"
          />
          <h1 className="text-2xl mt-4 ml-4">HEY, I'M SNOOPY</h1>
          <p>I build things on the web </p>
          <div className="bg-yellow-500 w-24 p-2 rounded-lg shadow-lg  mx-auto mt-2 font-bold">
            Projects
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
