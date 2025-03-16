import React from "react";
import { FiGift } from "react-icons/fi";
import { FaRegHeart, FaUserCircle } from "react-icons/fa";
import { LiaCartPlusSolid } from "react-icons/lia";
import { Link, NavLink } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import Logo from "@/assets/logo/birdlogo.webp";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Contact", path: "/contact" },
].map((item) => (
  <NavLink
    key={item.name}
    to={item.path}
    className="hover:text-cyan-500 transition duration-200"
  >
    {item.name}
  </NavLink>
));

const categoryItems = [
  { name: "Eid Collection", path: "/" },
  { name: "Men", path: "/men" },
  { name: "Women", path: "/women" },
  { name: "Kids", path: "/kids" },
  { name: "Gift Voucher", path: "/gift" },
].map((item) => (
  <li key={item.name} className="hover:text-cyan-500 py-2 font-bold">
    <Link to={item.path}>{item.name}</Link>
  </li>
));

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-black backdrop-blur-lg text-white z-50 shadow-2xl">
      <div className="px-4 py-3 flex justify-between items-center">
        {/* Logo & Mobile Menu */}
        <div className="flex items-center">
          {/* Mobile Dropdown */}
          <div className="dropdown lg:hidden">
            <button tabIndex={0} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-5 shadow bg-gray-900 rounded-box w-48 text-white p-2"
            >
              {menuItems}
              <li>
                <details>
                  <summary>Category</summary>
                  <ul className="p-2">{categoryItems}</ul>
                </details>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={Logo} alt="logo" className="w-10 rounded-full" />
            <span className="text-lg font-bold">E-commerce</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          {menuItems}
          {/* Category Dropdown */}
          <div className="dropdown dropdown-hover hidden lg:block">
            <button
              tabIndex={0}
              className="flex items-center gap-1 cursor-pointer"
            >
              Category <FaAngleDown />
            </button>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-black rounded-box w-48 p-2 shadow-lg"
            >
              {categoryItems}
            </ul>
          </div>
        </div>

        {/* Icons Section */}
        <div className="flex items-center space-x-4">
          {/* Icons */}
          <FaRegHeart className="text-lg md:text-2xl hover:scale-110 hover:text-cyan-500 transition cursor-pointer" />
          <FaUserCircle className="text-lg md:text-2xl hover:scale-110 hover:text-cyan-500 transition cursor-pointer" />
          <LiaCartPlusSolid className="text-lg md:text-2xl hover:scale-110 hover:text-cyan-500 transition cursor-pointer" />

          {/* Festival Offer */}
          <div className="hidden lg:flex flex-col items-center">
            <FiGift className="text-2xl mb-1" />
            <span className="text-sm">Festival Offer</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
