"use client";
import { FaGlobe } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { ImStatsDots } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";
import { FaRobot } from "react-icons/fa";
import { IoIosBrush } from "react-icons/io";
import Link from "next/link";

export default function ServicesSection() {
  return (
    <div className="mb-10 mt-10">
      <div className="flex flex-col items-center">
        <h1 className="text-[#b91c1c] font-semibold">OUR SERVICES</h1>
        <h1 className="text-4xl mx-8 md:text-3xl text-center font-semibold mb-6">
          End-to-End IT Solutions To Grow Your Business
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-2 lg:mx-20 ">
        <Link
          href={"/services/web-development"}
          className="flex flex-col gap-2 border border-gray-200 shadow-sm p-6 rounded-md hover:-translate-y-3 duration-500"
        >
          <div className="px-[45%]">
            <FaGlobe color="#b91c1c" size={30} />
          </div>
          <h1 className="text-center font-semibold">Web Development</h1>
          <p className="text-center text-gray-500">
            SEO-friendly, responsive websites that help you stand out online.
          </p>
          <div className="text-center justify-center items-center mt-6 px-[47%]">
            <FaArrowRightLong color="#b91c1c" />
          </div>
        </Link>
        <Link
          href={"/services/app-development"}
          className="flex flex-col gap-2 border border-gray-200 shadow-sm p-6 rounded-md hover:-translate-y-3 duration-500"
        >
          <div className="px-[45%]">
            <FaMobileAlt color="#b91c1c" size={30} />
          </div>
          <h1 className="text-center font-semibold">Mobile App Development</h1>
          <p className="text-center text-gray-500">
            Android & iOS apps that deliver a smooth and powerful user
            experience.
          </p>
          <div className="text-center justify-center items-center mt-6 px-[47%]">
            <FaArrowRightLong color="#b91c1c" />
          </div>
        </Link>
        <Link
          href={"/services/software-development"}
          className="flex flex-col gap-2 border border-gray-200 shadow-sm p-6 rounded-md hover:-translate-y-3 duration-500"
        >
          <div className="px-[45%]">
            <FaDesktop color="#b91c1c" size={30} />
          </div>
          <h1 className="text-center font-semibold">Software Development</h1>
          <p className="text-center text-gray-500">
            Custom software solutions to automate and scale your business.
          </p>
          <div className="text-center justify-center items-center mt-6 px-[47%]">
            <FaArrowRightLong color="#b91c1c" />
          </div>
        </Link>
        <Link
          href={""}
          className="flex flex-col gap-2 border border-gray-200 shadow-sm p-6 rounded-md hover:-translate-y-3 duration-500"
        >
          <div className="px-[45%]">
            <FaCartShopping color="#b91c1c" size={30} />
          </div>
          <h1 className="text-center font-semibold">E-Commerce Solutions</h1>
          <p className="text-center text-gray-500">
            Powerful online stores that increase sales and customer trust.
          </p>
          <div className="text-center justify-center items-center mt-6 px-[47%]">
            <FaArrowRightLong color="#b91c1c" />
          </div>
        </Link>
        <Link
          href={"/services/digital-marketing"}
          className="flex flex-col gap-2 border border-gray-200 shadow-sm p-6 rounded-md hover:-translate-y-3 duration-500"
        >
          <div className="px-[45%]">
            <ImStatsDots color="#b91c1c" size={30} />
          </div>
          <h1 className="text-center font-semibold">Digital Marketing</h1>
          <p className="text-center text-gray-500">
            SEO, SMM, PPC & content marketing to grow your brand online.
          </p>
          <div className="text-center justify-center items-center mt-6 px-[47%]">
            <FaArrowRightLong color="#b91c1c" />
          </div>
        </Link>
        <div className="flex flex-col gap-2 border border-gray-200 shadow-sm p-6 rounded-md hover:-translate-y-3 duration-500">
          <div className="px-[45%]">
            <FaSearch color="#b91c1c" size={30} />
          </div>
          <h1 className="text-center font-semibold">SEO Services</h1>
          <p className="text-center text-gray-500">
            Rank higher on Google and drive organic traffic to your website.
          </p>
          <div className="text-center justify-center items-center mt-6 px-[47%]">
            <FaArrowRightLong color="#b91c1c" />
          </div>
        </div>
        <div className="flex flex-col gap-2 border border-gray-200 shadow-sm p-6 rounded-md hover:-translate-y-3 duration-500">
          <div className="px-[45%]">
            <HiUsers color="#b91c1c" size={30} />
          </div>
          <h1 className="text-center font-semibold">IT Consulting</h1>
          <p className="text-center text-gray-500">
            Smart IT consulting to optimize your business and processes.
          </p>
          <div className="text-center justify-center items-center mt-6 px-[47%]">
            <FaArrowRightLong color="#b91c1c" />
          </div>
        </div>
        <div className="flex flex-col gap-2 border border-gray-200 shadow-sm p-6 rounded-md hover:-translate-y-3 duration-500">
          <div className="px-[45%]">
            <FaRobot color="#b91c1c" size={30} />
          </div>
          <h1 className="text-center font-semibold">AI & ML Solutions</h1>
          <p className="text-center text-gray-500">
            Intelligent automation and machine learning to transform your
            business.
          </p>
          <div className="text-center justify-center items-center mt-6 px-[47%]">
            <FaArrowRightLong color="#b91c1c" />
          </div>
        </div>
        <div className="flex flex-col gap-2 border border-gray-200 shadow-sm p-6 rounded-md hover:-translate-y-3 duration-500">
          <div className="px-[45%]">
            <IoIosBrush color="#b91c1c" size={30} />
          </div>
          <h1 className="text-center font-semibold">Data Cleaning</h1>
          <p className="text-center text-gray-500">
            Clean, accurate and reliable data for better decision making.
          </p>
          <div className="text-center justify-center items-center mt-6 px-[47%]">
            <FaArrowRightLong color="#b91c1c" />
          </div>
        </div>
      </div>
    </div>
  );
}
