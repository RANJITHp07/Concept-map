"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import MainSearch from "@repo/ui/components/Mainsearch";
import SearchResult from "@repo/ui/components/SearchResult";
import LeftSearch from "@repo/ui/components/LeftSearch";
import apiHelper from "../../lib/apiHelper";
import { apis } from "../../lib/api";

function Page() {
  const [categoryFilter, setCategoryFilter] = useState<
    Array<{
      name: string;
      value: string;
    }>
  >([]);
  const [priceRange, setPriceRange] = useState(0);
  const [searchData, setSearchData] = useState([]);
  const [textSearch, setTextSearch] = useState("");
  const [count, setCount] = useState(0);
  const [type, setType] = useState<
    Array<{
      name: string;
      value: string;
    }>
  >([]);

  const fetchScriptData = async () => {
    const response = await apiHelper(
      apis.getSearchData,
      "GET",
      undefined,
      {},
      {
        type: type.map((type) => type.value),
        skip: "0",
        take: "6",
        filter: categoryFilter.map((script) => script.value),
        textSearch,
        priceRange,
      }
    );
    if (response.status == "success") {
      console.log(response.data);
      setSearchData(response.data.scripts);
      setCount(response.data.count);
    }
  };

  useEffect(() => {
    fetchScriptData();
  }, [type, categoryFilter, priceRange, textSearch]);

  const handleTextSearch = (value: string) => setTextSearch(value);

  const handlePrice = (value: number) => setPriceRange(value);

  const handleType = (option: { name: string; value: string }) => {
    setType((prev) => {
      if (
        prev.find(
          (script) => script.name == option.name && script.value == option.value
        )
      ) {
        return prev.filter(
          (script) => script.name != option.name && script.value != option.value
        );
      }
      return [...prev, option];
    });
  };

  const handleCategoryFilter = (option: { name: string; value: string }) => {
    setCategoryFilter((prev) => {
      if (
        prev.find(
          (script) => script.name == option.name && script.value == option.value
        )
      ) {
        return prev.filter(
          (script) => script.name != option.name && script.value != option.value
        );
      }
      return [...prev, option];
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-[#FFF5E9] text-gray-700">
        <div className="px-[10px] md:px-[20px] lg:px-[50px] py-[20px] md:py-[30px] lg:py-[40px]">
          <div className="py-[50px] px-[10px]">
            <h1 className="text-[20px] md:text-[30px] lg:text-[40px] font-bold">
              Browse Scripts, Synopses, & Ideas{" "}
            </h1>
            <p className="text-[14px] md:text-[16px] lg:text-[18px]">
              Uncover a treasure trove of unique stories, powerful synopses, and
              creative ideas crafted by writers ready to inspire your next big
              project.
            </p>
          </div>
          <div className="px-[10px]">
            <MainSearch handleTextSearch={handleTextSearch} />
          </div>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-12 px-[10px] md:px-[20px] lg:px-[50px] pt-[40px]">
        <div className="col-span-12 md:col-span-3 md:sticky md:top-0 md:h-screen overflow-y-auto">
          <div className="pr-4">
            <LeftSearch
              handleCategoryFilter={handleCategoryFilter}
              handleType={handleType}
              handlePrice={handlePrice}
              priceRange={priceRange}
              categoryFilter={categoryFilter}
              type={type}
            />
          </div>
        </div>

        <div className="col-span-12 md:col-span-9 px-[10px] pb-[30px]">
          <div>
            <SearchResult data={searchData} count={count} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;