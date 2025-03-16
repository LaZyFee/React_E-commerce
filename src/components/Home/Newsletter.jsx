import React from "react";
import { HiOutlineMailOpen } from "react-icons/hi";

const Newsletter = () => {
  return (
    <div className="">
      <h3 className="text-2xl font-semibold flex justify-center items-center space-x-2 mb-4">
        <HiOutlineMailOpen className="text-4xl" />
        <span>Join our newsletter</span>
      </h3>
      <p className="mt-3 text-sm sm:text-base md:text-lg">
        Subscribe to get special offers, free giveaways, and more.
      </p>
      <form action="" className="mt-6 flex justify-center items-center">
        <input
          type="email"
          placeholder="Your Email Address"
          className="p-3 rounded-l-md bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <button
          type="submit"
          className="bg-pink-500 hover:opacity-80 text-white px-6 py-3 rounded-r-md transition duration-300 ease-in-out"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
