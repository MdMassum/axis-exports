import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import logo from "../../../assets/logo.jpg";
import leaves from "../../../assets/multipleLeaf.png";

const Contact = () => {
  return (
    <div id="contactUs" className="w-full md:w-[85%] flex flex-col md:flex-row mx-auto p-5 md:p-0 items-center justify-between md:gap-32 gap-8 md:py-8 bg-white rounded-lg ">
      {/* Logo Section */}
      <div className="border-2 border-blue-300 p-6 rounded-lg flex items-center justify-center md:w-1/2">
        <img src={logo} alt="Company Logo" className="w-80" />
      </div>

      {/* Contact Section */}
      <div className="w-full md:w-1/2 text-green-800 text-left">
        <div className="w-full flex items-center mb-7 md:mb-16">
          <div className="flex flex-row md:flex-col items-center justify-center md:gap-0 font-bold">
            <h2 className="text-6xl md:text-7xl text-left min-w-56">Get in</h2>
            <h2 className="text-lime-600 text-6xl md:-mt-2 md:text-7xl -ml-14 md:ml-0">touch!</h2>
          </div>

          <img src={leaves} alt="" className="hidden -ml-16 md:flex md:w-40" />
        </div>

        <div className=" md:mt-4 space-y-2 md:space-y-4">
          <div className="flex items-center space-x-3">
            <FaInstagram className="text-pink-500 text-2xl" />
            <span className="font-bold text-lg">@RTYUIO</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaFacebookF className="text-blue-500 text-2xl" />
            <span className="font-bold text-lg">@RTYUIO</span>
          </div>
          <div className="flex items-center space-x-3 mb-6">
            <FaWhatsapp className="text-green-500 text-2xl" />
            <span className="font-bold text-lg">@RTYUIO</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
