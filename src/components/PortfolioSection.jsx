import { FaArrowRightLong } from "react-icons/fa6";

export default function PortfolioSection() {
  return (
    <div className="flex px-20 gap-30 bg-black">
      <div className="text-white flex flex-col gap-4 py-15">
        <h1 className="text-[#b91c1c] text-sm font-semibold">OUR PORTFOLIO</h1>
        <h1 className="text-4xl font-semibold">Our Recent Work</h1>
        <p className="text-gray-500 w-76">
          We build websites, apps and software that create real impact.
        </p>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#b91c1c] rounded-md w-48">
          View All Products <FaArrowRightLong />
        </button>
      </div>
      <div className="flex py-15 gap-5">
        <div className="bg-white text-black rounded-2xl">
          <img src="/hospital.webp" className="h-48 rounded-2xl" />
          <div className="mx-3 my-4">
            <h1 className="mt-2 font-semibold">Healthcare Website</h1>
            <h1 className="text-xs ">Clinic & Doctor</h1>
          </div>
        </div>
        <div className="bg-white text-black rounded-2xl">
          <img src="/housing.webp" className="h-48 rounded-2xl" />
          <div className="ml-4">
            <h1 className="mt-2 font-semibold">Healthcare Website</h1>
            <h1 className="text-xs ">Clinic & Doctor</h1>
          </div>
        </div>
        <div className="bg-white text-black rounded-2xl">
          <img src="/e-commerce.webp" className="h-48 rounded-2xl" />
          <div className="ml-4">
            <h1 className="mt-2 font-semibold">Healthcare Website</h1>
            <h1 className="text-xs ">Clinic & Doctor</h1>
          </div>
        </div>
        <div className="bg-white text-black hidden">
          <img src="/education.webp" className="h-48 rounded-2xl" />
          <div className="ml-4">
            <h1 className="mt-2 font-semibold">Healthcare Website</h1>
            <h1 className="text-xs ">Clinic & Doctor</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
