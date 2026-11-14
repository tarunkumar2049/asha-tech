"use client";

import { useRef } from "react";
import { FaArrowRightLong, FaArrowRight, FaArrowLeft } from "react-icons/fa6";

export default function PortfolioSection() {
  const sliderRef = useRef(null);

  const projects = [
    {
      image: "/hospital.webp",
      title: "Healthcare Website",
      category: "Clinic & Doctor",
    },
    {
      image: "/e-commerce.webp",
      title: "E-Commerce Website",
      category: "Fashion Store",
    },
    {
      image: "/education.webp",
      title: "School Management System",
      category: "Web Application",
    },
    {
      image: "/housing.webp",
      title: "Real Estate Website",
      category: "Property Listing",
    },
  ];

  const nextSlide = () => {
    sliderRef.current.scrollBy({
      left: 280,
      behavior: "smooth",
    });
  };

  const prevSlide = () => {
    sliderRef.current.scrollBy({
      left: -280,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col lg:flex-row px-6 lg:px-20 md:gap-12 bg-black group">
      <div className="text-white flex flex-col gap-4 py-4 lg:py-15 lg:w-[28%] shrink-0">
        <h1 className="text-[#b91c1c] text-sm font-semibold text-center  ">
          OUR PORTFOLIO
        </h1>

        <h1 className="text-3xl md:text-4xl font-semibold text-center">
          Our Recent Work
        </h1>

        <p className="text-gray-500 text-center">
          We build websites, apps and software that create real impact.
        </p>

        <button className="mx-auto flex items-center gap-2 hover:gap-4 duration-300 px-4 py-2 bg-[#b91c1c] rounded-md w-48 hover:bg-red-600">
          View All Products <FaArrowRightLong />
        </button>
      </div>

      <div className="flex items-center gap-3 py-8 lg:py-15 min-w-0">
        <button
          onClick={prevSlide}
          aria-label="Previous projects"
          className="shrink-0 flex justify-center items-center group-hover:text-white text-black hover:text-black hover:bg-white rounded-full bg-black group-hover:bg-[#b91c1c] h-10 w-10 duration-300 "
        >
          <FaArrowLeft />
        </button>

        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto min-w-0 scrollbar-none"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-2xl overflow-hidden shrink-0 w-60 sm:w-65 snap-start"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="mx-4 my-4">
                <h1 className="mt-2 font-semibold">{project.title}</h1>
                <h1 className="text-xs text-gray-500">{project.category}</h1>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          aria-label="Next projects"
          className="shrink-0 flex justify-center items-center group-hover:text-white text-black hover:text-black hover:bg-white rounded-full bg-black group-hover:bg-[#b91c1c] h-10 w-10 duration-300 "
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
