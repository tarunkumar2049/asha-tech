"use client";
import Image from "next/image";
import it_consulting from "/public/it_consulting.jpg";
import softwareDev from "/public/software_dev.jpg";
import webDev from "/public/web_dev.jpg";
import mobileDev from "/public/mobile_dev.jpg";
import digitalMark from "/public/digital_marketing.jpg";
import ecommerce from "/public/asha_hero.jpg";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [bg, setbg] = useState(it_consulting);

  return (
    <div>
      <div className="relative">
        <div className="overflow-hidden h-screen mt-20">
          <Image
            className="w-screen scale-160 -translate-x-5"
            src={bg}
            alt="Mobile application development representation"
          />
        </div>
        <div className="absolute top-24 left-20 gap-4 flex flex-col">
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
          <div className="grid grid-cols-3 gap-3 mt-10">
            <motion.div
              className="w-40 h-22 rounded-xl hover:border-red-500 hover:border-2 overflow-hidden hover:scale-105  "
              onClick={() => setbg(it_consulting)}
            >
              <Image
                src={it_consulting}
                alt="it consultant"
                className="scale-215 hover:scale-240 -translate-x-5 duration-600 delay-110 "
              />
            </motion.div>
            <motion.div
              className="w-40 h-22 rounded-xl hover:border-red-500 hover:border-2 overflow-hidden hover:scale-105  "
              onClick={() => setbg(softwareDev)}
            >
              <Image
                src={softwareDev}
                alt="software development"
                className="scale-215 hover:scale-240 -translate-x-5 duration-600 delay-110 "
              />
            </motion.div>
            <motion.div
              className="w-40 h-22 rounded-xl hover:border-red-500 hover:border-2 overflow-hidden hover:scale-105  "
              onClick={() => setbg(webDev)}
            >
              <Image
                src={webDev}
                alt="web development"
                className="scale-215 hover:scale-240 -translate-x-5 duration-600 delay-110 "
              />
            </motion.div>
            <motion.div
              className="w-40 h-22 rounded-xl hover:border-red-500 hover:border-2 overflow-hidden hover:scale-105  "
              onClick={() => setbg(mobileDev)}
            >
              <Image
                src={mobileDev}
                alt="mobile development"
                className="scale-215 hover:scale-240 -translate-x-5 duration-600 delay-110 "
              />
            </motion.div>
            <motion.div
              className="w-40 h-22 rounded-xl hover:border-red-500 hover:border-2 overflow-hidden hover:scale-105  "
              onClick={() => setbg(digitalMark)}
            >
              <Image
                src={digitalMark}
                alt="digital marketing"
                className="scale-215 hover:scale-240 -translate-x-5 duration-600 delay-110 "
              />
            </motion.div>
            <motion.div
              className="w-40 h-22 rounded-xl hover:border-red-500 hover:border-2 overflow-hidden hover:scale-105  "
              onClick={() => setbg(ecommerce)}
            >
              <Image
                src={ecommerce}
                alt="e commerce"
                className="scale-215 hover:scale-240 -translate-x-5 duration-600 delay-110 "
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
