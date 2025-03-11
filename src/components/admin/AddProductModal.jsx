import React, { useState } from "react";
import axios from "axios";
import { FiX, FiLoader } from "react-icons/fi"; // 🔹 Added FiLoader for better UX

function AddProductModal({ setIsOpen, products, setProducts }) {

  const [formData, setFormData] = useState({ name: "", description: "", price: 0 });
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setImages(e.target.files);
  };

  const handleCreatePost = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("price", formData.price);

    for (let image of images) {
      data.append("images", image);
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/v1/product/new`,
        data,
        { withCredentials: true, headers: { "Content-Type": "multipart/form-data" } }
      );

      setProducts([response.data.post, ...products]);

      setFormData({ name: "", description: "", price: 0 });
      setImages([]);
      setIsOpen(false);

    } catch (error) {
      setError(error.response?.data?.message || "Failed to create product. Please try again.");
      console.error("Error creating product:", error);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-green-600">Add Product</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-600 hover:text-black"
          >
            <FiX size={20} />
          </button>
        </div>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full p-2 border rounded mb-3 bg-transparent text-gray-700"
          value={formData.name}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          className="w-full p-2 border rounded mb-3 h-24 bg-transparent text-gray-700"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
        <input
          type="number"
          name="price"
          placeholder="Price"
          className="w-full p-2 border rounded mb-3 bg-transparent text-gray-700"
          value={formData.price}
          onChange={handleChange}
        />
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          className="w-full p-2 border rounded mb-3 bg-transparent text-gray-700 cursor-pointer"
        />

        <button
          onClick={handleCreatePost}
          className="w-full cursor-pointer bg-green-600 text-white p-2 rounded hover:bg-green-700 disabled:bg-gray-400 flex justify-center items-center gap-2"
          disabled={loading}
        >
          {loading && <FiLoader className="animate-spin" />} {loading ? "Creating..." : "Create"}
        </button>
      </div>
    </div>
  );
}

export default AddProductModal;
