"use client";
import Link from "next/link";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Navbar() {
  return (
    <div className="border-b-3 border-[#b91c1c] z-20 fixed w-full bg-white">
      <div className="bg-black text-white flex justify-between">
        <div className="flex gap-10 ml-20 py-1">
          <h1 className="flex items-center text-sm">
            <IoMdMail />
            info@ashatech.co.in
          </h1>
          <h1 className="flex items-center text-sm">
            {" "}
            <FaPhoneAlt />
            +91 8510026464
          </h1>
          <h1 className="flex items-center text-sm">
            <FaLocationDot />
            Delhi, India
          </h1>
        </div>
        <div className="flex mr-20">
          <h1>Mon-Sat(10AM - 7PM)</h1>
        </div>
      </div>
      <div className="flex justify-between ">
        <div className="flex pl-20">
          <img src="/logo.webp" alt="logo image" className="h-13 " />
          <Link href="/" className="flex flex-col">
            <h1 className="text-2xl font-semibold">AshaTech</h1>
            <span className="text-xs text-gray-500">
              SOLUTIONS FOR YOUR BUSINESS
            </span>
          </Link>
        </div>
        <div className="flex pr-20 gap-5 text-gray-600 items-center">
          <Link href="/home" className="hover:text-[#b91c1c] font-semibold">
            Home
          </Link>
          <Link href="/about" className="hover:text-[#b91c1c] font-semibold">
            About Us
          </Link>

          <div className="group">
            <Link href="/services" className="hover:flex group font-semibold">
              Services
            </Link>
            <div className="absolute flex-col gap-2 bg-white shadow-2xl p-4 rounded-md hidden group-hover:flex">
              <Link href="/services/web-development">Web Development</Link>
              <Link href="/services/app-development">App Development</Link>
              <Link href="/Softdev">Software Development</Link>
              <Link href="/Digital">Digital Marketing</Link>
              <Link href="/Seo">SEO Services</Link>
              <Link href="/It">IT Consulting</Link>
              <Link href="/AiMl">AI & ML Solutions</Link>
              <Link href="/Datacl">Data Cleaning</Link>
            </div>
          </div>

          <Link
            href="/portfolio"
            className="hover:text-[#b91c1c] font-semibold"
          >
            Portfolio
          </Link>
          <Link href="/review" className="hover:text-[#b91c1c] font-semibold">
            Reviews
          </Link>
          <Link href="/blog" className="hover:text-[#b91c1c] font-semibold">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-[#b91c1c] font-semibold">
            Contact Us
          </Link>
          <Link
            href="/quote"
            className="bg-[#b91c1c] font-semibold px-4 py-2 text-white rounded-md"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
