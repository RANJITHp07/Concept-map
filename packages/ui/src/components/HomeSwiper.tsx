"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Fade } from "react-awesome-reveal";
import "swiper/css";
import "swiper/css/autoplay";

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
      name: "niyas",
      title: "Crime in scene",
      image: "/HomeData/face.png",
      bottomimage: "/HomeSwiper/face.svg",
      description:
        "Branding 2.0: Navigating the Digital Wilderness with a Splash of Humor",
    },
    {
      name: "faizu",
      title: "Crime in scene",
      image: "/HomeData/face.png",
      bottomimage: "/HomeSwiper/face.svg",
      description:
        "Branding 2.0: Navigating the Digital Wilderness with a Splash of Humor",
    },
    {
      name: "fazil",
      title: "Crime in scene",
      image: "/HomeData/face.png",
      bottomimage: "/HomeSwiper/face.svg",
      description:
        "Branding 2.0: Navigating the Digital Wilderness with a Splash of Humor",
    },
    {
      name: "renjith",
      title: "Crime in scene",
      image: "/HomeData/face.png",
      bottomimage: "/HomeSwiper/face.svg",
      description:
        "Branding 2.0: Navigating the Digital Wilderness with a Splash of Humor",
    },
    {
      name: "Stephen Burg",
      title: "Crime in scene",
      image: "/HomeData/face.png",
      bottomimage: "/HomeSwiper/face.svg",
      description:
        "Branding 2.0: Navigating the Digital Wilderness with a Splash of Humor",
    },
    {
      name: "Stephen Burg",
      title: "Crime in scene",
      image: "/HomeData/face.png",
      bottomimage: "/HomeSwiper/face.svg",
      description:
        "Branding 2.0: Navigating the Digital Wilderness with a Splash of Humor",
    },
    {
      name: "Stephen Burg",
      title: "Crime in scene",
      image: "/HomeData/face.png",
      bottomimage: "/HomeSwiper/face.svg",
      description:
        "Branding 2.0: Navigating the Digital Wilderness with a Splash of Humor",
    },
  ];

  return (
    <Fade direction="up" triggerOnce>
      <section className="pt-[40px]">
        {/* Header with View More button */}
        <div className="grid grid-cols-[1fr_auto] items-center gap-4 pb-[40px]">
          <h1 className="text-[22px]">Ideas Marketplace</h1>
          <button className="py-[10px] px-[15px] border rounded-[10px] text-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-shadow">
            View More
          </button>
        </div>

        <div className="grid grid-cols-12 gap-[10px]">
          <div className="col-span-12">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={10}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },

                768: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 2.5,
                  spaceBetween: 20,
                },
                1300: {
                  slidesPerView: 3,
                  spaceBetween: 25,
                },
              }}
              className="mySwiper ] cursor-pointer"
            >
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded-[30px] overflow-hidden border border-[rgba(254,201,97,0.3)] my-[5px] mx-[5px] shadow-[0px_0px_10px_rgba(0,0,0,0.05)] hover:shadow-[0px_0px_15px_rgba(0,0,0,0.1)] transition-all">
                    <div className="p-[15px] md:p-[20px] grid grid-cols-[40px_1fr] items-center">
                      <div className="relative w-[40px] h-[40px]">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="rounded-full object-cover border border-[rgba(254,201,97,1)]"
                        />
                      </div>

                      <div className="ml-[10px]">
                        <h3 className="text-xl font-bold text-gray-800">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-600">{item.title}</p>
                      </div>
                    </div>

                    <div className="w-full h-[100px] relative">
                      <Image
                        src={item.bottomimage}
                        alt="Bottom content"
                        layout="fill"
                        className="object-cover"
                      />
                    </div>

                    <div className="p-[20px]">
                      <p className="text-sm text-gray-700">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </Fade>
  );
}

export default HomeSwiper;
