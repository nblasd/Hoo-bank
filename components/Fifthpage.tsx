import React from "react";
import Image from "next/image";

function Fifthpage() {
  return (
    <main>
      {/* upper part */}

      <div className="absolute flex flex-col md:flex-row justify-between w-[600px] md:w-[1370px] lg:w-[1700px] top-[4400px] sm:top-[4300px] md:top-[3000px] left-[50px] md:left-[50px] lg:left-[100px]">
        {/* Heading */}

        <div className="w-[600px] md:w-[800px]">
          <p className="text-white text-[70px] md:text-[60px] font-semibold leading-[76.8px] tracking-wider">
            What people are <br /> saying about us
          </p>
        </div>

        {/* paragraph */}

        <div className="w-[620px] md:ml-10 mt-12">
          <p className="text-slate-300 text-[30px] md:text-[20px] 2xl:text-[22px] font-[400] leading-[170%] ">
            Everything you need to accept card payments <br /> and grow your
            business anywhere on the planet.
          </p>
        </div>
      </div>

      {/* middle part */}

      <div className="absolute flex flex-col md:flex-row md:justify-between w-[500px] md:w-[1350px] lg:w-[1700px] top-[4800px] left-[100px] md:top-[3300px] md:left-[70px] lg:left-[100px] ">
        {/* first section */}

        <div className="flex flex-col justify-center h-[500px] w-[500px] md:w-[450px] rounded-[20px] hover:bg-gradient-to-br from-gray-800  to-gray-950 to-95% hover:scale-105 duration-700 ">
          {/* icon */}
          <div className="ml-3">
            <Image
              className="ml-5"
              src="/../public/assets/Icons/twoslash.png"
              alt="logo"
              width={42.6}
              height={27.6}
            />
          </div>

          {/* paragraph */}

          <div className="mt-16 ml-8">
            <p className="text-white text-[28px] font-[400]">
              Money is only a tool. It will take <br /> you wherever you wish,
              but it <br /> will not replace you as the <br /> driver.
            </p>
          </div>

          {/* profile section */}
          <div className="flex items-center mt-16 ml-3">
            {/* image */}
            <div className="">
              <Image
                className="ml-5"
                src="/../public/assets/images/profile1.png"
                alt="logo"
                width={48}
                height={48}
              />
            </div>

            {/* names section */}

            <div className="ml-6">
              <p className="text-white text-lg font-semibold">
                Herman Jensen <br />{" "}
                <span className="text-sm font-normal text-gray-300">
                  Founder & Leader
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* second section */}

        <div className="flex flex-col justify-center h-[500px] w-[450px] rounded-[20px] hover:bg-gradient-to-br from-gray-800  to-gray-950 to-95% hover:scale-105 duration-700 ">
          {/* icon */}
          <div className="ml-3">
            <Image
              className="ml-5"
              src="/../public/assets/Icons/twoslash.png"
              alt="logo"
              width={42.6}
              height={27.6}
            />
          </div>

          {/* paragraph */}

          <div className="mt-16 ml-8">
            <p className="text-white text-[28px] font-[400]">
              Money makes your life easier. If <br /> you're lucky to have it,
              you're <br /> lucky.
            </p>
          </div>

          {/* profile section */}
          <div className="flex items-center mt-16 ml-3">
            {/* image */}
            <div className="">
              <Image
                className="ml-5"
                src="/../public/assets/images/profile2.png"
                alt="logo"
                width={48}
                height={48}
              />
            </div>

            {/* names section */}

            <div className="ml-6">
              <p className="text-white text-lg font-semibold">
                Steve Mark <br />{" "}
                <span className="text-sm font-normal text-gray-300">
                  Founder & Leader
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* third section */}

        <div className="flex flex-col justify-center h-[500px] w-[450px] rounded-[20px] hover:bg-gradient-to-br from-gray-800  to-gray-950 to-95% hover:scale-105 duration-700 ">
          {/* icon */}
          <div className="ml-3">
            <Image
              className="ml-5"
              src="/../public/assets/Icons/twoslash.png"
              alt="logo"
              width={42.6}
              height={27.6}
            />
          </div>

          {/* paragraph */}

          <div className="mt-16 ml-8">
            <p className="text-white text-[28px] font-[400]">
              It is usually people in the <br /> money business, finance, and{" "}
              <br /> international trade that are <br /> really rich.
            </p>
          </div>

          {/* profile section */}
          <div className="flex items-center mt-16 ml-3">
            {/* image */}
            <div className="">
              <Image
                className="ml-5"
                src="/../public/assets/images/profile3.png"
                alt="logo"
                width={48}
                height={48}
              />
            </div>

            {/* names section */}

            <div className="ml-6">
              <p className="text-white text-lg font-semibold">
                Herman Jensen <br />{" "}
                <span className="text-sm font-normal text-gray-300">
                  Founder & Leader
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* second last part */}

      <div className="absolute grid grid-cols-2 gap-10 md:grid-cols-4 items-center w-[600px] md:w-[1320px] lg:w-[1700px] top-[6300px] md:top-[3900px] left-[100px] ">
        {/* first image */}
        <div>
          <Image
            className="ml-5"
            src="/../public/assets/Icons/airbnb.png"
            alt="logo"
            width={192.25}
            height={60}
          />
        </div>

        {/* second image */}
        <div>
          <Image
            className="ml-5"
            src="/../public/assets/Icons/binance.png"
            alt="logo"
            width={192.25}
            height={38.64}
          />
        </div>

        {/* third image */}
        <div>
          <Image
            className="ml-5"
            src="/../public/assets/Icons/coinbase.png"
            alt="logo"
            width={189}
            height={41.25}
          />
        </div>

        {/* fourth image */}
        <div>
          <Image
            className="ml-5"
            src="/../public/assets/Icons/dropbox.png"
            alt="logo"
            width={192.25}
            height={37.86}
          />
        </div>
      </div>

      {/* last part */}

      <div className="mybg2 hidden md:flex justify-between items-center absolute top-[4150px] left-[100px] md:w-[1300px] lg:w-[1575px] h-[293px] rounded-[20px]">
        {/* Heading and paragraph */}

        {/* Heading */}

        <div className="ml-16">
          <p className="text-white text-[70px] md:text-[60px] font-semibold tracking-wider">
            Let’s try our service now! <br /> <span className="text-slate-300 text-[30px] md:text-[20px] 2xl:text-[22px] font-[400] ">  Everything you need to accept card payments <br /> and grow your
            business anywhere on the planet.</span>
          </p>
        </div>

        {/* Button */}
        <div className="mt-12 mr-32">
          <button
            className="bg-gradient-to-t from-[#33BBCF] via-[#7DE7EB] to-[#BEF3F5] hover:from-[#0088cc] hover:via-[#006699] hover:to-[#004466] hover:text-gray-300 duration-500 w-[250px] md:w-[170px] text-[42px] md:text-[20px] h-[100px] md:h-[64px] rounded-md font-semibold text-base leading-6
"
          >
            Get Started
          </button>
        </div>
      </div>
    </main>
  );
}

export default Fifthpage;
