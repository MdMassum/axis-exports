import React from "react";
import { FaPlay } from "react-icons/fa";

const Button = () => {
  return (
    <button className="bg-white text-black font-bold py-3 pl-7 pr-4 rounded-full flex items-center shadow-lg min-w-56 cursor-pointer hover:bg-lime-500 hover:text-white">
      ENQUIRE NOW! <span className="bg-green-600 hover:bg-green-700 rounded-full p-2 ml-2 flex items-center"><FaPlay className="ml-1 text-white"/></span>
    </button>
  );
};

export default Button;