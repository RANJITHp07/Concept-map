"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

interface SliderItem {
  id: number;
  name: string;
  title: string;
  date: string;
  image: string;
  dot: string;
  bookmark: string;
  isFollowed: boolean;
}

interface FollowState {
  [key: number]: boolean;
}

const sliderData: SliderItem[] = [
  {
    id: 1,
    name: "Stephen Burg",
    title: "Crime in scene",
    date: "Feb, 29 | 2024",
    image: "/HomeData/face.png",
    dot: "/HomeData/dot.svg",
    bookmark: "/HomeData/bookmark.svg",
    isFollowed: true,
  },
  {
    id: 2,
    name: "Stephen Burg",
    title: "Crime in scene",
    date: "Feb, 29 | 2024",
    image: "/HomeData/face.png",
    dot: "/HomeData/dot.svg",
    bookmark: "/HomeData/bookmark.svg",
    isFollowed: false,
  },
  {
    id: 3,
    name: "Stephen Burg",
    title: "Crime in scene",
    date: "Feb, 29 | 2024",
    image: "/HomeData/face.png",
    dot: "/HomeData/dot.svg",
    bookmark: "/HomeData/bookmark.svg",
    isFollowed: true,
  },
];

function HomeSlider(): JSX.Element {
  const [followState, setFollowState] = useState<FollowState>(() =>
    sliderData.reduce(
      (acc: FollowState, item) => ({
        ...acc,
        [item.id]: item.isFollowed,
      }),
      {}
    )
  );

  const toggleFollow = (id: number): void => {
    setFollowState((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <Fade direction="up" triggerOnce cascade damping={0.2} duration={1000}>
      <section className="pt-[40px]">
        <div className="flex items-center justify-between">
          <h1 className="text-[22px]">Ideas Marketplace</h1>
          <button className="py-[10px] px-[15px] border text-[12px] rounded-[10px] shadow-md hover:shadow-lg transition-shadow">
            View All
          </button>
        </div>

        <div className="pt-[50px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px] lg:gap-[20px] Home-result-gird cursor-pointer">
            {sliderData.map((item, index) => (
              <Fade
                key={item.id}
                direction="up"
                triggerOnce
                delay={index * 200} // Delay for each item to animate one by one
                duration={800} // The duration of the fade animation
              >
                <div
                  key={item.id}
                  className="border rounded-[30px] shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="pl-[20px] py-[20px] flex justify-between">
                    {/* Image and Content */}
                    <div className="flex items-start">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={50}
                        height={50}
                        className="rounded-full h-[40px] w-[40px] lg:h-[50px] lg:w-[50px]  mr-[10px] object-cover border border-[rgba(254,201,97,1)]"
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

                  <div className="px-[20px] pb-[20px] pt-[5px]">
                    <div>
                      <p className="text-[14px]">
                        Torem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam eu turpis molestie, dictum est a, mattis tellus.
                        ....
                      </p>
                      <div className="flex items-center justify-between pt-[10px]">
                        <div className="flex items-center">
                          <p className="text-[12px] mr-[5px]">{item.date}</p>
                          <Image
                            src={item.dot}
                            alt="dot"
                            width={20}
                            height={20}
                            className="cursor-pointer"
                          />
                        </div>
                        <div className="inline-block p-2 rounded-[100px] bg-[rgba(246,170,22,1)]">
                          <Image
                            src={item.bookmark}
                            alt="bookmark"
                            width={18}
                            height={18}
                            className="cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>
    </Fade>
  );
}

export default HomeSlider;
