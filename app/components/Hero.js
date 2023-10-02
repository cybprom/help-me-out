import Image from "next/image";
import Link from "next/link";
import React from "react";
import GridDot from "./GridDot";

export default function Hero() {
  return (
    <div className="w-[1440px] h-[777px] relative bg-white">
      <div className="left-[100px] top-[230px] absolute flex-col justify-start items-start gap-12 inline-flex">
        <div className="flex-col justify-start items-start gap-5 flex">
          <div className="justify-start items-start gap-2.5 inline-flex">
            <div className="text-neutral-900 text-[64px] font-bold font['Sora'] leading-[64px]">
              Show Them
              <br />
              Don’t Just Tell
            </div>
          </div>
          <div className="justify-start items-start gap-2.5 inline-flex">
            <div className="w-[548px] text-black text-opacity-75 text-xl font-normal font['Inter'] leading-7">
              Help your friends and loved ones by creating and sending videos on
              how to get things done on a website.
            </div>
          </div>
        </div>
        <div className="px-6 py-[22px] bg-indigo-950 rounded-lg flex-col justify-center items-center gap-2.5 flex">
          <div className="justify-center items-center gap-3 inline-flex">
            <div className="justify-start items-center gap-2.5 flex">
              <Link
                href="https://drive.google.com/drive/folders/1wAZVKuJihs-GLNEP6pepwTvHxkkDxvFM?usp=sharing"
                target="_blank"
                className="text-center text-white text-lg font-medium font['Work Sans']"
              >
                Install HelpMeOut
              </Link>
            </div>
            <div className="w-5 h-5 justify-center items-center flex">
              {/* <div className="w-5 h-5 relative"></div> */}
              <Image
                src="/arrow-right.svg"
                width={20}
                height={20}
                alt="arrow-right"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-[330px] h-[313.08px] left-[1058.50px] top-[107px] absolute opacity-30" /> */}
      <div className="w-[330px] h-[313.08px] left-[1058.50px] top-[107px] absolute opacity-40">
        <GridDot />
      </div>
      {/* <div className="w-[330px] h-[313.08px] left-[661.50px] top-[388px] absolute opacity-50" /> */}
      <div className="w-[330px] h-[300px] left-[661.50px] top-[300px] absolute opacity-20">
        <GridDot />
      </div>
      <div className="w-[311px] h-[214px] left-[704px] top-[165px] absolute rounded-lg border-2 justify-center items-center inline-flex">
        <Image src="/image1.png" width={370} height={220} alt="image" />
      </div>
      <div className="w-[311px] h-[214px] left-[704px] top-[399px] absolute rounded-lg border-2 justify-center items-center inline-flex">
        <Image src="/image2.png" width={370} height={220} alt="image2" />
      </div>
      <div className="w-[305px] h-[448px] left-[1035px] top-[165px] absolute rounded-lg border-2 flex-col justify-center items-center inline-flex">
        <Image src="/woman.png" width={370} height={220} alt="image2" />
      </div>
    </div>
  );
}
