import React from "react";
import LogoImage from '../../buyer/public/home/logo.png';
import Image from "next/image";
import Button from "@repo/ui/components/LeftMenu";

function Home() {
  return (
    <>
      <section className="w-full pt-[20px]">
        <div className="flex w-full">
          {/* Left Side (20% width) */}
          <div className="w-1/5  p-4">
          <div className="flex justify-center">
          <Image alt="logo" src={LogoImage} className="w-[276px] h-[57px]" />

          </div>
          <Button/>
          <div>

          </div>
          </div>

          {/* Center (60% width) */}
          <div className="w-3/5 bg-gray-300 p-4">
            <p>Center Content</p>
          </div>

          {/* Right Side (20% width) */}
          <div className="w-1/5 bg-gray-200 p-4">
            <p>Right Side Content</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
