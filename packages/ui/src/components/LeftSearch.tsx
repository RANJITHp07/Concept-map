"use client";

import React, { useEffect, useState } from "react";
import { TbCategoryFilled } from "react-icons/tb";
import { MdPriceChange } from "react-icons/md";
import { FaFilter } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import {
  genreShortsOption,
  genreTVOption,
  industryOptions,
  screenwriting,
} from "./SearchBars";
import Button from "./Button";

const LeftSearch = ({
  handleCategoryFilter,
  handleType,
  categoryFilter,
  type,
  fetchScriptData,
  handlePrice,
}: any) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(50000);
  const [showFilter, setShowFilter] = useState(false);
  const [readMore, setReadMore] = useState({
    tvc: 4,
    shorts: 4,
    industry: 4,
  });

  const handleMinPrice = (value: number) => {
    const newMin = Math.min(value, maxPrice - 1000);
    setMinPrice(newMin);
  };

  const handleMaxPrice = (value: number) => {
    const newMax = Math.max(value, minPrice + 1000);
    setMaxPrice(newMax);
  };

  useEffect(() => {
    handlePrice(minPrice, maxPrice);
  }, [minPrice, maxPrice]);

  return (
    <div className="w-full">
      {/* Filter Toggle Button */}
      <div className="md:hidden w-full mb-4 px-[10px] flex justify-end">
        <button
          onClick={() => setShowFilter(true)}
          className="flex items-center justify-center gap-2 bg-[rgb(246,170,22)] text-white px-4 py-2 rounded-md hover:bg-[rgb(226,150,2)] transition-all duration-300"
        >
          <FaFilter size={18} />
          <span>Filters</span>
        </button>
      </div>

      {/* Filter Content */}
      <div
        className={`
          fixed md:relative top-0 right-0 h-full w-[300px] md:w-full 
          bg-white md:bg-transparent z-50 transform transition-transform duration-300 ease-in-out
          ${showFilter ? "translate-x-0" : "translate-x-full md:translate-x-0"}
          shadow-lg md:shadow-none
        `}
      >
        {/* Close button for mobile */}
        <div className="md:hidden flex justify-end p-4">
          <button
            onClick={() => setShowFilter(false)}
            className="text-gray-600 hover:text-gray-800"
          >
            <IoMdClose size={24} />
          </button>
        </div>

        <div
          className="hide-scrollbar"
          style={{
            maxHeight: "calc(100vh - 60px)",
            overflowY: "auto",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {/* Price Range */}
          <div className="p-3 relative">
            <div className="space-y-4">
              <div className="flex items-center gap-[10] bg-[rgb(246,170,22)] text-white px-[10px] py-[10px] rounded-[5px]">
                <MdPriceChange size={20} className="flex-shrink-0" />
                <span className="text-[15px]">Price Range</span>
              </div>
              <div className="px-2 relative pt-5">
                <div className="relative">
                  <input
                    type="range"
                    min={0}
                    max={50000}
                    value={minPrice}
                    onChange={(e) => handleMinPrice(Number(e.target.value))}
                    className="absolute w-full h-1 bg-gray-200 rounded appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, 
                        #e5e7eb ${(minPrice / 100000) * 100}%, 
                        rgb(246,170,22) ${(minPrice / 50000) * 100}%, 
                        rgb(246,170,22) ${(maxPrice / 50000) * 100}%, 
                        #e5e7eb ${(maxPrice / 50000) * 100}%)`,
                    }}
                  />
                  <input
                    type="range"
                    min={0}
                    max={50000}
                    value={maxPrice}
                    onChange={(e) => handleMaxPrice(Number(e.target.value))}
                    className="absolute w-full h-1 bg-transparent appearance-none cursor-pointer"
                  />
                </div>
                <div className="mt-6 flex justify-between text-gray-600">
                  <span>₹{minPrice}</span>
                  <span>₹{maxPrice}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3">
            <div className="space-y-4">
              <div className="flex items-center gap-[10] bg-[rgb(246,170,22)] text-white px-[10px] py-[10px] rounded-[5px]">
                <FaFilter size={18} className="flex-shrink-0" />
                <span className="text-[15px]">Screenwriting</span>
              </div>
              <div className="space-y-2">
                {screenwriting.map((occasion) => (
                  <label
                    key={occasion.name}
                    className="flex items-center gap-3 hover:bg-gray-50 p-1.5 rounded cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded text-blue-500"
                      onChange={() => handleType(occasion)}
                      checked={
                        !!type.find(
                          (_type: any) =>
                            _type.name == occasion.name &&
                            _type.value == occasion.value
                        )
                      }
                    />
                    <span className="text-gray-600 text-[15px] ">
                      {occasion.name}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="p-3 border-b border-gray-100">
            <div className="space-y-4">
              <div className="flex items-center gap-[10] bg-[rgb(246,170,22)] text-white px-[10px] py-[10px] rounded-[5px]">
                <TbCategoryFilled size={20} className="flex-shrink-0" />
                <span className="text-[15px]">TVC/OTT Category</span>
              </div>
              <div className="space-y-2">
                {genreTVOption.slice(0, readMore.tvc).map((category) => (
                  <label
                    key={category.name}
                    className="flex items-center gap-3 hover:bg-gray-50 p-1.5 rounded cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded text-blue-500"
                      onChange={() => handleCategoryFilter(category)}
                      checked={
                        !!categoryFilter.find(
                          (_type: any) =>
                            _type.name == category.name &&
                            _type.value == category.value
                        )
                      }
                    />
                    <span className="text-gray-600 text-[15px]">
                      {category.name}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            <button
              className="px-1.5 text-gray-500 font-medium underline mt-3"
              onClick={() =>
                setReadMore((prev) => ({
                  ...prev,
                  tvc: prev.tvc == 4 ? genreTVOption.length : 4,
                }))
              }
            >
              {readMore.tvc == 4 ? "View More" : "View Less"}
            </button>
          </div>

          <div className="p-3 border-b border-gray-100">
            <div className="space-y-4">
              <div className="flex items-center gap-[10] bg-[rgb(246,170,22)] text-white px-[10px] py-[10px] rounded-[5px]">
                <TbCategoryFilled size={20} className="flex-shrink-0" />
                <span className="text-[15px]">Shorts Category</span>
              </div>
              <div className="space-y-2">
                {genreShortsOption.slice(0, readMore.shorts).map((category) => (
                  <label
                    key={category.name}
                    className="flex items-center gap-3 hover:bg-gray-50 p-1.5 rounded cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded text-blue-500"
                      onChange={() => handleCategoryFilter(category)}
                      checked={
                        !!categoryFilter.find(
                          (_type: any) =>
                            _type.name == category.name &&
                            _type.value == category.value
                        )
                      }
                    />
                    <span className="text-gray-600 text-[15px]">
                      {category.name}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            <button
              className="px-1.5 text-gray-500 font-medium underline mt-3"
              onClick={() =>
                setReadMore((prev) => ({
                  ...prev,
                  shorts: prev.shorts == 4 ? genreShortsOption.length : 4,
                }))
              }
            >
              {readMore.shorts == 4 ? "View More" : "View Less"}
            </button>
          </div>

          {/* Brand Categories */}
          <div className="p-3 border-b border-gray-100">
            <div className="space-y-4">
              <div className="flex items-center gap-[10] bg-[rgb(246,170,22)] text-white px-[10px] py-[10px] rounded-[5px]">
                <FaFilter size={18} className="flex-shrink-0" />
                <span className="text-[15px]">Brand category</span>
              </div>
              <div className="space-y-2">
                {industryOptions.slice(0, readMore.industry).map((category) => (
                  <label
                    key={category.name}
                    className="flex items-center gap-3 hover:bg-gray-50 p-1.5 rounded cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded text-blue-500"
                      onChange={() => handleCategoryFilter(category)}
                      checked={
                        !!categoryFilter.find(
                          (_type: any) =>
                            _type.name == category.name &&
                            _type.value == category.value
                        )
                      }
                    />
                    <span className="text-gray-600 text-[15px]">
                      {category.name}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            <button
              className="px-1.5 text-gray-500 font-medium underline mt-3"
              onClick={() =>
                setReadMore((prev) => ({
                  ...prev,
                  industry: prev.industry == 4 ? industryOptions.length : 4,
                }))
              }
            >
              {readMore.industry == 4 ? "View More" : "View Less"}
            </button>
          </div>
          <div className="flex flex-row justify-end gap-2">
            <Button
              actionName="Apply Filter"
              className=" border !w-48 !text-white !bg-[#f5a623] order-1 md:!mb-5"
              onClick={() => fetchScriptData(false)}
            />
            <Button
              actionName="Clear Filter"
              className=" border !w-48 !text-[#f5a623] !border-[#f5a623] !bg-white order-1 md:!mb-5"
              onClick={async () => {
                await fetchScriptData(true);
                setMinPrice(0);
                setMaxPrice(50000);
              }}
            />
          </div>
        </div>

        <style jsx global>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }

          input[type="range"] {
            pointer-events: none;
          }

          input[type="range"]::-webkit-slider-thumb {
            pointer-events: auto;
            -webkit-appearance: none;
            appearance: none;
            width: 16px;
            height: 16px;
            background: white;
            border: 2px solid rgb(246, 170, 22);
            border-radius: 50%;
            cursor: pointer;
          }

          input[type="range"]::-moz-range-thumb {
            pointer-events: auto;
            width: 16px;
            height: 16px;
            background: white;
            border: 2px solid rgb(246, 170, 22);
            border-radius: 50%;
            cursor: pointer;
          }
        `}</style>
      </div>

      {/* Overlay for mobile */}
      {showFilter && (
        <div
          className="fixed md:hidden inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setShowFilter(false)}
        />
      )}
    </div>
  );
};

export default LeftSearch;
