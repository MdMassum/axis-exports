import { FaInstagram, FaFacebookF, FaWhatsapp, FaPhone } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";

import logo from "../../../assets/logo.jpg";
import leaves from "../../../assets/multipleLeaf.png";

const Contact = () => {
  return (
    <div
      id="contactUs"
      className="w-full md:w-[85%] flex flex-col md:flex-row mx-auto p-5 md:p-0  justify-between md:gap-16 gap-8 md:my-10 md:py-6 bg-white rounded-lg "
    >
      {/* Logo Section */}
      <div className="border-2 border-blue-300 p-6 rounded-lg flex items-center justify-center md:w-1/2">
        <img src={logo} alt="Company Logo" className="w-[480px]" />
      </div>

      {/* Contact Section */}
      <div className="flex flex-col justify-between  w-full md:w-1/2 text-green-700 text-left">
        <div className="w-full flex items-center mb-7 md:mb-16">
          <div
            className="flex flex-row md:flex-col items-center justify-center md:justify-start gap-5 md:gap-0 font-bold md:-ml-6 md:mt-2"
            style={{ fontFamily: "Nunito", fontWeight: 999 }}
          >
            <h2 className="text-6xl md:text-8xl text-left min-w-56 md:-ml-9">
              Get in
            </h2>
            <h2 className="text-lime-500 text-6xl md:-mt-4 md:text-8xl -ml-14 md:-ml-1">
              touch!
            </h2>
          </div>

          <img
            src={leaves}
            alt=""
            className="absolute right-4 mb-6 mr-4 hidden lg:flex w-96"
          />
        </div>

        <div className="space-y-2 md:space-y-3 md:-ml-4">
          <a
            href="https://www.instagram.com/axis_international_exports/"
            target="_blank"
            className="flex items-center space-x-4 cursor-pointer"
          >
            <FaInstagram className="text-pink-500 text-2xl md:text-4xl" />
            <span className="font-bold text-lg md:text-2xl">
              axis_international_exports
            </span>
          </a>
          <a
            href="https://www.facebook.com/people/Axis-International-Exports/61573413671024/"
            target="_blank"
            className="flex items-center space-x-4 cursor-pointer"
          >
            <FaFacebookF className="text-blue-500 text-2xl md:text-4xl" />
            <span className="font-bold text-lg md:text-2xl">
              Axis International Exports
            </span>
          </a>
          <a
            href="https://wa.me/917985538177"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 cursor-pointer"
          >
            <FaWhatsapp className="text-green-500 text-2xl md:text-4xl" />
            <span className="font-bold text-lg md:text-2xl">
              +91 7985538177
            </span>
          </a>
          <a
            href="mailto:info@axisinternationalexports.com"
            className="flex items-center space-x-4 cursor-pointer"
          >
            <MdAttachEmail className="text-blue-500  text-2xl md:text-4xl" />
            <span className="font-bold text-lg md:text-2xl">
              info@axisinternationalexports.com
            </span>
          </a>
          <a href="tel:+917985538177" className="flex items-center space-x-5 mb-6 cursor-pointer">
            <FaPhone className="text-gray-500 text-2xl md:text-3xl" />
            <span className="font-bold text-lg md:text-2xl">
              +91 7985538177
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
