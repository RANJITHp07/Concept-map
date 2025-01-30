"use client";

import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IoEarthOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import Button from "./Button";

type CountryData = {
  [key in "USA" | "India"]: string[];
};

function Mainsearch({ handleTextSearch, handleCountryStateChange }: any) {
  const [selectedCountry, setSelectedCountry] = useState<
    keyof CountryData | ""
  >("");
  const [selectedCity, setSelectedCity] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const countries: Array<keyof CountryData> = ["USA", "India"];
  const cities: CountryData = {
    USA: [
      "Alabama",
      "Alaska",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "Florida",
      "Georgia",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Maryland",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska",
      "Nevada",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Pennsylvania",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "Utah",
      "Vermont",
      "Virginia",
      "Washington",
      "West Virginia",
      "Wisconsin",
      "Wyoming",
    ],
    India: [
      "Andhra Pradesh",
      "Arunachal Pradesh",
      "Assam",
      "Bihar",
      "Chhattisgarh",
      "Goa",
      "Gujarat",
      "Haryana",
      "Himachal Pradesh",
      "Jharkhand",
      "Karnataka",
      "Kerala",
      "Madhya Pradesh",
      "Maharashtra",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Odisha",
      "Punjab",
      "Rajasthan",
      "Sikkim",
      "Tamil Nadu",
      "Telangana",
      "Tripura",
      "Uttar Pradesh",
      "Uttarakhand",
      "West Bengal",
    ],
  };

  useEffect(() => {
    handleCountryStateChange(selectedCity, selectedCountry);
  }, [selectedCity, selectedCountry]);

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row items-center gap-4 p-4 bg-white rounded-lg shadow-md">
        <div className="relative w-full md:w-[50%]">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <BiSearch size={20} />
          </div>
          <input
            type="text"
            onChange={(e) => handleTextSearch(e.target.value)}
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-3 border rounded-lg border-[rgba(254,201,97,1)]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-[50%]">
          <div className="relative w-full order-2 md:order-1">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <IoEarthOutline size={20} />
            </div>
            <select
              value={selectedCountry}
              onChange={(e) =>
                setSelectedCountry(e.target.value as keyof CountryData | "")
              }
              className="w-full pl-10 pr-4 py-3 border border-[rgba(254,201,97,1)] rounded-lg"
            >
              <option value="">Country</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          <div className="relative w-full order-3 md:order-2">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <IoLocationOutline size={20} />
            </div>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              disabled={!selectedCountry}
              className="w-full pl-10 pr-4 py-3 border rounded-lg border-[rgba(254,201,97,1)]"
            >
              <option value="">Place</option>
              {selectedCountry &&
                cities[selectedCountry].map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainsearch;
