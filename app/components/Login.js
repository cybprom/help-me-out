import React from "react";

export default function Login() {
  return (
    <div className="w-[475px] h-[599px] flex-col justify-center items-center gap-8 inline-flex">
      <div className="flex-col justify-start items-center gap-2 flex">
        <div className="text-neutral-900 text-[32px] font-bold font-['Inter'] leading-[48px] tracking-tight">
          Log in or Sign up
        </div>
        <div className="w-[321px] text-center">
          <span className="text-neutral-700 text-sm font-light font-['Inter'] leading-[21px] tracking-tight">
            Join millions of others in sharing successful moves on{" "}
          </span>
          <span className="text-neutral-700 text-sm font-normal font-['Sen'] leading-[21px] tracking-tight">
            HelpMeOut
          </span>
          <span className="text-neutral-700 text-sm font-light font-['Inter'] leading-[21px] tracking-tight">
            .
          </span>
        </div>
      </div>
      <div className="flex-col justify-start items-start gap-6 flex">
        <div className="pl-[133px] pr-[123px] py-[3px] bg-white rounded-xl border border-neutral-900 justify-end items-center inline-flex">
          <div className="self-stretch px-2.5 py-[9px] justify-center items-center gap-4 inline-flex">
            <div className="w-6 h-6 relative" />
            <div className="text-neutral-900 text-base font-medium font-['Inter'] leading-normal tracking-tight">
              Continue with Google
            </div>
          </div>
        </div>
        <div className="pl-[128.50px] pr-[96.50px] py-[3px] bg-white rounded-xl border border-neutral-900 justify-end items-center inline-flex">
          <div className="self-stretch px-2.5 py-[9px] justify-center items-center gap-4 inline-flex">
            <div className="w-6 h-6 relative">
              <div className="w-6 h-6 left-0 top-[24px] absolute"></div>
            </div>
            <div className="text-neutral-900 text-base font-medium font-['Inter'] leading-normal tracking-tight">
              Continue with Facebook
            </div>
          </div>
        </div>
      </div>
      <div className="justify-start items-center gap-0.5 inline-flex">
        <div className="px-2.5 py-0.5 flex-col justify-center items-center gap-2.5 inline-flex">
          <div className="text-neutral-300 text-sm font-medium font-['Inter'] leading-[21px] tracking-tight">
            or
          </div>
        </div>
      </div>
      <div className="flex-col justify-start items-start gap-4 flex">
        <div className="h-[79px] flex-col justify-start items-start gap-2 flex">
          <div className="self-stretch h-[79px] flex-col justify-start items-start gap-3 flex">
            <div className="self-stretch text-neutral-900 text-sm font-medium font-['Work Sans']">
              Email
            </div>
            <div className="self-stretch p-4 rounded-xl border border-gray-400 justify-start items-center gap-2 inline-flex">
              <div className="grow shrink basis-0 text-zinc-600 text-base font-medium font-['Work Sans']">
                Enter your email address
              </div>
            </div>
          </div>
        </div>
        <div className="h-[79px] flex-col justify-start items-start gap-2 flex">
          <div className="self-stretch h-[79px] flex-col justify-start items-start gap-3 flex">
            <div className="self-stretch text-neutral-900 text-sm font-medium font-['Work Sans']">
              Password
            </div>
            <div className="self-stretch p-4 rounded-xl border border-gray-400 justify-start items-center gap-2 inline-flex">
              <div className="grow shrink basis-0 text-zinc-600 text-base font-medium font-['Work Sans']">
                Enter your Password
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[53px] px-5 py-4 bg-indigo-950 rounded-lg flex-col justify-center items-center gap-2.5 flex">
        <div className="justify-start items-center gap-[19px] inline-flex">
          <div className="justify-start items-center gap-2.5 flex">
            <div className="text-center text-slate-50 text-lg font-medium font-['Work Sans']">
              Sign Up
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
