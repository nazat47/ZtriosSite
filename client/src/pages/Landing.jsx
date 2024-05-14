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
      className="w-[90vw] md:w-[80vw] lg:w-[75vw] min-h-screen mx-auto"
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
