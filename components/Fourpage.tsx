import React from "react";
import Image from "next/image";

function Fourpage() {
  return (
    <main>
      {/* Left side */}

      <div className="absolute top-[3600px] sm:top-[3450px] md:top-[2400px] left-[50px] lg:top-[2400px] lg:left-[100px]">
        {/* Heading */}
        <div className="w-[500px] md:w-[800px]">
          <p className="text-white text-[70px] md:text-[60px] font-semibold leading-[76.8px] tracking-wider">
            Find a better card deal <br /> in few easy steps.
          </p>
        </div>
        {/* paragraph */}

        <div className="w-[680px] mt-12">
          <p className="text-slate-300 text-[30px] md:text-[20px] 2xl:text-[22px] font-[400] leading-[170%] ">
            Arcu tortor, purus in mattis at sed integer faucibus. <br /> Aliquet
            quis aliquet eget mauris tortor.ç Aliquet <br /> ultrices ac,
            ametau.
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
      <div className=" hidden md:block absolute top-[2400px] md:left-[900px] lg:left-[1200px] md:w-[519px] lg:w-[619px] md:h-[449px] lg:h-[549px] ">
        <Image
          src="/assets/images/whole thing.png"
          alt="logo"
          width={513}
          height={449}
        />
      </div>
    </main>
  );
}

export default Fourpage;
