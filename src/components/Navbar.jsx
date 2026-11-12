"use client";
import Link from "next/link";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { FaArrowRightLong } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiX } from "react-icons/fi";
import { useContext, useState } from "react";
import Hamburger from "./Hamburger";
import { MenuContext } from "./MenuContext";

export default function Navbar() {
  const url = usePathname();
  const [menu, setMenu] = useState([]);
  const [hamicon, setHamIcon] = useState(true);

  return (
    <div className="border-b-3 border-[#b91c1c] z-20 fixed w-full bg-white">
      <div className="bg-black text-white justify-between hidden lg:flex">
        <div className="flex gap-10 ml-20 py-2">
          <h1 className="flex items-center text-xs">
            <IoMdMail />
            info@ashatech.co.in
          </h1>
          <h1 className="flex items-center text-xs">
            <FaPhoneAlt />
            +91 8510026464
          </h1>
          <h1 className="flex items-center text-xs">
            <FaLocationDot />
            Delhi, India
          </h1>
        </div>
        <div className="flex mr-20 gap-3 justify-center items-center">
          <h1 className="text-xs">Mon - Sat (10 AM - 7 PM)</h1>
          <div className="flex gap-2">
            <span className="bg-white text-xs flex items-center justify-center w-5 h-5 text-black rounded-[50%]">
              <FaFacebookF />
            </span>
            <span className="bg-white text-xs flex items-center justify-center w-5 h-5 text-black rounded-[50%]">
              <FaLinkedinIn />
            </span>
            <span className="bg-white text-xs flex items-center justify-center w-5 h-5 text-black rounded-[50%]">
              <FaInstagram />
            </span>
            <span className="bg-white text-xs flex items-center justify-center w-5 h-5 text-black rounded-[50%]">
              <FaYoutube />
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-between ">
        <div className="flex pl-2 md:pl-2 lg:pl-20">
          <img src="/logo.webp" alt="logo image" className="h-13 " />
          <Link href="/" className="flex flex-col">
            <h1 className="text-2xl font-semibold">AshaTech</h1>
            <span className="text-xs font-bold text-gray-500">
              SOLUTIONS FOR YOUR BUSINESS
            </span>
          </Link>
        </div>
        <div className="lg:flex -mr-78 gap-5 text-gray-600 items-center hidden">
          <Link
            href={`/`}
            className={` font-semibold hover:text-red-800 ${url == "/" ? "text-red-700" : "text-gray-600"}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={` font-semibold hover:text-red-800 ${url == "/about" ? "text-red-700" : "text-gray-600"}`}
          >
            About Us
          </Link>

          <div className="group">
            <Link
              href={``}
              className={`flex items-center hover:flex group font-semibold hover:text-red-800 ${url.startsWith("/services/") ? "text-red-700" : "text-gray-600"}`}
            >
              Services
              <IoIosArrowDown />
            </Link>
            <div className="absolute flex-col gap-1 bg-white shadow-2xl border border-gray-300 rounded-md py-4 px-6 space-y-2 hidden group-hover:flex">
              <Link
                className={` font-semibold hover:text-red-800 ${url == "/services/web-development" ? "text-red-700" : "text-gray-600"}`}
                href={`services/web-development`}
              >
                Web Development
              </Link>
              <Link
                className={` font-semibold hover:text-red-800 ${url == "/services/app-development" ? "text-red-700" : "text-gray-600"}`}
                href={`/services/app-development`}
              >
                App Development
              </Link>
              <Link
                className={` font-semibold hover:text-red-800 ${url == "/services/software-development" ? "text-red-700" : "text-gray-600"}`}
                href={`/services/software-development`}
              >
                Software Development
              </Link>
              <Link
                className={` font-semibold hover:text-red-800 ${url == "/services/digital-marketing" ? "text-red-700" : "text-gray-600"}`}
                href={`/services/digital-marketing`}
              >
                Digital Marketing
              </Link>
              <Link
                className={` font-semibold hover:text-red-800 ${url == "/services/seo" ? "text-red-700" : "text-gray-600"}`}
                href="/Seo"
              >
                SEO Services
              </Link>
              <Link
                className={` font-semibold hover:text-red-800 ${url == "/services/It" ? "text-red-700" : "text-gray-600"}`}
                href="/It"
              >
                IT Consulting
              </Link>
              <Link
                className={` font-semibold hover:text-red-800 ${url == "/services/AiMl" ? "text-red-700" : "text-gray-600"}`}
                href="/AiMl"
              >
                AI & ML Solutions
              </Link>
              <Link
                className={` font-semibold hover:text-red-800 ${url == "Datacl" ? "text-red-700" : "text-gray-600"}`}
                href="/Datacl"
              >
                Data Cleaning
              </Link>
              <Link
                className={` font-semibold hover:text-red-800 ${url == "Datacl" ? "text-red-700" : "text-gray-600"}`}
                href="/ecommerce"
              >
                E-Commerce
              </Link>
            </div>
          </div>

          <Link
            href="/portfolio"
            className={` font-semibold hover:text-red-800 ${url == "/portfolio" ? "text-red-700" : "text-gray-600"}`}
          >
            Portfolio
          </Link>
          <Link
            href={`/review`}
            className={` font-semibold hover:text-red-800 ${url == "/review" ? "text-red-700" : "text-gray-600"}`}
          >
            Reviews
          </Link>
          <Link
            href="/blog"
            className={` font-semibold hover:text-red-800 ${url == "/blog" ? "text-red-700" : "text-gray-600"}`}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={` font-semibold hover:text-red-800 ${url == "/contact" ? "text-red-700" : "text-gray-600"}`}
          >
            Contact Us
          </Link>
          <Link
            href="/contact"
            className="bg-[#b91c1c] font-semibold flex gap-1 px-4 py-2 text-white rounded-md hover:bg-red-600"
          >
            Get a Free Quote
            <span className="flex items-center">
              <FaArrowRightLong />
            </span>
          </Link>
        </div>
        <div>
          <div className="flex lg:hidden ">
            <span
              className={`text-3xl p-2 ${hamicon === false ? "hidden" : "flex"}`}
            >
              <GiHamburgerMenu
                onClick={() => {
                  setMenu(<Hamburger />);
                  setHamIcon(false);
                }}
              />
            </span>
            <span
              className={`text-3xl p-2 ${hamicon === true ? "hidden" : "flex"}`}
            >
              <FiX
                onClick={() => {
                  setMenu([]);
                  setHamIcon(true);
                }}
              />
            </span>
          </div>
        </div>
      </div>
      <div>{menu}</div>
    </div>
  );
}
