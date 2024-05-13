import React from "react";
import { images } from "../../assets";
import { FaArrowRightLong } from "react-icons/fa6";

const Intro = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-2 sm:gap-4 md:gap-8 text-center items-center mt-12 md:mt-20 relative">
        {/* ----background images (gradients,ring, stars etc.)----- */}
        <img
          src={images?.blueCircleGrad}
          alt=""
          className="z-[-2] absolute left-[-60%] top-[-100%] h-[70vh] w-[60vw]"
        />
        <img
          src={images?.purpleCircleGrad}
          alt=""
          className="z-[-2] absolute right-[-40vw] top-[-60vh] h-[90vh] w-[60vw]"
        />
        <img
          src={images?.ring}
          alt=""
          className="z-[-2] absolute right-[-28%] top-[-30%] size-[25vw]"
        />
        <img
          src={images?.star}
          alt=""
          className="z-[-2] absolute left-[-6%] top-0 size-[3vw]"
        />
        <img
          src={images?.purpleCircleGrad}
          alt=""
          className="z-[-2] absolute left-[-40%] top-[-20%] h-[120vh] w-[40vw] transform rotate-[270deg]"
        />
        <img
          src={images?.blueCircleGrad}
          alt=""
          className="z-[-2] absolute left-[-40%] top-[70%] h-[120vh] w-[40vw]"
        />
        <img
          src={images?.ring}
          alt=""
          className="z-[-2] absolute left-[-30%] top-[40%] size-[25vw] transfrom -rotate-90"
        />
        <img
          src={images?.net2}
          alt="net"
          className="z-[-2] absolute right-[-25%] top-[70%] size-[20vw] transfrom -rotate-90 opacity-70"
        />
        <img
          src={images?.star}
          alt="net"
          className="z-[-2] absolute right-[-5%] top-[90%] size-[3vw] transfrom -rotate-90"
        />
        {/* --------- */}
        <div className="flex justify-center w-full sm:w-[90%] md:w-[80%] relative">
          <img
            src={images?.net}
            alt="net"
            className="z-[-2] h-[30vh] top-[10%] absolute opacity-50"
          />
          <h1 className="text-[20px] sm:text-[30px] md:text-[35px] lg:text-[50px] xl:text-[65px] font-bold leading-[120%]">
            Is Your Business Equipped to Conquer the Challenges of{" "}
            <span className="relative">
              Tomorrow?
              <div className="absolute h-[10px] sm:h-[20px] lg:h-[40px] w-full bg-[#00FFAE] bottom-2 lg-bottom-2 xl:bottom-4 right-0 z-[-1]"></div>
            </span>
          </h1>
        </div>
        <p className="text-[7px] sm:text-[10px] md:text-xs lg:text-md xl:text-xl w-[80%] sm:w-[65%] text-gray-600">
          In today's rapidly evolving business landscape, standing still is the
          quickest path to obsolescence. At Ztrios, we understand the need to
          constantly adapt and innovate to stay ahead of the game and meet the
          ever-changing demands of the modern consumer.
        </p>
        <button className="p-2 lg:p-4 md:w-[150px] lg:w-[200px] bg-black text-center text-white rounded text-[10px] sm:text-xs md:text-md lg:text-xl font-medium mt-2 flex items-center justify-center gap-2 sm:gap-4">
          Contact Us <FaArrowRightLong className="fill-white" />
        </button>
      </div>
      <div className="w-full h-[180px] sm:h-[250px] md:h-[380px] lg:h-[420px] 2xl:h-[500px] relative border lg:border-[3px] border-black rounded-xl mt-12 md:mt-20 shadow-custom bg-white">
        {/* ----background images (gradients,ring, stars etc.)----- */}
        <img
          src={images?.blueCircleGrad}
          alt=""
          className="z-[-2] absolute left-[45%] top-[-35%] h-[35vh] w-[30vw]"
        />
        <img
          src={images?.star}
          alt="net"
          className="z-[-2] absolute right-[20%] bottom-[-12%] size-[3vw]"
        />
        {/* --------- */}
        <h1 className="absolute top-[25px] md:top-[50px] left-[10%] text-[3.4vw] sm:text-[3vw] font-bold">
          Ztrios : Where Innovation Meets Excellence
        </h1>
        <div className="flex gap-2 md:gap-4 xl:gap-8 py-4 md:py-8 xl:py-12 items-end h-full">
          <img src={images.bulb} alt="Bulb" className="w-[30%] h-[70%]" />
          <div className="bg-[#7850F2] bg-opacity-50 rounded-l-md h-full w-[70%]">
            <div className="flex flex-col gap-1 sm:gap-2 xl:gap-3 mt-8 sm:mt-10 md:mt-16 xl:mt-12 2xl:mt-16 w-full p-2 md:p-4 xl:p-6">
              <p className="text-[1.6vw] xl:text-[1.3vw] font-medium">
                At Ztrios, we're your partner for success. Our experts deliver
                innovative solutions that inspire growth, drive innovation, and
                automate for efficiency.
              </p>
              <p className="font-semibold text-[2.5vw] sm:text-[2vw] md:text-[2.5vw] lg:text-[2vw] text-[#00FFAE] font-cevat">
                Elevating your business is our passion
              </p>
              <p className="text-[1.4vw] sm:text-[1.6vw] xl:text-[1.3vw] font-medium">
                We stay ahead of the curve, leveraging cutting-edge tech and
                industry best practices. Our tailored approach ensures solutions
                crafted for your unique goals, delivering tangible results that
                set you apart.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
