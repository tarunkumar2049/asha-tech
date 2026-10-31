import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex">
      <div className="pl-20">
        <div className="flex">
          <img src="/logo.webp" alt="logo image" className="h-13" />
          <Link href="/" className="flex flex-col">
            <h1 className="text-2xl font-semibold">AshaTech</h1>
            <span className="text-xs text-gray-700 font-semibold">
              SOLUTIONS FOR YOUR BUSINESS
            </span>
          </Link>
        </div>
        <p className="w-60 text-gray-600 mt-5">
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
      <div className="flex">
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold ">Quick Links</h1>
          <div className="flex flex-col mt-2">
            <Link href={`/`}>About Us</Link>
            <Link href={`/`}>Services</Link>
            <Link href={`/`}>Portfolio</Link>
            <Link href={`/`}>Reviews</Link>
            <Link href={`/`}>Blog</Link>
            <Link href={`/`}>Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
