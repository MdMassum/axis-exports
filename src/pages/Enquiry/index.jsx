import React, { useState } from 'react';
import imageOne from '../../assets/business-card-3847385_1280.jpg';


const CustEnquiry = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone:'',
    country:'',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone:'',
    country:'',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    const newErrors = { name: '', email: '', message: '', phone: '', country: '' };

    if (!formValues.name) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    if (!formValues.email || !/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = 'Valid email is required';
      valid = false;
    }
    if (!formValues.message) {
      newErrors.message = 'Message is required';
      valid = false;
    }
    if (!formValues.phone) {
      newErrors.phone = 'Phone is required';
      valid = false;
    }
    if (!formValues.country) {
      newErrors.country = 'Country is required';
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      console.log('Form submitted', formValues);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen  md:mt-16 md:mb-20">
        <div className="flex flex-1 flex-col md:flex-row w-full max-w-6xl h-[80vh] md:h-[70vh] bg-white rounded-lg">
          {/* Left side with image */}
          <div className="flex-1 hidden md:block">
            <img
              src={imageOne}
              alt="Contact Us"
              className="h-[440px] object-cover rounded-l-lg"
            />
          </div>

          {/* Right side with form */}
          <div className="flex-1 p-3 md:px-8 md:py-2 ">
          <h2 className="text-3xl font-semibold mb-2 text-center text-[#62b179] -mt-6">Enquire Us</h2>
            <form onSubmit={handleSubmit} className="space-y-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 -mt-4">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formValues.name}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 border-2 rounded-md shadow-sm focus:border-gray-400 focus:ring-gray-400 sm:text-sm p-3 transition-transform duration-300 transform "
                />
                {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 border-2 rounded-md shadow-sm focus:border-gray-400 focus:ring-gray-400 sm:text-sm p-3 transition-transform duration-300 transform "
                />
                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
              </div>
              <div className='flex md:flex-row flex-col gap-2 w-full'>
                <div className='w-full md:w-1/2'>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  name="phone"
                  value={formValues.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full  border-gray-300 border-2 rounded-md shadow-sm focus:border-gray-400 focus:ring-gray-400 sm:text-sm p-3 transition-transform duration-300 transform "
                />
                {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
                </div>
                <div className='w-full md:w-1/2'>
                <label className="block text-sm font-medium text-gray-700">Country</label>
                <input
                  name="country"
                  value={formValues.country}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 border-2 rounded-md shadow-sm focus:border-gray-400 focus:ring-gray-400 sm:text-sm p-3 transition-transform duration-300 transform "
                />
                {errors.country && <p className="text-red-600 text-sm mt-1">{errors.country}</p>}
                </div>
                
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={formValues.message}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full border-gray-300 border-2 rounded-md shadow-sm focus:border-gray-400 focus:ring-gray-400 sm:text-sm p-3 transition-transform duration-300 transform  "
                />
                {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
              </div>
              <div>
                <button className="w-full cursor-pointer relative group overflow-hidden border-2 px-8 py-2 border-[#62b179]">
                  <span className="font-bold text-white text-xl relative z-10 group-hover:text-[#62b179] duration-500">Contact Us</span>
                  <span className="absolute top-0 left-0 w-full bg-[#62b179] duration-500 group-hover:-translate-x-full h-full"></span>
                  <span className="absolute top-0 left-0 w-full bg-[#62b179] duration-500 group-hover:translate-x-full h-full"></span>
                  <span className="absolute top-0 left-0 w-full bg-[#62b179] duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
                  <span className="absolute delay-300 top-0 left-0 w-full bg-[#62b179] duration-500 group-hover:translate-y-full h-full mb-8"></span>
                </button>

              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustEnquiry;
