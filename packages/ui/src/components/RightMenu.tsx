'use client';

import Image from 'next/image';

function RightMenu() {
  interface RightMenuItem {
    logo: string;
  }

  const Data: RightMenuItem[] = [
    { logo: '/rightMenu/1.png' },
    { logo: '/rightMenu/2.png' },
    { logo: '/rightMenu/3.png' },
    { logo: '/rightMenu/4.png' },
  ];

  return (
    <section className="px-[10px]">
      <div className="grid grid-cols-1 gap-[20px]">
        {Data.map((item, index) => (
          <div key={index} className="relative w-full h-[600px]">
            <Image
              src={item.logo}
              alt={`Menu item ${index + 1}`}
              fill
              className="object-cover rounded-[12px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default RightMenu;