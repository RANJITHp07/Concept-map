"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { LuBellDot } from "react-icons/lu";
import { apiHelper } from "../lib/utils";
import { apis } from "../lib/api";
import { handleSignOut } from "./HomeNavbar";

function Header({ page }: { page?: string }) {
  const router = useRouter();
  const [buyer, setBuyer] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility

  const fetchUserData = async (email: string) => {
    const result = await apiHelper(apis.getUserDetails(email));
    if (result.status == "success") {
      setBuyer(result.data);
    }
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
  };

  useEffect(() => {
    const email = localStorage.getItem("email");
    fetchUserData(email!);
  }, []);

  return (
    <nav className="flex justify-between p-5 px-5 md:px-12 bg-transparent items-center">
      <div className="flex gap-12 items-center">
        <Link href={page == "creator" ? "/creator-dashboard" : "/"}>
          <Image alt="logo" src={"/logo.png"} width={230} height={100} />
        </Link>
        <ul className="hidden lg:flex gap-[35px] lg:gap-[50px]">
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
      <div className="flex items-center gap-[20px]">
        <div className="cursor-pointer hidden md:flex">
          <LuBellDot
            size={34}
            style={{ color: "#0000007A" }}
            className="w-[28px] h-[28px] lg:w-[34px] lg:h-[32px]"
          />
        </div>
        <div className="cursor-pointer hidden lg:flex">
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
            onClick={handleDropdownToggle}
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
                {page !== "creator" && (
                  <li
                    className="text-gray-500 px-4 py-3 text-xl font-medium cursor-pointer hover:bg-gray-100"
                    onClick={() => router.push("/purchase_list")}
                  >
                    Purchase List
                  </li>
                )}
                {/* <li
                  className={`text-gray-500 px-4 py-3 text-xl font-medium ${buyer ? "cursor-pointer" : "cursor-not-allowed opacity-40"} hover:bg-gray-100`}
                  onClick={() => router.push("/creator-dashboard")}
                >
                  Switch to Creator
                </li> */}

                <li
                  className="text-gray-500 px-4 py-3 text-xl cursor-pointer font-medium hover:bg-gray-100"
                  onClick={() => handleSignOut()}
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
