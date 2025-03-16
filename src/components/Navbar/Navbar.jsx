import React from "react";
import { FiGift } from "react-icons/fi";
import { FaRegHeart, FaUserCircle } from "react-icons/fa";
import { LiaCartPlusSolid } from "react-icons/lia";
import { Link, NavLink } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import Logo from "@/assets/logo/birdlogo.webp";

const Navbar = () => {
  const menuItems = [
    { name: "Eid Collection", path: "/" },
    { name: "Men", path: "/men" },
    { name: "Women", path: "/women" },
    { name: "Kids", path: "/kids" },
    { name: "Gift Voucher", path: "/gift" },
  ].map((item) => (
    <NavLink key={item.name} to={item.path} className="hover:text-cyan-500 ">
      {item.name}
    </NavLink>
  ));

  const categoryItems = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
  ].map((item, index) => (
    <li key={index} className="hover:text-cyan-500 py-2 font-bold">
      <a href="#">{item}</a>
    </li>
  ));

  return (
    <div className="fixed top-0 left-0 w-full bg-black backdrop-blur-lg text-white z-50 shadow-2xl ">
      <div className=" px-2 py-3 flex justify-between items-center">
        <div className="lg:hidden "></div>
        {/* Logo & Mobile Menu */}
        <div className="flex justify-items-end">
          <div className="dropdown  lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
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
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-5 shadow bg-gray-900 rounded-box w-48 text-white "
            >
              {menuItems}
              <li>
                <details>
                  <summary>Category</summary>
                  <ul className="p-2 ">{categoryItems}</ul>
                </details>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-1">
            <img src={Logo} alt="logo" className="w-10 rounded-full " />
            E-commerce
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          {menuItems}
          <div className="dropdown dropdown-hover">
            <label
              tabIndex={0}
              className="cursor-pointer flex items-center justify-center gap-1"
            >
              Category <FaAngleDown />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-black rounded-box w-48 p-2 shadow-lg"
            >
              {categoryItems}
            </ul>
          </div>
        </div>
        <div className="hidden md:flex lg:flex space-x-6 text-black">
          <label className="input">
          <input type="search" className="" placeholder="Search" />
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            > <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
             
            </svg>
            
          
          </label>
        </div>

        {/* Icons Section */}

        <div className="flex justify-center items-center space-x-2">
          <FaRegHeart className="text-sm md:text-2xl hover:scale-120 hover:text-cyan-500 transition cursor-pointer" />
          <FaUserCircle className="hover:scale-120 hover:text-cyan-500 transition cursor-pointer text-sm md:text-xl" />
          <LiaCartPlusSolid className="hover:scale-120 hover:text-cyan-500 transition cursor-pointer text-sm md:text-xl" />

          {/* Festival Offer */}
          <div className="hidden lg:flex flex-col items-center ">
            <FiGift className="text-2xl mb-1" />
            <span className="text-sm ">Festival Offer</span>
          </div>
        </div>
        <div className="lg:hidden"></div>
      </div>
    </div>
  );
};

export default Navbar;
