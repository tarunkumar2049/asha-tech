import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Locations() {
  return (
    <div className="py-10">
      <div className="pb-10 flex flex-col gap-2">
        <h1 className="font-semibold text-[#b91c1c] text-center">WE SERVE IN THIS AREA</h1>
        <h1 className="text-4xl font-semibold text-center">We Serve Across Delhi</h1>
      </div>
      <div className="flex gap-4 mx-20">
        <div className="border rounded-md border-gray-200 shadow-xl">
          <img src="/south-delhi.jpg" className="h-36 rounded-t-md"/>
          <div className="p-4 flex flex-col gap-2">
            <h1 className="font-semibold text-xl text-center">South Delhi</h1>
          <p className="text-gray-800 w-42 text-sm">
            Saket, Hauz Khas, Malviya Nagar, Greater Kailash, etc.
          </p>
          <Link
            href="/"
            className="text-[#b91c1c] flex items-center gap-1 font-semibold justify-center p-4"
          >
            View Details
            <FaArrowRightLong />
          </Link>
          </div>
        </div>
        <div className="border rounded-md border-gray-200 shadow-xl">
          <img src="/west-delhi.jpg" className="h-36 rounded-t-md"/>
          <div className="p-4 flex flex-col gap-2">
            <h1 className="font-semibold text-xl text-center">West Delhi</h1>
          <p className="text-gray-800 w-42 text-sm">
            Saket, Hauz Khas, Malviya Nagar, Greater Kailash, etc.
          </p>
          <Link
            href="/"
            className="text-[#b91c1c] flex items-center gap-1 font-semibold justify-center p-4"
          >
            View Details
            <FaArrowRightLong />
          </Link>
          </div>
        </div>
        <div className="border rounded-md border-gray-200 shadow-xl">
          <img src="/east-delhi.jpg" className="h-36 rounded-t-md"/>
          <div className="p-4 flex flex-col gap-2">
            <h1 className="font-semibold text-xl text-center">South Delhi</h1>
          <p className="text-gray-800 w-42 text-sm">
            Saket, Hauz Khas, Malviya Nagar, Greater Kailash, etc.
          </p>
          <Link
            href="/"
            className="text-[#b91c1c] flex items-center gap-1 font-semibold justify-center p-4"
          >
            View Details
            <FaArrowRightLong />
          </Link>
          </div>
        </div>
        <div className="border rounded-md border-gray-200 shadow-xl">
          <img src="/north-delhi.jpg" className="h-36 rounded-t-md"/>
          <div className="p-4 flex flex-col gap-2">
            <h1 className="font-semibold text-xl text-center">South Delhi</h1>
          <p className="text-gray-800 w-42 text-sm">
            Saket, Hauz Khas, Malviya Nagar, Greater Kailash, etc.
          </p>
          <Link
            href="/"
            className="text-[#b91c1c] flex items-center gap-1 font-semibold justify-center p-4"
          >
            View Details
            <FaArrowRightLong />
          </Link>
          </div>
        </div>
        <div className="border rounded-md border-gray-200 shadow-xl">
          <img src="/central-delhi.jpg" className="h-36 rounded-t-md"/>
          <div className="p-4 flex flex-col gap-2">
            <h1 className="font-semibold text-xl text-center">South Delhi</h1>
          <p className="text-gray-800 w-42 text-sm">
            Saket, Hauz Khas, Malviya Nagar, Greater Kailash, etc.
          </p>
          <Link
            href="/"
            className="text-[#b91c1c] flex items-center gap-1 font-semibold justify-center p-4"
          >
            View Details
            <FaArrowRightLong />
          </Link>
          </div>
        </div>
        <div className="border rounded-md border-gray-200 shadow-xl">
          <img src="/ncr-delhi.jpg" className="h-36 rounded-t-md"/>
          <div className="p-4 flex flex-col gap-2">
            <h1 className="font-semibold text-xl text-center">South Delhi</h1>
          <p className="text-gray-800 w-42 text-sm">
            Saket, Hauz Khas, Malviya Nagar, Greater Kailash, etc.
          </p>
          <Link
            href="/"
            className="text-[#b91c1c] flex items-center gap-1 font-semibold justify-center p-4"
          >
            View Details
            <FaArrowRightLong />
          </Link>
          </div>
        </div>
        
      </div>
    </div>
  );
}
