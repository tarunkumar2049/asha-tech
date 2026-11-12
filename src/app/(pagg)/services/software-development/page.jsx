import { FiCheck } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";

import Link from "next/link";

export default function page() {
  return (
    <div className="mt-25 md:mt-35 mb-8 mx-4 md:mx-0 flex flex-col items-center">
      <div>
        <div className="flex flex-col gap-3 my-8">
          <h1 className="text-4xl font-bold">Software Development</h1>
          <p className="text-gray-600 md:w-210 text-xl">
            Custom software solutions designed to streamline your business
            operations. We build scalable, reliable software that grows with
            your business. 
          </p>
        </div>
        <div className="gap-2 flex flex-col">
          <h1 className="font-bold text-xl">What We Offer</h1>
          <div className="text-gray-600 gap-4 flex flex-col my-2">
            <h1 className="flex items-center gap-1 font-semibold">
              <FiCheck className="text-red-600 text-xl size-5" />
              Custom software & application development
            </h1>
            <h1 className="flex items-center gap-1 font-semibold ">
              <FiCheck className="text-red-600 text-xl size-5" />
              ERP & CRM systems
            </h1>
            <h1 className="flex items-center gap-1 font-semibold ">
              <FiCheck className="text-red-600 text-xl size-5" />
              API development & integration
            </h1>
            <h1 className="flex items-center gap-1 font-semibold ">
              <FiCheck className="text-red-600 text-xl size-5" />
              Cloud-based solutions
            </h1>
            <h1 className="flex items-center gap-1 font-semibold ">
              <FiCheck className="text-red-600 text-xl size-5" />
              Database design & management
            </h1>
            <h1 className="flex items-center gap-1 font-semibold ">
              <FiCheck className="text-red-600 text-xl size-5" />
              Ongoing maintenance & support
            </h1>
          </div>
          <Link
            href="/contact"
            className="flex gap-1 bg-[#b91c1c] font-semibold px-4 py-3 text-white rounded-md w-45 my-8"
          >
            Get a Free Quote
            <span className="flex items-center"><FaArrowRightLong/></span>
          </Link>
        </div>
      </div>
    </div>
  );
}
