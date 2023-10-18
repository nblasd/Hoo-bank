import Image from "next/image";
import React from "react";

function Thirdpage() {
  return (
    <main id="features">
      {/* Right side */}
      <div className="absolute top-[2850px] sm:top-[2700px] md:top-[1800px] lg:top-[1800px] left-[60px] md:left-[900px] lg:left-[1200px]">
        {/* Heading*/}

        <div className="w-[600px] ">
          <p className="text-white text-[70px] md:text-[60px] font-semibold leading-[76.8px] tracking-wider">
            Easily control your billing & invoicing.
          </p>
        </div>
        {/* Paragraph */}

        <div className="w-[550px] mt-12">
          <p className="text-slate-300 text-[30px] md:text-[20px] 2xl:text-[22px] font-[400] leading-[170%] ">
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </p>
        </div>
        {/* Images */}

        <div className="flex justify-between mt-12 w-[300px]">
          {/* first img */}
          <Image
            className="hover:scale-125 duration-700"
            src="/assets/Icons/app store.png"
            alt="logo"
            width={128.86}
            height={42.05}
          />
          {/* Second image */}
          <Image
            className="hover:scale-125 duration-700"
            src="/assets/Icons/google play.png"
            alt="logo"
            width={128.86}
            height={42.05}
          />
        </div>
      </div>

      {/* Left side */}

      <div className="hidden md:block">
        {/* middle section */}

        <div className="absolute top-[1900px] left-[100px]">
          <Image
            src="/assets/images/transaction.png"
            alt="logo"
            width={335}
            height={280}
          />
        </div>
        {/* Lower section */}

        <div className="absolute flex items-center top-[2157px] left-[341px] bg-white w-[324px] h-[54px] rounded-2xl hover:scale-125 duration-700">
          <div className="flex ml-5">
            <Image
              src="/assets/Icons/tick.png"
              alt="logo"
              width={24}
              height={24}
            />
            <p className="text-black font-semibold ml-3 ">
              Great! Your Payment is succesfully.
            </p>
          </div>
        </div>
        {/* upper section */}
        <div className="mybg absolute top-[1740px] left-[360px] w-[227px] h-[216px] rounded-[10px] hover:scale-125 duration-700">
          {/* paypal section */}
          <div className="flex w-[100%] mt-3">
            <Image
              className="ml-5"
              src="/assets/Icons/paypal.png"
              alt="logo"
              width={66}
              height={56}
            />
            <p className="text-white ml-3 text-[27px] font-semibold tracking-wider leading-7">
              Paypal <br />{" "}
              <span className="text-[15px] font-normal">Checkout</span>
            </p>
          </div>
          {/* total section */}

          <div className="flex justify-between items-center mt-4 mx-4">
            <p className="text-white">
              Total
              <br /> <span className="font-semibold text-2xl">$210</span>
            </p>
            <button className="w-[70.87px] h-[33px] bg-gradient-to-r from-[#33BBCF] via-[#7DE7EB] to-[#DEF9FA] text-transparent bg-clip-text border border-[#33BBCF]  hover:border-[#2B6CB0] transition duration-300 ease-in-out hover:text-gray-400 ">
              Change
            </button>
          </div>
          {/* button */}
          <div className="mt-6 ml-4">
            <button
              className="bg-gradient-to-t from-[#33BBCF] via-[#7DE7EB] to-[#BEF3F5] hover:from-[#0088cc] hover:via-[#006699] hover:to-[#004466] hover:text-gray-300 duration-500 w-[187.97px] text-[35px] h-[33px]  rounded-md font-semibold text-base leading-6
"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Thirdpage;
