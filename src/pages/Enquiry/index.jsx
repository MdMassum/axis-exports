import React, { useState } from "react";
import axios from "axios";
import imageOne from "../../assets/logo.jpg";
import titleImg from "../../assets/titlebg.png";

const CustEnquiry = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    product: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/v1/contact/new`,
        { name:formValues.name, email:formValues.email, phone:formValues.phone,
        country:formValues.country, product:formValues.product, message:formValues.message },
        { withCredentials: true });

      if(response.success === false){
        console.error("Error submitting form:", error);
      }
      setFormSubmitted(true);
      setFormValues({ name: "", email: "", phone: "", country: "", product: "", message: "",});
      setTimeout(() => setFormSubmitted(false), 7000);
      
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit the form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col min-h-screen mt-28 mb-44 md:mb-28 gap-10">
        <div className="flex flex-col items-center -mb-20 md:-mb-4">
          <h2 className="text-green-700 text-5xl font-bold flex flex-col items-center text-center -mb-6">
            Enquire Us
            <img src={titleImg} alt="" className="w-96 -mt-24" />
          </h2>
        </div>

        <div className="flex items-center justify-center mt-4">
          <div className="flex flex-1 flex-col items-center md:flex-row w-full max-w-6xl h-[80vh] md:h-[70vh] bg-white rounded-lg">
            <div className="flex-1 hidden md:block">
              <img
                src={imageOne}
                alt="Contact Us"
                className="h-[440px] object-cover rounded-l-lg"
              />
            </div>

            <div className="flex-1 p-3 md:px-8 md:py-2 w-full px-5">
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formValues.name}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 border-2 rounded-md shadow-sm focus:border-gray-400 focus:ring-gray-400 sm:text-sm p-3"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formValues.email}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 border-2 rounded-md shadow-sm focus:border-gray-400 focus:ring-gray-400 sm:text-sm p-3"
                  />
                </div>

                <div className="flex md:flex-row flex-col gap-2 w-full">
                  <div className="w-full md:w-1/2">
                    <label className="block text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      required
                      value={formValues.phone}
                      onChange={handleChange}
                      className="mt-1 block w-full border-gray-300 border-2 rounded-md shadow-sm focus:border-gray-400 focus:ring-gray-400 sm:text-sm p-3"
                    />
                  </div>

                  <div className="w-full md:w-1/2">
                    <label className="block text-sm font-medium text-gray-700">
                      Country
                    </label>
                    <input
                      type="text"
                      name="country"
                      required
                      value={formValues.country}
                      onChange={handleChange}
                      className="mt-1 block w-full border-gray-300 border-2 rounded-md shadow-sm focus:border-gray-400 focus:ring-gray-400 sm:text-sm p-3"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Select Product
                  </label>
                  <select
                    name="product"
                    required
                    value={formValues.product}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 border-2 rounded-md shadow-sm focus:border-gray-400 focus:ring-gray-400 sm:text-sm p-3"
                  >
                    <option value="">Select a Product</option>
                    <option value="coconut oil">Coconut Oil</option>
                    <option value="black pepper">Black Pepper</option>
                    <option value="wooden bottle">Wooden Bottle</option>
                    <option value="ginger garlic powder">
                      Ginger Garlic Powder
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formValues.message}
                    onChange={handleChange}
                    rows={4}
                    className="mt-1 block w-full border-gray-300 border-2 rounded-md shadow-sm focus:border-gray-400 focus:ring-gray-400 sm:text-sm p-3"
                  />
                </div>

                {formSubmitted && (
                  <p className="text-green-600 text-left mb-4 font-semibold">
                    Form submitted successfully!
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full cursor-pointer mt-2 relative group overflow-hidden border-2 px-8 py-2 border-[#62b179]"
                >
                  {loading ? "Submitting..." : "Send"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustEnquiry;
