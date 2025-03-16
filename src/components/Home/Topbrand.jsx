import React from "react";
import Marquee from "react-fast-marquee";

const brands = [
  { id: 1, name: "Aerie" },
  { id: 2, name: "Baci Lingerie" },
  { id: 3, name: "Gerbe" },
  { id: 4, name: "Jolidon" },
  { id: 5, name: "Oysho" },
  { id: 6, name: "Ultimo" },
  { id: 7, name: "Vassarette" },
  { id: 8, name: "Wonderbra" },
];

const TopBrand = () => {
  return (
    <div className="m-4 text-center">
      <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl my-8 text-primary">
        TOP BRANDS
      </h2>
      <Marquee
        pauseOnHover={true}
        gradient={true}
        gradientWidth={50}
        speed={60}
        delay={1}
      >
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="bg-white border border-gray-300 shadow-lg px-10 py-3 mx-5 rounded-lg text-lg font-semibold text-gray-700 hover:bg-blue-600 hover:text-white transition duration-300 transform hover:scale-105"
          >
            {brand.name}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default TopBrand;
