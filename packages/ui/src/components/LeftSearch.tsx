'use client'

import React, { useState } from 'react';
import { TbCategoryFilled } from "react-icons/tb";
import { MdPriceChange } from "react-icons/md";
import { FaFilter } from "react-icons/fa";

const LeftSearch = () => {
  const [priceRange, setPriceRange] = useState(50);

  const categories = [
    "Romance", "Comedy", "Horror", "Action", "Drama",
    "Sci-fi", "Fantasy", "Historical", "Documentary"
  ];

  const brandCategories = [
    "Grocery", "CPG", "Ecommerce", "Beauty", "Fintech",
    "Health", "Telecom", "Travel and hospitality", "Jewellery"
  ];

  const occasions = [
    "Festival", "Sale", "Back to school", "National Days",
    "Auspicious Date", "Season"
  ];

  return (
    <div className="w-full">
      <div>
        {/* Price Range */}
        <div className="p-3">
          <div className="space-y-4">
            <div className="flex items-center gap-[10] bg-[rgb(246,170,22)] text-white px-[10px] py-[10px] rounded-[5px]">
              <MdPriceChange size={20} className="flex-shrink-0" />
              <span className="text-[12px]">Price Range</span>
            </div>
            <div className="px-2">
              <input
                type="range"
                min="0"
                max="100"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full h-[1.5px] bg-blue-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="mt-2 text-sm text-gray-600">
                Selected price: ${priceRange}
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="p-3 border-b border-gray-100">
          <div className="space-y-4">
            <div className="flex items-center gap-[10] bg-[rgb(246,170,22)] text-white px-[10px] py-[10px] rounded-[5px]">
              <TbCategoryFilled size={20} className="flex-shrink-0" />
              <span className="text-[12px]">Search by category</span>
            </div>
            <div className="space-y-2">
              {categories.map((category) => (
                <label key={category} className="flex items-center gap-3 hover:bg-gray-50 p-1.5 rounded cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded text-blue-500" />
                  <span className="text-sm text-gray-600">{category}</span>
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
              <span className="text-[12px]">Search by brand category</span>
            </div>
            <div className="space-y-2">
              {brandCategories.map((category) => (
                <label key={category} className="flex items-center gap-3 hover:bg-gray-50 p-1.5 rounded cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded text-blue-500" />
                  <span className="text-sm text-gray-600">{category}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Occasions */}
        <div className="p-3">
          <div className="space-y-4">
            <div className="flex items-center gap-[10] bg-[rgb(246,170,22)] text-white px-[10px] py-[10px] rounded-[5px]">
              <FaFilter size={18} className="flex-shrink-0" />
              <span className="text-[12px]">Search by occasion</span>
            </div>
            <div className="space-y-2">
              {occasions.map((occasion) => (
                <label key={occasion} className="flex items-center gap-3 hover:bg-gray-50 p-1.5 rounded cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded text-blue-500" />
                  <span className="text-sm text-gray-600">{occasion}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSearch;
