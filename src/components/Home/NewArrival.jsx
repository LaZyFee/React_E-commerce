import React from "react";
import img1 from "@/assets/Products/NewArrive/Frame 684.png";
import img2 from "@/assets/Products/NewArrive/Frame 685.png";
import img3 from "@/assets/Products/NewArrive/Frame 686.png";
import img4 from "@/assets/Products/NewArrive/Frame 687.png";

const NewArrival = () => {
  return (
    <section className="py-12 px-4 md:px-10">
      {/* Featured Tag */}
      <div className="flex items-center gap-2 mb-4">
        <span className="w-2 h-6 bg-red-500 rounded"></span>
        <p className="text-red-500 font-semibold">Featured</p>
      </div>

      {/* Section Heading */}
      <h2 className="text-3xl font-bold text-gray-900 mb-6">New Arrival</h2>

      {/* Responsive Grid Layout */}
      <div className="flex gap-5 flex-col md:flex-row">
        {/* Large Card (PlayStation 5) */}
        <div className="md:col-span-2 relative group rounded-xl overflow-hidden">
          <img
            src={img1}
            alt="PlayStation 5"
            className="w-full h-full object-contain md:aspect-[16/9] rounded-xl"
          />
        </div>

        {/* Right Section - Grid for Smaller Cards */}
        <div className="flex flex-col h-full gap-4">
          {/* Women's Collections */}
          <div className="relative group rounded-xl overflow-hidden">
            <img
              src={img2}
              alt="Women's Collections"
              className="w-full h-full object-contain rounded-xl"
            />
          </div>

          {/* Two Small Cards in Row */}
          <div className="grid grid-cols-2">
            {/* Speakers */}
            <div className="relative group rounded-xl overflow-hidden">
              <img
                src={img3}
                alt="Speakers"
                className="w-full h-full object-contain aspect-[1/1] rounded-xl"
              />
            </div>

            {/* Perfume */}
            <div className="relative group rounded-xl overflow-hidden">
              <img
                src={img4}
                alt="Perfume"
                className="w-full h-full object-contain aspect-[1/1] rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
