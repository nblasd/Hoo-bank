import React from "react";
import Image from "next/image";
function Secondpage() {
  return (
    <main>
      {/* Left section */}
      <div className="absolute top-[2000px] sm:top-[1800px] left-[50px] md:top-[1250px] lg:top-[1050px] md:left-[20px] lg:left-[100px]">
        {/* Heading */}
        <div className="w-[500px] md:w-[800px]">
          <p className="text-white text-[70px] md:text-[60px] font-semibold leading-[76.8px] tracking-wider">
            You do the business,
            <br /> we’ll handle the money.
          </p>
        </div>
        {/* paragraph */}

        <div className="w-[600px] mt-12">
          <p className="text-slate-300 text-[30px] md:text-[20px] 2xl:text-[22px] font-[400] leading-[170%] ">
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.
          </p>
        </div>
        {/* Button */}

        <div className="mt-12">
          <button
            className="bg-gradient-to-t from-[#33BBCF] via-[#7DE7EB] to-[#BEF3F5] hover:from-[#0088cc] hover:via-[#006699] hover:to-[#004466] hover:text-gray-300 duration-500 w-[250px] md:w-[170px] text-[42px] md:text-[20px] h-[100px] md:h-[64px] rounded-md font-semibold text-base leading-6
"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Right section */}
      <div className="hidden md:block absolute top-[1260px] left-[800px] lg:left-[1100px] lg:top-[1060px]">
        {/* first section */}
        <div className="flex h-32 lg:h-40 w-[700px] rounded-[40px] hover:bg-gradient-to-br from-gray-800  to-gray-950 to-95% ">
          {/* image */}
          <div className="mt-8 ml-16">
            <Image
              src="/assets/Icons/star.png"
              alt="logo"
              width={64}
              height={64}
            />
          </div>
          {/* Heading and Paragraph*/}
          <div className="w-[466px] ml-7 mt-5">
            <p className="text-white text-[22px] font-semibold tracking-wider">
              Rewards <br />
            </p>

            <p className="text-slate-300 text-[30px] md:text-[20px] 2xl:text-[22px] font-[400] leading-[170%] mt-2">
              The best credit cards offer some tantalizing combinations of
              promotions and prizes
            </p>
          </div>
        </div>
        {/* second section */}

        <div className="flex h-32 lg:h-40 w-[700px] rounded-[40px] hover:bg-gradient-to-br from-gray-800  to-gray-950 to-95%">
          {/* image */}
          <div className="mt-8 ml-16">
            <Image
              src="/assets/Icons/verified.png"
              alt="logo"
              width={64}
              height={64}
            />
          </div>
          {/* Heading and Paragraph*/}
          <div className="w-[466px] ml-7 mt-5">
            <p className="text-white text-[22px] font-semibold tracking-wider">
              100% Secured <br />
            </p>

            <p className="text-slate-300 text-[30px] md:text-[20px] 2xl:text-[22px] font-[400] leading-[170%] mt-2">
              We take proactive steps make sure your information and
              transactions are secure.
            </p>
          </div>
        </div>

        {/* Third section */}

        <div className="flex h-32 lg:h-40 w-[700px] rounded-[40px] hover:bg-gradient-to-br from-gray-800  to-gray-950 to-95%">
          {/* image */}
          <div className="mt-8 ml-16">
            <Image
              src="/assets/Icons/transfer.png"
              alt="logo"
              width={64}
              height={64}
            />
          </div>
          {/* Heading and Paragraph*/}
          <div className="w-[466px] ml-7 mt-5">
            <p className="text-white text-[22px] font-semibold tracking-wider">
              Balance Transfer <br />
            </p>

            <p className="text-slate-300 text-[30px] md:text-[20px] 2xl:text-[22px] font-[400] leading-[170%] mt-2">
              A balance transfer credit card can save you a lot of money in
              interest charges.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Secondpage;
