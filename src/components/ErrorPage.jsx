"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="bg-black flex flex-col justify-center h-screen ">
      <div className="flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-red-600 text-[150px] md:text-[255px] font-bold ">
            4<span className="text-white">0</span>4
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <h1 className="text-white font-semibold text-4xl -mt-15">
            Oops! Page Not Found
          </h1>
          <p className="text-gray-400 mx-10 md:w-120 mt-4">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
        </motion.div>
        <motion.div
          className=" flex gap-5 mt-10"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <Link
            href={`/`}
            className="flex items-center gap-1 px-4 py-2 text-white bg-red-600 rounded-md border border-red-600"
          >
            <FaHome /> Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-1 px-4 py-2 text-white rounded-md border border-gray-600"
          >
            <FaArrowLeft />
            Go Back
          </button>
        </motion.div>
        <motion.h1
          className="flex items-center gap-1 text-gray-400 mt-8"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 1 }}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          <FaSearch />
          Need Help? Contact us
        </motion.h1>
      </div>
    </div>
  );
}
