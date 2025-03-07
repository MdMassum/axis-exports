import React from "react";
import { FaPlay } from "react-icons/fa";

const Button = () => {
  return (
    <button className="bg-white text-black font-bold py-2 pl-5 rounded-full flex items-center shadow-lg min-w-48 cursor-pointer hover:bg-green-400 hover:text-white">
      ENQUIRE NOW! <span className="bg-green-600 rounded-full p-2 ml-1 flex items-center"><FaPlay className="ml-1 text-white"/></span>
    </button>
  );
};

export default Button;