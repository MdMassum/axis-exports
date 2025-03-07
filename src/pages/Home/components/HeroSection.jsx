import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import HeroImg from '../../../assets/heroImg1.png'
import Button from "../../../components/Button";

const HeroSection = () => {
  return (
    <section className="bg-green-700 relative text-white pt-20">
      <div className="w-full mx-auto md:flex md:items-center md:justify-center px-2 mt-7 md:mt-0 md:px-0">
        {/* Left Content */}
        <div className="w-full md:w-1/2 md:pl-28">
          <h1 className="text-6xl md:text-6xl font-bold mb-1">
            Herbal &
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold mb-1 min-w-56">
            Organic Product
          </h1>
          <h1 className="text-6xl md:text-6xl font-bold mb-8">
            Exporter
          </h1>
          <p className="text-lg mb-6 max-w-96">
            India’s leading worldwide exporter of Natural & Organic Products
          </p>
          
        </div>

        {/* Right Image */}
        <div className="hidden md:flex w-1/2 relative mt-6 md:mt-0">
          <img
            src={HeroImg}
            alt="Organic Products"
            className="w-full rounded-lg"
          />
        </div>
      </div>

      <div className="flex justify-between items-center gap-2 md:-mt-6 ">
      <div className="flex flex-wrap bg-white text-black py-5 md:py-7 pl-4 md:pl-24 text-sm font-semibold md:rounded-r-4xl">
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
          <div className="hidden md:flex mr-20">
            {/* Enquire Button */}
          <Button/>
          </div>
          
      </div>
      
      
    </section>
  );
};

export default HeroSection;
