"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { LuBellDot } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import LeftMenu from "./LeftMenu";
import { Slide } from "react-awesome-reveal";
import { useRouter } from "next/navigation";
import { apiHelper } from "../lib/utils";
import { apis } from "../lib/api";
import { signOut } from "next-auth/react";

export const handleSignOut = async () => {
  await signOut({
    callbackUrl: "/login",
    redirect: true,
  });
};

function HomeNavbar({ email }: { email?: string }) {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [buyer, setBuyer] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility

  const fetchUserData = async () => {
    const result = await apiHelper(apis.getUserDetails(email!));
    if (result.status == "success") {
      setBuyer(result.data);
    }
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
  };

  useEffect(() => {
    fetchUserData();
    localStorage.setItem("email", email!);
  }, [email]);

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
          <div className="cursor-pointer relative">
            <IoIosArrowDown
              size={34}
              style={{ color: "#0000007A" }}
              className="w-[28px] h-[28px] lg:w-[34px] lg:h-[32px]"
              onClick={handleDropdownToggle} // Toggle dropdown on click
            />
            {isDropdownOpen && (
              <div className="absolute z-[1] right-0 mt-2 w-[200px] bg-white shadow-md rounded-md border border-gray-300">
                <ul className="text-sm">
                  <li
                    className="text-gray-500 px-4 py-3 text-xl font-medium cursor-pointer hover:bg-gray-100"
                    onClick={() => console.log("Logging out...")}
                  >
                    Profile
                  </li>
                  <li
                    className="text-gray-500 px-4 py-3 text-xl font-medium cursor-pointer hover:bg-gray-100"
                    onClick={() => router.push("/purchase_list")}
                  >
                    Purchase List
                  </li>
                  {/* <li
                    className={`text-gray-500 px-4 py-3 text-xl font-medium ${buyer ? "cursor-pointer" : "cursor-not-allowed opacity-40"} hover:bg-gray-100`}
                    onClick={() => router.push("/creator-dashboard")}
                  >
                    Switch to Creator
                  </li> */}

                  <li
                    className="text-gray-500 px-4 py-3 text-xl cursor-pointer font-medium hover:bg-gray-100"
                    onClick={handleSignOut}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
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
                <li
                  className="text-[16px] text-[red] center-navbar-text inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#F6AA16] after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
                  onClick={() => handleSignOut()}
                >
                  Logout
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
