"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export const genreTVOption = [
  { name: "Romance", value: "ROMANCE" },
  { name: "Crime", value: "CRIME" },
  { name: "Horror", value: "HORROR" },
  { name: "Action", value: "ACTION" },
  { name: "Comedy", value: "COMEDY" },
  { name: "Drama", value: "DRAMA" },
  { name: "Sci-Fi", value: "SCI-FI" },
  { name: "Fantasy", value: "FANTASY" },
  { name: "Historical", value: "HISTORICAL" },
  { name: "Documentary", value: "DOCUMENTARY" },
  { name: "Others", value: "OTHERS" },
];

export const genreShortsOption = [
  { name: "Comedy & Humor", value: "COMEDY_AND_HUMOR" },
  { name: "People", value: "PEOPLE" },
  { name: "Beauty", value: "BEAUTY" },
  { name: "Sports", value: "SPORTS" },
  { name: "Fashion & Lifestyle", value: "FASHION_AND_LIFESTYLE" },
  { name: "Gaming", value: "GAMING" },
  { name: "Food & Drink", value: "FOOD_AND_DRINK" },
  { name: "Travel & Holidays", value: "TRAVEL_AND_HOLIDAYS" },
  { name: "Automobile", value: "AUTOMOBILE" },
  { name: "Science & Technology", value: "SCIENCE_AND_TECHNOLOGY" },
  { name: "Health & Fitness", value: "HEALTH_AND_FITNESS" },
  { name: "Animals & Pets", value: "ANIMALS_AND_PETS" },
  { name: "Family & Parenting", value: "FAMILY_AND_PARENTING" },
  { name: "Home & DIY", value: "HOME_AND_DIY" },
  {
    name: "Self Help & Motivational",
    value: "SELF_HELP_AND_MOTIVATIONAL",
  },
  { name: "Business & Finance", value: "BUSINESS_AND_FINANCE" },
  { name: "Movies & Entertainment", value: "MOVIES_AND_ENTERTAINMENT" },
  { name: "Others", value: "OTHERS" },
];

export const industryOptions = [
  { name: "Grocery", value: "GROCERY" },
  { name: "CPG", value: "CPG" },
  { name: "Ecommerce", value: "ECOMMERCE" },
  { name: "Beauty & Personal Care", value: "BEAUTY & PERSONAL CARE" },
  { name: "Health & Wellness", value: "HEALTH & WELLNESS" },
  { name: "Fintech", value: "FINTECH" },
  { name: "Telecom", value: "TELECOM" },
  { name: "Auto", value: "AUTO" },
  { name: "Travel & Hospitality", value: "TRAVEL & HOSPITALITY" },
  { name: "F&B", value: "FB" },
  { name: "Consumer Electronics", value: "CONSUMER ELECTRONICS" },
  { name: "BFSI", value: "BFSI" },
  { name: "Apparel", value: "APPAREL" },
  { name: "Technology", value: "TECHNOLOGY" },
  { name: "Real Estate", value: "REAL ESTATE" },
  { name: "Utilities", value: "UTILITIES" },
  { name: "Jewellery", value: "JEWELLERY" },
  { name: "Media & Entertainment", value: "MEDIA & ENTERTAINMENT" },
  { name: "Others", value: "OTHERS" },
];

interface DropdownOption {
  title: string;
  options: Array<{
    name: string;
    value: string;
  }>;
}

interface DropdownData {
  [key: string]: DropdownOption;
}

interface SearchBarsWithTagsProps {
  initialTags?: string[];
  setFilter: React.Dispatch<
    React.SetStateAction<
      Array<{
        name: string;
        value: string;
      }>
    >
  >;
  filter: Array<{
    name: string;
    value: string;
  }>;
  handleTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBarsWithTags: React.FC<SearchBarsWithTagsProps> = ({
  initialTags = [],
  setFilter,
  filter,
  handleTextChange,
}) => {
  // const [searchValue, setSearchValue] = useState<string>("");
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string>("");

  const dropdownData: DropdownData = {
    tvc: {
      title: "Genre (TVC/OTT)",
      options: genreTVOption,
    },
    shorts: {
      title: "Genre (Shorts)",
      options: genreShortsOption,
    },
    industry: {
      title: "Industry/Brand",
      options: industryOptions,
    },
  };

  const suggestions: string[] = [
    "synopsis",
    "story board",
    "latest story",
    "korean drama",
    "movie synopsis",
    "tv series",
  ];

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // const handleClickOutside = (event: MouseEvent) => {
    //   if (
    //     dropdownRef.current &&
    //     !dropdownRef.current.contains(event.target as Node)
    //   ) {
    //     setOpenDropdown("");
    //   }
    // };
    // document.addEventListener("mousedown", handleClickOutside);
    // return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleTagSelect = (tag: { name: string; value: string }): void => {
    setFilter((prev) => {
      const index = prev.findIndex(
        (_prev) => _prev.name === tag.name && _prev.value === tag.value
      );

      if (index > -1) {
        return prev;
      }
      return [...prev, tag];
    });

    // setSearchValue("");
    setShowSuggestions(false);
  };

  const removeTag = (tagToRemove: { name: string; value: string }): void => {
    setFilter((prev) =>
      prev.filter(
        (_prev) =>
          _prev.name !== tagToRemove.name && _prev.value !== tagToRemove.value
      )
    );
  };

  const toggleDropdown = (dropdownName: string): void => {
    setOpenDropdown(openDropdown === dropdownName ? "" : dropdownName);
  };

  const handleOptionSelect = (option: {
    name: string;
    value: string;
  }): void => {
    handleTagSelect(option);
    setOpenDropdown("");
  };

  const renderDropdownButton = (
    key: string,
    data: DropdownOption
  ): JSX.Element => (
    <div className="relative hidden md:block" ref={dropdownRef}>
      <button
        className="flex items-center space-x-2 px-6 py-3 rounded-full border border-gray-200 hover:bg-gray-50"
        onClick={() => toggleDropdown(key)}
        type="button"
      >
        <span className="text-gray-600 whitespace-nowrap">{data.title}</span>
        <Image
          src="/HomeData/down.svg"
          alt="dropdown-icon"
          width={16}
          height={16}
          className="text-gray-400"
        />
      </button>
      {openDropdown === key && (
        <div className="absolute bottom-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-100">
          {data.options.map(
            (
              option: {
                name: string;
                value: string;
              },
              index: number
            ) => (
              <p
                key={option.name}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleOptionSelect(option)}
                // role="button"
                tabIndex={0}
              >
                {option.name}
              </p>
            )
          )}
        </div>
      )}
    </div>
  );

  return (
    <Fade direction="up" triggerOnce>
      <div className="w-full pt-[40px]">
        <div className="flex items-center gap-4">
          <div className="relative flex items-center flex-grow">
            <input
              type="text"
              placeholder="looking for today?"
              className="w-full pl-4 pr-12 py-3 rounded-full border border-gray-200 outline-none text-gray-600 placeholder-gray-400"
              // value={searchValue}
              onChange={handleTextChange}
              onFocus={() => setShowSuggestions(true)}
            />
            <div className="absolute right-4 flex items-center">
              <Image
                src="/HomeData/icon.svg"
                alt="search-icon"
                width={20}
                height={20}
                className="text-gray-400"
              />
            </div>

            {/* {showSuggestions && searchValue && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                {suggestions
                  .filter((suggestion) =>
                    suggestion.toLowerCase().includes(searchValue.toLowerCase())
                  )
                  .map((suggestion: string, index: number) => (
                    <div
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleTagSelect(suggestion)}
                      role="button"
                      tabIndex={0}
                    >
                      {suggestion}
                    </div>
                  ))}
              </div>
            )} */}
          </div>

          {/* Show only one filter on medium screens */}
          <div className="hidden md:block lg:hidden">
            {renderDropdownButton("tvc", dropdownData["tvc"]!)}
          </div>

          {/* Show all filters on large screens */}
          <div className="hidden lg:flex lg:gap-4">
            {Object.entries(dropdownData).map(([key, data]) =>
              renderDropdownButton(key, data)
            )}
          </div>

          {/* Arrow button - hidden on small screens */}
          <button
            className="hidden md:block p-4 rounded-full bg-yellow-400 hover:bg-yellow-500 transition-colors"
            type="button"
          >
            <Image
              src="/HomeData/arrow.svg"
              alt="arrow-icon"
              width={20}
              height={20}
            />
          </button>
        </div>

        <div className="flex items-center justify-between pt-[20px] ">
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center gap-2 px-[10px] lg:px-[16px] py-2 bg-[#FFF5E9] rounded-full">
              <span className="text-gray-700 text-[14px] lg:text-[16px]">
                {initialTags[0]}
              </span>
            </div>
            {filter.map(
              (tag: { name: string; value: string }, index: number) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-[10px] lg:px-[16px] py-2 bg-[#FFF5E9] rounded-full"
                >
                  <span className="text-gray-700 text-[14px] lg:text-[16px]">
                    {tag.name}
                  </span>
                  <button
                    onClick={() => removeTag(tag)}
                    className="hover:bg-gray-100 rounded-full p-1"
                    type="button"
                  >
                    <Image
                      src="/HomeData/close.svg"
                      alt="remove tag"
                      width={12}
                      height={12}
                    />
                  </button>
                </div>
              )
            )}
          </div>

          <div className="flex items-center gap-2 text-yellow-400 flex-shrink-0">
            <span className="whitespace-nowrap">How it Works</span>
            <div
              className="p-2 rounded-full"
              style={{ border: "1px solid rgba(254, 201, 97, 0.22)" }}
            >
              <Image
                src="/HomeData/play.png"
                alt="play"
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default SearchBarsWithTags;
