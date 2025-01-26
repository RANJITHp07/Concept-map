"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { FaUsers, FaHeart } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import {
  genreShortsOption,
  genreTVOption,
  industryOptions,
} from "./SearchBars";
import { useRouter } from "next/navigation";

function SearchResult({ data, count }: any) {
  const router = useRouter();
  const sliderData = useMemo(() => {
    return (data ?? []).map((script: any) => {
      return {
        id: script._id,
        name: script.userId.username || "Stephen Burg",
        title: script.main_title || "Crime in scene",
        description: script.description || "Crime in scene",
        rating: script.rating || "5.0(123)",
        image: script.userId.profile_url || "/HomeData/face.png",
        dot: script.dot || "/HomeResult/star.svg",
        bookmark: script.bookmark || "/HomeResult/right.svg",
        price: script?.script?.price || script?.synopsis?.price,
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
        (acc: any, item: any) => {
          acc[item.id] = false;
          return acc;
        },
        {} as Record<number, boolean>
      );
    }
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  // Update itemsPerPage based on screen size
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(18);
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

  // Calculate the items to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sliderData.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages
  const totalPages = Math.ceil(count / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="pt-[10px]">
      {count == 0 ? (
        <p className="text-center text-lg text-gray-400 mt-16">
          No records match the applied filters.
        </p>
      ) : (
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[10px] lg:gap-[20px] Home-result-gird"
          onClick={() => router.push("/creator-details")}
        >
          {currentItems.map((item: any, index: any) => (
            <Fade
              key={item.id}
              direction="up"
              triggerOnce
              delay={index * 100}
              duration={600}
            >
              <div className="border rounded-[30px] shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
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
                      <p className="text-[14px] lg:text-[14px]">{item.title}</p>
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

                <div className="px-[20px] pb-[20px] pt-[5px]">
                  <div>
                    <p className="text-[14px]">
                      {item.description.slice(0, 100)}....
                    </p>
                    <div className="flex gap-2 my-2 flex-wrap">
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
                    </div>
                    <div className="flex justify-between items-center">
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
                      <div className="flex items-center justify-end pt-[10px]">
                        <div className="inline-block px-[10px] py-[5px] text-gray-700 rounded-[5px]">
                          <h1 className="text-xl font-semibold">
                            ₹ {item.price}
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center items-center mt-8 gap-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-[15px] py-[10px] rounded-lg text-[14px] ${
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
            className={`px-4 py-2 rounded-lg ${
              currentPage === index + 1
                ? "bg-[rgb(246,170,22)] text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-[15px] py-[10px] rounded-lg text-[14px] ${
            currentPage === totalPages
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-[rgb(246,170,22)] text-white hover:bg-[rgb(226,150,2)]"
          }`}
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default SearchResult;
