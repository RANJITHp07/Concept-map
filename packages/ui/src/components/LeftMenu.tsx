"use client";

import { useState } from "react";
import Image from "next/image";

interface MenuItem {
  logo: string;
  title: string;
}

function LeftMenu() {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const Data: MenuItem[] = [
    { logo: "LeftMenu/1.svg", title: "Dashboard" },
    { logo: "LeftMenu/2.svg", title: "Reports" },
    { logo: "LeftMenu/3.svg", title: "Profile" },
    { logo: "LeftMenu/4.svg", title: "Contracts" },
    { logo: "LeftMenu/5.svg", title: "Invoices" },
    { logo: "LeftMenu/6.svg", title: "Projects" },
    { logo: "LeftMenu/7.svg", title: "Tasks" },
    { logo: "LeftMenu/8.svg", title: "Settings" },
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
