import React from "react";
import Image from "next/image";
import { rightSideImages } from "../constant.js";

function RightMenu() {
  interface RightMenuItem {
    logo: string;
  }

  const Data: RightMenuItem[] = [
    { logo: rightSideImages.RightSideFirst },
    { logo: rightSideImages.RightSideSecond },
    { logo: rightSideImages.RightSideThird },
    { logo: rightSideImages.RightSideFourth },
  ];

  return (
    <section className="px-[20px]  ">
      <div className="grid grid-cols-1 gap-[20px]">
        {Data.map((item, index) => (
          <div key={index} className="flex items-center justify-start   rounded-[12px] ">
            <Image
              src={item.logo}
              alt={`Right menu item ${index + 1}`}
             
              className="w-[256px] h-[600px] object-cover rounded-[33px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default RightMenu;
