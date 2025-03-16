import React from "react";
import img1 from "@/assets/hero/11.jpg";
import img2 from "@/assets/hero/kafela.jpg";
import img3 from "@/assets/hero/22.webp";
import img4 from "@/assets/hero/33.jpg";
import img5 from "@/assets/hero/sunset-desert-mosque.jpg";

const MultiBanner = () => {
  return (
    <div className="m-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* First Banner */}
        <div className="relative h-60 md:h-80 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
          <img
            src={img1}
            alt="New Arrivals"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/50 flex flex-col items-center justify-center text-white text-center p-4">
<h1 className="font-bold text-2xl py-2">
 20% Off On Elegant Ladies Bag
</h1>           
 <p className=" font-light">
              Step Into Style - Explore Our Latest Collection!
            </p>
            <button className="btn btn-success mt-4 transform transition duration-300 hover:scale-105">
              Discover Your Style
            </button>
          </div>
        </div>
        {/* Second Banner */}
        <div className="relative h-60 md:h-80 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
          <img
            src={img2}
            alt="New Arrivals"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/60 flex flex-col items-center justify-center text-white text-center p-4">
          <h1 className="font-bold text-2xl py-2">
          Explore More Now
</h1>   
            <p className="font-light">
              Find Your Perfect Product With Us <br /> New Arrivals!
            </p>
            <button className="btn btn-success mt-4 transform transition duration-300 hover:scale-105">
              Shop New Arrivals
            </button>
          </div>
        </div>
        {/* Third Banner */}
        <div className="relative h-60 md:h-80 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
          <img
            src={img3}
            alt="Season Sale"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/50 flex flex-col items-center justify-center text-white text-center p-4">
          <h1 className="font-bold text-2xl py-2">
          Eid Special Offer On Shawls!
</h1>   
           
            <p className="text-sm md:text-lg">Celebrate Eid in Style with Our Premium Shawls, enjoy 30% off on all shawls.</p>
            <button className="btn btn-success mt-4 transform transition duration-300 hover:scale-105">
              Grab the Deal
            </button>
          </div>
        </div>
        {/* Fourth Banner */}
        <div className="relative h-60 md:h-80 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
          <img
            src={img4}
            alt="Season Sale"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/50 flex flex-col items-center justify-center text-white text-center p-4">
          <h1 className="font-bold text-2xl py-2">
          Buy 1, Get 1 Free on Jackets!
</h1>   
            <p className="
            font-light">Double the Warmth, Double the Style!</p>
           
            <button className="btn btn-success mt-4 transform transition duration-300 hover:scale-105">
              Shop Now
            </button>
          </div>
        </div>
        {/* Fifth Banner */}
        <div className="relative h-60 md:h-80 sm:col-span-2 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
          <img
            src={img5}
            alt="Limited Offer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/60 flex flex-col items-center justify-center text-white text-center p-4 ">
            <p className=" font-light">Explore Our World</p>
            <button className="btn btn-success mt-4 transform transition duration-300 hover:scale-105">
            Begin Your Adventure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiBanner;
