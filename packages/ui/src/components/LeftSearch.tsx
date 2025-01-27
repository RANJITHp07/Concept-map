"use client";

import React, { useState } from "react";
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

const LeftSearch = ({
  handleCategoryFilter,
  handleType,
  categoryFilter,
  type,
}: any) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000);
  const [showFilter, setShowFilter] = useState(false);

  const handleMinPrice = (value: number) => {
    const newMin = Math.min(value, maxPrice - 1000);
    setMinPrice(newMin);
  };

  const handleMaxPrice = (value: number) => {
    const newMax = Math.max(value, minPrice + 1000);
    setMaxPrice(newMax);
  };

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
          ${showFilter ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
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

        <div className="hide-scrollbar" style={{ 
          maxHeight: "calc(100vh - 60px)", 
          overflowY: "auto",
          msOverflowStyle: "none",
          scrollbarWidth: "none"
        }}>
          {/* Price Range */}
          <div className="p-3">
            <div className="space-y-4">
              <div className="flex items-center gap-[10] bg-[rgb(246,170,22)] text-white px-[10px] py-[10px] rounded-[5px]">
                <MdPriceChange size={20} className="flex-shrink-0" />
                <span className="text-[15px]">Price Range</span>
              </div>
              <div className="px-2 relative pt-5">
                <div className="relative">
                  <input
                    type="range"
                    min="0"
                    max="100000"
                    value={minPrice}
                    onChange={(e) => handleMinPrice(Number(e.target.value))}
                    className="absolute w-full h-1 bg-gray-200 rounded appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, 
                        #e5e7eb ${(minPrice / 100000) * 100}%, 
                        rgb(246,170,22) ${(minPrice / 100000) * 100}%, 
                        rgb(246,170,22) ${(maxPrice / 100000) * 100}%, 
                        #e5e7eb ${(maxPrice / 100000) * 100}%)`
                    }}
                  />
                  <input
                    type="range"
                    min="0"
                    max="100000"
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
                    <span className="text-gray-600 text-[14px] ">{occasion.name}</span>
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
                {genreTVOption.map((category) => (
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
                    <span className="text-gray-600 text-[14px]">{category.name}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="p-3 border-b border-gray-100">
            <div className="space-y-4">
              <div className="flex items-center gap-[10] bg-[rgb(246,170,22)] text-white px-[10px] py-[10px] rounded-[5px]">
                <TbCategoryFilled size={20} className="flex-shrink-0" />
                <span className="text-[15px]">Shorts Category</span>
              </div>
              <div className="space-y-2">
                {genreShortsOption.map((category) => (
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
                    <span className="text-gray-600 text-[14px]">{category.name}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Brand Categories */}
          <div className="p-3 border-b border-gray-100">
            <div className="space-y-4">
              <div className="flex items-center gap-[10] bg-[rgb(246,170,22)] text-white px-[10px] py-[10px] rounded-[5px]">
                <FaFilter size={18} className="flex-shrink-0" />
                <span className="text-[15px]">Brand category</span>
              </div>
              <div className="space-y-2">
                {industryOptions.map((category) => (
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
                    <span className="text-gray-600 text-[14px]">{category.name}</span>
                  </label>
                ))}
              </div>
            </div>
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
            border: 2px solid rgb(246,170,22);
            border-radius: 50%;
            cursor: pointer;
          }
          
          input[type="range"]::-moz-range-thumb {
            pointer-events: auto;
            width: 16px;
            height: 16px;
            background: white;
            border: 2px solid rgb(246,170,22);
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