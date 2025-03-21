import { FaCheckCircle } from "react-icons/fa";
import chooseUsImg from "../../../assets/chooseUsImg1.png";
import leaf from "../../../assets/leaf2.png"

const ChooseUs = () => {
  const features = [
    {
      title: "Uncompromising Quality",
      description: "Every product meets global organic standards.",
    },
    {
      title: "Sustainable & Ethical",
      description: "We support eco-friendly farming.",
    },
    {
      title: "Global Reach",
      description: "Serving the USA, Europe, Middle East & Asia.",
    },
    {
      title: "Reliable Shipping",
      description: "Secure and timely delivery.",
    },
  ];

  return (
    <div className="md:w-[90%] flex flex-col md:flex-row items-center justify-between mx-auto gap-28 md:gap-14 p-6 md:py-20">
      {/* Left Side - Images */}
      <div className=" hidden md:flex w-1/2 relative rounded-lg ">
        <img
          src={chooseUsImg}
          alt="Organic Products"
          className="min-w-[700px] object-cover rounded-lg"
        />
      </div>

      {/* Right Side - Text */}
      <div className="w-full md:w-1/2 pb-10 z-30">
        <div className="w-full flex flex-col mb-10 md:mb-16 md:-mt-5">
          <div className="w-full flex items-center mb-1" >
            <h2 className=" text-5xl md:text-7xl  text-black">Why to</h2>
            <img src={leaf} alt="" className="w-20 -ml-2 mt-8" />
          </div>

          <p className="text-[#278800] text-6xl md:text-7xl font-bold -mt-4 ">Choose Us?</p>
        </div>

        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <FaCheckCircle className="text-green-600 text-xl mt-1" />
              <div>
                <h3 className="font-bold text-lg text-green-900">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChooseUs;
