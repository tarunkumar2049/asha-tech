import { FiCheck } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";

import Link from "next/link";

export default function page() {
  return (
    <div className="mt-35 mb-8 flex flex-col items-center">
      <div>
        <div className="flex flex-col gap-3 my-8">
          <h1 className="text-4xl font-bold">Digital Marketing</h1>
          <p className="text-gray-600 w-210 text-xl">
            SEO, social media, and paid campaigns to grow your online presence.
            We create data-driven marketing strategies that deliver measurable
            results.
          </p>
        </div>
        <div className="gap-2 flex flex-col">
          <h1 className="font-bold text-xl">What We Offer</h1>
          <div className="text-gray-600 gap-4 flex flex-col my-2">
            <h1 className="flex items-center gap-1 font-semibold">
              <FiCheck className="text-red-600 text-xl size-5" />
              Search Engine Optimization (SEO)
            </h1>
            <h1 className="flex items-center gap-1 font-semibold ">
              <FiCheck className="text-red-600 text-xl size-5" />
              Social Media Marketing (SMM)
            </h1>
            <h1 className="flex items-center gap-1 font-semibold ">
              <FiCheck className="text-red-600 text-xl size-5" />
              Pay-Per-Click (PPC) campaigns
            </h1>
            <h1 className="flex items-center gap-1 font-semibold ">
              <FiCheck className="text-red-600 text-xl size-5" />
              Content marketing & strategy
            </h1>
            <h1 className="flex items-center gap-1 font-semibold ">
              <FiCheck className="text-red-600 text-xl size-5" />
              Email marketing campaigns
            </h1>
            <h1 className="flex items-center gap-1 font-semibold ">
              <FiCheck className="text-red-600 text-xl size-5" />
              Analytics & performance reporting
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
