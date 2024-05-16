import React from "react";
import OurServices from "../components/landingSections/OurServices";
import Blueprint from "../components/landingSections/Blueprint";
import { Reviews } from "../components/landingSections/Reviews";
import Intro from "../components/landingSections/Intro";
import Collaborate from "../components/landingSections/Collaborate";
import Blogs from "../components/landingSections/Blogs";

export default function Landing() {
  return (
    <>
      <Intro />
      <OurServices />
      <Blueprint />
      <Reviews />
      <Collaborate />
      <Blogs />
    </>
  );
}
