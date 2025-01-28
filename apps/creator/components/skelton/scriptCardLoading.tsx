import React from "react";

function ScriptCardLoading() {
  return (
    <div className="border rounded-[30px] shadow-lg p-4">
      <div className="pl-[20px] py-[20px] flex justify-between">
        <div className="flex items-start">
          <div className="rounded-full h-[50px] w-[50px] bg-gray-300 animate-pulse mr-[10px]" />
          <div>
            <div className="h-[14px] w-[100px] bg-gray-300 animate-pulse rounded mb-2"></div>
            <div className="h-[14px] w-[150px] bg-gray-300 animate-pulse rounded"></div>
          </div>
        </div>
        <div className="h-[30px] w-[100px] bg-gray-300 animate-pulse rounded"></div>
      </div>

      <div className="px-[20px] pb-[20px] pt-[5px]">
        <div>
          <div className="h-[14px] w-[100%] bg-gray-300 animate-pulse rounded mb-2"></div>
          <div className="flex gap-2 my-2 pt-[5px] flex-wrap">
            <div className="h-[30px] w-[80px] bg-gray-300 animate-pulse rounded-full"></div>
            <div className="h-[30px] w-[100px] bg-gray-300 animate-pulse rounded-full"></div>
          </div>
          <div className="flex items-center justify-between pt-[10px] mt-auto">
            <div className="flex items-center gap-[10px]">
              <div className="h-[22px] w-[22px] bg-gray-300 animate-pulse rounded-full"></div>
              <div className="h-[15px] w-[30px] bg-gray-300 animate-pulse rounded"></div>
            </div>
            <div className="h-[40px] w-[40px] bg-gray-300 animate-pulse rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScriptCardLoading;
