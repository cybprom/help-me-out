import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full h-[84px] px-24 mx-auto px[100px] py-3 bg-white justify-between items-center gap-[351px] inline-flex border-b">
      <div className="flex items-center space-x-3 ">
        <Image src="/LogoIcon.svg" alt="Logo" width={40} height={40} />
        <span className="text-indigo-950 font-bold text-xl">HelpMeOut</span>
      </div>
      <div className="flex items-center space-x-10 font-medium">
        <div>Features</div>
        <div>How It Works</div>
      </div>
      <div className="text-indigo-950 text-lg font-semibold">Get Started</div>

      {/* <div className="p-2.5 flex-col justify-start items-start gap-2.5 inline-flex">
        <div className="justify-start items-center gap-2.5 inline-flex">
          <div className="justify-start items-center gap-2 flex">
            <div className="w-10 h-10 relative">
              <div className="w-10 h-10 left-[-0px] top-[-0.17px] absolute"></div>
            </div>
            <div className="text-indigo-950 text-base font-bold font-['Inter']">
              HelpMeOut
            </div>
          </div>
        </div>
      </div>
      <div className="pl-5 pr-[21px] py-2.5 justify-center items-start gap-[39px] flex">
        <div className="self-stretch justify-start items-start gap-12 inline-flex">
          <div className="text-black text-base font-medium font-['Work Sans']">
            Features
          </div>
        </div>
        <div className="self-stretch justify-start items-start gap-12 inline-flex">
          <div className="text-black text-base font-medium font-['Work Sans']">
            How It Works
          </div>
        </div>
      </div>
      <div className="px-2.5 py-3 rounded-[5px] border-indigo-950 flex-col justify-center items-center gap-2.5 inline-flex">
        <div className="justify-start items-center gap-[19px] inline-flex">
          <div className="justify-start items-center gap-2.5 flex">
            <div className="text-center text-indigo-950 text-lg font-semibold font-['Sora']">
              Get Started
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
