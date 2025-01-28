"use client";
import HomeResult from "@repo/ui/components/HomeResult";
import SearchBarsWithTags from "@repo/ui/components/SearchBars";
import React, { useEffect, useState } from "react";
import apiHelper from "../../lib/apiHelper";
import { apis } from "../../lib/api";
import ScriptCardLoading from "../skelton/scriptCardLoading";

const scriptTypes = {
  scripts: "SCRIPT",
  "story board": "STORY_BOARD",
  synopsis: "SYNOPSIS",
};

function Search({ type }: { type: string }) {
  const [searchData, setSearchData] = useState([]);
  const [textSearch, setTextSearch] = useState("");
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<
    Array<{
      name: string;
      value: string;
    }>
  >([]);

  const fetchScriptData = async () => {
    setIsLoading(true);
    const response = await apiHelper(
      apis.getSearchData,
      "GET",
      undefined,
      {},
      {
        type: [scriptTypes[type as keyof typeof scriptTypes]],
        skip: "0",
        take: "6",
        filter: filter.map((script) => script.value),
        textSearch,
      }
    );
    if (response.status == "success") {
      setSearchData(response.data.scripts);
      setCount(response.data.count);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchScriptData();
  }, [filter]);

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setTextSearch(term);
    debounceSearch(fetchScriptData, 500)();
  };

  const debounceSearch = (fn: () => void, delay: number) => {
    let timeout: NodeJS.Timeout;
    return function () {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn(), delay);
    };
  };
  return (
    <>
      <SearchBarsWithTags
        initialTags={[type]}
        setFilter={setFilter}
        filter={filter}
        handleTextChange={handleTextChange}
      />

      {isLoading ? (
        <div className="grid grid-cols-1 mt-5 md:grid-cols-2 lg:grid-cols-3 gap-[10px] lg:gap-[20px] Home-result-gird md:relative z-[-1]">
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <ScriptCardLoading key={index} />
          ))}
        </div>
      ) : (
        <HomeResult data={searchData} count={count} />
      )}
    </>
  );
}

export default Search;
