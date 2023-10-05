import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="bg-[#120B48] px-24 py-16 text-white">
        <div className="flex justify-between mx-auto container">
          <div className="flex items-center itemsstart">
            <div className="mr-2">
              <Image
                src="/LogoIconWhite.svg"
                width={40}
                height={40}
                alt="Logo"
              />
            </div>
            <div className="text-white text-xl font-bold font['Inter']">
              HelpMeOut
            </div>
          </div>

          {/* NAVS */}
          <div className="flex flex-col space-y-5">
            <h1 className=" font-sora font-semibold text-lg">Menu</h1>
            <Link href="/" className=" font-work font-normal text-base">
              Home
            </Link>
            <Link href="/" className=" font-work font-normal text-base">
              Converter
            </Link>
            <Link href="/" className=" font-work font-normal text-base">
              How it Works
            </Link>
          </div>

          {/* About Us */}
          <div className="flex flex-col space-y-5">
            <h1 className=" font-sora font-semibold text-lg">About Us</h1>
            <Link href="/" className=" font-work font-normal text-base">
              About
            </Link>
            <Link href="/" className=" font-work font-normal text-base">
              Contact Us
            </Link>
            <Link href="/" className=" font-work font-normal text-base">
              Privacy Policy
            </Link>
          </div>

          {/* Screen Record */}
          <div className="flex flex-col space-y-5">
            <h1 className=" font-sora font-semibold text-lg">Screen Record</h1>
            <Link href="/" className=" font-work font-normal text-base">
              Browse Window
            </Link>
            <Link href="/" className=" font-work font-normal text-base">
              Desktop
            </Link>
            <Link href="/" className=" font-work font-normal text-base">
              Application
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
