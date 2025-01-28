import LeftActivities from "@repo/ui/components/LeftActivities";
import LeftMenu from "@repo/ui/components/LeftMenu";
import LeftProfile from "@repo/ui/components/LeftProfile";
import React from "react";
import Image from "next/image";
import HomeNavbar from "@repo/ui/components/HomeNavbar";
import ListData from "./components/ListData";

async function page() {



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
   <ListData/>

        
        
          </div>
        </div>
      </div>
    </>
  );
}

export default page;