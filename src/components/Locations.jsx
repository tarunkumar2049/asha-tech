import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaMapMarkedAlt } from "react-icons/fa";

export default function Locations() {
  return (
    <div className="pt-10 pb-20">
      <div className="pb-10 flex flex-col gap-2">
        <h1 className="font-semibold text-[#b91c1c] text-center">
          WE SERVE IN THIS AREA
        </h1>
        <h1 className="text-4xl font-semibold text-center">
          We Serve Across Delhi
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 md:mx-2 lg:mx-20">
        <div className="border rounded-md border-gray-200 shadow-md hover:shadow-xl duration-500 overflow-hidden mx-2 md:mx-0 group">
          <img
            src="/south-delhi.jpg"
            className="lg:h-36 rounded-t-md group-hover:scale-108 duration-500 overflow-hidden"
          />
          <div className="p-4 flex flex-col gap-2">
            <h1 className="font-semibold text-xl text-center">South Delhi</h1>
            <p className="text-gray-800 w-42 text-sm">
              Saket, Hauz Khas, Malviya Nagar, Greater Kailash, etc.
            </p>
            <Link
              href="/"
              className="text-[#b91c1c] flex items-center gap-1 hover:gap-2 duration-400 font-semibold justify-center p-4"
            >
              View Details
              <FaArrowRightLong />
            </Link>
          </div>
        </div>
        <div className="border rounded-md border-gray-200 shadow-md hover:shadow-xl duration-500 overflow-hidden mx-2 md:mx-0 group">
          <img
            src="/west-delhi.jpg"
            className="lg:h-36 rounded-t-md group-hover:scale-108 duration-500 "
          />
          <div className="p-4 flex flex-col gap-2">
            <h1 className="font-semibold text-xl text-center">West Delhi</h1>
            <p className="text-gray-800 w-42 text-sm">
              Saket, Hauz Khas, Malviya Nagar, Greater Kailash, etc.
            </p>
            <Link
              href="/"
              className="text-[#b91c1c] flex items-center gap-1 hover:gap-2 duration-400 font-semibold justify-center p-4"
            >
              View Details
              <FaArrowRightLong />
            </Link>
          </div>
        </div>
        <div className="border rounded-md border-gray-200 shadow-md hover:shadow-xl duration-500 overflow-hidden mx-2 md:mx-0 group">
          <img
            src="/east-delhi.jpg"
            className="lg:h-36 rounded-t-md group-hover:scale-108 duration-500 "
          />
          <div className="p-4 flex flex-col gap-2">
            <h1 className="font-semibold text-xl text-center">South Delhi</h1>
            <p className="text-gray-800 w-42 text-sm">
              Saket, Hauz Khas, Malviya Nagar, Greater Kailash, etc.
            </p>
            <Link
              href="/"
              className="text-[#b91c1c] flex items-center gap-1 hover:gap-2 duration-400 font-semibold justify-center p-4"
            >
              View Details
              <FaArrowRightLong />
            </Link>
          </div>
        </div>
        <div className="border rounded-md border-gray-200 shadow-md hover:shadow-xl duration-500 overflow-hidden mx-2 md:mx-0 group">
          <img
            src="/north-delhi.jpg"
            className="lg:h-36 rounded-t-md group-hover:scale-108 duration-500 "
          />
          <div className="p-4 flex flex-col gap-2">
            <h1 className="font-semibold text-xl text-center">South Delhi</h1>
            <p className="text-gray-800 w-42 text-sm">
              Saket, Hauz Khas, Malviya Nagar, Greater Kailash, etc.
            </p>
            <Link
              href="/"
              className="text-[#b91c1c] flex items-center gap-1 hover:gap-2 duration-400 font-semibold justify-center p-4"
            >
              View Details
              <FaArrowRightLong />
            </Link>
          </div>
        </div>
        <div className="border rounded-md border-gray-200 shadow-md hover:shadow-xl duration-500 overflow-hidden mx-2 md:mx-0 group">
          <img
            src="/central-delhi.jpg"
            className="lg:h-36 rounded-t-md group-hover:scale-108 duration-500 "
          />
          <div className="p-4 flex flex-col gap-2">
            <h1 className="font-semibold text-xl text-center">South Delhi</h1>
            <p className="text-gray-800 w-42 text-sm">
              Saket, Hauz Khas, Malviya Nagar, Greater Kailash, etc.
            </p>
            <Link
              href="/"
              className="text-[#b91c1c] flex items-center gap-1 hover:gap-2 duration-400 font-semibold justify-center p-4"
            >
              View Details
              <FaArrowRightLong />
            </Link>
          </div>
        </div>
        <div className="border rounded-md border-gray-200 shadow-md hover:shadow-xl duration-500 overflow-hidden mx-2 md:mx-0 group">
          <img
            src="/ncr-delhi.jpg"
            className="lg:h-36 rounded-t-md group-hover:scale-108 duration-500 "
          />
          <div className="p-4 flex flex-col gap-2">
            <h1 className="font-semibold text-xl text-center">South Delhi</h1>
            <p className="text-gray-800 w-42 text-sm">
              Saket, Hauz Khas, Malviya Nagar, Greater Kailash, etc.
            </p>
            <Link
              href="/"
              className="text-[#b91c1c] flex items-center gap-1 hover:gap-2 duration-400 font-semibold justify-center p-4"
            >
              View Details
              <FaArrowRightLong />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <Link
          href="/service-area"
          className="hover:bg-[#b91c1c] hover:text-white duration-500 w-42 flex items-center gap-2 border border-[#b91c1c] font-semibold px-4 py-2 shadow-md rounded-md"
        >
          View All Areas
          <FaMapMarkedAlt />
        </Link>
      </div>
    </div>
  );
}
