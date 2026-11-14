import { PiUsersThreeFill } from "react-icons/pi";
import { FaBriefcase } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa6";
import { GiCheckMark } from "react-icons/gi";
import { FaCheckCircle } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { FaBullseye } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdDesignServices } from "react-icons/md";
import { GrTest } from "react-icons/gr";
import { FaPaperPlane } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export default function page() {
  return (
    <div className="mt-20 bg-[radial-gradient(circle,rgba(120,120,1200,0.1)_2px,transparent_2px)] bg-size-[30px_30px] ">
      <div className="md:px-20 px-4 flex flex-col md:flex-row gap-15 md:gap-50 mb-10">
        <div>
          <h1 className="text-red-600 font-semibold md:mt-12 mb-4">
            About AshaTech
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold">
            Building <span className="text-red-600">Digital Solutions</span>
            That Move Businesses Forward
          </h1>
          <p className="text-gray-500 my-4 text-lg">
            We help businesses turn ideas into powerful digital experiences
            through innovative technology, thoughtful design and reliable
            solutions.
          </p>
          <Link
            href={"/contact"}
            className="bg-[#b91c1c] flex gap-1 font-semibold w-35 px-4 py-2 text-white rounded-md hover:-translate-y-1 duration-300 hover:bg-red-600"
          >
            Get Started
            <span className="flex items-center">
              <FaArrowRightLong />
            </span>
          </Link>
        </div>
        <div className="rounded-2xl overflow-hidden md:w-350 md:mt-14 shadow-2xl">
          <div className="absolute text-white backdrop-blur-xs rounded-2xl p-4 top-110 right-62 md:top-30 md:right-120">
            <h1 className="flex items-center text-3xl font-bold justify-center gap-2 ">
              10+ <PiUsersThreeFill className="text-4xl text-red-600 " />
            </h1>
            <h1 className="text-gray-300">Years of Experience</h1>
          </div>
          <img src="image.jpg" />
          <div className="absolute text-white backdrop-blur-xs rounded-2xl p-2 top-165 right-2 md:top-108 md:right-15">
            <h1 className="flex items-center text-3xl font-bold justify-center gap-2 ">
              <FaBriefcase className="text-4xl text-red-600" />
              250+
            </h1>
            <h1 className="text-gray-300">Years of Experience</h1>
          </div>
        </div>
      </div>
      <div className="md:px-20 px-4 mt-28 mb-16">
        <div className="flex flex-col items-center gap-2 my-12 ">
          <h1 className="font-semibold text-red-600">WHO WE ARE</h1>
          <h1 className="text-4xl font-bold">
            Technology That Solves <br />
            <span className="text-red-600">Real Business Problems</span>
          </h1>
          <p className="text-gray-700 md:w-135 text-center">
            We combine technology, creativity and business understanding to
            build digital solutions that help businesses work smarter, connect
            with customers and grow with confidence.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-14">
          <div className="rounded-2xl overflow-hidden hidden md:flex">
            <img src="image2.jpg" alt="image" />
          </div>
          <div className="flex flex-col gap-4 px-2">
            <h1 className="text-2xl font-semibold">
              More Than Technology. We Build Solutions.
            </h1>
            <p className="text-gray-700 md:w-160">
              AshaTech is a Delhi-based IT solutions company helping businesses
              turn ideas into working digital products. We deliver solutions
              that work.
            </p>
            <p className="text-gray-700 md:w-160">
              From websites and mobile applications to custom software and
              digital marketing, we combine technology and creativity to deliver
              solutions designed around real business needs.
            </p>
            <div className="flex items-center gap-3">
              <span className="p-2 bg-red-100 rounded-md text-red-600">
                <FaLightbulb />
              </span>
              <div>
                <h1 className="flex items-center text-red-600">
                  Innovation
                  <GiCheckMark />
                </h1>
                <p>We embrace modern technology to create smarter solutions.</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="p-2 bg-red-100 rounded-md text-red-600">
                <FaCheckCircle />
              </span>
              <div>
                <h1 className="flex items-center text-red-600">
                  Reliability
                  <GiCheckMark />
                </h1>
                <p>We focus on quality, performance and long-term value.</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="p-2 bg-red-100 rounded-md text-red-600">
                <HiUserGroup />
              </span>
              <div>
                <h1 className="flex items-center text-red-600">
                  Client First
                  <GiCheckMark />
                </h1>
                <p>
                  We build solutions around the goals and needs of our clients.
                </p>
              </div>
            </div>
            <Link
              className="flex items-center gap-2 hover:gap-4 duration-300 text-sm text-red-600 font-semibold"
              href={``}
            >
              Discover Our Approach
              <FaArrowRight />
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden md:hidden">
            <img src="image2.jpg" alt="image" />
          </div>
        </div>
      </div>
      <div className="md:px-20 px-4 flex flex-col items-center gap-2 py-12 bg-gray-400/10">
        <h1 className="font-semibold text-red-600">OUR MISSION AND VISION</h1>
        <h1 className="md:text-4xl text-3xl font-bold">
          Driven by
          <span className="text-red-600"> Purpose</span>
          <br />
          Build for <span className="text-red-600">Progress</span>
        </h1>
        <p className="text-gray-500 md:w-145 text-center">
          We believe technology should do more than solve problems — it should
          create opportunities, simplify businesses and enable sustainable
          growth.
        </p>
        <div className="flex flex-col md:flex-row gap-8 mt-10">
          <div className="relative bg-linear-to-t from-red-100/60 to-white py-8 w-90 px-2 md:p-8 text-center items-center rounded-2xl flex flex-col gap-4 overflow-hidden shadow-xl">
            <h1 className="text-sm text-red-800 font-semibold">OUR MISSION</h1>
            <h1 className="text-xl font-bold w-96">
              Empowering Businesses Through Technology
            </h1>
            <p className="md:w-90 text-gray-500 ">
              To deliver reliable, innovative and accessible technology
              solutions that help businesses solve challenges, improve
              efficiency and achieve their goals.
            </p>
            <span className="absolute -right-5 -bottom-5 text-red-800 opacity-25">
              <FaBullseye size={80} />
            </span>
          </div>
          <div className="relative bg-linear-to-t from-red-100/60 to-white py-8 w-90 px-2 md:p-8 text-center items-center rounded-2xl flex flex-col gap-4 overflow-hidden shadow-xl">
            <h1 className="text-sm text-red-800 font-semibold">OUR VISION</h1>
            <h1 className="text-xl font-bold w-96">
              Building a Smarter Digital Future
            </h1>
            <p className="md:w-90 text-gray-500 ">
              To become a trusted technology partner for businesses, creating
              digital experiences and solutions that drive meaningful growth and
              lasting impact.
            </p>
            <span className="absolute -right-5 -bottom-5 text-red-800 opacity-25">
              <FaEye size={80} />
            </span>
          </div>
        </div>
        <p className="italic text-gray-500 mt-5">
          <span className="text-red-800 font-bold">“</span> Technology with
          purpose. Solutions with impact.
          <span className="text-red-800 font-bold">”</span>
        </p>
      </div>
      <div className="md:px-20 px-4 mt-12">
        <h1 className="font-semibold text-red-600">WHAT WE DO</h1>
        <h1 className="md:text-4xl text-3xl font-bold">
          <span className="text-red-600"> Digital Solutions</span> Built Around
          Your Business
        </h1>
        <p className="text-gray-500 md:w-160 py-5">
          From websites and mobile applications to custom software and digital
          marketing, we combine technology and creativity to build solutions
          that solve real business challenges.
        </p>
        <div className="flex flex-col md:flex-row gap-12 my-12">
          <div className="md:w-150 flex md:py-10">
            <img src="image3.jpg" alt="image3.jpg" />
          </div>
          <div className="grid md:grid-cols-2 gap-5 mx-auto ">
            <div className="border border-gray-300 flex flex-col rounded-xl bg-gray-200/50 justify-center items-center w-86 md:w-90 py-6 hover:shadow-xl duration-500 hover:border-red-200 group">
              <span className="text-red-600 p-3 w-10 border border-red-600 rounded-md bg-red-300/20 group-hover:bg-red-600 group-hover:text-white duration-500">
                <FaCode />
              </span>
              <h1 className="font-semibold">Web Development</h1>
              <p className="text-xs text-gray-700 font-semibold text-center">
                Modern, responsive websites built for growth.
              </p>
            </div>
            <div className="border border-gray-300 flex flex-col rounded-xl bg-gray-200/50 justify-center items-center w-86 md:w-90 py-6 hover:shadow-xl duration-500 hover:border-red-200 group">
              <span className="text-red-600 p-3 w-10 border border-red-600 rounded-md bg-red-300/20 group-hover:bg-red-600 group-hover:text-white duration-500">
                <FaCode />
              </span>
              <h1 className="font-semibold">Mobile App Development</h1>
              <p className="text-xs text-gray-700 font-semibold text-center">
                Modern, responsive websites built for growth.
              </p>
            </div>
            <div className="border border-gray-300 flex flex-col rounded-xl bg-gray-200/50 justify-center items-center w-86 md:w-90 py-6 hover:shadow-xl duration-500 hover:border-red-200 group">
              <span className="text-red-600 p-3 w-10 border border-red-600 rounded-md bg-red-300/20 group-hover:bg-red-600 group-hover:text-white duration-500">
                <FaCode />
              </span>
              <h1 className="font-semibold">Digital Marketing</h1>
              <p className="text-xs text-gray-700 font-semibold text-center">
                Modern, responsive websites built for growth.
              </p>
            </div>
            <div className="border border-gray-300 flex flex-col rounded-xl bg-gray-200/50 justify-center items-center w-86 md:w-90 py-6 hover:shadow-xl duration-500 hover:border-red-200 group">
              <span className="text-red-600 p-3 w-10 border border-red-600 rounded-md bg-red-300/20 group-hover:bg-red-600 group-hover:text-white duration-500">
                <FaCode />
              </span>
              <h1 className="font-semibold">SEO Services</h1>
              <p className="text-xs text-gray-700 font-semibold text-center">
                Modern, responsive websites built for growth.
              </p>
            </div>
            <div className="border border-gray-300 flex flex-col rounded-xl bg-gray-200/50 justify-center items-center w-86 md:w-90 py-6 hover:shadow-xl duration-500 hover:border-red-200 group">
              <span className="text-red-600 p-3 w-10 border border-red-600 rounded-md bg-red-300/20 group-hover:bg-red-600 group-hover:text-white duration-500">
                <FaCode />
              </span>
              <h1 className="font-semibold">IT Consulting</h1>
              <p className="text-xs text-gray-700 font-semibold text-center">
                Modern, responsive websites built for growth.
              </p>
            </div>
            <div className="border border-gray-300 flex flex-col rounded-xl bg-gray-200/50 justify-center items-center w-86 md:w-90 py-6 hover:shadow-xl duration-500 hover:border-red-200 group">
              <span className="text-red-600 p-3 w-10 border border-red-600 rounded-md bg-red-300/20 group-hover:bg-red-600 group-hover:text-white duration-500">
                <FaCode />
              </span>
              <h1 className="font-semibold">Software Development</h1>
              <p className="text-xs text-gray-700 font-semibold text-center">
                Modern, responsive websites built for growth.
              </p>
            </div>
            <div className="border border-gray-300 flex flex-col rounded-xl bg-gray-200/50 justify-center items-center w-86 md:w-90 py-6 hover:shadow-xl duration-500 hover:border-red-200 group">
              <span className="text-red-600 p-3 w-10 border border-red-600 rounded-md bg-red-300/20 group-hover:bg-red-600 group-hover:text-white duration-500">
                <FaCode />
              </span>
              <h1 className="font-semibold">AI & ML Solutions</h1>
              <p className="text-xs text-gray-700 font-semibold text-center">
                Modern, responsive websites built for growth.
              </p>
            </div>
            <div className="border border-gray-300 flex flex-col rounded-xl bg-gray-200/50 justify-center items-center w-86 md:w-90 py-6 hover:shadow-xl duration-500 hover:border-red-200 group">
              <span className="text-red-600 p-3 w-10 border border-red-600 rounded-md bg-red-300/20 group-hover:bg-red-600 group-hover:text-white duration-500">
                <FaCode />
              </span>
              <h1 className="font-semibold">Data Cleaning</h1>
              <p className="text-xs text-gray-700 font-semibold text-center">
                Modern, responsive websites built for growth.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative md:px-20 px-4 bg-gray-400/10 flex flex-col items-center ">
        <div className="flex flex-col items-center gap-3">
          <h1 className="font-semibold text-red-600 mt-12">OUR APPROACH</h1>
          <h1 className="md:text-4xl text-3xl font-bold">
            From
            <span className="text-red-600"> Idea </span>
            to <span className="text-red-600">Impact</span>
          </h1>
          <p className="text-gray-600 md:w-135 text-center">
            We follow a clear and collaborative process to turn your ideas into
            reliable digital solutions that deliver real business value.
          </p>
          <div className="absolute h-0 w-60 md:w-300 bg-transparent text-2xl border-t-6 border-dashed border-red-600 bottom-65 md:bottom-60 "></div>
          <div className="absolute h-0 w-60 md:w-300 bg-transparent text-2xl border-t-6 border-dashed border-red-600 bottom-110 md:bottom-60 "></div>
          <div className="absolute h-45 md:h-65 w-1 bg-transparent text-2xl border-r-6 border-dashed border-red-600 top-70 right-14 md:top-0 md:right-43 "></div>
          <div className="absolute h-65 w-1 bg-transparent text-2xl border-l-6 border-dashed border-red-600 left-43 hidden md:flex"></div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-15 md:gap-38 my-12">
            <div className="flex flex-col items-center gap-4 z-10">
              <div className="p-7 rounded-[50%] text-red-600 text-2xl border border-red-600 bg-white z-10 ">
                <FaSearch />
              </div>
              <h1 className="font-semibold ">DISCOVER</h1>
            </div>
            <div className="flex flex-col items-center gap-4 z-10">
              <div className="p-7 rounded-[50%] text-red-600 text-2xl border border-red-600 bg-white z-10 ">
                <IoMdSettings />
              </div>
              <h1 className="font-semibold ">PLAN</h1>
            </div>
            <div className="flex flex-col items-center gap-4 z-10">
              <div className="p-7 rounded-[50%] text-red-600 text-2xl border border-red-600 bg-white z-10 ">
                <MdDesignServices />
              </div>
              <h1 className="font-semibold ">DESIGN</h1>
            </div>
            <div className="flex flex-col items-center gap-4 z-10">
              <div className="p-7 rounded-[50%] text-red-600 text-2xl border border-red-600 bg-white z-10 ">
                <FaCode />
              </div>
              <h1 className="font-semibold ">DEVELOP</h1>
            </div>
            <div className="flex flex-col items-center gap-4 z-10">
              <div className="p-7 rounded-[50%] text-red-600 text-2xl border border-red-600 bg-white z-10 ">
                <GrTest />
              </div>
              <h1 className="font-semibold ">TEST</h1>
            </div>
            <div className="flex flex-col items-center gap-4 z-10">
              <div className="p-7 rounded-[50%] text-red-600 text-2xl border border-red-600 bg-white z-10 ">
                <FaPaperPlane />
              </div>
              <h1 className="font-semibold ">DELIVER</h1>
            </div>
          </div>
          <div>
            <p className="italic text-gray-500 my-10">
              <span className="text-red-800 font-bold">“</span> Every project
              starts with understanding your business
              <span className="text-red-800 font-bold">”</span>
            </p>
          </div>
        </div>
      </div>
      <div className="md:px-20 px-4">
        <div className="flex flex-col md:flex-row justify-between px-4 mt-20">
          <div>
            <h1 className="font-semibold text-red-600">WHY CHOOSE ASHATECH?</h1>
            <h1 className="text-3xl md:text-4xl  font-bold">
              <span className="text-red-600"> Technology </span>
              ,Expertise, <span className="text-red-600">Results</span>
            </h1>
          </div>
          <div>
            <p className="text-gray-600 md:w-105 text-center md:text-right mt-5">
              We combine technical expertise, creative thinking & a client-first
              approach to deliver digital solutions that create measurable value
              for businesses.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-12">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-400/20 w-80 p-6 rounded-2xl flex flex-col gap-2 hover:shadow-md duration-200">
              <h1 className="font-semibold">01</h1>
              <h1 className="text-red-800 font-semibold">
                Experienced Expertise
              </h1>
              <p className="text-gray-500 text-xs">
                Our team combines technical knowledge, creative thinking and
                practical business understanding.
              </p>
            </div>
            <div className="bg-gray-400/20 w-80 p-6 rounded-2xl flex flex-col gap-2 hover:shadow-md duration-200">
              <h1 className="font-semibold">02</h1>
              <h1 className="text-red-800 font-semibold">
                Client-First Approach
              </h1>
              <p className="text-gray-500 text-xs">
                We listen, understand and build solutions around your goals
                rather than forcing one-size-fits-all solutions.
              </p>
            </div>
            <div className="bg-gray-400/20 w-80 p-6 rounded-2xl flex flex-col gap-2 hover:shadow-md duration-200">
              <h1 className="font-semibold">03</h1>
              <h1 className="text-red-800 font-semibold">
                Quality & Reliability
              </h1>
              <p className="text-gray-500 text-xs">
                From design to deployment, we focus on clean code, tested
                functionality and maintainable technology.
              </p>
            </div>
            <div className="bg-gray-400/20 w-80 p-6 rounded-2xl flex flex-col gap-2 hover:shadow-md duration-200">
              <h1 className="font-semibold">04</h1>
              <h1 className="text-red-800 font-semibold">
                Long-Term Partnership
              </h1>
              <p className="text-gray-500 text-xs">
                Our relationship doesn't end at launch. We support, upgrade and
                scale technology as your business grows.
              </p>
            </div>
          </div>
          <div>
            <p className="italic text-gray-500 my-10">
              <span className="text-red-800 font-bold">“</span> Your goals
              become our goals.
              <span className="text-red-800 font-bold">”</span>
            </p>
          </div>
        </div>
      </div>
      <div className="md:px-20 px-4 flex flex-col gap-6 pb-16 bg-linear-to-t from-red-400/40 to-white/10 ">
        <h1 className="font-semibold text-red-600 mt-12">
          READY TO MOVE FORWARD?
        </h1>
        <h1 className="text-4xl font-bold">
          <span className="text-red-600"> Lets Build </span>
          Something Great <br />
          Together.
        </h1>
        <p className="text-gray-600 md:w-135 text-left text-xs">
          Tell us about your idea and let's turn it into a digital solution that
          creates real impact for your business.
        </p>
        <Link
          href="/contact"
          className="bg-red-700 flex gap-1 font-semibold px-5 py-3 w-48 text-white rounded-md hover:bg-red-600 hover:gap-2 duration-300"
        >
          Get a Free Quote
          <span className="flex items-center">
            <FaArrowRightLong />
          </span>
        </Link>
      </div>
    </div>
  );
}
