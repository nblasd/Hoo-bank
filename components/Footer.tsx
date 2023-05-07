import React from "react";
import Image from "next/image";
import { RiCopyrightLine } from "react-icons/ri";
import { FaInstagram,FaFacebook,FaTwitter,FaLinkedin} from 'react-icons/fa';


function Footer() {
  return (
    <main>
      <div className="bg-[#0B0A0C] hidden lg:block absolute top-[4550px] w-[1900px]">
        <div className="grid grid-cols-5 justify-between mt-16 ml-40 w-[1500px]">
          {/* logo section */}
          <div className="col-span-2">
            <Image
              src="/../public/assets/Logo/full-logo.png"
              alt="logo"
              width={266}
              height={72.14}
            />
            <p className="text-slate-300 mt-5 ml-5 text-[15px] tracking-wider ">
              A new way to make the payments <br /> easy, reliable and secure.
            </p>
          </div>
          {/* col1 (1) */}

          <div>
            <p className="text-white cursor-pointer text-[18px] font-semibold">
              Usefull Links
            </p>
            <p className="text-slate-300 ml-4 mt-5 hover:text-white cursor-pointer text-[15px]">
              Content
            </p>
            <p className="text-slate-300 ml-4 mt-4 hover:text-white cursor-pointer text-[15px]">
              How it Works
            </p>
            <p className="text-slate-300 ml-4 mt-4 hover:text-white cursor-pointer text-[15px]">
              Create
            </p>
            <p className="text-slate-300 ml-4 mt-4 hover:text-white cursor-pointer text-[15px]">
              Explore
            </p>
            <p className="text-slate-300 ml-4 mt-4 hover:text-white cursor-pointer text-[15px]">
              Terms & Services
            </p>
          </div>

          {/* col2 (1) */}

          <div>
            <p className="text-white cursor-pointer text-[18px] font-semibold">
              Community
            </p>
            <p className="text-slate-300 ml-3 mt-5 hover:text-white cursor-pointer text-[15px]">
              Help Center
            </p>
            <p className="text-slate-300 ml-3 mt-4 hover:text-white cursor-pointer text-[15px]">
              Partners
            </p>
            <p className="text-slate-300 ml-3 mt-4 hover:text-white cursor-pointer text-[15px]">
              Suggestions
            </p>
            <p className="text-slate-300 ml-3 mt-4 hover:text-white cursor-pointer text-[15px]">
              Blog
            </p>
            <p className="text-slate-300 ml-3 mt-4 hover:text-white cursor-pointer text-[15px]">
              Newsletters
            </p>
          </div>

          {/* col3 (1) */}

          <div>
            <p className="text-white cursor-pointer ml-5 text-[18px] font-semibold">
              Partner
            </p>
            <p className="text-slate-300 ml-4 mt-5 hover:text-white cursor-pointer text-[15px]">
              Our Partner
            </p>
            <p className="text-slate-300 ml-4 mt-4 hover:text-white cursor-pointer text-[15px]">
              Become a Partner
            </p>
          </div>

          {/* border */}
          <div className=" myborder mt-16 w-[1400px] " />

          {/* Last part    */}

          <div className="absolute top-[380px] left-[200px]">
            <p className="text-slate-400">Copyright</p>
            <div className="absolute top-[1px] left-[90px]">
              <RiCopyrightLine size={25} color="white" />
            </div>
            <div className="absolute top-[1px] w-[300px] left-[140px]">
              <p className="text-slate-400">
                2021 HooBank. All Rights Reserved.
              </p>
            </div>
            {/* React icons */}

            <div className="absolute flex justify-between items-center w-[200px] top-[1px] left-[1000px]">
            
            <div className="hover:scale-150 duration-700"><FaInstagram size={30} color="white"/></div>
            <div className="hover:scale-150 duration-700"><FaFacebook size={30} color="white" /></div>
            <div className="hover:scale-150 duration-700"> <FaTwitter size={30} color="white" /></div>
           <div className="hover:scale-150 duration-700"> <FaLinkedin size={30} color="white" /></div>
           
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Footer;
