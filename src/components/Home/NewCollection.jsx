import all_product from "@/assets/Data/all_product";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const TABS = ["All", "Men", "Women", "Kid"];

const NewCollection = () => {
  const [visibleProducts, setVisibleProducts] = useState(9);
  const [activeTab, setActiveTab] = useState("All");

  const filteredProducts =
    activeTab === "All"
      ? all_product
      : all_product.filter(
          (product) => product.category === activeTab.toLowerCase()
        );

  return (
    <div className="mx-auto max-w-2xl px-4 sm:pt-24 lg:max-w-6xl lg:px-10">
      <h2 className="text-4xl font-bold tracking-tighter text-gray-900 text-center font-serif">
        Popular
      </h2>
      <p className="text-center mt-3 md:px-36 font-mono">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, optio
        impedit eligendi voluptas dolorem esse quasi repudianda Lorem
      </p>

      {/* Tabs */}
      <div className="flex justify-center mt-6 space-x-4">
        {TABS.map((tab) => (
          <button
            key={tab}
            className={`px-6 py-2 text-lg font-medium rounded-md transition-colors duration-200 ${
              activeTab === tab
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => {
              setActiveTab(tab);
              setVisibleProducts(9);
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 px-6 md:px-0 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.slice(0, visibleProducts).map((product) => (
          <div
            key={product.id}
            className="group relative  p-4  h-[400px] flex flex-col justify-between"
          >
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 h-96">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <h3 className="text-sm text-gray-700 font-mono">
                {product.name}
              </h3>
              <p className="text-sm font-medium text-gray-900">
                ${product.new_price}
              </p>
            </div>
            <div className="flex justify-end gap-3 mt-5 items-center">
              <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-red-500 transition duration-200">
                Add to Cart
              </button>
              <Link
                to={`/products/${product.id}`}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-red-500 transition duration-200"
              >
                View
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="text-center mt-8">
        {visibleProducts < filteredProducts.length && (
          <button
            onClick={() => setVisibleProducts((prev) => prev + 9)}
            className="btn btn-outline btn-primary px-6 py-3 text-lg hover:scale-105 transition-transform duration-200"
          >
            Show More
          </button>
        )}
        {visibleProducts > 9 && (
          <button
            onClick={() => setVisibleProducts(9)}
            className="btn btn-outline btn-secondary px-6 py-3 text-lg ml-4 hover:scale-105 transition-transform duration-200"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default NewCollection;
