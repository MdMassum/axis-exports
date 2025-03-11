import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FiLoader } from 'react-icons/fi';

function Enquiry() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEnquiries = async () => {
    try {
      // const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/enquiries`, { withCredentials: true });
      // if (response?.data?.success) {
      //   setEnquiries(response.data.enquiries);
      // }
    } catch (error) {
      console.error("Error fetching enquiries:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  return (
    <div className="flex flex-col p-6 bg-gray-100 ml-44 h-screen">
      <div className="flex items-center justify-between mb-8 mt-2 pr-10">
        <h1 className="text-3xl font-semibold text-green-700">All Enquiries</h1>
      </div>

      <div>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <FiLoader className="animate-spin text-green-700 text-4xl" />
          </div>
        ) : enquiries.length === 0 ? (
          <p className="text-center text-gray-500">No Enquiries Found</p>
        ) : (
          <div className="flex flex-wrap gap-4">
            {enquiries.map((enquiry) => (
              <div
                key={enquiry._id}
                className="bg-white p-4 rounded-lg shadow-md border w-80"
              >
                <h3 className="text-lg font-bold text-green-700 mb-2">
                  {enquiry.subject}
                </h3>
                <p className="text-sm text-gray-600">{enquiry.message}</p>
                <p className="text-sm text-gray-400 mt-2">By: {enquiry.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Enquiry;
