import { FiCheck } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";

import Link from "next/link";

export default function page() {
  return (
    <div className="mt-35 mb-8 flex flex-col items-center">
      <div>
        <div className="flex flex-col gap-3 my-8">
          <h1 className="text-4xl font-bold">Web Development</h1>
          <p className="text-gray-600 w-210 text-xl">
            We build fast, responsive, and modern websites tailored to your
            business needs. From landing pages to complex web applications, our
            team delivers solutions that drive results.
          </p> 
        </div>
        <div className="gap-2 flex flex-col">
          <h1 className="font-bold text-xl">What We Offer</h1>
          <div className="text-gray-600 gap-4 flex flex-col my-2">
            <h1 className="flex items-center gap-1 font-semibold">
              <FiCheck className="text-red-600 text-xl size-5" />
              Custom website design & development
            </h1>
            <h1 className="flex items-center gap-1 font-semibold ">
              <FiCheck className="text-red-600 text-xl size-5" />
              E-commerce solutions (Shopify, WooCommerce)
            </h1>
            <h1 className="flex items-center gap-1 font-semibold ">
              <FiCheck className="text-red-600 text-xl size-5" />
              CMS development (WordPress, Headless CMS)
            </h1>
            <h1 className="flex items-center gap-1 font-semibold ">
              <FiCheck className="text-red-600 text-xl size-5" />
              Progressive Web Apps (PWA)
            </h1>
            <h1 className="flex items-center gap-1 font-semibold ">
              <FiCheck className="text-red-600 text-xl size-5" />
              SEO-optimized architecture
            </h1>
            <h1 className="flex items-center gap-1 font-semibold ">
              <FiCheck className="text-red-600 text-xl size-5" />
              Performance & speed optimization
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
