import React from 'react';
import InfoCard from "../../../components/InfoCard";
import titleImg from "../../../assets/titlebg.png";
import exploreImg from "../../../assets/exploreImg.png";
import bgImage from "../../../assets/treebg.png";
import leaf from "../../../assets/multipleLeaf.png";
import Button from '../../../components/Button';

const AboutUs = () => {
  return (
    <section className=" pt-14 px-4">
      <div className="md:w-[90%] mx-auto">
        
        {/* Title */}
        <div className="flex flex-col items-center">
          <div className='flex '>
          <img src={leaf} alt="" className='hidden md:flex w-72 -ml-28' />
          <h2 className="text-green-700 text-6xl font-bold flex flex-col items-center">
            About Us
            <img src={titleImg} alt="" className="w-96 -mt-24" />
          </h2>
          </div>
        </div>

        {/* Subtitle / Description */}
        <p className="max-w-3xl mx-auto text-center text-black -mt-10 mb-10">
          We’re passionate about organic living and committed to making
          high-quality, chemical-free food accessible globally. Partnering
          with ethical farmers, we ensure every product meets top
          international standards.
        </p>

        {/* Background Section */}
        {/* <div className="relative w-full overflow-hidden text-white"> */}

          {/* Background Image with Enhanced Visibility */}
          {/* <div
            className="absolute inset-0 bg-cover bg-center bg-opacity-100 mix-blend-multiply"
            style={{
              backgroundImage: `url(${bgImage})`,
              clipPath: "polygon(10% 5%, 90% 0%, 100% 50%, 90% 90%, 10% 100%, 0% 50%)",
            }}
          ></div> */}

          {/* <div className="relative z-10 flex flex-col items-center"> */}
            
            {/* Mission and Vision Cards */}
            <div className="flex flex-col md:flex-row justify-center items-center md:gap-8 mb-10">
              <InfoCard
                title="Our Mission"
                text="Deliver fresh, organic, and sustainably sourced products while supporting responsible farming."
              />
              <InfoCard
                title="Our Vision"
                text="To be a global leader in organic exports, promoting healthier lives and a greener planet."
              />
            </div>

            {/* Explore Products Section */}
            <div className="relative rounded-md">
              <h1 className="text-7xl font-bold text-center text-green-700">
                Explore
              </h1>
              <h2 className="text-6xl font-bold text-center mb-4 text-green-700">Wide Range of Products</h2>
              <p className="text-center">
                We offer a carefully curated selection of premium organic products
              </p>
              
              <div className="flex justify-between items-center">
                <img
                  src={exploreImg}
                  alt=""
                  className="md:h-96 rounded-full border-4 border-white object-contain"
                />
              </div>
              <div className='w-full md:w-48 flex justify-center md:absolute md:bottom-10 md:right-0 mr-20'>
                <Button />
              </div>
            </div>

          </div>

        {/* </div> */}
      {/* </div> */}
    </section>
  );
};

export default AboutUs;
