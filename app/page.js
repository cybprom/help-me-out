"use client";

import Image from "next/image";
import { useState } from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Header from "./components/Header";
import Works from "./components/Works";
import Footer from "./components/Footer";
// import Ready from "./components/ready";
import GridDot from "./components/GridDot";
import Login from "./components/Login";

export default function Home() {
  const [isOn, setIsOn] = useState({
    camera: false,
    audio: false,
  });

  return (
    <>
      <Header />

      <Hero />

      <div className="absolute top-[10%] right-3 z-0">{/* <GridDot /> */}</div>
      <Features />
      <Works />
      <Footer />
    </>
  );
}
