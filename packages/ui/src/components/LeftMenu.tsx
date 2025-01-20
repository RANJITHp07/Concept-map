"use client";

import { useState } from "react";
import Image from "next/image";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa6";
import { TbContract } from "react-icons/tb";
import { TbFileInvoice } from "react-icons/tb";
import { FaRegFolder } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

interface MenuItem {
  logo: JSX.Element | string;
  title: string;
}

function LeftMenu() {
  const [activeItem, setActiveItem] = useState<number | null>(0);
  const Data: MenuItem[] = [
    { logo: <MdOutlineDashboardCustomize />, title: "Dashboard" },
    { logo: <TbReportSearch />, title: "Reports" },
    { logo: <FaRegUser />, title: "Profile" },
    { logo: <TbContract />, title: "Contracts" },
    { logo: <TbFileInvoice />, title: "Invoices" },
    { logo: <FaRegFolder />, title: "Projects" },
    { logo: <FaTasks />, title: "Tasks" },
    { logo: <IoSettingsOutline />, title: "Settings" },
  ];

  const handleClick = (index: number) => {
    setActiveItem(index);
  };

  return (
    <section className="py-[20px]">
      <div className="grid grid-cols-1 gap-[10px]">
        {Data.map((item, index: number) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`grid grid-cols-[auto_1fr] gap-[20px] md:gap-[10px] items-center px-[20px] py-[10px] rounded-[12px] cursor-pointer
              ${activeItem === index ? "bg-[rgba(246,170,22,1)] text-white" : "hover:bg-[rgba(246,170,22,1)]"}`}
          >
            {typeof item.logo === "string" ? (
              <Image
                src={item.logo}
                alt={item.title}
                width={20}
                height={20}
                className="mr-4"
              />
            ) : (
              <span className=" text-[22px] md:text-[25px]">{item.logo}</span>
            )}
            <span
              className={` text-[14px] md:text-[18px] leading-[21px] custom-size-leftMenu ${activeItem === index ? "text-white" : "text-gray-800"}`}
            >
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LeftMenu;
