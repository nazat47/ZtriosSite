import React, { useRef } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import OurServices from "../components/landingSections/OurServices";
import Blueprint from "../components/landingSections/Blueprint";
import { Reviews } from "../components/landingSections/Reviews";
import Intro from "../components/landingSections/Intro";
import Collaborate from "../components/landingSections/Collaborate";

export default function Landing() {
  const scrollRef = useRef();
  return (
    <div
      ref={scrollRef}
      className="w-[100vw] min-h-screen mx-auto overflow-x-hidden px-[20px] sm:px-[40px] md:px-[60px] lg:px-[80px] xl:px-[120px] 2xl:px-[170px]"
    >
      <Header active={0} />
      <Intro />
      <OurServices />
      <Blueprint />
      <Reviews />
      <Collaborate />
      <Footer />
    </div>
  );
}
