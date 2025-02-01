"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import { FaUsers, FaHeart } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import { Fade } from "react-awesome-reveal";
import {
  genreShortsOption,
  genreTVOption,
  industryOptions,
} from "./SearchBars";
import { useRouter } from "next/navigation";
import { IoDocumentTextOutline } from "react-icons/io5";

function SearchResult({ data, count, handlePage, page }: any) {
  const router = useRouter();
  const sliderData = useMemo(() => {
    if (!Array.isArray(data)) return [];
    return data.map((script: any, index: number) => {
      return {
        id: script._id,
        name: script.userId?.username || "Unknown",
        description: script.description,
        title: script.main_title || "No Title",
        image: "/HomeData/face.png",
        rating: (Math.random() * (5 - 1) + 1).toFixed(1),
        likes: `${(Math.random() * (5 - 1) + 1).toFixed(1)}K`,
        dot: "/HomeResult/star.svg",
        bookmark: "/HomeResult/right.svg",
        genre:
          [...genreTVOption, ...genreShortsOption].find(
            (_script) => _script.value == script.genre
          )?.name || "Other",
        industry_category:
          industryOptions.find(
            (_script) => _script.value == script.industry_category
          )?.name || "Other",
        country: script.country || [],
        state: script.state || [],
        price: [
          { name: "Script", price: script?.script?.price },
          { name: "Story Board", price: script?.story_borad?.price },
          { name: "Synopsis", price: script?.synopsis?.price },
        ].filter((item) => item.price && item.price != 0),
      };
    });
  }, [data]);

  const [followState, setFollowState] = useState<Record<number, boolean>>(
    sliderData.reduce(
      (acc: any, item: any) => ({
        ...acc,
        [item.id]: false,
      }),
      {}
    )
  );

  const [currentPage, setCurrentPage] = useState(page);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(12);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(12);
      } else {
        setItemsPerPage(6);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  const toggleFollow = (id: number) => {
    setFollowState((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const totalPages = Math.ceil(count / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    handlePage(pageNumber);
  };

  return (
    <section className="pt-[10px]">
      {count == 0 ? (
        <div className="flex flex-col items-center justify-center lg:my-16">
          <IoDocumentTextOutline
            size={40}
            className="text-center text-gray-500"
          />
          <p className="text-center text-[22px] text-gray-500">
            No records match the applied filters.
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 custom md:grid-cols-2 lg:grid-cols-2 gap-[10px] lg:gap-[20px] Home-result-gird">
            {sliderData.map((item: any, index: any) => (
              <Fade
                key={item.id}
                direction="up"
                triggerOnce
                delay={index * 100}
                duration={600}
              >
                <div
                  className="border rounded-[30px] shadow-lg hover:shadow-xl transition-shadow cursor-pointer h-full flex flex-col"
                  onClick={() => router.push(`/creator-details/${item.id}`)}
                >
                  <div className="pl-[20px] py-[20px] flex justify-between">
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

                  <div className="px-[20px] pb-[20px] pt-[5px] flex-grow">
                    <div className="h-full flex flex-col">
                      <p className="text-[14px]">{item.description}....</p>
                      <div className="mt-4 my-2 text-gray-700 flex gap-4 flex-row">
                        {item.price.map((_price: any) => (
                          <p key={_price.name}>
                            <b>{_price.name}:</b> ₹{_price.price}{" "}
                          </p>
                        ))}
                      </div>
                      <div className="flex gap-2 my-2 pt-[5px] flex-wrap">
                        <div className="flex items-center gap-2 px-[10px] lg:px-[16px] py-1 bg-[#FFF5E9] rounded-full ">
                          <span className="text-gray-700 text-[14px] lg:text-[16px]">
                            {item.genre}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 px-[10px] lg:px-[16px] py-1 bg-[#FFF5E9] rounded-full">
                          <span className="text-gray-700 text-[14px] lg:text-[16px]">
                            {item.industry_category}
                          </span>
                        </div>
                        {item.country.map((country: any) => (
                          <div className="flex items-center gap-2 px-[10px] lg:px-[16px] py-1 bg-[#FFF5E9] rounded-full">
                            <span className="text-gray-700 text-[14px] lg:text-[16px]">
                              {country}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-between pt-[10px] mt-auto">
                        <div className="flex items-center gap-[10px]">
                          <div className="flex items-center">
                            <IoMdStar
                              size={22}
                              className=" text-[rgba(246,170,22,1)]"
                            />
                            <p className="text-[15px]">{item.rating}</p>
                          </div>

                          <div className="flex items-center">
                            <FaHeart
                              size={18}
                              className="mr-[5px] text-[rgba(246,170,22,1)]"
                            />
                            <p className="text-[15px]">{item.likes}</p>
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
          {/* Pagination */}
          <div className="flex justify-center items-center mt-8 gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-[10px] py-[5px] rounded-lg text-[15px] ${
                currentPage === 1
                  ? "bg-gray-200 cursor-not-allowed"
                  : "bg-[rgb(246,170,22)] text-white hover:bg-[rgb(226,150,2)]"
              }`}
            >
              Previous
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`px-[10px] py-[5px] rounded-lg text-[15px] ${
                  currentPage === index + 1
                    ? "bg-[rgb(246,170,22)] text-white "
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-[10px] py-[5px] rounded-lg text-[15px] ${
                currentPage === totalPages
                  ? "bg-gray-200 cursor-not-allowed"
                  : "bg-[rgb(246,170,22)] text-white hover:bg-[rgb(226,150,2)]"
              }`}
            >
              Next
            </button>
          </div>
        </>
      )}
    </section>
  );
}

export default SearchResult;
