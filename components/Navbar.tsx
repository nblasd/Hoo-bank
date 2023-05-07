import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navHandler = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <main>
      <div className="h-32 md:h-16  w-[750px] md:w-[1500px] lg:w-[1800px] flex justify-between items-center px-24">
        {/* left side */}
        <div className="cursor-pointer scale-150 h-full flex items-center">
          <Link href="/">
            <Image
              src="/../public/assets/Logo/full-logo.png"
              alt="logo"
              width={120}
              height={120}
            />
          </Link>
        </div>

        {/* Right side */}

        <div className="hidden md:flex items-center h-full">
          <ul className="flex font-semibold">
            <Link href="/">
              <li className="text-slate-300 px-5 cursor-pointer hover:text-white">
                Home
              </li>
            </Link>
            <Link href="/about">
              <li className="text-slate-300 px-5 cursor-pointer hover:text-white">
                About Us
              </li>
            </Link>
            <Link href="/features">
              <li className="text-slate-300 px-5 cursor-pointer hover:text-white">
                Features
              </li>
            </Link>
            <Link href="/solution">
              <li className="text-slate-300 px-5 cursor-pointer hover:text-white">
                Solution
              </li>
            </Link>
          </ul>
        </div>

        <div onClick={navHandler} className="md:hidden scale-125">
          <GiHamburgerMenu size={30} color="white" />
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 z-[1] w-[100%] h-[100%] bg-slate-900 md:hidden ease-in duration-500"
            : "absolute left-[-100] top-0 ease-in duration-500"
        }
      >
        {/* Cross Button */}
        <div
          onClick={navHandler}
          className={
            menuOpen ? "flex  justify-end w-full mt-10 px-10" : "hidden"
          }
        >
          <ImCross size={50} color="white" />
        </div>
        {/* menu */}

        <div
          className={
            menuOpen
              ? "flex w-full justify-center items-center h-full"
              : "hidden"
          }
        >
          <ul className="flex flex-col  font-semibold">
            <Link href="/">
              <li className="text-slate-300 text-6xl my-20 px-5 cursor-pointer hover:text-white">
                Home
              </li>
            </Link>
            <Link href="/about">
              <li className="text-slate-300 text-6xl px-5 my-20 cursor-pointer hover:text-white">
                About Us
              </li>
            </Link>
            <Link href="/features">
              <li className="text-slate-300 text-6xl px-5 my-20 cursor-pointer hover:text-white">
                Features
              </li>
            </Link>
            <Link href="/solution">
              <li className="text-slate-300 text-6xl px-5 my-20 cursor-pointer hover:text-white">
                Solution
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Navbar;
