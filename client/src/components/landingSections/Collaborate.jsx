import React from "react";
import { images } from "../../assets";

const Collaborate = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-4 items-center justify-center mt-[90px] sm:mt-[120px] p-6 bg-black rounded-2xl relative">
        <img
          src={images?.net2}
          alt="net"
          className="z-[-2] size-[300px] lg:size-[500px] top-[-150px] lg:top-[-250px] right-[-200px] lg:right-[-300px] absolute opacity-50"
        />
        <div className="flex flex-col md:flex-row gap-2 sm:gap-7 w-full">
          <div className="flex items-center justify-center bg-black text-gray-400 flex-1">
            <div className="w-[100%] xl:w-[80%] my-8">
              <h3 className="text-xl lg:text-2xl text-white font-bold">
                Let's Collaborate and Conquer
              </h3>
              <p className="text-sm lg:text-md">
                Your ambition, our innovation - Launching businesses into the
                stratosphere
              </p>
              <form className="flex flex-col gap-2 xl:gap-4 w-full mt-8">
                <div className="flex gap-2 xl:gap-4">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="First Name"
                    className="p-3 w-full bg-[#0a0a0a] rounded-lg border border-gray-600 outline-gray-300"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="p-3 w-full bg-[#0a0a0a] rounded-lg border border-gray-600 outline-gray-300"
                  />
                </div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Email"
                  className="p-3 w-full bg-[#0a0a0a] rounded-lg border border-gray-600 outline-gray-300"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Phone Number"
                  className="p-3 w-full bg-[#0a0a0a] rounded-lg border border-gray-600 outline-gray-300"
                />
                <textarea
                  name="lastName"
                  placeholder="Message"
                  rows={5}
                  className="p-3 w-full bg-[#0a0a0a] rounded-lg border border-gray-600 resize-none outline-gray-300"
                />
                <button
                  type="submit"
                  className="p-3 w-full bg-gradient-to-r from-blue-900 to-purple-600 rounded-lg flex items-center justify-center gap-4 text-white hover:from-purple-900 hover:to-purple-600"
                >
                  Send it to us{" "}
                  <img
                    src={images?.submit}
                    alt="submit"
                    className="h-[10px] w-[20px]"
                  />
                </button>
              </form>
            </div>
          </div>
          <div className="flex-1">
            <img src={images?.mail} alt="mail" className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Collaborate;
