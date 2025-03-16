import React from "react";
import Logo from "@/assets/logo/birdlogo.webp";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitterSquare,
} from "react-icons/fa";
import Newsletter from "../Home/Newsletter";

const Footer = () => {
  return (
    <div
      className=" bg-gradient-to-r from-cyan-500 via-black to-indigo-600 text-white text-center p-10 
     shadow-cyan-600 shadow-xl"
    >
      <footer className="footer sm:footer-horizontal">
        <aside>
          {/* Logo */}
          <img
            src={Logo}
            alt="Ehal.Pt Logo"
            className="w-24 mx-auto md:mx-0 rounded-full"
          />
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <Newsletter />
        </form>
      </footer>

      {/* Social Media */}
      <div className="border-t border-cyan-300 text-end text-sm flex flex-col md:flex-row gap-3 justify-around items-center mt-5">
        <div className="text-center md:text-left flex flex-col md:flex-row justify-between gap-5 mt-5">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-6 text-2xl">
            <a
              href="#"
              className="text-blue-800 hover:text-blue-500 transition duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-pink-800 hover:text-pink-500 transition duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-blue-800 hover:text-blue-500 transition duration-300"
            >
              <FaTwitterSquare />
            </a>
            <a
              href="#"
              className="text-red-800 hover:text-red-500 transition duration-300"
            >
              <FaPinterest />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <p>
          &copy;{new Date().getFullYear()}
          <span className="text-red-500">Ehal.pt</span>. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
