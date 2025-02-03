import React from "react";
import Image from "next/image";
import { IoIosPersonAdd } from "react-icons/io";
import { FcLike } from "react-icons/fc";
import { FaRegCommentDots } from "react-icons/fa";
import { FaShare } from "react-icons/fa6";
import profile1 from "./../../../public/community/icon.png";
import profile2 from "./../../../public/script_icon.png";
import profile3 from "./../../../public/black_icon.png";
import poster from "./../../../public/amazon.jpg";
import posterOne from "./../../../public/community/newCard.png";
import posterTwo from "./../../../public/community/newCardOne.png";
import { Fade } from "react-awesome-reveal"; // Import the Fade component

const data = [
  {
    id: 1,
    name: "Alex John",
    role: " Amazon | OTT | Cinema",
    date: "1/1/2025",
    description:
      "Amazon Signs Groundbreaking Deal to Significantly Boost India’s Creative Economy",
    poster: poster,
    img: profile1,
  },
  {
    id: 2,
    name: "Marcelo",
    role: "Programmer | Athletic | Gamer",
    date: "1/1/2025",
    description:
      "Overcoming Writer's Block in Synopsis & Short Stories in 10 Minutes - A Beginner's Guide",
    poster: null,
    img: profile3,
  },
  {
    id: 3,
    name: "Niyas P",
    role: "Programmer | Athletic | Gamer",
    date: "1/1/2025",
    description: null,
    poster: posterOne,
    img: profile2,
  },
  {
    id: 4,
    name: "Ram",
    role: "Programmer | Athletic | Gamer",
    date: "1/1/2025",
    description:
      "Overcoming Writer's Block in Synopsis & Short Stories in 10 Minutes - A Beginner's Guide",
    poster: posterTwo,
    img: profile1,
  },
  {
    id: 5,
    name: "Jithin",
    role: "Programmer | Athletic | Gamer",
    date: "1/1/2025",
    description:
      "Overcoming Writer's Block in Synopsis & Short Stories in 10 Minutes - A Beginner's Guide",
    poster: null,
    img: profile3,
  },
  {
    id: 6,
    name: "Neure",
    role: "Programmer | Athletic | Gamer",
    date: "1/1/2025",
    description: null,
    poster: poster,
    img: profile2,
  },
];

function ListData() {
  return (
    <section className="grid gap-[10px] lg:gap-[50px] pt-[30px] lg:pt-[40px]">
      {data.map((item, index) => (
        <Fade
          key={item.id}
          delay={index * 200} // Adds a delay to each item for the "one-by-one" effect
          triggerOnce
        >
          <div className="border border-[#B9B8B8A8] rounded-lg overflow-hidden shadow-lg ">
            <div className="p-[10px] md:p-[15px] lg:p-[20px] flex justify-between items-center border-b border-[#B9B8B8A8]">
              <div className="flex align-middle items-center">
                <Image
                  alt="userProfile"
                  className="h-[40px] w-[40px] md:h-[60px] md:w-[60px] object-cover rounded-[100px] border border-[#f6aa16]"
                  src={item.img}
                />
                <div className="ml-[10px] md:ml-[15px] lg:ml-[20px]">
                  <p className="text-[14px] md:text-[16px] lg:text-[18px] font-semibold">
                    {item.name}
                  </p>
                  <p className="text-[14px] md:text-[16px] lg:text-[18px] text-[#C0C0C0] font-medium">
                    {item.role}
                  </p>
                  <p className="text-[14px] md:text-[16px] lg:text-[18px] text-[#0000007A] font-medium">
                    {item.date}
                  </p>
                </div>
              </div>
              <IoIosPersonAdd className="h-[35px] w-[35px] md:h-[40px] md:w-[40px] lg:h-[45px] lg:w-[45px] text-[#f6aa16] cursor-pointer" />
            </div>
            {item.poster && (
              <div>
                <Image
                  alt="posterImg"
                  src={item.poster}
                  className="h-[300px] md:h-[400px] lg:h-[500px] w-full object-cover"
                />
              </div>
            )}
            {item.description && (
              <div className="p-[10px] md:p-[15px] lg:p-[20px]">
                <p className="text-[14px] md:text-[16px] lg:text-[18px]">
                  {item.description}
                </p>
                <p className="text-gray-500">
                  #cinema #ott #movies #2025 #filmmaking #storytelling
                  #hollywood #indiefilm #screenplay #director #actors
                  #filmproduction #blockbuster #filmlovers #moviebuff
                  #filmcommunity #cinemalovers #movienight #movieaddict
                  #moviepremiere #filmmaker #filmindustry
                </p>
              </div>
            )}
            <div className="p-[20px] flex border-t border-[#B9B8B8A8]">
              <div className="flex items-center cursor-pointer">
                <FcLike className="h-[20px] w-[20px] md:h-[25px] md:w-[25px] lg:h-[30px] lg:w-[30px] mr-[5px]" />
                <p className="text-[#0000007A] text-[14px]">Like</p>
              </div>
              <div className="ml-[30px] flex items-center cursor-pointer">
                <FaRegCommentDots className="h-[20px] w-[20px] md:h-[25px] md:w-[25px] lg:h-[30px] lg:w-[30px] mr-[5px] text-[#0000007A]" />
                <p className="text-[#0000007A] text-[14px]">Comment</p>
              </div>
              <div className="ml-[30px] flex items-center cursor-pointer">
                <FaShare className="h-[20px] w-[20px] md:h-[25px] md:w-[25px] lg:h-[30px] lg:w-[30px] mr-[5px] text-[#0000007A]" />
                <p className="text-[#0000007A] text-[14px]">Share</p>
              </div>
            </div>
          </div>
        </Fade>
      ))}
    </section>
  );
}

export default ListData;
