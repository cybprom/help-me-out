import Image from "next/image";
import React from "react";

export default function Features() {
  return (
    <div className="w-[1440px] h-[766px] py-20 bg-white flex-col justify-center items-center gap-16 inline-flex">
      <div className="h-[88px] flex-col justify-center items-center gap-2 flex">
        <div className="self-stretch text-center text-neutral-900 text-[40px] font-bold font['Sora']">
          Features
        </div>
        <div className="self-stretch text-center text-zinc-600 text-xl font-normal font['Work Sans'] leading-[30.26px]">
          Key Highlights of Our Extension
        </div>
      </div>
      <div className="w-[1240px] justify-start items-center gap-14 inline-flex">
        <div className="w-[548px] self-stretch flex-col justify-start items-start gap-12 inline-flex">
          <div className="self-stretch justify-start items-start gap-4 inline-flex">
            <div className="p-2 bg-slate600 bg-[#413C6D] rounded-[30px] justify-center items-center flex">
              <div className="w-8 h-8 justify-center items-center flex">
                <Image
                  src="/record-circle.svg"
                  width={20}
                  height={20}
                  alt="record-circle"
                />
              </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
              <div className="self-stretch h-[102px] flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch text-slate-800 text-[28px] font-semibold font['Inter']">
                  Simple Screen Recording
                </div>
                <div className="self-stretch text-zinc-600 text-xl font-normal font['Work Sans'] leading-[30.26px]">
                  Effortless screen recording for everyone. Record with ease, no
                  tech expertise required.
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch justify-start items-start gap-4 inline-flex">
            <div className="p-2 bg-[#413C6D] rounded-[30px] justify-center items-center flex">
              <div className="w-8 h-8 justify-center items-center flex">
                <Image src="/send-2.svg" width={20} height={20} alt="send-2" />
              </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
              <div className="self-stretch h-[102px] flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch text-slate-800 text-[28px] font-semibold font['Inter']">
                  Easy-to-Share URL
                </div>
                <div className="self-stretch text-zinc-600 text-xl font-normal font['Work Sans'] leading-[30.26px]">
                  Share your recordings instantly with a single link. No
                  attachments, no downloads.
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch justify-start items-start gap-4 inline-flex">
            <div className="p-2 bg-[#413C6D] rounded-[30px] justify-center items-center flex">
              <div className="w-8 h-8 justify-center items-center flex">
                <Image
                  src="/refresh-square-2.svg"
                  width={20}
                  height={20}
                  alt="refresh-square-2"
                />
              </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
              <div className="self-stretch h-[102px] flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch text-slate-800 text-[28px] font-semibold font['Inter']">
                  Revisit Recordings
                </div>
                <div className="self-stretch text-zinc-600 text-xl font-normal font['Work Sans'] leading-[30.26px]">
                  Access and review your past content effortlessly. Your
                  recordings, always at your fingertips.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <img
          className="w-[636px] h-[454px] rounded-lg"
          src="https://via.placeholder.com/636x454"
        /> */}
        <Image
          src="/Video-Repository.svg"
          width={600}
          height={450}
          alt="refresh-square-2"
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
