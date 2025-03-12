import { useEffect, useState } from "react";
import titleImg from "../../../assets/titlebg.png";
import ProductCard from "../../../components/ProductCard";
import axios from "axios";

const ProductCategory = () => {

  const [products, setProducts] = useState([]);

  const fetchProduct = async() =>{

    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/products`,
      { withCredentials: true })

      console.log(response);
      if(response?.data?.success === true){
        setProducts(response.data.products)
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, [products])

  return (
    <div id="category" className="flex flex-col items-center p-6 md-pt-3 md:pb-10">
      <div className="flex flex-col items-center">
        <h2 className="text-green-700 text-6xl font-bold flex flex-col items-center text-center mt-10 -mb-6">
          Product Categories
          <img src={titleImg} alt="" className="w-96 -mt-24" />
        </h2>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-5">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
