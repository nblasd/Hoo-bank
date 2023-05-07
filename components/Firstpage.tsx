import React from "react";
import Image from "next/image";

function Firstpage() {
  return (
    <div>
      {/* little discount section */}

      <div className="bg-gradient-to-b  from-gray-900 via-gray-800 to-gray-900 absolute flex items-center justify-center top-[150px] left-[50px] w-[560px] h-[70px] sm:w-[90%] sm:h-[70px] sm:top-[140px] sm:left-[120px] md:w-[560px] lg:h-[50px] xl:h-[40px] rounded-[10px] hover:scale-125 duration-700">
        <div className=" h-[50px]  w-[50px] sm:w-[32px] sm:h-[32px]">
          <Image 
            src="/../public/assets/Icons/Discount.png"
            alt="logo"
            width={82}
            height={23}
          />
        </div>
        <div className="text-slate-300 flex items items-center w-[80%] h-[50px] sm:w-[90%] sm:h-[30px]">
          <p className="cursor-pointer text-[24px] sm:text-[20px] lg:text-[15px]">
            <span className="text-white">20% </span>DISCOUNT FOR
            <span className="text-white">1 MONTH</span> ACCOUNT
          </p>
        </div>
      </div>

      {/* the payment method text section */}
      <div className="absolute w-[700px] 2xl:w-[900px] h-[203px] left-[50px] lg:left-[100px] top-[250px]">
        <p className="text-white font-semibold text-[130px] md:text-[100px] lg:text-[80px] 2xl:text-[100px] leading-[150px] md:leading-[130px] lg:leading-[100px] 2xl:leading-[120px] tracking-normal md:tracking-wide 2xl:tracking-wider">
          The Next <br />
          <span className="bg-gradient-to-r from-[#33BBCF] via-[#7DE7EB] to-[#E5DEFA] text-transparent bg-clip-text ">
            Generation <br />
          </span>
          Payment Method.
        </p>
      </div>

      <div className="absolute top-[900px] lg:top-[650px] left-[50px] lg:left-[100px] w-[690px] lg:w-[500px] 2xl:w-[650px] h-[93px] cursor-pointer">
        <p className="text-slate-300 text-[30px] md:text-[20px] 2xl:text-[22px] font-[400] leading-[170%]">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div className="absolute hidden md:block md:top-[300px] lg:top-[280px] 2xl:top-[300px] md:left-[550px] lg:left[580px] 2xl:left-[700px] cursor-pointer hover:scale-125 duration-700">
        <Image
          src="/../public/assets/Icons/Getstarted.png"
          alt="logo"
          width={140}
          height={140}
        />
      </div>

      {/* Hand section */}
      <div className="hidden lg:block">
        {/* hand image */}
        <div className="absolute top-[280px] right-[1px]">
          <Image
            src="/../public/assets/images/hand.png"
            alt="logo"
            width={869}
            height={544}
          />
        </div>

        {/* card 3 */}

        <div className="absolute top-[349px] animate-pulse right-[300px]">
          <Image
            src="/../public/assets/images/card3.png"
            alt="logo"
            width={378}
            height={584}
          />
        </div>

        {/* card 2 */}

        <div className="absolute animate-bounce top-[220px] right-[250px]">
          <Image
            src="/../public/assets/images/card2.png"
            alt="logo"
            width={478}
            height={684}
          />
        </div>

        {/* card 1 */}

        <div className="absolute animate-bounce top-[160px] right-[250px]">
          <Image
            src="/../public/assets/images/card1.png"
            alt="logo"
            width={478}
            height={684}
          />
        </div>

        {/* big circle */}

        <div className="absolute animate-spin top-[160px] right-[750px]">
          <Image
            src="/../public/assets/images/vector.png"
            alt="logo"
            width={101}
            height={101}
          />
        </div>

        {/* middle circle */}
        <div className="absolute animate-spin top-[490px] right-[250px]">
          <Image
            src="/../public/assets/images/vector.png"
            alt="logo"
            width={68}
            height={68}
          />
        </div>

        {/* little circle */}
        <div className="absolute animate-spin top-[590px] right-[710px]">
          <Image
            src="/../public/assets/images/vector.png"
            alt="logo"
            width={32}
            height={32}
          />
        </div>
      </div>

      {/* footer section */}

      <div className=" absolute top-[1100px] lg:top-[850px] left-[153.19px] md:left-[23.19px] w-[100%] md:w-[1400px] lg:w-[1550px] lg:left-[100px]">
        <div className="flex-shrink md:flex justify-between items-center ">
          <p className="text-white font-[600] text-[100.8925px] sm:text-[80.8925px] md:text-[30.8925px] lg:text-[40.8925px]">
            3800+
          </p>
          <p className="bg-gradient-to-r from-[#33BBCF] via-[#7DE7EB] to-[#DEF9FA] text-transparent bg-clip-text text-[50.4463px] sm:text-[35.4463px] md:text-[15.4463px] lg:text-[20.4463px] font-[400]">
            User Active
          </p>
          <p className="text-white">|</p>

          <p className="text-white font-[600] text-[100.8925px] sm:text-[80.8925px] md:text-[30.8925px] lg:text-[40.8925px] ">
            230+
          </p>
          <p className="bg-gradient-to-r from-[#33BBCF] via-[#7DE7EB] to-[#DEF9FA] text-transparent bg-clip-text text-[50.4463px] sm:text-[35.4463px] md:text-[15.4463px] lg:text-[20.4463px] font-[400]">
            TRUSTED BY COMPANY
          </p>
          <p className="text-white">|</p>

          <p className="text-white font-[600] text-[100.8925px] sm:text-[80.8925px] md:text-[30.8925px] lg:text-[40.8925px] ">
            $230M+
          </p>
          <p className="bg-gradient-to-r from-[#33BBCF] via-[#7DE7EB] to-[#DEF9FA] text-transparent bg-clip-text text-[50.4463px] sm:text-[35.4463px] md:text-[15.4463px] lg:text-[20.4463px] font-[400]">
            TRANSACTION
          </p>
        </div>
      </div>
    </div>
  );
}

export default Firstpage;
