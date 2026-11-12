import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="flex mt-8 flex-col ">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:pl-20 px-5">
          <div className="flex">
            <img src="/logo.webp" alt="logo image" className="h-13" />
            <Link href="/" className="flex flex-col">
              <h1 className="text-2xl font-semibold">AshaTech</h1>
              <span className="text-xs text-gray-700 font-semibold">
                SOLUTIONS FOR YOUR BUSINESS
              </span>
            </Link>
          </div>
          <p className="lg:w-60 text-gray-600 mt-5">
            AshaTech is a leading IT solutions company based in Delhi, helping
            businesses of all sizes grow with technology.
          </p>
          <div className="flex gap-5 text-xl mt-5">
            <span className="bg-cyan-50 p-3 rounded-2xl">
              <FaFacebookF className="text-[#475569] " />
            </span>
            <span className="bg-cyan-50 p-3 rounded-2xl">
              <FaLinkedinIn className="text-[#475569] " />
            </span>
            <span className="bg-cyan-50 p-3 rounded-2xl">
              <FaInstagram className="text-[#475569] " />
            </span>
            <span className="bg-cyan-50 p-3 rounded-2xl">
              <FaYoutube className="text-[#475569] " />
            </span>
          </div>
        </div>
        <div className="mx-5 grid md:grid-cols-2 text-xl md:text-md lg:grid-cols-4 gap-6">
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold mt-6 ">Quick Links</h1>
            <div className="flex flex-col lg:text-sm mt-2 text-gray-600 gap-2">
              <Link href={`/about`}>About Us</Link>
              <Link href={`/services`}>Services</Link>
              <Link href={`/portfolio`}>Portfolio</Link>
              <Link href={`/review`}>Reviews</Link>
              <Link href={`/blog`}>Blog</Link>
              <Link href={`/contact`}>Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold ">Our Services</h1>
            <div className="flex flex-col lg:text-sm mt-2 text-gray-600 gap-2">
              <Link href={`/services/web-development`}>Web Development</Link>
              <Link href={`/services/app-development`}>
                Mobile App Development
              </Link>
              <Link href={`/services/software-development`}>
                Software Development
              </Link>
              <Link href={`/e-comm`}>E-Commerce Solutions</Link>
              <Link href={`/services/digital-marketing`}>
                Digital Marketing
              </Link>
              <Link href={`/seo-serv`}>SEO Services</Link>
              <Link href={`/it`}>IT Consulting</Link>
              <Link href={`/ai-ml`}>AI & ML Solutions</Link>
              <Link href={`/data-cln`}>Data Cleaning</Link>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold ">Our Location</h1>
            <div className="flex flex-col lg:text-sm mt-2 text-gray-600 gap-4 ">
              <h1 className="flex items-center gap-2">
                <FaLocationDot className="text-red-600 text-xl" />
                Delhi, India
              </h1>
              <h1 className="flex items-center gap-2">
                <FaPhoneAlt className="text-red-600 text-xl" />
                +91 75310 80874
              </h1>
              <h1 className="flex items-center gap-2">
                <IoMdMail className="text-red-600 text-xl" />
                info@ashatech.co.in
              </h1>
              <button className="bg-[#b91c1c] font-semibold px-4 py-2 text-white rounded-md">
                Get Directions
              </button>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14036.377425826035!2d77.09327359999999!3d28.416409599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2203669a5151%3A0x6d275bde29f8078d!2sMarengo%20Asia%20Hospitals%2C%20Gurugram!5e0!3m2!1sen!2sin!4v1793437380017!5m2!1sen!2sin"
            className="w-full h-60"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="md:mx-20 mt-10">
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
          <h1 className="flex items-center gap-1">
            <FaRegCopyright /> 2026 AshaTech. All Rights Reserved.
          </h1>
          <span className="flex gap-4">
            <h1>Privacy Policy</h1>
            <h1>Terms & Conditions</h1>
          </span>
        </div>
      </div>
    </div>
  );
}
