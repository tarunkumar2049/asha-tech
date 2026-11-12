"use client";

import Image from "next/image";
import { useState } from "react";
import { easeInOut, motion } from "framer-motion";

import it_consulting from "/public/it_consulting.jpg";
import softwareDev from "/public/software_dev.jpg";
import webDev from "/public/web_dev.jpg";
import mobileDev from "/public/mobile_dev.jpg";
import digitalMark from "/public/digital_marketing.jpg";
import ecommerce from "/public/asha_hero.jpg";

import { HiUsers } from "react-icons/hi2";
import { FaDesktop, FaMobileAlt } from "react-icons/fa";
import { ImStatsDots } from "react-icons/im";
import { FaCartShopping } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

import Link from "next/link";

const services = [
  {
    id: 1,
    title: "IT CONSULTING",
    heading: "Strategic IT Guidance",
    desc: "Expert technology consulting to optimize your infrastructure, reduce downtime, and make smart decisions for digital transformation.",
    image: it_consulting,
    icon: FaDesktop,
    shortTitle: "IT",
    shortDesc: "Consulting",
    link: "/www.google.com",
  },
  {
    id: 2,
    title: "Software Development",
    heading: "Custom Software Solutions",
    desc: "Tailored ERP, CRM, and enterprise software that automates your workflow, reduces costs, and scales with your growing business needs.",
    image: softwareDev,
    icon: FaDesktop,
    shortTitle: "Software",
    shortDesc: "Development",
    link: "/services/software-development",
  },
  {
    id: 3,
    title: "Web Development",
    heading: "Build Stunning Websites",
    desc: "We craft fast, responsive, and SEO-optimized websites that turn visitors into customers. From landing pages to complex web apps — we deliver excellence.",
    image: webDev,
    icon: HiUsers,
    shortTitle: "Web",
    shortDesc: "Development",
    link: "/services/web-development",
  },
  {
    id: 4,
    title: "Mobile App Development",
    heading: "Powerful Mobile App",
    desc: "Native and cross-platform iOS & Android apps with stunning UI, smooth performance, and features your users will love.",
    image: mobileDev,
    icon: FaMobileAlt,
    shortTitle: "Mobile",
    shortDesc: "Development",
    link: "/services/app-development",
  },
  {
    id: 5,
    title: "Digital Marketing",
    heading: "Grow Your Online Presence",
    desc: "SEO, social media marketing, PPC campaigns, and content strategy that drive 3x more leads and boost your brand visibility.",
    image: digitalMark,
    icon: ImStatsDots,
    shortTitle: "Digital",
    shortDesc: "Marketing",
    link: "/services/digital-marketing",
  },
  {
    id: 6,
    title: "E-Commerce Solutions",
    heading: "Launch Your Online Store",
    desc: "Powerful e-commerce platforms with secure payments, inventory management, and stunning product displays that increase sales.",
    image: ecommerce,
    icon: FaCartShopping,
    shortTitle: "E-Commerce",
    shortDesc: "Solutions",
    link: "/www.google.com",
  },
];

export default function Hero() {
  const [activeService, setActiveService] = useState(services[0]);
  return (
    <div>
      <div className="relative overflow-hidden">
        {/* Background Image */}
        <motion.div
          key={activeService.id}
          className="overflow-hidden h-[80vh] md:min-h-screen mt-0 bg-amber-500"
          initial={{ opacity: 0, scale: 2, y: 120 }}
          animate={{ opacity: 1, scale: 1.4, y: 120 }}
          transition={{ duration: 1.2, ease: easeInOut }}
        >
          <Image
            className="w-full h-full object-cover object-right"
            src={activeService.image}
            alt={activeService.title}
            priority
            fill
          />
        </motion.div>

        {/* Service Content */}
        <div className="absolute top-18 lg:top-46 left-4 lg:left-20 gap-4 flex flex-col">
          <motion.div
            key={`content-${activeService.id}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col gap-4"
          >
            <h1 className="text-white font-semibold bg-[#b91c1c] px-4 rounded-2xl w-fit">
              {activeService.title}
            </h1>

            <h1 className="text-3xl font-bold">{activeService.heading}</h1>

            <p className="w-100 md:w-132 text-md md:text-xl text-gray-600">{activeService.desc}</p>

            <div className="flex gap-2 md:gap-6">
              <Link
                href={activeService.link}
                className="flex gap-1 shadow-2xl px-8 py-3 rounded-md text-white bg-[#b91c1c] hover:gap-3 duration-300 hover:bg-red-800"
              >
                Explore Services
                <span className="flex items-center">
                  <FaArrowRightLong/>
                </span>
              </Link>

              <Link
                href={"/contact"}
                className="shadow-2xl px-8 py-3 rounded-md bg-white hover:bg-gray-100 duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          {/* Service Thumbnail Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-10 mx-auto md:mx-0 w-95 md:w-130">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.id}
                  whileHover="hover"
                  onClick={() => setActiveService(service)}
                  className={`relative h-22 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl group cursor-pointer transition-all duration-300 ${
                    activeService.id === service.id
                      ? "border-2 border-red-500"
                      : "hover:border-2 hover:border-red-500"
                  }`}
                >
                  {/* Thumbnail Image */}
                  <motion.div
                    variants={{
                      default: { x: 12 },
                      hover: {
                        x: 12,
                        transition: { duration: 0.6 },
                      },
                    }}
                    initial="default"
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      className="scale-215 hover:scale-240 -translate-x-10 duration-600 delay-110"
                    />
                  </motion.div>

                  {/* Thumbnail Information */}
                  <div className="absolute left-3 bottom-3">
                    <div className="flex gap-2">
                      <span className="p-2 bg-gray-300 rounded-md group-hover:bg-red-600 group-hover:text-white duration-500">
                        <Icon />
                      </span>

                      <div className="text-xs">
                        <h1 className="font-bold">{service.shortTitle}</h1>

                        <h1 className="text-gray-600">{service.shortDesc}</h1>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
