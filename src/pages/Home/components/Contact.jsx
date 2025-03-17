import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import logo from "../../../assets/logo.jpg";
import leaves from "../../../assets/multipleLeaf.png";

const Contact = () => {
  return (
    <div id="contactUs" className="w-full md:w-[85%] flex flex-col md:flex-row mx-auto p-5 md:p-0  justify-between md:gap-16 gap-8 md:my-10 md:py-6 bg-white rounded-lg ">
      {/* Logo Section */}
      <div className="border-2 border-blue-300 p-6 rounded-lg flex items-center justify-center md:w-1/2">
        <img src={logo} alt="Company Logo" className="w-[480px]" />
      </div>

      {/* Contact Section */}
      <div className="flex flex-col justify-between  w-full md:w-1/2 text-green-800 text-left">
        <div className="w-full flex items-center mb-7 md:mb-16">
          <div className="flex flex-row md:flex-col items-center justify-center md:justify-start md:gap-0 font-bold md:-ml-6 md:-mt-4">
            <h2 className="text-6xl md:text-8xl lg:text-9xl text-left min-w-56 md:-ml-9">Get in</h2>
            <h2 className="text-lime-500 text-6xl md:-mt-4 md:text-8xl lg:text-9xl -ml-14 md:ml-0">touch!</h2>
          </div>

          <img src={leaves} alt="" className="absolute right-0 mb-16 mr-4 hidden lg:flex w-80" />
        </div>

        <div className=" md:mt-4 space-y-2 md:space-y-4 md:-ml-4">
          <div className="flex items-center space-x-3">
            <FaInstagram className="text-pink-500 text-2xl md:text-5xl" />
            <span className="font-bold text-lg md:text-3xl">@RTYUIO</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaFacebookF className="text-blue-500 text-2xl md:text-5xl" />
            <span className="font-bold text-lg md:text-3xl">@RTYUIO</span>
          </div>
          <div className="flex items-center space-x-3 mb-6">
            <FaWhatsapp className="text-green-500 text-2xl md:text-5xl" />
            <span className="font-bold text-lg md:text-3xl">@RTYUIO</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
