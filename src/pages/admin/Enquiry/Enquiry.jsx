import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FiLoader, FiTrash2 } from 'react-icons/fi';

function Enquiry() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(null);

  const fetchEnquiries = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/contacts`, { withCredentials: true });
      if (response?.data?.success) {
        setEnquiries(response.data.contacts);
      }
    } catch (error) {
      console.error("Error fetching enquiries:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this enquiry?')) return;

    setDeleting(id);
    try {
      const response = await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/v1/contact/${id}`, { withCredentials: true });
      if (response?.data?.success) {
        setEnquiries((prevEnquiries) => prevEnquiries.filter((enquiry) => enquiry._id !== id));
      }
    } catch (error) {
      console.error("Error deleting enquiry:", error);
    } finally {
      setDeleting(null);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  return (
    <div className="flex flex-col p-6 bg-gray-100 ml-44 min-h-screen">
      <div className="flex items-center justify-between mb-8 mt-2 pr-10">
        <h1 className="text-3xl font-semibold text-green-700">All Enquiries</h1>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <FiLoader className="animate-spin text-green-700 text-4xl" />
        </div>
      ) : enquiries.length === 0 ? (
        <p className="text-center text-gray-500">No Enquiries Found</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-green-700 text-white">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Phone</th>
                <th className="p-3 text-left">Country</th>
                <th className="p-3 text-left">Product</th>
                <th className="p-3 text-left">Message</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {enquiries.map((enquiry) => (
                <tr key={enquiry._id} className="border-b hover:bg-green-50">
                  <td className="p-3">{enquiry.name}</td>
                  <td className="p-3">{enquiry.email}</td>
                  <td className="p-3">{enquiry.phone}</td>
                  <td className="p-3">{enquiry.country}</td>
                  <td className="p-3">{enquiry.product}</td>
                  <td className="p-3">{enquiry.message}</td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => handleDelete(enquiry._id)}
                      className="text-red-500 hover:text-red-700 focus:outline-none cursor-pointer"
                      disabled={deleting === enquiry._id}
                    >
                      {deleting === enquiry._id ? (
                        <FiLoader className="animate-spin text-red-500 " />
                      ) : (
                        <FiTrash2 />
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Enquiry;
