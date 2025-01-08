"use client";

import { useState } from "react";
import Image from "next/image";
// import { images } from "../constant";

interface MenuItem {
  logo: string;
  title: string;
}

function LeftMenu() {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const Data: MenuItem[] = [
    { logo: "/logo.png", title: "Dashboard" },
    { logo: "/logo.png", title: "Reports" },
    { logo: "/logo.png", title: "Profile" },
    { logo: "/logo.png", title: "Contracts" },
    { logo: "/logo.png", title: "Invoices" },
    { logo: "/logo.png", title: "Projects" },
    { logo: "/logo.png", title: "Tasks" },
    { logo: "/logo.png", title: "Settings" },
  ];

  const handleClick = (index: number) => {
    setActiveItem(index);
  };

  return (
    <section className="px-[20px] py-[20px]">
      <div>
        {Data.map((item, index: number) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`flex items-center justify-start px-[20px] py-[10px] mt-[5px] rounded-[12px] 
              ${activeItem === index ? "bg-[rgba(246,170,22,1)] text-white" : "hover:bg-[rgba(246,170,22,1)]"}`}
          >
            <Image
              src={item.logo}
              alt={item.title}
              width={32}
              height={32}
              className="mr-4 text-[red]"
            />
            <span
              className={`text-[18px] leading-[21px] ${activeItem === index ? "text-white" : "text-gray-800"}`}
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
