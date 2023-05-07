import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-transparent text-slate-300">
      {/* logo section */}

      <div className="p-4 ml-5 lg:ml-20 flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-4">
            <Image
              src="/../public/assets/Logo/logo.png"
              alt="logo"
              width={32}
              height={32}
            />
          </div>
          <div>
            <Image
              src="/../public/assets/Logo/HooBank.png"
              alt="logo"
              width={82}
              height={23}
            />
          </div>
        </div>

        {/* mobile menu */}
        <div className="block lg:hidden">
          <button onClick={toggleMenu}>
            <HiMenu size={24} />
          </button>
        </div>

        {/* desktop menu */}
        <ul className="hidden lg:flex mr-32 ">
          <li className="mr-6 px-5 text-lg font-normal hover:text-white">
            <Link href="/">Home</Link>
          </li>
          <li className="mr-6 px-5 text-lg hover:text-white">
            <Link href="/about">About Us</Link>
          </li>
          <li className="mr-6 px-5 text-lg hover:text-white">
            <Link href="/features">Features</Link>
          </li>
          <li className="hover:text-white text-lg px-5">
            <Link href="/solution">Solution</Link>
          </li>
        </ul>
      </div>

      {/* mobile menu (dropdown) */}
      {isOpen && (
        <ul className="lg:hidden">
          <li className="py-2 px-4">
            <Link href="/">Home</Link>
          </li>
          <li className="py-2 px-4">
            <Link href="/about">About Us</Link>
          </li>
          <li className="py-2 px-4">
            <Link href="/features">Features</Link>
          </li>
          <li className="py-2 px-4">
            <Link href="/solution">Solution</Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
