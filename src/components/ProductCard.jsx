import React from "react";

function ProductCard({ product }) {
  return (
    <div className="bg-green-800 text-white rounded-xl p-3 pb-5 w-80 md:w-64 shadow-lg">
      <div className="bg-gradient-to-b from-blue-200 to-green-200 h-56 rounded-lg mb-4 overflow-hidden">
        <img src={product?.images[0]} alt={product?.name} className="w-full h-full object-cover hover:scale-105 transition-transform" />
      </div>
      <div className="flex justify-between font-bold text-lg">
        <span>{product?.name}</span>
        {/* <span>${product?.price}</span> */}
      </div>
      <div className="flex items-center justify-between gap-2 mt-1">
        <p className="text-sm opacity-80 w-full truncate">
          {product?.description}
        </p>
        <button className="min-w-24 bg-green-800 text-white font-bold rounded-xl border-2 border-white hover:bg-white hover:text-black transition cursor-pointer">
          Enquire !
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
