import React from "react";
import { images } from "../../assets";

const Collaborate = () => {
  return (
    <>
      <div className="w-full h-[100vh] md:h-full 2xl:h-[90vh] flex flex-col gap-4 items-center justify-center mt-[90px] sm:mt-[120px] p-4 md:p-6 bg-black rounded-2xl relative">
        <img
          src={images?.net2}
          alt="net"
          className="z-[-2] size-[300px] lg:size-[500px] top-[-150px] lg:top-[-250px] right-[-150px] lg:right-[-300px] absolute opacity-50"
        />
        <div className="flex flex-col md:flex-row gap-4 lg:gap-7 w-full h-full">
          <div className="flex items-center justify-center bg-black text-gray-400 h-[50%] md:h-full md:flex-1 ">
            <div className="w-[100%] xl:w-[80%] md:my-8">
              <h3 className="text-lg md:text-xl lg:text-2xl text-white font-bold">
                Let's Collaborate and Conquer
              </h3>
              <p className="text-[10px] sm:text-sm lg:text-md">
                Your ambition, our innovation - Launching businesses into the
                stratosphere
              </p>
              <form className="flex flex-col gap-2 xl:gap-4 w-full mt-3 md:mt-8">
                <div className="flex gap-2 xl:gap-4">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="First Name"
                    className="h-[35px] md:h-[50px] p-3 w-full bg-[#0a0a0a] rounded-lg border border-gray-600 outline-gray-300 text-sm sm:text-md"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="h-[35px] md:h-[50px] p-3 w-full bg-[#0a0a0a] rounded-lg border border-gray-600 outline-gray-300 text-sm sm:text-md"
                  />
                </div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Email"
                  className="h-[35px] md:h-[50px] p-3 w-full bg-[#0a0a0a] rounded-lg border border-gray-600 outline-gray-300 text-sm sm:text-md"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Phone Number"
                  className="h-[35px] md:h-[50px] p-3 w-full bg-[#0a0a0a] rounded-lg border border-gray-600 outline-gray-300 text-sm sm:text-md"
                />
                <textarea
                  name="lastName"
                  placeholder="Message"
                  rows={3}
                  className="p-3 w-full bg-[#0a0a0a] rounded-lg border border-gray-600 resize-none outline-gray-300 text-sm sm:text-md md:h-[200px]"
                />
                <button
                  type="submit"
                  className="h-[35px] md:h-[50px] p-3 w-full bg-gradient-to-r from-blue-900 to-purple-600 rounded-lg flex items-center justify-center gap-4 text-white hover:from-purple-900 hover:to-purple-600"
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
          <div className="h-[45%] sm:h-[50%] md:h-auto flex-1">
            <img src={images?.mail} alt="mail" className="w-full h-full object-fill" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Collaborate;
