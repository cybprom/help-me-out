"use client";
import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Page() {
  const [videoUrl, setVideoUrl] = useState("");

  const getVideoUrl = async () => {
    try {
      const response = await fetch("https://damisaalex.xyz/hngx5/api/videos");
      const data = await response.json();
      setVideoUrl(data[13].videoUrl);
      console.log(data);
      // setLoading(false);
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
      <section className=" mt-10 ml-10">
        <div className="flex">
          <div className="w-[50%] minw-[600px] flex flex-col p-10 space-y-10">
            <p className=" font-bold text-5xl">Your video is ready!</p>
            <div className="content w-[500px] h-[68px] space-y-16">
              <div className="flex flex-col">
                <span className=" text-xl">Name</span>
                <span className="flex items-center text-xl font-medium text-slate-600">
                  Untitled_Video_20232509{" "}
                  <span className="ml-3">
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
            </div>
          </div>
          <div className=" w-[50%] border-l p-3">
            <video
              src={`https://damisaalex.xyz/hngx5/${videoUrl}`}
              width={620}
              height={540}
              controls
            ></video>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
