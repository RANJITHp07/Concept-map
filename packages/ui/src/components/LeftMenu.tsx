'use client';

import React, { useState } from 'react';

interface MenuItem {
  logo: string;
  title: string;
}

function LeftMenu() {
  const [activeItem, setActiveItem] = useState<number | null>(null); 
  const Data: MenuItem[] = [
    { logo: 'x', title: 'Dashboard' },
    { logo: 'x', title: 'Reports' },
    { logo: 'x', title: 'Profile' },
    { logo: 'x', title: 'Contracts' },
    { logo: 'x', title: 'Invoices' },
    { logo: 'x', title: 'Projects' },
    { logo: 'x', title: 'Tasks' },
    { logo: 'x', title: 'Settings' },
  ];

  const handleClick = (index: number) => {
    setActiveItem(index); 
  };

  return (
    <section className="px-[20px] py-[20px]">
      <div className="">
        {Data.map((item, index: number) => (
          <div
            key={index}
            onClick={() => handleClick(index)} 
            className={`flex items-center justify-start px-[20px] py-[10px] rounded-[12px] 
              ${activeItem === index ? 'bg-[rgba(246,170,22,1)] text-white' : 'hover:bg-[rgba(246,170,22,1)]'}`}
          >
            <span className={`text-xl font-bold ${activeItem === index ? 'text-white' : 'text-gray-600'} mr-4`}>
              {item.logo}
            </span>
            <span className={`text-[18px] leading-[21px] ${activeItem === index ? 'text-white' : 'text-gray-800'}`}>
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LeftMenu;
