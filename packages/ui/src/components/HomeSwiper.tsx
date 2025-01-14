'use client'

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface DataItem {
  name: string;
  title: string;
  image: string;
  bottomimage: string;
  description: string;
}

function HomeSwiper() {
  const data: DataItem[] = [
    {
      name: "Stephen Burg",
      title: "Crime in scene",
      image: "/HomeData/face.png",
      bottomimage: "/HomeSwiper/face.svg",
      description: "Branding 2.0: Navigating the Digital Wilderness with a Splash of Humor"
    },
    {
      name: "Stephen Burg",
      title: "Crime in scene",
      image: "/HomeData/face.png",
      bottomimage: "/HomeSwiper/face.svg",
      description: "Branding 2.0: Navigating the Digital Wilderness with a Splash of Humor"
    },
    {
      name: "Stephen Burg",
      title: "Crime in scene",
      image: "/HomeData/face.png",
      bottomimage: "/HomeSwiper/face.svg",
      description: "Branding 2.0: Navigating the Digital Wilderness with a Splash of Humor"
    },
  ];

  return (
    <section className="pt-[50px]">
      <div className="grid grid-cols-12 gap-[20px]">
        {/* Left Side (11 Columns) */}
        <div className="col-span-11 bg-gray-200 rounded-lg p-4">
          <Swiper
            spaceBetween={20}
            slidesPerView={2.5}
            centeredSlides={false}
            className="mySwiper"
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg overflow-hidden flex flex-col">
                  {/* Top Content Container - Profile Info */}
                  <div className="p-[20px] flex">
                    {/* Left Side - Profile Image */}
                    <div className="relative w-[40px] h-[40px]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>

                    {/* Right Side - Name and Title */}
                    <div className="flex flex-col justify-center ml-[10px]"> {/* Added gap of 10px */}
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {item.title}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Image Container */}
          
                    <Image
                      src={item.bottomimage}
                      alt="Bottom content"
                     width={100}
                     height={10}
                      className=" h-[100px] w-[100%]"  
                    />
            

                  {/* Description Section */}
                  <div className="p-4">
                    <p className="text-sm text-gray-700">{item.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right Side (1 Column) */}
        <div className="col-span-1 flex items-center justify-center">
          <Image
            src="/HomeSwiper/swipe.svg"
            alt="swipe"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default HomeSwiper;
