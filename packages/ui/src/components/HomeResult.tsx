"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import { useRouter } from "next/navigation";
import {
  genreShortsOption,
  genreTVOption,
  industryOptions,
} from "./SearchBars";

function HomeResult({
  data,
  count,
}: {
  data: Array<Record<any, any>>;
  count: number;
}) {
  const router = useRouter();
  const sliderData = useMemo(() => {
    return (data ?? []).map((script) => {
      return {
        id: script._id,
        name: script.userId.username || "Stephen Burg",
        title: script.main_title || "Crime in scene",
        description: script.description || "Crime in scene",
        rating: script.rating || "5.0(123)",
        image: script.userId.profile_url || "/HomeData/face.png",
        dot: script.dot || "/HomeResult/star.svg",
        bookmark: script.bookmark || "/HomeResult/right.svg",

        genre:
          [...genreTVOption, ...genreShortsOption].find(
            (_script) => _script.value == script.genre
          )?.name || "Other",
        industry_category:
          industryOptions.find(
            (_script) => _script.value == script.industry_category
          )?.name || "Other",
      };
    });
  }, [data]);

  const [followState, setFollowState] = useState<Record<number, boolean>>(
    () => {
      return sliderData.reduce(
        (acc, item) => {
          acc[item.id] = false;
          return acc;
        },
        {} as Record<number, boolean>
      );
    }
  );

  const toggleFollow = (id: number) => {
    setFollowState((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="pt-[40px] ">
      <Fade direction="up" triggerOnce duration={800}>
        <div className="flex items-center justify-between">
          <h1 className="text-[22px]">{count} Records Found</h1>
          {count != 0 && (
            <button
              onClick={() => router.push("/search")}
              className="py-[10px] px-[15px] border text-[12px] rounded-[10px] shadow-md hover:shadow-lg transition-shadow"
            >
              View All
            </button>
          )}
        </div>
      </Fade>

      <div className="pt-[50px]">
        {count != 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px] lg:gap-[20px] Home-result-gird md:relative z-[-1]">
            {sliderData.map((item, index) => (
              <Fade
                key={item.id}
                direction="up"
                triggerOnce
                delay={index * 200}
                duration={800}
              >
                <div className="border rounded-[30px] shadow-lg hover:shadow-xl transition-shadow cursor-pointer flex flex-col h-full">
                  <div className="pl-[20px] 
                   py-[20px] flex justify-between">
                    {/* Image and Content */}
                    <div className="flex items-start">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={50}
                        height={50}
                        className="rounded-full h-[40px] w-[40px] lg:h-[50px] lg:w-[50px] mr-[10px] object-cover border border-[rgba(254,201,97,1)]"
                      />
                      <div>
                        <h2 className="text-[14px] lg:text-[16px]">
                          {item.name}
                        </h2>
                        <p className="text-[14px] lg:text-[14px]">
                          {item.title}
                        </p>
                      </div>
                    </div>
                    {/* Button */}
                    <button
                      onClick={() => toggleFollow(item.id)}
                      className={`self-start py-[6px] px-[12px] rounded-tl-[15px] rounded-bl-[15px] border transition-colors text-[14px] ${
                        followState[item.id]
                          ? "bg-[rgb(246,170,22)] text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      {followState[item.id] ? "Followed" : "Following"}
                    </button>
                  </div>

                  <div className="px-[20px]  pt-[5px] flex-1">
                    <div>
                      <p className="text-[14px]">
                        {item.description.slice(0, 100)}
                        ......
                      </p>
                      <div className="flex gap-2 my-2 pt-[10px] flex-wrap">
                        <div className="flex items-center gap-2 px-[10px] lg:px-[16px] py-1 bg-[#FFF5E9] rounded-full ">
                          <span className="text-gray-700 text-[14px] lg:text-[16px]">
                            {item.genre}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 px-[10px] lg:px-[16px] py-1 bg-[#FFF5E9] rounded-full">
                          <span className="text-gray-700 text-[14px] lg:text-[16px]">
                            {item.industry_category}roiroioiroiorio
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Section, consistent left and right padding */}
                  <div className="flex items-center justify-between pt-[10px] pb-[20px] mt-auto px-[20px]">
                    <div className="flex items-center gap-[10px]">
                      <div className="flex items-center">
                        <Image
                          src={item.dot}
                          alt="dot"
                          width={15}
                          height={15}
                          className="mr-[5px]"
                        />
                        <p className="text-[12px]">{item.rating}</p>
                      </div>

                      <div className="flex">
                        <FaHeart size={18} className="mr-[5px]" />
                        <p className="text-[12px]">{item.rating}</p>
                      </div>
                    </div>

                    <div className="inline-block p-2 rounded-[100px] bg-[rgba(246,170,22,1)]">
                      <Image
                        src={item.bookmark}
                        alt="bookmark"
                        width={18}
                        height={18}
                      />
                    </div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-gray-400">
            No records match the applied filters.
          </p>
        )}
      </div>
    </section>
  );
}

export default HomeResult;
