import React from "react";
import bgImage from "../assets/cardbg.png";

const InfoCard = ({ title, text }) => {
  return (  
    <div
      className="relative w-[400px] ml-4 md:ml-0 h-60 md:min-w-120 md:h-72 overflow-hidden text-white bg-center"
      
    >
      <div className="absolute min-w-full min-h-full left-2 md:left-5" style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat:"no-repeat",
        borderRadius: "20px",
        padding: "4rem",
      }}>

      </div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full p-6  bg-opacity-50">
        <h3 className="text-2xl md:text-3xl font-semibold mb-2 md:mb-3 border-b border-white">{title}</h3>
        <p className="max-w-[85%] md:max-w-[70%] md:text-lg">{text}</p>
      </div>
    </div>
  );
};

export default InfoCard;
