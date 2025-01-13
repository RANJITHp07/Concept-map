'use client'

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface DropdownOption {
  title: string;
  options: string[];
}

interface DropdownData {
  [key: string]: DropdownOption;
}

interface SearchBarsWithTagsProps {
  initialTags?: string[];
}

const SearchBarsWithTags: React.FC<SearchBarsWithTagsProps> = ({ initialTags = [] }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([
    'synopsis', 'story board', 'latest story', 'korean'
  ]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string>('');

  const dropdownData: DropdownData = {
    'tvc': {
      title: 'Genre (TVC/OTT)',
      options: ['Commercial', 'Web Series', 'TV Show', 'Documentary', 'Film']
    },
    'shorts': {
      title: 'Genre (Shorts)',
      options: ['Animation', 'Music Video', 'Short Film', 'Social Media']
    },
    'industry': {
      title: 'Industry/Brand',
      options: ['Technology', 'Fashion', 'Food & Beverage', 'Automotive', 'Entertainment']
    }
  };

  const suggestions: string[] = [
    'synopsis', 'story board', 'latest story', 'korean drama',
    'movie synopsis', 'tv series'
  ];

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleTagSelect = (tag: string): void => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
    }
    setSearchValue('');
    setShowSuggestions(false);
  };

  const removeTag = (tagToRemove: string): void => {
    setSelectedTags(selectedTags.filter(tag => tag !== tagToRemove));
  };

  const toggleDropdown = (dropdownName: string): void => {
    setOpenDropdown(openDropdown === dropdownName ? '' : dropdownName);
  };

  const handleOptionSelect = (option: string): void => {
    handleTagSelect(option);
    setOpenDropdown('');
  };

  const renderDropdownButton = (key: string, data: DropdownOption): JSX.Element => (
    <div className="relative" ref={dropdownRef}>
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
        <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
          {data.options.map((option: string, index: number) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleOptionSelect(option)}
              role="button"
              tabIndex={0}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="w-full max-w-6xl space-y-4">
      <div className="flex items-center gap-4">
        <div className="relative flex items-center flex-grow max-w-md">
          <input
            type="text"
            placeholder="looking for today?"
            className="w-full pl-4 pr-12 py-3 rounded-full border border-gray-200 outline-none text-gray-600 placeholder-gray-400"
            value={searchValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSearchValue(e.target.value);
              setShowSuggestions(true);
            }}
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

          {showSuggestions && searchValue && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              {suggestions
                .filter(suggestion => 
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
          )}
        </div>

        {Object.entries(dropdownData).map(([key, data]) => 
          renderDropdownButton(key, data)
        )}

        <button 
          className="p-4 rounded-full bg-yellow-400 hover:bg-yellow-500 transition-colors"
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

      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {selectedTags.map((tag: string, index: number) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-[#FFF5E9] rounded-full"
            >
              <span className="text-gray-700">{tag}</span>
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
          ))}
        </div>

        <div className="flex items-center gap-2 text-yellow-400">
          <span>How it Works</span>
          <div className="p-2 rounded-full" style={{ border: '1px solid rgba(254, 201, 97, 0.22)' }}>
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
  );
};

export default SearchBarsWithTags;