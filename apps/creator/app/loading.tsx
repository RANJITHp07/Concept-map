import HomeNavbar from "@repo/ui/components/HomeNavbar";
import LeftActivities from "@repo/ui/components/LeftActivities";
import LeftMenu from "@repo/ui/components/LeftMenu";
import LeftProfile from "@repo/ui/components/LeftProfile";
import Image from "next/image";
import React from "react";

function Loading() {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-12 pt-[10px]">
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
          className="md:col-span-9  lg:col-span-10  px-[10px] md:px-[15px] lg:px-[20px] pb-[40px]"
          style={{
            borderLeft: "1px solid #d7d2d2",
          }}
        >
          <HomeNavbar />
          <section className="space-y-[40px] mt-10">
            <div className="grid grid-cols-1 bg-slate-100 lg:grid-cols-[auto_1fr] gap-[20px] lg:gap-[40px] p-[20px] rounded-[20px] w-full h-60">
              <div className="flex justify-center">
                <div className="overflow-hidden  w-[180px] h-[180px] bg-slate-200 rounded-full"></div>
              </div>
              <div className=" flex flex-col pt-12 gap-2">
                <h2 className="w-full bg-slate-200 h-7 rounded-md"></h2>
                <div className=" flex flex-col gap-2 my-5">
                  <p className="w-full bg-slate-200 h-3 rounded-md"></p>
                  <p className="w-full bg-slate-200 h-3 rounded-md"></p>
                </div>

                {/* New div with Right Arrow Icon */}
                <div className=" mt-[10px] md:mt-[20px] lg:mt-[30px] md:mr-[30px] flex justify-center md:justify-end items-center cursor-pointer">
                  {/* <FaArrowRight
                        size={25}
                        className="md:w-[25px] md:h-[25px]"
                      /> */}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-[20px] rounded-[10px]">
              {" "}
              <div className="col-span-9 grid gap-5 rounded-[30px] h-28 bg-slate-100"></div>
              <div className="  col-span-3 grid gap-5 p-5  rounded-[30px] h-28 bg-slate-100  home-other-none"></div>
            </div>
          </section>

          <section className="pt-[40px]">
            <div className=" flex gap-2 my-5">
              <div className="relative w-full h-[300px] rounded-[12px] overflow-hidden bg-slate-100"></div>
              <div className="relative w-full h-[300px] rounded-[12px] overflow-hidden bg-slate-100"></div>
              <div className="relative w-full h-[300px] rounded-[12px] overflow-hidden bg-slate-100"></div>
            </div>
          </section>

          <section className="pt-[40px]">
            <div className=" flex gap-2 my-5">
              <div className="relative w-full h-[150px] rounded-[12px] overflow-hidden bg-slate-100"></div>
              <div className="relative w-full h-[150px] rounded-[12px] overflow-hidden bg-slate-100"></div>
              <div className="relative w-full h-[150px] rounded-[12px] overflow-hidden bg-slate-100"></div>
            </div>
          </section>
          {/* <HomeSlider />
          <SearchBarsWithTags />
          <HomeResult /> */}
        </div>
      </div>
    </div>
  );
}

export default Loading;
