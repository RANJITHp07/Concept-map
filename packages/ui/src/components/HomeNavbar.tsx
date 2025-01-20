"use client";

import React, { useState } from "react";
import Image from "next/image";
import { LuBellDot } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import LeftMenu from "./LeftMenu";
import { Slide } from "react-awesome-reveal";

function HomeNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="px-[10px]">
      {/* Navigation bar */}
      <div className="flex justify-between items-center ">
        {/* Logo for small screens */}
        <div className="md:hidden">
          <Image alt="logo" src="/logo.png" width={180} height={180} />
        </div>

        {/* Links for medium and larger screens */}
        <ul className="hidden md:flex gap-[35px] lg:gap-[50px]">
          <li className="text-[16px] lg:text-[18px] center-navbar-text inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#F6AA16] after:transition-all after:duration-300 hover:after:w-full cursor-pointer">
            About Us
          </li>
          <li className="text-[16px] lg:text-[18px] center-navbar-text inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#F6AA16] after:transition-all after:duration-300 hover:after:w-full cursor-pointer">
            Why Us
          </li>
          <li className="text-[16px] lg:text-[18px] center-navbar-text inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#F6AA16] after:transition-all after:duration-300 hover:after:w-full cursor-pointer">
            Contact Us
          </li>
        </ul>

        {/* Notification and Profile Section - only visible on md and above */}
        <div className="hidden md:flex items-center gap-[20px]">
          <div className="cursor-pointer">
            <LuBellDot
              size={34}
              style={{ color: "#0000007A" }}
              className="w-[28px] h-[28px] lg:w-[34px] lg:h-[32px]"
            />
          </div>
          <div className="cursor-pointer">
            <Image
              src="/HomeNavbar/Ellipse 18.png"
              alt="Profile Icon"
              width={40}
              height={40}
              className="rounded-full w-[30px] h-[30px] lg:w-[40px] lg:h-[40px]"
            />
          </div>
          <div className="cursor-pointer">
            <IoIosArrowDown
              size={34}
              style={{ color: "#0000007A" }}
              className="w-[28px] h-[28px] lg:w-[34px] lg:h-[32px]"
            />
          </div>
        </div>

        {/* Hamburger menu for small screens */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <IoClose size={34} style={{ color: "#0000007A" }} />
            ) : (
              <HiOutlineMenuAlt3 size={34} style={{ color: "#0000007A" }} />
            )}
          </button>
        </div>
      </div>

      {/* Sidebar for small screens */}
      <div
        className={`fixed top-0 left-0 w-[250px] h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {isMenuOpen && (
          <Slide direction="left" duration={300} triggerOnce>
            <div className="p-6">
              <div>
                <LeftMenu />
              </div>
              <ul className="flex flex-col gap-[10px] justify-center">
                <li className="text-[16px] center-navbar-text inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#F6AA16] after:transition-all after:duration-300 hover:after:w-full cursor-pointer">
                  About Us
                </li>
                <li className="text-[16px] center-navbar-text inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#F6AA16] after:transition-all after:duration-300 hover:after:w-full cursor-pointer">
                  Why Us
                </li>
                <li className="text-[16px] center-navbar-text inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#F6AA16] after:transition-all after:duration-300 hover:after:w-full cursor-pointer">
                  Contact Us
                </li>
              </ul>
            </div>
          </Slide>
        )}
      </div>
    </section>
  );
}

export default HomeNavbar;
