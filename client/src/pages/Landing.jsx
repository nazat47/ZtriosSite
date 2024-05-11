import React from "react";
import Header from "../components/Header";
import { images } from "../assets";

export default function Landing() {
  return (
    <div className="w-[75vw] min-h-screen mx-auto">
      <Header active={0} />
      <div className="w-full flex flex-col gap-8 text-center items-center mt-20 relative">
        <img
          src={images?.blueCircleGrad}
          alt=""
          className="z-[-2] absolute left-[-700px] top-[-500px] h-[600px] w-[1200px]"
        />
        <img
          src={images?.purpleCircleGrad}
          alt=""
          className="z-[-2] absolute right-[-700px] top-[-600px] h-[900px] w-[1200px]"
        />
        <img
          src={images?.ring}
          alt=""
          className="z-[-2] absolute right-[-400px] top-[-200px] size-[400px]"
        />
          <img
          src={images?.star}
          alt=""
          className="z-[-2] absolute left-[-100px] top-0 size-[60px]"
        />
         <img
          src={images?.purpleCircleGrad}
          alt=""
          className="z-[-2] absolute left-[-700px] top-[-400px] h-[1800px] w-[800px] transform rotate-[270deg]"
        />
          <img
          src={images?.blueCircleGrad}
          alt=""
          className="z-[-2] absolute left-[-700px] top-[300px] h-[1200px] w-[1200px]"
        />
          <img
          src={images?.ring}
          alt=""
          className="z-[-2] absolute left-[-450px] top-[200px] size-[500px] transfrom -rotate-90"
        />
        <img
            src={images?.net2}
            alt="net"
            className="z-[-2] absolute right-[-400px] top-[300px] size-[400px] transfrom -rotate-90"
          />
           <img
            src={images?.star}
            alt="net"
            className="z-[-2] absolute right-[-100px] top-[420px] size-[60px] transfrom -rotate-90"
          />
        <div className="flex justify-center w-[70%] relative">
          <img
            src={images?.net}
            alt="net"
            className="z-[-2] h-[300px] top-16 absolute opacity-50"
          />
          <h1 className=" text-[70px] font-bold leading-[80px]">
            Is Your Business Equipped to Conquer the Challenges of{" "}
            <span className="relative">
              Tomorrow?
              <div className="absolute h-[40px] w-full bg-[#00FFAE] bottom-4 right-0 z-[-1]"></div>
            </span>
          </h1>
        </div>
        <p className="text-xl w-[65%] text-gray-600">
          In today's rapidly evolving business landscape, standing still is the
          quickest path to obsolescence. At Ztrios, we understand the need to
          constantly adapt and innovate to stay ahead of the game and meet the
          ever-changing demands of the modern consumer.
        </p>
        <button className="p-4 w-[200px] bg-black text-center text-white rounded-lg text-xl font-medium mt-2">
          Contact Us
        </button>
      </div>
      <div
        className="w-full h-[600px] relative border-[3px] border-black rounded-xl mt-20 bg-white"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.03) 0px 32px 64px",
        }}
      >
           <img
          src={images?.blueCircleGrad}
          alt=""
          className="z-[-2] absolute left-[45%] top-[-200px] h-[400px] w-[550px]"
        />
        <h1 className="absolute top-[50px] left-[10%] text-[50px] font-bold">
          Ztrios : Where Innovation Meets Excellence
        </h1>
        <div className="flex gap-8 my-12 items-end">
          <img
            src={images.bulb}
            alt="Bulb"
            className="size-[400px]"
          />
          <div className="bg-[#7850F2] bg-opacity-50 w-full rounded-l-2xl h-[500px]">
            <div className="flex flex-col gap-3 mt-24 w-full p-6">
              <p className="text-[25px] font-medium">
                At Ztrios, we're your partner for success. Our experts deliver
                innovative solutions that inspire growth, drive innovation, and
                automate for efficiency.
              </p>
              <p className="font-semibold text-[35px] text-[#00FFAE] my-2 font-cevat">
                Elevating your business is our passion
              </p>
              <p className="text-[25px] font-medium">
                We stay ahead of the curve, leveraging cutting-edge tech and
                industry best practices. Our tailored approach ensures solutions
                crafted for your unique goals, delivering tangible results that
                set you apart.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
