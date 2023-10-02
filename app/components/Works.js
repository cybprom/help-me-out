import React from "react";
import Image from "next/image";

export default function Works() {
  return (
    <div className="w-[1440px] h-[897px] relative bg-white">
      <div className="left-[568px] top-[103px] absolute text-neutral-900 text-[40px] font-bold font['Sora']">
        How it works
      </div>
      <div className="left-[100px] top-[212px] absolute justify-start items-end gap-[83px] inline-flex">
        <div className="flex-col justify-start items-start gap-7 inline-flex">
          <div className="flex-col justify-start items-center gap-8 flex">
            <div className="h-[67px] w-[67px]  px-[26px] py-3.5 bg-indigo-950 rounded-[60px] flex-col justify-center items-center gap-2.5 flex">
              <div className="text-center text-white text-[32px] font-bold font['Inter']">
                1
              </div>
            </div>
            <div className="flex-col justify-center items-center gap-4 flex">
              <div className="flex-col justify-start items-center flex">
                <div className="text-center text-slate-800 text-[28px] font-semibold font['Inter']">
                  Record Screen
                </div>
              </div>
              <div className="w-[358px] text-center text-zinc-600 text-xl font-normal font['Work Sans'] leading-[30.26px]">
                Click the &quot;Start Recording&quot; button in our extension.
                choose which part of your screen to capture and who you want to
                send it to.
              </div>
            </div>
          </div>
          <div className="w-[358px] h-[270px] relative">
            {/* <div className="w-[314.10px] h-[250.23px] left-[21.77px] top-[19.49px] absolute"></div>
            <div className="w-[357.88px] h-[251.48px] left-[-0.12px] top-[0.75px] absolute"></div> */}
            <Image src="/rec.svg" width={350} height={270} alt="rec" />
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-7 inline-flex">
          <div className="flex-col justify-start items-center gap-8 flex">
            <div className="h-[67px] w-[67px]  px-[23px] py-3.5 bg-indigo-950 rounded-[60px] flex-col justify-center items-center gap-2.5 flex">
              <div className="text-center text-white text-[32px] font-bold font['Inter']">
                2
              </div>
            </div>
            <div className="flex-col justify-center items-center gap-4 flex">
              <div className="flex-col justify-start items-center flex">
                <div className="text-center text-slate-800 text-[28px] font-semibold font['Inter']">
                  Share Your Recording
                </div>
              </div>
              <div className="w-[358px] text-center text-zinc-600 text-xl font-normal font['Work Sans'] leading-[30.26px]">
                We generate a shareable link for your video. Simply send it to
                your audience via email or copy the link to send via any
                platform.
              </div>
            </div>
          </div>
          <div className="w-[358px] h-[270px] relative">
            <Image src="/rec.svg" width={350} height={270} alt="rec" />
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-7 inline-flex">
          <div className="flex-col justify-start items-center gap-8 flex">
            <div className="h-[67px] w-[67px] px-[23px] py-3.5 bg-indigo-950 rounded-[999999px] flex-col justify-center items-center gap-2.5 flex">
              <div className="text-center text-white text-[32px] font-bold font['Inter']">
                3
              </div>
            </div>
            <div className="flex-col justify-center items-center gap-4 flex">
              <div className="flex-col justify-start items-center flex">
                <div className="text-center text-slate-800 text-[28px] font-semibold font['Inter']">
                  Learn Effortlessly
                </div>
              </div>
              <div className="w-[358px] text-center text-zinc-600 text-xl font-normal font['Work Sans'] leading-[30.26px]">
                Recipients can access your video effortlessly through the
                provided link, with our user-friendly interface suitable for
                everyone.
              </div>
            </div>
          </div>
          <div className="w-[358px] h-[270px] relative">
            <Image src="/rec.svg" width={350} height={270} alt="rec" />
          </div>
        </div>
      </div>
    </div>
  );
}
