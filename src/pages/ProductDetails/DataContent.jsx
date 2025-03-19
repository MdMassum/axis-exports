import React from "react";

function DataContent({product}) {
  return (
    <div className="w-full flex flex-col gap-6 md:gap-8 px-5 mb-6 md:mb-0 md:px-0">
      <div className="flex flex-col gap-4">
        <p className="text-2xl font-semibold">{product?.name}</p>
        <p className="text-gray-700">
          <span className="font-semibold text-black">Description - </span>
          {product?.description}
        </p>
      </div>

      <a href="/enquiry" className="w-44">
        <button className="py-2 px-4 rounded-md bg-gradient-to-r from-green-600 to-green-700 text-white font-bold cursor-pointer hover:opacity-95">Enquire Now !!</button>
      </a>
    </div>
  );
}

export default DataContent;
