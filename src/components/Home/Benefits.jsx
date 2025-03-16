import React from "react";
import { MdOutlineLocalShipping, MdOutlinePayment } from "react-icons/md";
import { Ri24HoursLine } from "react-icons/ri";
import { FaExchangeAlt } from "react-icons/fa";

const benefits = [
  {
    id: 1,
    icon: <MdOutlineLocalShipping className="text-5xl text-blue-500" />,
    title: "Free Shipping",
    description: "On all orders over $50",
  },
  {
    id: 2,
    icon: <Ri24HoursLine className="text-5xl text-green-500" />,
    title: "24x7 Service",
    description: "Always here to help you",
  },
  {
    id: 3,
    icon: <FaExchangeAlt className="text-5xl text-yellow-500" />,
    title: "Easy Return",
    description: "Hassle-free returns within 30 days",
  },
  {
    id: 4,
    icon: <MdOutlinePayment className="text-5xl text-red-500" />,
    title: "Secure Payment",
    description: "Safe and multiple payment options",
  },
];

const Benefits = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Why Shop With Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-white shadow-xl p-6 rounded-lg flex flex-col items-center transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {benefit.icon}
              <h3 className="text-xl font-semibold mt-4 text-gray-800">
                {benefit.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
