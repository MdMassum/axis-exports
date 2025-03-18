import React from "react";
import InfoCard from "../../../components/InfoCard";
import titleImg from "../../../assets/titlebg.png";
import exploreImg from "../../../assets/exploreImg.png";
import bgImage from "../../../assets/treebg.png";
import leaf from "../../../assets/multipleLeaf.png";
import twoleaf from "../../../assets/twoLeaf1.png";
import Button from "../../../components/Button";

const AboutUs = () => {
  return (
    <section className="py-10 md:pt-24 px-4 -mb-10 overflow-x-hidden" id="aboutUs">
      <div className="mx-auto">
        {/* Title */}
        <div className="md:relative flex flex-col items-center md:w-[90%] mx-auto">
          <div className="flex">
            <img
              src={leaf}
              alt=""
              className="hidden absolute lg:flex w-130 -left-40 -top-36"
            />
            <h2 className="text-green-700 text-6xl font-bold flex flex-col items-center z-30">
              About Us
              <img src={titleImg} alt="" className="w-96 -mt-24 z-30" />
            </h2>
          </div>
        </div>

        {/* Subtitle / Description */}
        <p className="max-w-3xl mx-auto text-center text-black -mt-10 mb-10">
          We’re passionate about organic living and committed to making
          high-quality, chemical-free food accessible globally. Partnering with
          ethical farmers, we ensure every product meets top international
          standards.
        </p>

        {/* Background Image with Dark Overlay */}
        {/* <div className="relative z-10 bg-center bg-no-repeat -mx-4"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "0px",
            padding: "2rem",
          }}
        > */}
          <div className="relative z-20 md:w-[90%] mx-auto">
            {/* Mission and Vision Cards */}
            <div className="flex flex-col md:flex-row justify-center items-center -space-y-4 md:space-y-0 md:gap-0 mb-10">
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
            <div className="relative rounded-md py-2 md:pt-16">
              <h1 className="text-6xl md:text-7xl font-bold text-center text-green-700 mb-1">
                Explore
              </h1>
              <div className="relative">
                <img
                  src={twoleaf}
                  alt=""
                  className="w-72 -top-20 absolute hidden lg:flex z-10"
                />
                <h2 className="text-6xl font-bold text-center mb-4 text-green-700 z-30">
                  Wide Range of Products
                </h2>
                <img
                  src={twoleaf}
                  alt=""
                  className="w-[600px] -right-44 top-10 absolute hidden lg:flex"
                />
              </div>
              <p className="text-center">
                We offer a carefully curated selection of premium organic
                products
              </p>

              <div className="flex justify-between items-center ">
                <img
                  src={exploreImg}
                  alt=""
                  className="md:h-[400px] rounded-full object-contain z-30"
                />
              </div>
              <a
                href="/enquiry"
                className="w-full md:w-48 flex justify-center md:absolute md:bottom-6 md:right-0 mr-24"
              >
                <Button />
              </a>
            </div>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
};

export default AboutUs;
