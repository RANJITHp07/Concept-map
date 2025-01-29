import React from "react";
import Image from "next/image";
import LeftMenu from "@repo/ui/components/LeftMenu";
import RightMenu from "@repo/ui/components/RightMenu";
import LeftProfile from "@repo/ui/components/LeftProfile";
import LeftActivites from "@repo/ui/components/LeftActivities";
import HomeNavbar from "@repo/ui/components/HomeNavbar";
import HomeInfo from "@repo/ui/components/HomeInfo";
import HomeData from "@repo/ui/components/HomeSlider";
import SearchBar from "@repo/ui/components/SearchBars";

function Home() {
  return (
    <section className="pt-[20px]">
      <div className="flex w-full h-full">
        {/* Left section (20% width) with border */}
        <div className="w-[20%] px-[20px] border-r border-gray-300">
          <div className="flex justify-center my-2">
            <Image
              alt="logo"
              src={"/logo.png"}
              width={230}
              height={100}
              className="w-[230px] h-[40px]"
            />
          </div>
          <LeftMenu />
          <LeftProfile />
          <LeftActivites />
        </div>

        {/* Middle section (60% width) */}
        <div
          className="w-[60%] px-[20px]"
          style={{
            borderLeft: "1px solid rgba(160,160,160,1)",
            borderRight: "1px solid rgba(160,160,160,1)",
          }}
        >
          <HomeNavbar />
          <HomeInfo />
          <HomeSwiper />
          <div className="flex items-center justify-start  gap-[20px] pt-[50px]">
            <h1 className="text-[20px] font-bold">Find Talent</h1>
            <hr className="flex-grow border-[3px] border-[#C0C0C0" />
          </div>
          <HomeData />
          <SearchBar />
          <SearchResult />
          <HomeData />
          <SearchBar />
        </div>

        {/* Right section (20% width) with border */}
        <div className="w-[20%] p-4 border-l border-gray-300">
          <RightMenu />
        </div>
      </div>
    </section>
  );
}

export default Home;
