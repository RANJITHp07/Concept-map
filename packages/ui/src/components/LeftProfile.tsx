import React from "react";
import Image from "next/image";
import { leftSideProfile } from "../constant";

function LeftProfile() {
  interface MenuItem {
    logo: string;
    title: string;
    role: string;
    icon: string;
  }

  const data: MenuItem[] = [
    {
      logo: leftSideProfile.LeftProfile,
      title: "Jackson",
      role: "Writer",
      icon: leftSideProfile.Arrow,
    },
  ];

  return (
    <section className="pt-[20px]">
      <div className="rounded-[28px] p-[20px] bg-[rgba(254,201,97,0.22)]">
        {/* Header */}
        <div className="flex justify-between items-center mb-[10px]">
          <h1 className="text-[22px] leading-[25px] font-bold">Following</h1>
          <h1 className="text-[15px] leading-[17px] text-blue-500 cursor-pointer">View All</h1>
        </div>

        {/* Data List */}
        <div className="space-y-[15px]">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-[15px]">
              {/* Logo */}
              <Image
                src={item.logo}
                alt={`${item.title} Logo`}
                width={40}
                height={40}
                className="rounded-full"
              />

              {/* Title and Role */}
              <div className="flex-1">
                <h2 className="text-[18px] font-medium">{item.title}</h2>
                <p className="text-[14px] text-gray-600">{item.role}</p>
              </div>

              {/* Icon */}
              <Image
                src={item.icon}
                alt="Arrow Icon"
                width={24}
                height={24}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LeftProfile;
