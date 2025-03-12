import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import HeroImg from '../../../assets/heroImg1.png'
import Button from "../../../components/Button";

const HeroSection = () => {
  return (
    <section id="home" className="bg-green-700 relative text-white pt-20">
      <div className="w-full mx-auto flex md:items-center md:justify-center pl-2  md:mt-0 md:px-0">
        {/* Left Content */}
        <div className="w-full md:max-w-[695px] mt-6 md:mt-0 md:pl-28 z-20 text-center md:text-left">
          <h1 className="text-6xl md:text-7xl font-bold mb-1">
            Herbal &
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold mb-1 min-w-56">
            Organic Product
          </h1>
          <h1 className="text-6xl md:text-7xl font-bold mb-8">
            Exporter
          </h1>
          <p className="text-lg mb-12 md:mb-6 md:max-w-96 text-center md:text-left">
            India’s leading worldwide exporter of Natural & Organic Products
          </p>
          
        </div>

        {/* Right Image */}
        <div className="absolute md:flex md:w-1/2 md:relative -mt-32 md:mt-0 ">
          <img
            src={HeroImg}
            alt="Organic Products"
            className="w-full md:w-full rounded-lg opacity-70 md:opacity-100"
          />
        </div>
      </div>

      <div className="flex justify-between items-center gap-2 md:-mt-6 ">
      <div className="flex flex-wrap md:mb-6 bg-white text-black py-5 md:py-7 pl-4 md:pl-24 text-sm font-semibold md:rounded-r-4xl z-30 shadow-sm">
            <div className="flex items-center space-x-2 min-w-32">
              <FaCheckCircle className="text-green-500" />
              <span>100% ORGANIC</span>
            </div>
            <div className="flex items-center space-x-2 min-w-40">
              <FaCheckCircle className="text-green-500" />
              <span>PREMIUM QUALITY</span>
            </div>
            <div className="flex items-center space-x-2 min-w-40">
              <FaCheckCircle className="text-green-500" />
              <span>FASTER DELIVERY</span>
            </div>
          </div>
          <div className="hidden md:flex mr-36 mb-6">
            {/* Enquire Button */}
          <Button/>
          </div>
          
      </div>
      
      
    </section>
  );
};

export default HeroSection;
