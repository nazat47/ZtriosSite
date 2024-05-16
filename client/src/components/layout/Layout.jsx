import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="w-[100vw] min-h-screen mx-auto overflow-x-hidden px-[20px] sm:px-[40px] md:px-[60px] lg:px-[80px] xl:px-[120px] 2xl:px-[170px]">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
