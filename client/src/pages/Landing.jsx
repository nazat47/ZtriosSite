import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Header from "../components/Header";
import { images } from "../assets";
import Ratings from "../components/Ratings";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <div className="w-[75vw] min-h-screen mx-auto">
      <Header active={0} />
      <div className="w-full flex flex-col gap-8 text-center items-center mt-20 relative">
        {/* ----background images (gradients,ring, stars etc.)----- */}
        <img
          src={images?.blueCircleGrad}
          alt=""
          className="z-[-2] absolute left-[-60%] top-[-100%] h-[70vh] w-[60vw]"
        />
        <img
          src={images?.purpleCircleGrad}
          alt=""
          className="z-[-2] absolute right-[-50%] top-[-130%] h-[90vh] w-[60vw]"
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
        <div className="flex justify-center w-[70%] relative">
          <img
            src={images?.net}
            alt="net"
            className="z-[-2] h-[30vh] top-[10%] absolute opacity-50"
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
        <button className="p-4 w-[200px] bg-black text-center text-white rounded-lg text-xl font-medium mt-2 flex items-center justify-center gap-4">
          Contact Us <FaArrowRightLong className="fill-white" />
        </button>
      </div>
      <div className="w-full h-[600px] relative border-[3px] border-black rounded-xl mt-20 shadow-custom bg-white">
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
        <h1 className="absolute top-[50px] left-[10%] text-[50px] font-bold">
          Ztrios : Where Innovation Meets Excellence
        </h1>
        <div className="flex gap-8 my-12 items-end">
          <img src={images.bulb} alt="Bulb" className="size-[50%]" />
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
      <div className="w-full flex flex-col gap-16 items-center justify-center mt-32 relative">
        {/* ----background images (gradients,ring, stars etc.)----- */}
        <img
          src={images?.purpleCircleGrad}
          alt=""
          className="z-[-2] absolute left-[-25%] top-[10%] size-[30vw] transform rotate-[270deg]"
        />
        <img
          src={images?.purpleCircleGrad}
          alt=""
          className="z-[-2] absolute right-[-18%] top-[60%] size-[25vw]"
        />
        <img
          src={images?.blueCircleGrad}
          alt=""
          className="z-[-2] absolute right-[0px] top-[10%] size-[20vw]"
        />
        <img
          src={images?.purpleCircleGrad}
          alt=""
          className="z-[-2] absolute right-[0px] top-[10%] size-[20vw] opacity-40"
        />
        <img
          src={images?.blueCircleGrad}
          alt=""
          className="z-[-2] absolute right-[35%] top-[70%] size-[25vw]"
        />
        <img
          src={images?.purpleCircleGrad}
          alt=""
          className="z-[-2] absolute right-[35%] top-[70%] size-[25vw] opacity-20"
        />
        <img
          src={images?.net}
          alt="net"
          className="z-[-2] absolute right-[15%] top-[30%] w-[50vw] h-[50vh] opacity-30"
        />
        <img
          src={images?.ring}
          alt=""
          className="z-[-2] absolute right-[-25%] top-[25%] size-[25vw] transform rotate-[90deg]"
        />
        <img
          src={images?.star}
          alt=""
          className="z-[-2] absolute left-[-8%] top-[40%] size-[3vw]"
        />
        <img
          src={images?.arrowCurve}
          alt=""
          className="z-[-2] absolute left-[-7%] top-[85%] size-[15vw]"
        />
        {/* --------- */}
        <div className="flex flex-col items-center justify-center text-center w-[85%]">
          <img
            src={images?.net}
            alt="net"
            className="z-[-2] h-[20vh] w-[35vw] top-[5%] absolute opacity-60"
          />
          <p className="text-[#925FFF] font-semibold text-xl">Our Services</p>
          <h1 className="text-[70px] font-bold leading-[80px]">
            Elevating Your Enterprise with Cutting-Edge Solutions
          </h1>
        </div>
        <div className="flex flex-wrap gap-6">
          <div className="h-[208px] w-[342px] border-[2px] border-gray-300 rounded-xl p-6 backdrop-blur-lg bg-white/10 shadow-custom backdrop-brightness-95">
            <div className="flex gap-4">
              <div className="bg-[#00FFAE] size-[60px] rounded-xl"></div>
              <p className="flex flex-col font-bold text-xl">
                Web <span>Development</span>
              </p>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              In today's rapidly evolving business landscape, standing still is
              the quickest path to obsole scence. At Ztrios, we understand the
              need tounderstand the need to
            </p>
          </div>
          <div className="h-[208px] w-[342px] border-[2px] border-gray-300 rounded-xl p-6 backdrop-blur-lg bg-white/10 shadow-custom backdrop-brightness-95">
            <div className="flex gap-4">
              <div className="bg-[#00FFAE] size-[60px] rounded-xl"></div>
              <p className="flex flex-col font-bold text-xl">
                Web <span>Development</span>
              </p>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              In today's rapidly evolving business landscape, standing still is
              the quickest path to obsole scence. At Ztrios, we understand the
              need tounderstand the need to
            </p>
          </div>
          <div className="h-[208px] w-[342px] border-[2px] border-gray-300 rounded-xl p-6 backdrop-blur-lg bg-white/10 shadow-custom backdrop-brightness-95">
            <div className="flex gap-4">
              <div className="bg-[#00FFAE] size-[60px] rounded-xl"></div>
              <p className="flex flex-col font-bold text-xl">
                Web <span>Development</span>
              </p>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              In today's rapidly evolving business landscape, standing still is
              the quickest path to obsole scence. At Ztrios, we understand the
              need tounderstand the need to
            </p>
          </div>
          <div className="h-[208px] w-[342px] border-[2px] border-gray-300 rounded-xl p-6 backdrop-blur-lg bg-white/10 shadow-custom backdrop-brightness-95">
            <div className="flex gap-4">
              <div className="bg-[#00FFAE] size-[60px] rounded-xl"></div>
              <p className="flex flex-col font-bold text-xl">
                Web <span>Development</span>
              </p>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              In today's rapidly evolving business landscape, standing still is
              the quickest path to obsole scence. At Ztrios, we understand the
              need tounderstand the need to
            </p>
          </div>
          <div className="h-[208px] w-[342px] border-[2px] border-gray-300 rounded-xl p-6 backdrop-blur-lg bg-white/10 shadow-custom backdrop-brightness-95">
            <div className="flex gap-4">
              <div className="bg-[#00FFAE] size-[60px] rounded-xl"></div>
              <p className="flex flex-col font-bold text-xl">
                Web <span>Development</span>
              </p>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              In today's rapidly evolving business landscape, standing still is
              the quickest path to obsole scence. At Ztrios, we understand the
              need tounderstand the need to
            </p>
          </div>
          <div className="h-[208px] w-[342px] border-[2px] border-gray-300 rounded-xl p-6 backdrop-blur-lg bg-white/10 shadow-custom backdrop-brightness-95">
            <div className="flex gap-4">
              <div className="bg-[#00FFAE] size-[60px] rounded-xl"></div>
              <p className="flex flex-col font-bold text-xl">
                Web <span>Development</span>
              </p>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              In today's rapidly evolving business landscape, standing still is
              the quickest path to obsole scence. At Ztrios, we understand the
              need tounderstand the need to
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-16 items-center justify-center mt-[200px] relative">
        {/* ----background images (gradients,ring, stars etc.)----- */}
        <img
          src={images?.blueCircleMedium}
          alt="circle"
          className="z-[-2] size-[22vw] top-0 left-[-25%] absolute opacity-50"
        />
        <img
          src={images?.accentMedium}
          alt="circle"
          className="z-[-2] size-[20vw] top-[15%] right-[-20%] absolute opacity-20"
        />
        <img
          src={images?.accentMedium}
          alt="circle"
          className="z-[-2] size-[20vw] top-[100%] right-[-25%] absolute opacity-60"
        />
        {/* --------- */}
        <div className="flex flex-col items-center justify-center text-center w-[85%]">
          <img
            src={images?.net}
            alt="net"
            className="z-[-2] h-[30vh] w-[46vw] top-[5%] absolute opacity-50"
          />
          <p className="text-[#925fffa2] font-semibold text-xl">
            Our Working Procedure
          </p>
          <h1 className="text-[70px] font-bold leading-[80px]">
            The Ztrios Blueprint
          </h1>
          <p className="text-[#7950f2de] text-[50px] font-bold relative">
            Crafting Success, One Step at a Time
            <img
              src={images?.arrowStraight}
              alt="circle"
              className="top-[85%] right-[-8%] absolute"
            />
          </p>
          <div className="flex flex-wrap gap-8 mt-14 relative">
            <img
              src={images?.purpleCircleMedium}
              alt="circle"
              className="z-[-2] top-[50%] left-[10%] absolute opacity-40"
            />
            <div className="h-[400px] w-[230px] rounded-lg p-4 bg-black text-white shadow-xl">
              <p className="flex flex-col text-3xl items-start">
                Discover{" "}
                <span className="font-bold text-[40px]">Potential</span>
              </p>
              <img
                src={images?.iceberg}
                alt="iceberg"
                className="h-[60%] w-full my-2"
              />
              <p className="font-semibold text-sm">
                Understanding your goals, uncovering opportunities
              </p>
            </div>
            <div className="h-[400px] w-[230px] rounded-lg bg-black text-white relative shadow-xl">
              <img
                src={images?.designBrilliance}
                alt="design"
                className="h-full w-full"
              />
              <p className="text1_gradient absolute top-6 ml-4 text-[35px] font-bold text-left leading-[40px]">
                Design Brilliance
              </p>
              <p className="absolute bottom-2 font-black text-black text-md">
                Crafting tailored solutions that shine
              </p>
            </div>
            <div className="h-[400px] w-[230px] rounded-lg p-4 bg-black text-white shadow-xl">
              <p className="text2_gradient flex flex-col text-3xl items-start font-bold leading-[30px] mt-4">
                Refine to Perfection
              </p>
              <p className="text-gray-300 text-xs my-2">
                Meticulous testing for flawless implementation
              </p>
              <img
                src={images?.refine}
                alt="refine"
                className="h-[60%] w-full my-2"
              />
            </div>
            <div className="h-[400px] w-[230px] rounded-lg p-4 bg-white shadow-xl">
              <p className="flex flex-col text-3xl items-start font-bold leading-[30px] mt-4">
                Unlock Growth
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 items-center justify-center mt-[120px] relative">
        <img
          src={images?.purpleCircleMedium}
          alt="circle"
          className="z-[-2] size-[20vw] top-[70%] left-[-400px] absolute opacity-40"
        />
        <div className="text-center">
          <p className="text-[#925fffa2] font-semibold text-xl">Our Partners</p>
          <h1 className="text-[60px] font-bold">
            Brands That Believe in Ztrios
          </h1>
        </div>
        <img src={images?.clients} alt="clients" />
      </div>
      <div className="w-full flex flex-col gap-4 items-center justify-center mt-[120px] relative">
        {/* ----background images (gradients,ring, stars etc.)----- */}
        <img
          src={images?.accentMedium}
          alt="circle"
          className="z-[-2] size-[17vw] top-[20%] left-[26%] absolute opacity-50"
        />
        <img
          src={images?.purpleCircleMedium}
          alt="circle"
          className="z-[-2] size-[17vw] top-[60%] right-[25%] absolute opacity-50"
        />
        <img
          src={images?.blueCircleMedium}
          alt="circle"
          className="z-[-2] size-[20vw] top-[10%] right-[-20%] absolute opacity-70"
        />
        <img
          src={images?.blueCircleMedium}
          alt="circle"
          className="z-[-2] size-[20vw] top-[60%] left-[-22%] absolute opacity-90"
        />
        {/* --------- */}
        <div className="flex flex-col items-center justify-center text-center w-[85%]">
          <img
            src={images?.net}
            alt="net"
            className="z-[-2] h-[22vh] w-[60vw] top-[-5%] absolute opacity-40"
          />
          <p className="text-[#925fffc7] font-semibold text-xl">Our Partners</p>
          <h1 className="text-[60px] font-bold leading-[70px]">
            Trusted Voices:
          </h1>
          <h1 className="text-[60px] font-bold leading-[60px]">
            Witness the Ztrios Impact
          </h1>
        </div>
        <div className="flex flex-wrap gap-8 mt-12">
          <div className="h-[450px] w-[340px] flex flex-col gap-2 items-center justify-center rounded-xl p-6 backdrop-blur-2xl bg-white/10 shadow-custom backdrop-brightness-95">
            <p className="text-center">
              “I've been using this web hosting service for over a year and I'm
              really impressed with the uptime and support. The website has
              never gone down and the customer service is always quick to help
              with any issues I have. Highly recommend!”
            </p>
            <Ratings rating={5} />
            <img src={images?.user} alt="user" />
            <p>Jane Smith</p>
            <p>Freelance Designer</p>
          </div>
          <div className="h-[450px] w-[340px] flex flex-col gap-2 items-center justify-center rounded-xl p-6 backdrop-blur-2xl bg-white/10 shadow-custom backdrop-brightness-95">
            <p className="text-center">
              “I've been using this web hosting service for over a year and I'm
              really impressed with the uptime and support. The website has
              never gone down and the customer service is always quick to help
              with any issues I have. Highly recommend!”
            </p>
            <Ratings rating={5} />
            <img src={images?.user} alt="user" />
            <p>Jane Smith</p>
            <p>Freelance Designer</p>
          </div>
          <div className="h-[450px] w-[340px] flex flex-col gap-2 items-center justify-center rounded-xl p-6 backdrop-blur-2xl bg-white/10 backdrop-brightness-95 shadow-custom">
            <p className="text-center">
              “I've been using this web hosting service for over a year and I'm
              really impressed with the uptime and support. The website has
              never gone down and the customer service is always quick to help
              with any issues I have. Highly recommend!”
            </p>
            <Ratings rating={5} />
            <img src={images?.user} alt="user" />
            <p>Jane Smith</p>
            <p>Freelance Designer</p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 items-center justify-center mt-[120px] relative">
        {/* ----background images (gradients,ring, stars etc.)----- */}
        <img
          src={images?.accentSolid}
          alt="circle"
          className="z-[-2] size-[14vw] top-[20%] left-[27%] absolute opacity-50"
        />
        <img
          src={images?.purpleCircleSolid}
          alt="circle"
          className="z-[-2] size-[12vw] top-[60%] right-[30%] absolute opacity-50"
        />
        <img
          src={images?.blueCircleSolid}
          alt="circle"
          className="z-[-2] size-[15vw] top-[10%] right-[-5%] absolute opacity-70"
        />
        <img
          src={images?.blueCircleSolid}
          alt="circle"
          className="z-[-2] size-[20vw] top-[40%] left-[-10%] absolute opacity-90"
        />
        {/* --------- */}
        <div className="flex flex-col items-center justify-center text-center w-[85%]">
          <img
            src={images?.net}
            alt="net"
            className="z-[-2] h-[25vh] w-[60vw] top-[-5%] absolute opacity-40"
          />
          <p className="text-[#925fffc7] font-semibold text-xl">Our Partners</p>
          <h1 className="text-[60px] font-bold leading-[70px]">
            Trusted Voices:
          </h1>
          <h1 className="text-[60px] font-bold leading-[60px]">
            Witness the Ztrios Impact
          </h1>
        </div>
        <div className="flex flex-wrap gap-8 mt-12">
          <div className="h-[450px] w-[340px] flex flex-col gap-2 items-center justify-center rounded-xl p-6 backdrop-blur-2xl bg-white/10 shadow-custom backdrop-brightness-95">
            <p className="text-center">
              “I've been using this web hosting service for over a year and I'm
              really impressed with the uptime and support. The website has
              never gone down and the customer service is always quick to help
              with any issues I have. Highly recommend!”
            </p>
            <Ratings rating={5} />
            <img src={images?.user} alt="user" />
            <p>Jane Smith</p>
            <p>Freelance Designer</p>
          </div>
          <div className="h-[450px] w-[340px] flex flex-col gap-2 items-center justify-center rounded-xl p-6 backdrop-blur-2xl bg-white/10 shadow-custom backdrop-brightness-95">
            <p className="text-center">
              “I've been using this web hosting service for over a year and I'm
              really impressed with the uptime and support. The website has
              never gone down and the customer service is always quick to help
              with any issues I have. Highly recommend!”
            </p>
            <Ratings rating={5} />
            <img src={images?.user} alt="user" />
            <p>Jane Smith</p>
            <p>Freelance Designer</p>
          </div>
          <div className="h-[450px] w-[340px] flex flex-col gap-2 items-center justify-center rounded-xl p-6 backdrop-blur-2xl bg-white/10 backdrop-brightness-95 shadow-custom">
            <p className="text-center">
              “I've been using this web hosting service for over a year and I'm
              really impressed with the uptime and support. The website has
              never gone down and the customer service is always quick to help
              with any issues I have. Highly recommend!”
            </p>
            <Ratings rating={5} />
            <img src={images?.user} alt="user" />
            <p>Jane Smith</p>
            <p>Freelance Designer</p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 items-center justify-center mt-[120px] p-6 bg-black rounded-2xl relative">
        <img
          src={images?.net2}
          alt="net"
          className="z-[-2] size-[500px] top-[-250px] right-[-300px] absolute opacity-80"
        />
        <div className="flex gap-7 w-full">
          <div className="flex items-center justify-center bg-black text-gray-400 flex-1">
            <div className="w-[80%] my-8">
              <h3 className="text-2xl text-white font-bold">
                Let's Collaborate and Conquer
              </h3>
              <p>
                Your ambition, our innovation - Launching businesses into the
                stratosphere
              </p>
              <form className="flex flex-col gap-4 w-full mt-8">
                <div className="flex gap-4">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="First Name"
                    className="p-3 w-full bg-[#0a0a0a] rounded-lg border border-gray-600"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="p-3 w-full bg-[#0a0a0a] rounded-lg border border-gray-600"
                  />
                </div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Email"
                  className="p-3 w-full bg-[#0a0a0a] rounded-lg border border-gray-600"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Phone Number"
                  className="p-3 w-full bg-[#0a0a0a] rounded-lg border border-gray-600"
                />
                <textarea
                  name="lastName"
                  placeholder="Message"
                  rows={5}
                  className="p-3 w-full bg-[#0a0a0a] rounded-lg border border-gray-600 resize-none"
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
      <Footer />
    </div>
  );
}
