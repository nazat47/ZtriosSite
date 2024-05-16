import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const Blogs = () => {
  return (
    <>
      <Header active={4} />
      <div className="blog"></div>
      <Footer />
    </>
  );
};

export default Blogs;
