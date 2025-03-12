import React from "react";
import bgImage from "../assets/cardbg.png";

const InfoCard = ({ title, text }) => {
  return (  
    <div
      className="relative w-80 md:w-96 h-52 rounded-lg overflow-hidden text-white bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full p-6  bg-opacity-50 rounded-xl">
        <h3 className="text-xl font-semibold mb-2 border-b border-white">{title}</h3>
        <p className="">{text}</p>
      </div>
    </div>
  );
};

export default InfoCard;
