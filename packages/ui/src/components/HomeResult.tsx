'use client'

import React, { useState } from "react";
import Image from "next/image";
import { FaUsers, FaHeart } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const sliderData = [
  {
    id: 1,
    name: "Stephen Burg",
    title: "Crime in scene",
    rating: "5.0(123)",
    image: "/HomeData/face.png",
    dot: "/HomeResult/star.svg",
    bookmark: "/HomeResult/right.svg",
  },
  {
    id: 2,
    name: "Stephen Burg",
    title: "Crime in scene",
    rating: "5.0(123)",
    image: "/HomeData/face.png",
    dot: "/HomeResult/star.svg",
    bookmark: "/HomeResult/right.svg",
  },
  {
    id: 3,
    name: "Stephen Burg",
    title: "Crime in scene",
    rating: "5.0(123)",
    image: "/HomeData/face.png",
    dot: "/HomeResult/star.svg",
    bookmark: "/HomeResult/right.svg",
  },
  {
    id: 4,
    name: "Stephen Burg",
    title: "Crime in scene",
    rating: "5.0(123)",
    image: "/HomeData/face.png",
    dot: "/HomeResult/star.svg",
    bookmark: "/HomeResult/right.svg",
  },
  {
    id: 5,
    name: "Stephen Burg",
    title: "Crime in scene",
    rating: "5.0(123)",
    image: "/HomeData/face.png",
    dot: "/HomeResult/star.svg",
    bookmark: "/HomeResult/right.svg",
  },
  {
    id: 6,
    name: "Stephen Burg",
    title: "Crime in scene",
    rating: "5.0(123)",
    image: "/HomeData/face.png",
    dot: "/HomeResult/star.svg",
    bookmark: "/HomeResult/right.svg",
  },
];

function HomeResult() {
  const [followState, setFollowState] = useState<Record<number, boolean>>(
    sliderData.reduce(
      (acc, item) => ({
        ...acc,
        [item.id]: false,
      }),
      {}
    )
  );

  const toggleFollow = (id: number) => {
    setFollowState((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="pt-[40px]">
      <Fade direction="up" triggerOnce duration={800}>
        <div className="flex items-center justify-between">
          <h1 className="text-[22px]">100+ Results</h1>
          <button className="py-[10px] px-[15px] border text-[12px] rounded-[10px] shadow-md hover:shadow-lg transition-shadow">
            View All
          </button>
        </div>
      </Fade>

      <div className="pt-[50px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px] lg:gap-[20px] Home-result-gird">
          {sliderData.map((item, index) => (
            <Fade
              key={item.id}
              direction="up"
              triggerOnce
              delay={index * 200}
              duration={800}
            >
              <div className="border rounded-[30px] shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <div className="pl-[20px] py-[20px] flex justify-between">
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
                      <h2 className="text-[14px] lg:text-[16px]">{item.name}</h2>
                      <p className="text-[14px] lg:text-[14px]">{item.title}</p>
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
                      Etiam eu turpis molestie, dictum est a, mattis tellus. ....
                    </p>
                    <div className="flex items-center mt-[5px]">
                      <Image
                        src={item.dot}
                        alt="dot"
                        width={15}
                        height={15}
                        className="mr-[5px]"
                      />
                      <p className="text-[12px]">{item.rating}</p>
                    </div>
                    <div className="flex items-center justify-between pt-[10px]">
                      <div className="flex items-center gap-[10px]">
                        <div className="flex">
                          <FaUsers size={18} className="mr-[5px]" />
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
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeResult;