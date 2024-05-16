import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { images } from "../../assets";
import { FaArrowRightLong } from "react-icons/fa6";

const Intro = () => {
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
  });
  const imgMove = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const startMove = useTransform(scrollYProgress, [0, 1], ["0%", "3000%"]);
  return (
    <>
      <div className="w-full h-auto lg:h-[60vh] xl:h-auto flex flex-col gap-2 sm:gap-4 md:gap-4 2xl:gap-8 text-center items-center mt-12 md:mt-20 lg:mt-16 relative">
        {/* ----background images (gradients,ring, stars etc.)----- */}
        <motion.img
          style={{ x: imgMove }}
          src={images?.blueCircleGrad}
          alt=""
          className="z-[-2] absolute top-[-300%] sm:top-[-220%] md:top-[-160%] lg:top-[-130%] left-[-40%] md:left-[-60%] xl:top-[-100%] h-[70vh] w-[60vw]"
        />
        <motion.img
          style={{ x: imgMove }}
          src={images?.purpleCircleGrad}
          alt=""
          className="z-[-2] absolute right-[-45vw] top-[-50vh] sm:top-[-60vh] h-[70vh] sm:h-[90vh] w-[80vw] sm:w-[60vw]"
        />
        <motion.img
          style={{ x: imgMove }}
          src={images?.ring}
          alt=""
          className="z-[-2] absolute right-[-20%] md:right-[-20%] xl:right-[-25%] top-[-30%] size-[25vw]"
        />
        <motion.img
          style={{ x: startMove }}
          src={images?.star}
          alt=""
          className="z-[-2] absolute left-0 md:left-0 top-[-20%] sm:top-0 size-[3vw]"
        />
        <motion.img
          style={{ x: imgMove }}
          src={images?.purpleCircleGrad}
          alt=""
          className="z-[-2] absolute left-[-50%] md:left-[-50%] top-[10%] sm:top-[40%] md:top-[30%] lg:top-[20%] xl:top-[20%] h-[30vh] lg:h-[50vh] xl:h-[80vh] w-[70vw] lg:w-[60vw] transform rotate-120"
        />
        <motion.img
          style={{ x: imgMove }}
          src={images?.blueCircleGrad}
          alt=""
          className="z-[-3] absolute left-[-25%] md:left-[-30%] lg:left-[-40%] top-[30%] sm:top-[20%] md:top-[20%] lg:top-[70%] 2xl:top-[90%] h-[40vh] sm:h-[60vh] w-[40vw]"
        />
        <div
          style={{ x: imgMove }}
          className="z-[-2] absolute left-[-15%] md:left-[-20%] xl:left-[-25%] top-[60%] xl:top-[40%] size-[25vw] rotate-90"
        >
          <motion.img
            src={images?.ring}
            alt=""
            className="size-[25vw]"
            style={{ x: imgMove }}
          />
        </div>
        <img
          src={images?.net2}
          alt="net"
          className="z-[-2] absolute right-[-10%] md:right-[-20%] xl:right-[-25%] top-[90%] sm:top-[70%] size-[20vw] transform -rotate-90 opacity-70"
        />
        <motion.img
          style={{ x: startMove }}
          src={images?.star}
          alt="net"
          className="z-[-2] absolute right-0 top-[100%] sm:top-[90%] size-[3vw] transfrom -rotate-90"
        />
        {/* --------- */}
        <div className="flex justify-center w-full md:w-[90%] lg:w-[70%] xl:w-[70%] relative">
          <img
            src={images?.net}
            alt="net"
            className="z-[-2] h-[15vh] sm:h-[20vh] md:h-[30vh] xl:h-[40vh] w-[70vw] top-0 md:top-[-10%] xl:top-0 absolute brightness-75 lg:brightness-100" 
          />
          <h1 className="text-[25px] sm:text-[30px] md:text-[4.5vh] lg:text-[50px] xl:text-[55px] 2xl:text-[65px] font-bold leading-[120%]">
            Is Your Business Equipped to Conquer the Challenges of{" "}
            <span className="relative">
              Tomorrow?
              <motion.div
                initial={{ width: "0" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
                className="absolute h-[10px] sm:h-[20px] md:h-[40px] w-full bg-[#00FFAE] bottom-2 xl:bottom-4 left-0 z-[-1]"
              ></motion.div>
            </span>
          </h1>
        </div>
        <p className="text-[7px] sm:text-[10px] md:text-[1.3vh] lg:text-[15px]  2xl:text-lg w-[80%] sm:w-[65%] text-gray-600">
          In today's rapidly evolving business landscape, standing still is the
          quickest path to obsolescence. At Ztrios, we understand the need to
          constantly adapt and innovate to stay ahead of the game and meet the
          ever-changing demands of the modern consumer.
        </p>
        <button className="p-2 lg:p-4 md:w-[150px] lg:w-[200px] bg-black text-center text-white rounded text-[10px] sm:text-xs md:text-md lg:text-xl font-medium mt-2 flex items-center justify-center gap-2 sm:gap-4 hover:bg-purple-900">
          Contact Us <FaArrowRightLong className="fill-white" />
        </button>
      </div>
      <div className="w-full h-[240px] sm:h-[250px] md:h-[380px] lg:h-[420px] 2xl:h-[500px] relative border lg:border-[3px] border-black rounded-xl mt-12 md:mt-20 shadow-custom bg-white">
        {/* ----background images (gradients,ring, stars etc.)----- */}
        <motion.img
          style={{ x: imgMove }}
          src={images?.blueCircleGrad}
          alt=""
          className="z-[-2] absolute left-[45%] top-[-35%] h-[35vh] w-[30vw]"
        />
        <motion.img
          style={{ x: startMove }}
          src={images?.star}
          alt="net"
          className="z-[-2] absolute right-[20%] bottom-[-12%] size-[3vw]"
        />
        {/* --------- */}
        <h1 className="absolute top-[25px] md:top-[50px] left-[5%] sm:left-[10%] text-[17px] sm:text-[3vw] font-bold">
          Ztrios : Where Innovation Meets Excellence
        </h1>
        <div className="flex gap-2 md:gap-4 xl:gap-8 py-4 md:py-8 xl:py-12 items-end h-full">
          <img src={images.bulb} alt="Bulb" className="w-[30%] h-[70%]" />
          <div className="bg-[#7850F2] bg-opacity-50 rounded-l-md h-full w-[70%]">
            <div className="flex flex-col gap-1 sm:gap-2 xl:gap-3 mt-8 sm:mt-10 md:mt-16 xl:mt-12 2xl:mt-16 w-full p-2 md:p-4 xl:p-6">
              <p className="text-[1.9vw] sm:text-[1.6vw] xl:text-[1.3vw] font-medium">
                At Ztrios, we're your partner for success. Our experts deliver
                innovative solutions that inspire growth, drive innovation, and
                automate for efficiency.
              </p>
              <p className="font-semibold text-[2.9vw] sm:text-[2vw] md:text-[2.5vw] lg:text-[2vw] text-[#00FFAE] font-cevat">
                Elevating your business is our passion
              </p>
              <p className="text-[1.9vw] sm:text-[1.6vw] xl:text-[1.3vw] font-medium">
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
