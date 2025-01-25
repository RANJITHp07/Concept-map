'use client'

import React, { useState } from 'react';
import { BiSearch } from "react-icons/bi";
import { IoEarthOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

type CountryData = {
  [key in 'USA' | 'UK' | 'Canada' | 'Australia' | 'India']: string[];
};

function Mainsearch() {
  const [selectedCountry, setSelectedCountry] = useState<keyof CountryData | ''>('');
  const [selectedCity, setSelectedCity] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const countries: Array<keyof CountryData> = ['USA', 'UK', 'Canada', 'Australia', 'India'];
  const cities: CountryData = {
    'USA': ['New York', 'Los Angeles', 'Chicago'],
    'UK': ['London', 'Manchester', 'Birmingham'],
    'Canada': ['Toronto', 'Vancouver', 'Montreal'],
    'Australia': ['Sydney', 'Melbourne', 'Brisbane'],
    'India': ['Mumbai', 'Delhi', 'Bangalore']
  };

  return (
    <div className=" w-full ">
      <div className="grid grid-cols-2 gap-4 p-4 bg-white rounded-lg shadow-md">
        {/* Left side - Country and Place */}
        <div className="grid grid-cols-2 gap-4">
          {/* Country Selection */}
          <div className="relative w-full">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <IoEarthOutline size={20} />
            </div>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value as keyof CountryData | '')}
              className="w-full pl-10 pr-4 py-2 border border-[rgba(254,201,97,1)] rounded-lg  "
            >
              <option value="">Country</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          {/* City Selection */}
          <div className="relative w-full">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <IoLocationOutline size={20} />
            </div>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              disabled={!selectedCountry}
              className="w-full pl-10 pr-4 py-2 border rounded-lg border-[rgba(254,201,97,1)]"
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

        {/* Right side - Search Bar */}
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <BiSearch size={20} />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg border-[rgba(254,201,97,1)]"
          />
        </div>
      </div>
    </div>
  );
}

export default Mainsearch;