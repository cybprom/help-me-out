import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="">
      <div className="max-w-[1440px] mx-auto h-[347px] px-[130px] py-[98px] bg-indigo-950 justifystart items-start gap-[243px] inline-flex">
        <div className="p-2.5 flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="justify-start items-center gap-2.5 inline-flex">
            <div className="justify-start items-center gap-2 flex">
              <div className="w-10 h-10 relative">
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
          </div>
        </div>
        <div className="justify-start items-start gap-[220px] flex">
          <div className="flex-col justify-start items-start gap-[26px] inline-flex">
            <div className="text-white text-base font-semibold font['Sora']">
              Menu
            </div>
            <div className="flex-col justify-start items-start gap-6 flex">
              <div className="text-white text-base font-normal font['Work Sans']">
                Home
              </div>
              <div className="text-white text-base font-normal font['Work Sans']">
                Converter
              </div>
              <div className="text-white text-base font-normal font['Work Sans']">
                How it Works
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-[26px] inline-flex">
            <div className="text-white text-base font-semibold font['Sora']">
              About us
            </div>
            <div className="flex-col justify-start items-start gap-6 flex">
              <div className="text-white text-base font-normal font['Work Sans']">
                About
              </div>
              <div className="text-white text-base font-normal font['Work Sans']">
                Contact Us
              </div>
              <div className="text-white text-base font-normal font['Work Sans']">
                Privacy Policy
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-6 inline-flex">
            <div className="text-white text-base font-semibold font['Sora']">
              Screen Record
            </div>
            <div className="flex-col justify-start items-start gap-6 flex">
              <div className="text-white text-base font-normal font['Work Sans']">
                Browser Window
              </div>
              <div className="text-white text-base font-normal font['Work Sans']">
                Desktop
              </div>
              <div className="text-white text-base font-normal font['Work Sans']">
                Application
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
