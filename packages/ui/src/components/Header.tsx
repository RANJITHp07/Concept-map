import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { LuBellDot } from "react-icons/lu";

function Header() {
  return (
    <nav className="flex justify-between p-5 px-12 bg-transparent items-center">
      <div className="flex gap-12 items-center">
        <Link href={"/"}>
          <Image alt="logo" src={"/logo.png"} width={230} height={100} />
        </Link>
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
      </div>
      <div className="hidden md:flex items-center gap-[20px]">
        <input
          className="p-2 pl-5 border-gray-300 w-96 border rounded-full"
          placeholder="Search..."
        />
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
        <div className="cursor-pointer relative">
          <IoIosArrowDown
            size={34}
            style={{ color: "#0000007A" }}
            className="w-[28px] h-[28px] lg:w-[34px] lg:h-[32px]"
          />
          {/* {isDropdownOpen && (
              <div className="absolute z-[1] right-0 mt-2 w-[150px] bg-white shadow-md rounded-md border border-gray-300">
                <ul className="text-sm">
                  <li
                    className="text-gray-700 px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => console.log("Logging out...")}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )} */}
        </div>
      </div>
    </nav>
  );
}

export default Header;
