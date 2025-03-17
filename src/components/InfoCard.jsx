import React from "react";
import bgImage from "../assets/cardbg.png";

const InfoCard = ({ title, text }) => {
  return (  
    <div
      className="relative w-[350px] h-80 md:w-120 md:h-72 rounded-lg overflow-hidden text-white bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat:"repeat-y",
        borderRadius: "20px",
        padding: "2rem",
      }}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full p-6  bg-opacity-50 rounded-xl">
        <h3 className="text-2xl font-semibold mb-2 border-b border-white">{title}</h3>
        <p className="">{text}</p>
      </div>
    </div>
  );
};

export default InfoCard;
