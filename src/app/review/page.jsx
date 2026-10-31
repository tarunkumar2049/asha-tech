"use client"

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

export default function page() {
  return (
    <div>
      <Navbar />
      <div className="bg-black flex flex-col justify-center h-screen ">
        <div className="flex flex-col items-center text-center ">
          <h1 className="text-red-600 text-[255px] font-bold">
            4<span className="text-white">0</span>4
          </h1>
          <h1 className="text-white font-semibold text-4xl -mt-15">
            Oops! Page Not Found
          </h1>
          <p className="text-gray-400 w-120 mt-4">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <div className=" flex gap-5 mt-14">
            <Link href={`/`} className="flex items-center gap-1 px-4 py-2 text-white bg-red-600 rounded-md border border-red-600">
              <FaHome /> Back to Home
            </Link>
            <Link href={`/`} className="flex items-center gap-1 px-4 py-2 text-white rounded-md border border-gray-600">
              <FaArrowLeft />
              Go Back
            </Link>
          </div>
          <h1 className="flex items-center gap-1 text-gray-400 mt-15">
        
            <FaSearch />
            Need Help? Contact us
          </h1>
        </div>
      </div>
    </div>
  );
}
