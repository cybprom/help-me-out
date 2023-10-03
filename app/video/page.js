"use client";
import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ClipboardCopy from "../components/ClipboardCopy";
import Loader from "../components/Loader";

export default function Page() {
  const [loading, setLoading] = useState(true);

  const [videoUrl, setVideoUrl] = useState("");
  const fullVideoUrl = `https://damisaalex.xyz/hngx5/${videoUrl}`;
  const [title, setTitle] = useState("");

  const getVideoUrl = async () => {
    try {
      const response = await fetch("https://damisaalex.xyz/hngx5/api/videos");
      const data = await response.json();
      //setVideoUrl(data[13].videoUrl);
      setVideoUrl(data.pop().videoUrl);
      setTitle(data.pop().title);
      //   console.log(data.pop().videoUrl);
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching video", error);
    }
  };

  useEffect(() => {
    getVideoUrl();
  }, []);
  return (
    <>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <section className=" mt-12 container mx-auto ml10">
          <div className="mt-[50%] grid place-items-center text-3xl text-black font-bold md:hidden">
            Oops, Not Responsive Yet!
          </div>
          <div className="hidden md:flex flex-col-reverse md:flex-row">
            <div className="w-[50%] minw-[600px] flex flex-col p-10 space-y-10">
              <p className=" font-bold text-5xl">Your video is ready!</p>
              <div className="content w-[530px] h-[68px] space-y-14">
                <div className="flex flex-col space-y-2">
                  <span className=" text-lg">Name</span>
                  <span className="flex items-center text-xl font-semibold text-slate-600">
                    {/* Untitled_Video_20232509{" "} */}
                    {title}
                    <span className="ml-3 cursor-pointer">
                      <svg
                        width="33"
                        height="32"
                        viewBox="0 0 33 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.167 2.66675H12.5003C5.83366 2.66675 3.16699 5.33341 3.16699 12.0001V20.0001C3.16699 26.6667 5.83366 29.3334 12.5003 29.3334H20.5003C27.167 29.3334 29.8337 26.6667 29.8337 20.0001V17.3334"
                          stroke="#120B48"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M21.8865 4.02676L11.3798 14.5334C10.9798 14.9334 10.5798 15.7201 10.4998 16.2934L9.92651 20.3068C9.71317 21.7601 10.7398 22.7734 12.1932 22.5734L16.2065 22.0001C16.7665 21.9201 17.5532 21.5201 17.9665 21.1201L28.4732 10.6134C30.2865 8.80009 31.1398 6.69343 28.4732 4.02676C25.8065 1.36009 23.6998 2.21343 21.8865 4.02676Z"
                          stroke="#120B48"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M20.3799 5.53345C21.2732 8.72011 23.7666 11.2134 26.9666 12.1201"
                          stroke="#120B48"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </span>
                </div>

                {/*  Enter Email */}
                <div className="flex justify-between  bg-gray-400 bg-opacity-20 border border-gray-200 rounded-[16px] px-6 py2 py-[10px] ">
                  <input
                    type="text"
                    className="wfull w-[80%] bg-transparent outline-none px6 py3 placeholder:text-neutral-700 placeholder:text-opacity-80"
                    placeholder="Enter email of receiver"
                  />
                  <button className="px-[18px] py-2.5 bg-[#605C84] hover:bg-gray-500 rounded-lg text-base font-medium text-white">
                    Send
                  </button>
                </div>

                {/* Video URL */}
                <div className="flex flex-col space-y-2">
                  <span className=" text-xl font-semibold">Video Url</span>
                  <div className="wfull justify-center flex items-center border border-neutral-400 border[#929292]] rounded-[16px] px-6 py-[10px]">
                    <span className="mr-3">
                      {/* https://www.helpmeout/Untitled_Video_20232509 */}
                      {videoUrl}
                    </span>
                    <div className=" -mr-3 flex px-[13px] py-2.5 bg-white text-[#120B48] border border-[#120B48] borderneutral-400 border[#929292] rounded-lg text-base font-medium">
                      <span className="mr-2">
                        <svg
                          width="19"
                          height="20"
                          viewBox="0 0 19 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.66699 12.4998H2.83366C2.39163 12.4998 1.96771 12.3242 1.65515 12.0117C1.34259 11.6991 1.16699 11.2752 1.16699 10.8332V3.33317C1.16699 2.89114 1.34259 2.46722 1.65515 2.15466C1.96771 1.8421 2.39163 1.6665 2.83366 1.6665H10.3337C10.7757 1.6665 11.1996 1.8421 11.5122 2.15466C11.8247 2.46722 12.0003 2.89114 12.0003 3.33317V4.1665M8.66699 7.49984H16.167C17.0875 7.49984 17.8337 8.24603 17.8337 9.1665V16.6665C17.8337 17.587 17.0875 18.3332 16.167 18.3332H8.66699C7.74652 18.3332 7.00033 17.587 7.00033 16.6665V9.1665C7.00033 8.24603 7.74652 7.49984 8.66699 7.49984Z"
                            stroke="#120B48"
                            stroke-width="1.67"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>

                      <ClipboardCopy textToCopy={fullVideoUrl} />
                    </div>
                  </div>
                </div>

                {/* Share Your Video */}
                <div className="share flex flex-col space-y-3">
                  <span className=" text-lg font-semibold">
                    Share your video
                  </span>
                  <div className="flex space-x-5">
                    <button className="flex px-[13px] py-2.5 bg-white text-[#120B48] border border-[#120B48] rounded-lg text-base font-medium">
                      <span className="mr-2">
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M24.5 11.9993C24.5 5.37187 19.1274 -0.000705719 12.5 -0.000705719C5.87258 -0.000705719 0.5 5.37187 0.5 11.9993C0.5 17.9888 4.88823 22.9533 10.625 23.8535V15.468H7.57813V11.9993H10.625V9.35554C10.625 6.34805 12.4165 4.68679 15.1576 4.68679C16.4705 4.68679 17.8438 4.92117 17.8438 4.92117V7.87429H16.3306C14.8399 7.87429 14.375 8.7993 14.375 9.74829V11.9993H17.7031L17.1711 15.468H14.375V23.8535C20.1118 22.9533 24.5 17.9888 24.5 11.9993Z"
                            fill="#1877F2"
                          />
                          <path
                            d="M17.1711 15.4688L17.7031 12H14.375V9.74899C14.375 8.80001 14.8399 7.875 16.3306 7.875H17.8438V4.92188C17.8438 4.92188 16.4705 4.6875 15.1576 4.6875C12.4165 4.6875 10.625 6.34875 10.625 9.35625V12H7.57812V15.4688H10.625V23.8542C11.2359 23.9501 11.8621 24 12.5 24C13.1379 24 13.7641 23.9501 14.375 23.8542V15.4688H17.1711Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      Facebook
                    </button>
                    <button className="flex px-[13px] py-2.5 bg-white text-[#120B48] border border-[#120B48] rounded-lg text-base font-medium">
                      <span className="mr-2">
                        <svg
                          width="21"
                          height="22"
                          viewBox="0 0 21 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M17.5859 3.87197C15.7061 1.98972 13.2059 0.952615 10.542 0.95166C5.05283 0.95166 0.58547 5.41855 0.58356 10.9092C0.582605 12.6644 1.04147 14.3776 1.91288 15.8874L0.5 21.0481L5.77909 19.6634C7.2335 20.457 8.87128 20.8748 10.5377 20.8753H10.542C16.0302 20.8753 20.4981 16.4079 20.5 10.9173C20.5009 8.25627 19.4662 5.7547 17.5859 3.87244V3.87197ZM10.542 19.1935H10.5387C9.05367 19.1931 7.59689 18.7939 6.32583 18.0399L6.02357 17.8604L2.89078 18.6822L3.72686 15.6277L3.53013 15.3144C2.70169 13.9966 2.26383 12.4734 2.26479 10.9097C2.2667 6.3463 5.97963 2.63337 10.5454 2.63337C12.7561 2.63432 14.8342 3.49619 16.3969 5.06091C17.9598 6.62516 18.8197 8.7051 18.8188 10.9163C18.8168 15.4802 15.1039 19.1931 10.542 19.1931V19.1935ZM15.0819 12.9948C14.8332 12.8702 13.6099 12.2685 13.3816 12.1855C13.1534 12.1024 12.9877 12.0609 12.822 12.3101C12.6563 12.5594 12.1793 13.1199 12.0342 13.2856C11.889 13.4518 11.7438 13.4723 11.4951 13.3477C11.2463 13.223 10.4446 12.9604 9.49395 12.1129C8.75433 11.453 8.25483 10.6384 8.10972 10.3892C7.96456 10.1399 8.09444 10.0053 8.21856 9.8816C8.33028 9.76988 8.46733 9.59083 8.59194 9.44566C8.71661 9.30049 8.75767 9.19644 8.84072 9.03071C8.92383 8.86455 8.88228 8.71944 8.82022 8.59477C8.75811 8.47016 8.26061 7.24538 8.05289 6.74738C7.85089 6.26227 7.64561 6.32816 7.49328 6.32004C7.34811 6.31288 7.18244 6.31145 7.01628 6.31145C6.85011 6.31145 6.58078 6.37352 6.35256 6.62277C6.12433 6.87199 5.48162 7.4741 5.48162 8.69838C5.48162 9.92266 6.37311 11.1064 6.49772 11.2725C6.62233 11.4387 8.25244 13.9517 10.7483 15.0299C11.3418 15.2863 11.8054 15.4395 12.1669 15.5542C12.7628 15.7437 13.3052 15.717 13.734 15.653C14.212 15.5814 15.2061 15.0509 15.4133 14.4698C15.6206 13.8887 15.6206 13.3902 15.5585 13.2865C15.4964 13.1829 15.3303 13.1204 15.0815 12.9958L15.0819 12.9948Z"
                            fill="#25D366"
                          />
                        </svg>
                      </span>
                      Whatsapp
                    </button>
                    <button className="flex px-[13px] py-2.5 bg-white text-[#120B48] border border-[#120B48] rounded-lg text-base font-medium">
                      <span className="mr-2">
                        <svg
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.5 20C16.0228 20 20.5 15.5228 20.5 10C20.5 4.47715 16.0228 0 10.5 0C4.97715 0 0.5 4.47715 0.5 10C0.5 15.5228 4.97715 20 10.5 20Z"
                            fill="url(#paint0_linear_577_930)"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.0173 9.89096C7.93008 8.6137 9.87712 7.78815 10.8584 7.38317C13.631 6.23052 14.2073 6.02803 14.5812 6.01245C14.659 6.01245 14.846 6.02803 14.9706 6.12149C15.064 6.19937 15.0952 6.3084 15.1108 6.38628C15.1263 6.46416 15.1419 6.6355 15.1263 6.77569C14.9706 8.3489 14.3319 12.1963 13.9893 13.9564C13.8491 14.704 13.5687 14.9533 13.3039 14.9844C12.7276 15.0311 12.2759 14.595 11.7151 14.2368C10.8428 13.6604 10.3444 13.3022 9.48771 12.7414C8.5064 12.0872 9.14503 11.729 9.70578 11.1526C9.84596 10.9969 12.4161 8.676 12.4628 8.45793C12.4628 8.42678 12.4784 8.33332 12.4161 8.2866C12.3538 8.23987 12.2759 8.25544 12.2136 8.27102C12.1201 8.28659 10.7182 9.22117 7.99238 11.0592C7.5874 11.3396 7.22914 11.4642 6.90204 11.4642C6.54378 11.4642 5.85842 11.2617 5.34441 11.0903C4.72135 10.8878 4.22291 10.7788 4.26964 10.4361C4.30079 10.2648 4.55001 10.0779 5.0173 9.89096Z"
                            fill="white"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_577_930"
                              x1="0.5"
                              y1="9.99276"
                              x2="20.4855"
                              y2="9.99276"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#2AABEE" />
                              <stop offset="1" stop-color="#229ED9" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      Telegram
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className=" flex flex-col w-[50%] border-l-2 border-[#BBBBBB] pl-10 p-3">
              <div className="border border-[#292D32] rounded-xl overflow-hidden">
                <video
                  src={`https://damisaalex.xyz/hngx5/${videoUrl}`}
                  width={620}
                  height={620}
                  controls
                  className="w-full"
                ></video>
              </div>
              {/* Transcript */}
              <div className=" mt-14">
                <span className=" font-semibold text-xl">Transcript</span>
              </div>

              {/* Dropdown options */}
              <div className="mt-3">
                <select
                  id="language"
                  className="border py-1 pl-1 pr-16 rounded-[4px] outline-none text-[#9D9D9D]"
                >
                  <option value="english">English</option>
                  <option value="French">French</option>
                  <option value="Spanish">Spanish</option>
                  <option value="Arabic">Arabic</option>
                </select>
              </div>
            </div>
          </div>
        </section>
      )}
      {/* <Footer /> */}
    </>
  );
}
