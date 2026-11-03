"use client";
import Image from "next/image";
import it_consulting from "/public/it_consulting.jpg";
import softwareDev from "/public/software_dev.jpg";
import webDev from "/public/web_dev.jpg";
import mobileDev from "/public/mobile_dev.jpg";
import digitalMark from "/public/digital_marketing.jpg";
import ecommerce from "/public/asha_hero.jpg";
import { useState } from "react";
import { easeInOut, motion } from "framer-motion";
import { HiUsers } from "react-icons/hi2";
import { FaDesktop } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { ImStatsDots } from "react-icons/im";
import { FaCartShopping } from "react-icons/fa6";




export default function Hero() {
  const [bg, setbg] = useState(it_consulting);

  return (
    <div>
      <div className="relative overflow-hidden">
        <motion.div
          className="overflow-hidden h-screen mt-20"
          key={bg.src}
          initial={{ opacity: 0, scale: 2, y: 120 }}
          animate={{ opacity: 1, scale: 1.4, y: 120 }}
          transition={{ duration: 1.2, ease: easeInOut }}
        >
          <div>
            <Image
              className="w-screen"
              // fill
              src={bg}
              alt="Mobile application development representation"
            />
          </div>
        </motion.div>
        <div className="absolute top-46 left-20 gap-4 flex flex-col">
          <h1 className="text-white font-semibold bg-[#b91c1c] px-4 rounded-2xl w-38">
            IT CONSULTING
          </h1>
          <h1 className="text-5xl font-bold">Strategic IT Guidance</h1>
          <p className="w-132 text-xl text-gray-600">
            Expert technology consulting to optimize your infrastructure, reduce
            downtime, and make smart decisions for digital transformation.
          </p>

          <div className="flex gap-6">
            <button className="px-8 py-3 rounded-md text-white bg-[#b91c1c]">
              Explore Services
            </button>
            <button className="px-8 py-3 rounded-md bg-white">
              Contact Us
            </button>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-10">
            <motion.div
              whileHover="hover"
              className="relative w-40 h-22 rounded-xl hover:border-red-500 hover:border-2 overflow-hidden hover:scale-105 shadow-xl hover:shadow-2xl group"
              onClick={() => setbg(it_consulting)}
            >
              <motion.div
                variants={{
                  default: { x: 12 },
                  hover: { x: 12, transition: { duration: 0.6 } },
                }}
                initial="default"
              >
                <Image
                  src={it_consulting}
                  alt="it consultant"
                  className="scale-215 hover:scale-240 -translate-x-10 duration-600 delay-110 "
                />
              </motion.div>
              <div className="absolute left-3 bottom-3 ">
                <div className="flex gap-2">
                  <span className="p-2 bg-gray-300 rounded-md group-hover:bg-red-600 group-hover:text-white duration-500">
                    <HiUsers />
                  </span>
                  <div className="text-xs">
                    <h1 className="font-bold">IT</h1>
                    <h1 className="text-gray-600">Consulting</h1>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileHover="hover"
              className="relative w-40 h-22 rounded-xl hover:border-red-500 hover:border-2 overflow-hidden hover:scale-105 shadow-xl hover:shadow-2xl group"
              onClick={() => setbg(softwareDev)}
            >
              <motion.div
                variants={{
                  default: { x: 12 },
                  hover: { x: 12, transition: { duration: 0.6 } },
                }}
                initial="default"
              >
                <Image
                  src={softwareDev}
                  alt="it consultant"
                  className="scale-215 hover:scale-240 -translate-x-10 duration-600 delay-110 "
                />
              </motion.div>
              <div className="absolute left-3 bottom-3 ">
                <div className="flex gap-2">
                  <span className="p-2 bg-gray-300 rounded-md group-hover:bg-red-600 group-hover:text-white duration-500">
                    <FaDesktop />
                  </span>
                  <div className="text-xs">
                    <h1 className="font-bold">Software</h1>
                    <h1 className="text-gray-600">Development</h1>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileHover="hover"
              className="relative w-40 h-22 rounded-xl hover:border-red-500 hover:border-2 overflow-hidden hover:scale-105 shadow-xl hover:shadow-2xl group"
              onClick={() => setbg(webDev)}
            >
              <motion.div
                variants={{
                  default: { x: 12 },
                  hover: { x: 12, transition: { duration: 0.6 } },
                }}
                initial="default"
              >
                <Image
                  src={webDev}
                  alt="it consultant"
                  className="scale-215 hover:scale-240 -translate-x-10 duration-600 delay-110 "
                />
              </motion.div>
              <div className="absolute left-3 bottom-3 ">
                <div className="flex gap-2">
                  <span className="p-2 bg-gray-300 rounded-md group-hover:bg-red-600 group-hover:text-white duration-500">
                    <HiUsers />
                  </span>
                  <div className="text-xs">
                    <h1 className="font-bold">Web</h1>
                    <h1 className="text-gray-600">Development</h1>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileHover="hover"
              className="relative w-40 h-22 rounded-xl hover:border-red-500 hover:border-2 overflow-hidden hover:scale-105 shadow-xl hover:shadow-2xl group"
              onClick={() => setbg(mobileDev)}
            >
              <motion.div
                variants={{
                  default: { x: 12 },
                  hover: { x: 12, transition: { duration: 0.6 } },
                }}
                initial="default"
              >
                <Image
                  src={mobileDev}
                  alt="it consultant"
                  className="scale-215 hover:scale-240 -translate-x-10 duration-600 delay-110 "
                />
              </motion.div>
              <div className="absolute left-3 bottom-3 ">
                <div className="flex gap-2">
                  <span className="p-2 bg-gray-300 rounded-md group-hover:bg-red-600 group-hover:text-white duration-500">
                    <FaMobileAlt />
                  </span>
                  <div className="text-xs">
                    <h1 className="font-bold">Mobile</h1>
                    <h1 className="text-gray-600">Development</h1>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileHover="hover"
              className="relative w-40 h-22 rounded-xl hover:border-red-500 hover:border-2 overflow-hidden hover:scale-105 shadow-xl hover:shadow-2xl group"
              onClick={() => setbg(digitalMark)}
            >
              <motion.div
                variants={{
                  default: { x: 12 },
                  hover: { x: 12, transition: { duration: 0.6 } },
                }}
                initial="default"
              >
                <Image
                  src={digitalMark}
                  alt="it consultant"
                  className="scale-215 hover:scale-240 -translate-x-10 duration-600 delay-110 "
                />
              </motion.div>
              <div className="absolute left-3 bottom-3 ">
                <div className="flex gap-2">
                  <span className="p-2 bg-gray-300 rounded-md group-hover:bg-red-600 group-hover:text-white duration-500">
                    <ImStatsDots />
                  </span>
                  <div className="text-xs">
                    <h1 className="font-bold">Digital</h1>
                    <h1 className="text-gray-600">Marketing</h1>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileHover="hover"
              className="relative w-40 h-22 rounded-xl hover:border-red-500 hover:border-2 overflow-hidden hover:scale-105 shadow-xl hover:shadow-2xl group"
              onClick={() => setbg(ecommerce)}
            >
              <motion.div
                variants={{
                  default: { x: 12 },
                  hover: { x: 12, transition: { duration: 0.6 } },
                }}
                initial="default"
              >
                <Image
                  src={ecommerce}
                  alt="it consultant"
                  className="scale-215 hover:scale-240 -translate-x-10 duration-600 delay-110 "
                />
              </motion.div>
              <div className="absolute left-3 bottom-3 ">
                <div className="flex gap-2">
                  <span className="p-2 bg-gray-300 rounded-md group-hover:bg-red-600 group-hover:text-white duration-500">
                    <FaCartShopping />
                  </span>
                  <div className="text-xs">
                    <h1 className="font-bold">E-Commerce</h1>
                    <h1 className="text-gray-600">Solutions</h1>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
