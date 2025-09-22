"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Baloo_Paaji_2 } from "next/font/google";
import Link from "next/link";
import { Nunito_Sans } from "next/font/google";
import "remixicon/fonts/remixicon.css";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const baloo = Baloo_Paaji_2({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-10 flex lg:flex-row flex-col items-center justify-between pt-0 lg:pt-7 relative">
      {/* Logo */}
      <div className="lg:w-[20%] w-[50%] flex lg:flex-row flex-col items-center justify-center ">
        <Image
          src="/logoforwhispra.png"
          className="drop-shadow-2xl hidden lg:block"
          alt="Logo"
          width={120}
          height={120}
        />
        <img
          src="/logoforwhispra.png"
          alt="logo"
          className="drop-shadow-2xl -mt-4 block lg:hidden w-[25vw] h-30 object-cover"
        />
        <h1
          className="lg:text-5xl text-[10vw] drop-shadow-2xl lg:mt-0 -mt-7 font-bold text-white"
          style={baloo.style}
        >
          Whispra
        </h1>
      </div>

      {/* Desktop Links */}
      <div
        className="justify-evenly lg:flex hidden items-center w-[40%] "
        style={nunito.style}
      >
        <Link
          href="/"
          className="text-2xl font-semibold text-white underline drop-shadow-4xl"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-2xl font-semibold text-white drop-shadow-4xl"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="text-2xl font-semibold text-white drop-shadow-4xl"
        >
          Contact
        </Link>
      </div>

      {/* Mobile Menu Icon */}
      <i
        className="ri-menu-4-line text-4xl absolute -top-3 -right-3 text-white md:hidden block cursor-pointer"
        onClick={() => setOpen(true)}
      ></i>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 w-full h-screen shadow-xl bg-white/80 backdrop-blur-2xl z-20 transform transition-transform duration-500 ease-in-out ${
          open ? "translate-y-0" : "-translate-y-full"
        } md:hidden`}
      >
        {/* Close Icon */}
        <i
          className="ri-close-line text-5xl absolute top-4 right-2 text-[#B2A6E2] md:hidden block cursor-pointer"
          onClick={() => setOpen(false)}
        ></i>

        {/* Links */}
        <div className="w-full h-full flex justify-center flex-col gap-10 items-center ">
          <Link
            href="/"
            className="text-2xl font-semibold text-[#B2A6E2] underline drop-shadow-4xl"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-2xl font-semibold text-[#B2A6E2] drop-shadow-4xl"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-2xl font-semibold text-[#B2A6E2] drop-shadow-4xl"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
