import LeftActivities from "@repo/ui/components/LeftActivities";
import LeftMenu from "@repo/ui/components/LeftMenu";
import LeftProfile from "@repo/ui/components/LeftProfile";
import React from "react";
import Image from "next/image";
import HomeNavbar from "@repo/ui/components/HomeNavbar";
import HomeInfo from "@repo/ui/components/HomeInfo";
import SearchBarsWithTags from "@repo/ui/components/SearchBars";
import HomeResult from "@repo/ui/components/HomeResult";
import HomeSwiper from "@repo/ui/components/HomeSwiper";
import RightMenu from "@repo/ui/components/RightMenu";
import { auth } from "../auth";
import apiHelper from "../lib/apiHelper";
import { apis } from "../lib/api";
import Search from "../components/homeSearch/search";

async function Home() {
  const session = await auth();

  if (!session?.user) return null;

  const { data: user } = await apiHelper(apis.getUserDetails(session.user.id!));

  return (
    <>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-12   pt-[10px] ">
          {/* Left Column - 4 columns wide */}
          <div className="md:col-span-3 lg:col-span-2 px-[10px] items-center hidden md:block">
            <Image
              alt="logo"
              src={"/logo.png"}
              width={230}
              height={100}
              className="w-[100%] "
            />
            <LeftMenu />
            <LeftProfile />
            <LeftActivities />
          </div>

          <div
            className="md:col-span-9 lg:col-span-10  px-[10px] md:px-[15px] lg:px-[20px] pb-[40px]"
            style={{
              borderLeft: "1px solid #d7d2d2",
            }}
          >
            <HomeNavbar />
            <HomeInfo name={user.username} />
            <RightMenu />
            <HomeSwiper />

            {/* scripts */}
            <div className="flex items-center justify-start  gap-[20px] pt-[50px]">
              <h1 className="text-[22px] font-medium">
                Discover Exceptional Scripts
              </h1>
              <hr className="flex-grow border-t border-[#C0C0C0]" />
            </div>
            <Search type="scripts" />
            <div className="flex items-center justify-start  gap-[20px] pt-[50px]">
              <h1 className="text-[22px] font-medium">
                Discover Exceptional Synopsis
              </h1>
              <hr className="flex-grow border-t border-[#C0C0C0]" />
            </div>
            <Search type="synopsis" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
