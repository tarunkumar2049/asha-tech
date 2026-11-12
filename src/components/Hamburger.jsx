"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useContext, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { MenuContext } from "./MenuContext";

export default function Hamburger() {
  const menu = useContext(MenuContext);
  const url = usePathname();
  const [servMenu, setServMenu] = useState(false);

  return (
    <div>
      <div className="absolute bg-white h-screen w-screen  flex-col gap-2 flex scroll-auto">
        <div className="flex flex-col overflow-scroll h-80">
          <Link
            className={`px-4 mx-3 rounded-md mt-2 py-2 ${url == "/" ? "text-red-700 bg-gray-200" : "text-gray-600"} `}
            href={`/`}
            onClick={() => {
              menu.setMenu([]);
            }}
          >
            Home
          </Link>
          <Link
            className={`px-4 mx-3 rounded-md py-2 ${url == "/about" ? "text-red-700 bg-gray-200" : "text-gray-600"} `}
            href={`/about`}
            onClick={() => {
              menu.setMenu([]);
            }}
          >
            About Us
          </Link>
          <div
            className={`px-4 mx-3 rounded-md py-2 ${url == "" ? "text-red-700 bg-gray-200" : "text-gray-600"} `}
            onClick={() => {
              setServMenu(true);
              menu.setMenu([]);
            }}
          >
            <div className="flex justify-between">
              Services
              <span className={`${servMenu == true ? "rotate-90" : ""}`}>
                <IoIosArrowForward />
              </span>
            </div>
            <div
              className={`flex-col gap-2 ${servMenu == true ? "flex" : "hidden"} `}
            >
              <Link
                className={` ml-6  ${url == "/services/web-development" ? "text-red-700 bg-gray-200" : "text-gray-600"}`}
                href={`services/web-development`}
                onClick={() => {
                  menu.setMenu([]);
                }}
              >
                Web Development
              </Link>
              <Link
                className={` ml-6  ${url == "/services/app-development" ? "text-red-700 bg-gray-200" : "text-gray-600"}`}
                href={`/services/app-development`}
                onClick={() => {
                  menu.setMenu([]);
                }}
              >
                App Development
              </Link>
              <Link
                className={` ml-6  ${url == "/services/software-development" ? "text-red-700 bg-gray-200" : "text-gray-600"}`}
                href={`/services/software-development`}
                onClick={() => {
                  menu.setMenu([]);
                }}
              >
                Software Development
              </Link>
              <Link
                className={` ml-6  ${url == "/services/digital-marketing" ? "text-red-700 bg-gray-200" : "text-gray-600"}`}
                href={`/services/digital-marketing`}
                onClick={() => {
                  menu.setMenu([]);
                }}
              >
                Digital Marketing
              </Link>
              <Link
                className={` ml-6  ${url == "/services/seo" ? "text-red-700 bg-gray-200" : "text-gray-600"}`}
                href="/Seo"
                onClick={() => {
                  menu.setMenu([]);
                }}
              >
                SEO Services
              </Link>
              <Link
                className={` ml-6  ${url == "/services/It" ? "text-red-700 bg-gray-200" : "text-gray-600"}`}
                href="/It"
                onClick={() => {
                  menu.setMenu([]);
                }}
              >
                IT Consulting
              </Link>
              <Link
                className={` ml-6  ${url == "/services/AiMl" ? "text-red-700 bg-gray-200" : "text-gray-600"}`}
                href="/AiMl"
                onClick={() => {
                  menu.setMenu([]);
                }}
              >
                AI & ML Solutions
              </Link>
              <Link
                className={` ml-6  ${url == "Datacl" ? "text-red-700 bg-gray-200" : "text-gray-600"}`}
                href="/Datacl"
                onClick={() => {
                  menu.setMenu([]);
                }}
              >
                Data Cleaning
              </Link>
              <Link
                className={` ml-6  ${url == "Datacl" ? "text-red-700 bg-gray-200" : "text-gray-600"}`}
                href="/ecommerce"
                onClick={() => {
                  menu.setMenu([]);
                }}
              >
                E-Commerce
              </Link>
            </div>
          </div>
          <Link
            className={`px-4 mx-3 rounded-md py-2 ${url == "/portfolio" ? "text-red-700 bg-gray-200" : "text-gray-600"} `}
            href={`/portfolio`}
            onClick={() => {
              menu.setMenu([]);
            }}
          >
            Portfolio
          </Link>
          <Link
            className={`px-4 mx-3 rounded-md py-2 ${url == "/reviews" ? "text-red-700 bg-gray-200" : "text-gray-600"} `}
            href={`/reviews`}
            onClick={() => {
              menu.setMenu([]);
            }}
          >
            Reviews
          </Link>
          <Link
            className={`px-4 mx-3 rounded-md py-2 ${url == "/blog" ? "text-red-700 bg-gray-200" : "text-gray-600"} `}
            href={`/blog`}
            onClick={() => {
              menu.setMenu([]);
            }}
          >
            Blog
          </Link>
          <Link
            className={`px-4 mx-3 rounded-md py-2 ${url == "/contact" ? "text-red-700 bg-gray-200" : "text-gray-600"} `}
            href={`/contact`}
            onClick={() => {
              menu.setMenu([]);
            }}
          >
            Contact Us
          </Link>
        </div>
        <Link
          href="/contact"
          className="bg-[#b91c1c] mx-3 mt-6 font-semibold flex gap-1 px-4 py-2 text-white rounded-md hover:bg-red-600"
        >
          Get a Free Quote
          <span className="flex items-center">
            <FaArrowRightLong />
          </span>
        </Link>
        <div className="flex flex-col mt-2 text-gray-600 mx-3 ">
          <h1 className="flex items-center gap-2">
            <IoMdMail className="text-gray-600 text-sm" />
            info@ashatech.co.in
          </h1>
          <h1 className="flex items-center gap-2">
            <FaPhoneAlt className="text-gray-600 text-sm" />
            +91 75310 80874
          </h1>
          <h1 className="flex items-center gap-2">
            <FaLocationDot className="text-gray-600 text-sm" />
            Delhi, India
          </h1>
        </div>
      </div>
    </div>
  );
}
