import React, { useState } from "react";
import img1 from "@/assets/hero/01.jfif";
import img2 from "@/assets/hero/02.webp";
import img3 from "@/assets/hero/03.jfif";
import img4 from "@/assets/hero/04.jpg";
import img5 from "@/assets/hero/33.jpg";
import img6 from "@/assets/hero/06.webp";
import img7 from "@/assets/hero/07.webp";
import img8 from "@/assets/hero/08.webp";
import img9 from "@/assets/hero/bluetoothspeaker.webp";
import img10 from "@/assets/hero/backpack.jpg";

const NewCollection = () => {
  const products = [
    {
      id: 1,
      name: "Samsung Galaxy Z",
      category: "mobile",
      image: img1,
      new_price: 1799.99,
      old_price: 1899.99,
    },
    {
      id: 2,
      name: "Running Shoes",
      category: "shoes",
      image: img2,
      new_price: 180.0,
      old_price: 220.0,
    },
    {
      id: 3,
      name: "Travel Tote Bag",
      category: "bags",
      image: img3,
      new_price: 250.0,
      old_price: 300.0,
    },
    {
      id: 4,
      name: "Aviator Sunglasses",
      category: "sunglasses",
      image: img4,
      new_price: 150.0,
      old_price: 180.0,
    },
    {
      id: 5,
      name: "Men's Trucker Jacket",
      category: "jackets",
      image: img5,
      new_price: 120.0,
      old_price: 150.0,
    },
    {
      id: 6,
      name: "Watch",
      category: "special",
      image: img6,
      new_price: 299.99,
      old_price: 399.99,
    },
    {
      id: 7,
      name: "Leather Wallet",
      category: "accessories",
      image: img7,
      new_price: 70.0,
      old_price: 90.0,
    },
    {
      id: 8,
      name: "Wireless Earbuds",
      category: "audio",
      image: img8,
      new_price: 50.0,
      old_price: 75.0,
    },
    {
      id: 9,
      name: "Bluetooth Speaker",
      category: "audio",
      image: img9,
      new_price: 99.99,
      old_price: 120.0,
    },
    {
      id: 10,
      name: "Canvas Backpack",
      category: "bags",
      image: img10,
      new_price: 40.0,
      old_price: 60.0,
    },
  ];

  const [visibleProducts, setVisibleProducts] = useState(6);

  return (
    <div className="m-4">
      <h2 className="text-primary text-center font-bold text-3xl md:text-4xl lg:text-5xl my-8">
        New Collection
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto text-lg">
        Discover the latest arrivals and get the best deals on top-quality
        products.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {products.slice(0, visibleProducts).map((product) => (
          <div key={product.id} className="card w-80  mx-auto">
            <figure>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-contain rounded-t-lg"
              />
            </figure>

            <div className="card-body">
              <div className="flex justify-between items-center">
                <h3 className="card-title text-gray-900">{product.name}</h3>
                <span className="badge badge-accent badge-lg">
                  {product.category}
                </span>
              </div>

              <div className="mt-2 flex items-center space-x-2">
                <span className="text-xl font-bold text-red-500">
                  ${product.new_price.toFixed(2)}
                </span>
                <span className="text-gray-400 line-through text-sm">
                  ${product.old_price.toFixed(2)}
                </span>
              </div>

              <div className="card-actions mt-4">
                <button className="btn btn-primary w-full hover:scale-105 transition-transform duration-200">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {visibleProducts < products.length && (
        <div className="text-center mt-8">
          <button
            onClick={() => setVisibleProducts((prev) => prev + 6)}
            className="btn btn-outline btn-primary px-6 py-3 text-lg hover:scale-105 transition-transform duration-200"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default NewCollection;
