import React, { useEffect, useState } from "react";
import Card from "../../../components/admin/Card";
import AddProductModal from "../../../components/admin/AddProductModal";
import axios from "axios";
import { FiLoader } from "react-icons/fi";

const Dashboard = () => {

  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchProduct = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/v1/products`,
        { withCredentials: true }
      );

      console.log(response);
      if (response?.data?.success === true) {
        setProducts(response.data.products);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="flex flex-col p-6 bg-gray-100 min-h-screen ml-44">
      <div className="flex items-center justify-between mb-8 mt-2 pr-10">
        <h1 className="text-3xl font-semibold text-green-700">All Products</h1>

        <button
          className="bg-green-600 text-white px-3 py-2 rounded-lg hover:opacity-90 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          Add Product
        </button>
        {isOpen && <AddProductModal setIsOpen={setIsOpen} products={products} setProducts={setProducts} />}
      </div>

      {loading ? (
        <div className="flex justify-center items-center w-full h-80">
          <FiLoader className="animate-spin text-green-600 text-4xl" />
        </div>
      ) : products.length === 0 ? (
        <div className="text-center w-full text-xl text-gray-500">No Products Found</div>
      ) : (
        <div className="flex flex-wrap items-center gap-6">
          {products.map((product, index) => (
            <Card key={index} product={product} setProducts={setProducts} setLoading={setLoading}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
