"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

interface DataItem {
  bottomimage: string;
}

function AdSlider() {
  const data: DataItem[] = [
    {
      bottomimage: "/HomeSwiper/face.svg",
    },
    {
      bottomimage: "/HomeSwiper/face.svg",
    },
    {
      bottomimage: "/HomeSwiper/face.svg",
    },
    {
      bottomimage: "/HomeSwiper/face.svg",
    },
    {
      bottomimage: "/HomeSwiper/face.svg",
    },
    {
      bottomimage: "/HomeSwiper/face.svg",
    },
    {
      bottomimage: "/HomeSwiper/face.svg",
    },
    {
      bottomimage: "/HomeSwiper/face.svg",
    },
  ];

  return (
    <section className="pt-[50px]">
      <div className="grid grid-cols-12 gap-[20px]">
        <div className="col-span-12 rounded-lg p-[10px]">
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            centeredSlides={false}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="card-container bg-white rounded-lg overflow-hidden shadow-[0_10px_15px_rgba(0,0,0,0.2),0_4px_6px_rgba(0,0,0,0.1)]">
                  <div className="w-full h-[200px] relative">
                    <Swiper
                      modules={[Autoplay]}
                      autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                      }}
                      loop={true}
                      className="h-full"
                    >
                      {data.map((slideItem, slideIndex) => (
                        <SwiperSlide key={`${index}-${slideIndex}`}>
                          <Image
                            src={slideItem.bottomimage}
                            alt="Slider image"
                            fill
                            className="object-cover"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default AdSlider;
