"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

function ScriptSwiper() {
  return (
    <>
      {[1, 2, 3].map((i) => (
        // <SwiperSlide key={i}>
        <div className="border rounded-lg relative shadow-lg">
          <div className="absolute inset-0 bg-white/50 backdrop-blur-sm flex items-center justify-center flex-col rounded-lg">
            <div className="w-12 h-12 mb-2">
              <Image src="/lock.png" width={50} height={50} alt="lock" />
            </div>
            <span className="font-medium text-lg">Click to Purchase</span>
          </div>
          <h4 className="font-semibold mb-4 bg-[#C1C1C1] px-6 py-4 rounded-t-lg text-xl">
            Story Board
          </h4>
          <p className="text-sm text-gray-600 mb-4 px-6 py-4">
            A planned video with the characters and situation of your choice.
          </p>
          <div className="flex justify-end px-6 text-xl pb-4">
            <span className="font-semibold text-2xl">$450</span>
          </div>
        </div>
      ))}
    </>
  );
}

export default ScriptSwiper;
