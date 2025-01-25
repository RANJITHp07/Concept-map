'use client'

import React from "react";
import Image from "next/image";
import MainSearch from "@repo/ui/components/Mainsearch";
import SearchResult from "@repo/ui/components/SearchResult";
import LeftSearch from "@repo/ui/components/LeftSearch";

function Page() {
  return (
    <div >
  
        <div className=" bg-[#ece288]">
          <div className="px-[50px] py-[40px]">
            <div className="py-[50px] px-[10px]">
            <h1 className="text-[40px] font-bold	">Best Qoutes </h1>
            <p className="text-[18px]">find you best qoutes and the best filiter based ......</p>
            </div>
     
          <div >

</div>
 <div className=" px-[10px]">
   <MainSearch />
 </div>
          </div>
      
        </div>
        <div className="grid grid-cols-12 relative  bg-gray-50 px-[50px] pt-[40px]">
          {/* Left Column - Fixed Position */}
          <div className="col-span-2 h-[calc(100vh-10px)] sticky top-[10px]  bg-gray-50">
            <div className=" h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
              <LeftSearch />
            </div>
          </div>

          {/* Right Column - Scrollable */}
          <div 
            className="col-span-10  px-[10px] pb-[30px] "
          >
          
            <div >
              <SearchResult/>
            
            </div>
          </div>
    
      </div>
    </div>
  );
}

export default Page;