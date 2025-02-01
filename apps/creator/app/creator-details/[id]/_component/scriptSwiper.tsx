"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import apiHelper from "../../../../lib/apiHelper";
import { apis } from "../../../../lib/api";
import {
  genreShortsOption,
  genreTVOption,
  industryOptions,
} from "../../../../lib/constant";
import { useRouter } from "next/navigation";

// Function to chunk the scripts array into groups of 3
const chunkArray = (array: any[], size: number) => {
  const result: any[] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

function ScriptSwiper({
  userId,
  scriptId,
}: {
  userId: string;
  scriptId: string;
}) {
  const [scripts, setScripts] = useState<any>([]);
  const navigate = useRouter();

  const fetchData = async () => {
    const result = await apiHelper(apis.getScriptAllDetails(userId, scriptId));
    if (result.status === "success") {
      console.log(result.data);
      setScripts(result.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderSwiper = (scripts: any) => {
    // Chunk the scripts array into groups of 3
    const scriptChunks = chunkArray(scripts, 3);

    return (
      <Swiper
        spaceBetween={20} // Space between slides
        slidesPerView={1} // Default: Show 1 item per slide on mobile
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 1, // 1 item per slide on small screens (mobile)
          },
          768: {
            slidesPerView: 1, // 1 item per slide on medium screens (tablets)
          },
          1024: {
            slidesPerView: 1, // 1 item per slide on large screens (desktop)
          },
        }}
      >
        {scriptChunks.map((chunk, i) => (
          <SwiperSlide key={i}>
            <div className="grid md:grid-cols-3 gap-4 mb-8 ">
              {chunk.map((script: any, index: number) => (
                <div
                  key={index}
                  className="border rounded-lg relative shadow-lg flex-1 lg:h-60 cursor-pointer"
                  onClick={() =>
                    navigate.push(`/creator-details/${script._id}`)
                  }
                >
                  <h4 className="font-semibold mb-4 bg-[#FDF6E7] px-6 py-4 rounded-t-lg text-xl">
                    {script.main_title}
                  </h4>
                  <p className="text-sm text-gray-600  px-6 py-4">
                    {script.description.slice(0, 200)}...
                  </p>
                  <div className="flex gap-2 mb-8 flex-wrap px-6">
                    <div className="flex items-center gap-2 px-[10px] lg:px-[16px] py-1 bg-[#FDF6E7]  rounded-full ">
                      <span className="text-gray-700 text-[14px] lg:text-[14px]">
                        {[...genreTVOption, ...genreShortsOption].find(
                          (option) => option.value === script.genre
                        )?.name || "Other"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 px-[10px] lg:px-[16px] py-1 bg-[#FDF6E7]  rounded-full">
                      <span className="text-gray-700 text-[14px] lg:text-[14px]">
                        {industryOptions.find(
                          (option) => option.value === script.industry_category
                        )?.name || "Other"}
                      </span>
                    </div>
                    {script.country.map((country: any) => (
                      <div className="flex items-center gap-2 px-[10px] lg:px-[16px] py-1 bg-[#FDF6E7]  rounded-full">
                        <span className="text-gray-700 text-[14px] lg:text-[16px]">
                          {country}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

  return <div>{renderSwiper(scripts)}</div>;
}

export default ScriptSwiper;
