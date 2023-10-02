"use client";
import React from "react";
import { useState, useEffect } from "react";

export default function page() {
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
    <div className=" mt-10 ml-10">
      <video
        src={`https://damisaalex.xyz/hngx5/${videoUrl}`}
        width={620}
        height={540}
        controls
      ></video>
    </div>
  );
}
