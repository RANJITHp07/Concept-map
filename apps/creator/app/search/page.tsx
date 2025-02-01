"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import MainSearch from "@repo/ui/components/Mainsearch";
import SearchResult from "@repo/ui/components/SearchResult";
import LeftSearch from "@repo/ui/components/LeftSearch";
import apiHelper from "../../lib/apiHelper";
import { apis } from "../../lib/api";
import ScriptCardLoading from "../../components/skelton/scriptCardLoading";
import Header from "@repo/ui/components/Header";
import "./search.css";

function Page() {
  const [categoryFilter, setCategoryFilter] = useState<
    Array<{
      name: string;
      value: string;
    }>
  >([]);
  const [country, setCountry] = useState<string[]>([]);
  const [state, setState] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([0, 50000]);
  const [searchData, setSearchData] = useState([]);
  const [textSearch, setTextSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const sectionRef = useRef<any>();
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [type, setType] = useState<
    Array<{
      name: string;
      value: string;
    }>
  >([]);

  const fetchScriptData = async (clear?: boolean) => {
    setIsLoading(true);
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    if (clear) {
      setType([]);
      setCategoryFilter([]);
      setTextSearch("");
      setPriceRange((prev) => [0, 50000]);
    }
    const response = await apiHelper(
      apis.getSearchData,
      "GET",
      undefined,
      {},
      {
        type: clear ? [] : type.map((type) => type.value),
        skip: (page - 1) * 6,
        take: page * 6,
        filter: clear ? [] : categoryFilter.map((script) => script.value),
        textSearch: clear ? "" : textSearch,
        priceRange: clear ? [0, 50000] : priceRange,
        country,
        state,
      }
    );

    if (response.status == "success") {
      setSearchData(response.data.scripts);
      setCount(response.data.count);
    }
    setIsLoading(false);
  };

  const handleCountryStateChange = (state: string, country: string) => {
    setCountry([country]);
    setState([state]);
  };

  const handlePage = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    fetchScriptData();
  }, [textSearch, page, country, state]);

  const handleTextSearch = (value: string) => setTextSearch(value);

  const handlePrice = (start: number, end: number) =>
    setPriceRange([start, end]);

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
    <div ref={sectionRef} className="min-h-screen flex flex-col">
      <div className="">
        <Header />
      </div>
      <div className="bg-[#FFF5E9] text-gray-700">
        <div className="px-[10px] md:px-[20px] lg:px-[50px] py-[20px] md:py-[30px] lg:py-[40px]">
          <div className="py-[50px] px-[10px]">
            <h1 className="text-[20px] md:text-[30px] lg:text-[40px] font-bold">
              Browse Scripts, Synopsis, & Story Board{" "}
            </h1>
            <p className="text-[14px] md:text-[16px] lg:text-[18px]">
              Uncover a treasure trove of unique stories, powerful synopses, and
              creative ideas crafted by writers ready to inspire your next big
              project.
            </p>
          </div>
          <div className="px-[10px]">
            <MainSearch
              handleTextSearch={handleTextSearch}
              handleCountryStateChange={handleCountryStateChange}
            />
          </div>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-12 px-[10px] md:px-[20px] lg:px-[50px] pt-[40px]">
        <div className="col-span-12 md:col-span-3 md:sticky md:top-0 md:h-screen overflow-y-auto">
          <div className="pr-4 lg:w-11/12">
            <LeftSearch
              handleCategoryFilter={handleCategoryFilter}
              handleType={handleType}
              handlePrice={handlePrice}
              priceRange={priceRange}
              categoryFilter={categoryFilter}
              type={type}
              fetchScriptData={(value: boolean) => {
                setPage(1);
                fetchScriptData(value);
              }}
            />
          </div>
        </div>

        <div className="col-span-12 md:col-span-9 px-[10px] pb-[30px]">
          <div>
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[10px] lg:gap-[20px] Home-result-gird">
                {[1, , 2, 3, 4, 5, 6].map(() => (
                  <ScriptCardLoading />
                ))}
              </div>
            ) : (
              <SearchResult
                data={searchData}
                count={count}
                handlePage={handlePage}
                page={page}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
