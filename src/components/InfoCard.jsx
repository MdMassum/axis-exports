import React from "react";
import bgImage from "../assets/cardbg.png";

const InfoCard = ({ title, text }) => {
  return (  
    <div className="relative w-80 md:w-96 h-64 rounded-lg overflow-hidden text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center rounded-2xl "
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full p-6">
        <h3 className="text-xl font-semibold mb-2 border-b border-white">{title}</h3>
        <p className="text-gray-200">{text}</p>
      </div>
    </div>
  );
};

export default InfoCard;
