"use client";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

export default function PortfolioSection() {
  const timer = setInterval(() => {}, 2000);

  return (
    <div className="flex px-20 gap-22 bg-black ">
      <div className="text-white flex flex-col gap-4 py-15">
        <h1 className="text-[#b91c1c] text-sm font-semibold">OUR PORTFOLIO</h1>
        <h1 className="text-4xl font-semibold">Our Recent Work</h1>
        <p className="text-gray-500 w-76">
          We build websites, apps and software that create real impact.
        </p>
        <button className="flex items-center gap-2 hover:gap-4 duration-300 px-4 py-2 bg-[#b91c1c] rounded-md w-48 hover:bg-red-600 ">
          View All Products <FaArrowRightLong />
        </button>
      </div>

      <div className="flex justify-center items-center py-15 gap-4 group">
        <span className="group-hover:bg-white flex justify-center items-center text-black rounded-[50%] bg-black h-10 w-10 duration-200">
          <FaArrowLeft />
        </span>
        <div className="bg-white text-black rounded-2xl">
          <img src="/hospital.webp" className="h-50 rounded-2xl" />
          <div className="mx-4 my-4">
            <h1 className="mt-2 font-semibold">Healthcare Website</h1>
            <h1 className="text-xs ">Clinic & Doctor</h1>
          </div>
        </div>

        <div className="bg-white text-black rounded-2xl">
          <img src="/e-commerce.webp" className="h-50 rounded-2xl" />
          <div className="mx-4 my-4">
            <h1 className="mt-2 font-semibold">E-Commerce Website</h1>
            <h1 className="text-xs ">Fashion Store</h1>
          </div>
        </div>

        <div className="bg-white text-black rounded-2xl">
          <img src="/education.webp" className="h-50 rounded-2xl" />
          <div className="mx-4 my-4">
            <h1 className="mt-2 font-semibold">School Management System </h1>
            <h1 className="text-xs ">Web Application</h1>
          </div>
        </div>

        <div className="bg-white text-black rounded-2xl hidden">
          <img src="/housing.webp" className="h-48 round50-2xl" />
          <div className="mx-4 my-4">
            <h1 className="mt-2 font-semibold">Real State Website</h1>
            <h1 className="text-xs ">Property Listing</h1>
          </div>
        </div>
        <span className="group-hover:bg-white flex justify-center items-center text-black rounded-[50%] bg-black h-10 w-10 duration-200">
          <FaArrowRight />
        </span>
      </div>
    </div>
  );
}
