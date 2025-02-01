import Header from "@repo/ui/components/Header";
import React from "react";

function loading() {
  return (
    <div>
      <Header />
      <section className="px-12">
        <div className=" gap-[20px] lg:gap-[40px] p-[20px] rounded-[20px] w-full">
          <div className="flex gap-6">
            <div className="overflow-hidden  w-[52px] h-[52px] bg-slate-200 rounded-full" />
            <div className="flex flex-col gap-2">
              <div className="overflow-hidden  w-[140px] h-[10px] bg-slate-200 rounded-md" />
              <div className="flex gap-3 mt-3">
                <div className="overflow-hidden  w-[80px] h-[10px] bg-slate-200 rounded-md" />
                <div className="overflow-hidden  w-[80px] h-[10px] bg-slate-200 rounded-md" />
                <div className="overflow-hidden  w-[80px] h-[10px] bg-slate-200 rounded-md" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[1px]">
            <div className="overflow-hidden  w-full my-5 h-[1rem] bg-slate-200 rounded-md" />
            <div className="overflow-hidden  w-full my-5 h-[1rem] bg-slate-200 rounded-md" />
          </div>
          <div className="overflow-hidden  w-full my-5 h-[15rem] bg-slate-200 rounded-md" />

          <h1 className="text-xl font-semibold">
            Explore More Synopsis, Scripts, and Storyboards
          </h1>
          <div className="flex justify-between gap-3">
            <div className="overflow-hidden  w-full my-5 h-[15rem] bg-slate-200 rounded-md" />
            <div className="overflow-hidden  w-full my-5 h-[15rem] bg-slate-200 rounded-md" />
            <div className="overflow-hidden  w-full my-5 h-[15rem] bg-slate-200 rounded-md" />
          </div>
          <h3 className="font-semibold text-xl">What people loved</h3>
          <div className="">
            <div className="overflow-hidden  w-full my-5 h-[5rem] bg-slate-200 rounded-md" />
            <div className="overflow-hidden  w-full my-5 h-[5rem] bg-slate-200 rounded-md" />
            <div className="overflow-hidden  w-full my-5 h-[5rem] bg-slate-200 rounded-md" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default loading;
