"use client";

import React, { useState } from "react";
import { TbCategoryFilled } from "react-icons/tb";
import { MdPriceChange } from "react-icons/md";
import { FaFilter } from "react-icons/fa";
import {
  genreShortsOption,
  genreTVOption,
  industryOptions,
  screenwriting,
} from "./SearchBars";

const LeftSearch = ({
  handleCategoryFilter,
  handlePrice,
  handleType,
  priceRange,
  categoryFilter,
  type,
}: any) => {
  return (
    <div className="w-full">
      <div>
        {/* Price Range */}
        <div className="p-3">
          <div className="space-y-4">
            <div className="flex items-center gap-[10] bg-[rgb(246,170,22)] text-white px-[10px] py-[10px] rounded-[5px]">
              <MdPriceChange size={20} className="flex-shrink-0" />
              <span className="text-[15px]">Price Range</span>
            </div>
            <div className="px-2">
              <input
                type="range"
                min="0"
                max="100000"
                value={priceRange}
                onChange={(e) => handlePrice(Number(e.target.value))}
                className="w-full h-[1.5px] bg-[rgb(246,170,22)] rounded-lg appearance-none cursor-pointer range-slider"
              />
              <div className="mt-2  text-gray-600">
                Selected price: ₹{priceRange}
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
                  <span className=" text-gray-600">{occasion.name}</span>
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
                  <span className=" text-gray-600">{category.name}</span>
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
                  <span className=" text-gray-600">{category.name}</span>
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
                  <span className=" text-gray-600">{category.name}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Occasions */}
        {/* <div className="p-3">
          <div className="space-y-4">
            <div className="flex items-center gap-[10] bg-[rgb(246,170,22)] text-white px-[10px] py-[10px] rounded-[5px]">
              <FaFilter size={18} className="flex-shrink-0" />
              <span className="text-[12px]">Search by occasion</span>
            </div>
            <div className="space-y-2">
              {occasions.map((occasion) => (
                <label
                  key={occasion}
                  className="flex items-center gap-3 hover:bg-gray-50 p-1.5 rounded cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded text-blue-500"
                  />
                  <span className="text-sm text-gray-600">{occasion}</span>
                </label>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default LeftSearch;
