import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import HeroImg from "../../../assets/heroImg1.png";
import Button from "../../../components/Button";

const HeroSection = () => {
  return (
    <section id="home" className="bg-[#278800] relative text-white pt-16 z-20">
      <div className="w-full mx-auto flex md:items-center md:justify-end pl-2  md:mt-0 md:px-0">
        {/* Left Content */}
        <div className="w-full md:absolute md:left-0 md:max-w-[680px] mt-6 md:-mt-10 md:pl-24 z-20 text-center md:text-left">
          <h1 className="text-6xl md:text-7xl font-bold md:font-semibold mb-1">Herbal &</h1>
          <h1 className="text-5xl md:text-7xl font-bold md:font-semibold mb-1 min-w-56">
            Organic Product
          </h1>
          <h1 className="text-6xl md:text-7xl font-semibold mb-8">Exporter</h1>
          <p className="text-lg md:text-xl mb-12 md:mb-6 md:max-w-96 text-center md:text-left">
            India’s leading worldwide exporter of Natural & Organic Products
          </p>
        </div>

        {/* Right Image */}
        <div className="absolute md:flex md:max-w-[800px] md:relative -mt-32 md:-mt-20 ">
          <img
            src={HeroImg}
            alt="Organic Products"
            className="w-full md:w-full rounded-lg opacity-70 md:opacity-100"
          />
        </div>
      </div>

      <div className="flex relative justify-between items-center gap-2 md:-mt-24 ">
        <div className="flex flex-wrap md:mb-6 bg-white text-black py-5 md:py-7 pl-4 md:pl-24  font-semibold md:rounded-r-4xl z-30 shadow-sm">
          <div className="flex items-center space-x-1 min-w-40">
            <FaCheckCircle className="text-green-500" />
            <span>100% ORGANIC</span>
          </div>
          <div className="flex items-center space-x-1 min-w-48">
            <FaCheckCircle className="text-green-500" />
            <span>PREMIUM QUALITY</span>
          </div>
          <div className="flex items-center space-x-1 min-w-48">
            <FaCheckCircle className="text-green-500" />
            <span>FASTER DELIVERY</span>
          </div>
        </div>
        <a href="/enquiry" className="hidden lg:flex mr-36 mb-6 z-30">
          {/* Enquire Button */}
          <Button />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
