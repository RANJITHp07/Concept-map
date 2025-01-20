"use client";

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Fade } from "react-awesome-reveal";

function RightMenu() {
  interface RightMenuItem {
    logo: string;
  }

  const Data: RightMenuItem[] = [
    { logo: '/rightMenu/1.png' },
    { logo: '/rightMenu/2.png' },
    { logo: '/rightMenu/3.png' },
    { logo: '/rightMenu/4.png' },
    { logo: '/rightMenu/1.png' },
    { logo: '/rightMenu/2.png' },
    { logo: '/rightMenu/3.png' },
    { logo: '/rightMenu/4.png' },
    { logo: '/rightMenu/1.png' },
    { logo: '/rightMenu/2.png' },
    { logo: '/rightMenu/3.png' },
    { logo: '/rightMenu/4.png' },
  ];

  return (
    <Fade 
      direction="up"
      triggerOnce
      cascade
      damping={0.2}
    >
      <section className='pt-[40px]'>
        <h1 className='text-[22px]'>Advertisement</h1>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          centeredSlides={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="mySwiper !pt-[40px]"
        >
          {Data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[300px] rounded-[12px] overflow-hidden">
                <Image
                  src={item.logo}
                  alt={`Menu item ${index + 1}`}
                  layout="fill"
                  objectFit="cover"  
                  className="rounded-[12px]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </Fade>
  );
}

export default RightMenu;
