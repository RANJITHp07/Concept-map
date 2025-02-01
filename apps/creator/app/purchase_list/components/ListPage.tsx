import React from "react";
import { ArrowLeft } from "lucide-react";

const ListPage = () => {
  const data = [
    {
      name: "Script for Sci-Fi Movie",
      price: "₹15,000",
      date: "12/01/24",
      creatorName: "Alex Turner",
      synopsis: "A futuristic story of human survival on a distant planet.",
      storyboard: "https://example.com/storyboard1.jpg",
    },
    {
      name: "Romantic Comedy Script",
      price: "₹8,000",
      date: "14/02/24",
      creatorName: "Mia Scott",
      synopsis: "A light-hearted comedy about finding love in the digital age.",
      storyboard: "https://example.com/storyboard2.jpg",
    },
    {
      name: "Thriller Script for TV Series",
      price: "₹20,000",
      date: "25/03/24",
      creatorName: "David White",
      synopsis: "A gripping psychological thriller that keeps viewers on edge.",
      storyboard: "https://example.com/storyboard3.jpg",
    },
    {
      name: "Fantasy Adventure Script",
      price: "₹18,500",
      date: "05/04/24",
      creatorName: "Sophia Jones",
      synopsis:
        "A magical journey through a mythical world of dragons and elves.",
      storyboard: "https://example.com/storyboard4.jpg",
    },
    {
      name: "Action Movie Script",
      price: "₹22,000",
      date: "22/05/24",
      creatorName: "Michael Brown",
      synopsis:
        "A fast-paced action thriller with epic car chases and fight scenes.",
      storyboard: "https://example.com/storyboard5.jpg",
    },
    {
      name: "Historical Drama Script",
      price: "₹12,000",
      date: "10/06/24",
      creatorName: "Emma Clark",
      synopsis:
        "A deep dive into the struggles of a royal family in the medieval era.",
      storyboard: "https://example.com/storyboard6.jpg",
    },
    {
      name: "Animated Short Film Script",
      price: "₹5,000",
      date: "01/07/24",
      creatorName: "Lucas Harris",
      synopsis: "A heartwarming animated story about friendship and adventure.",
      storyboard: "https://example.com/storyboard7.jpg",
    },
  ];

  return (
    <section className=" md:px-[20px]">
      <div>
        <div className="flex items-center py-[10px] md:py-[10px] lg:py-[10px] px-[10px]">
          {/* <ArrowLeft className="  h-[20px] w-[20px]    md:h-[20px] md:w-[20px] lg:h-[30px] lg:w-[30px]" /> */}
          <h1 className=" text-[18px] md:text-[20px] lg:text-[28px] ml-[5px] md:ml-[10px] font-bold">
            Purchase Lists
          </h1>
        </div>

        <div className="w-full overflow-auto">
          <div className="min-w-[768px]">
            <table className="w-full text-center bg-transparent border-separate border-spacing-y-3 px-[10px]">
              <thead>
                <tr className="text-gray-500 text-sm">
                  <th className="px-[15px] py-[10px] text-left">
                    Name of Purchase
                  </th>
                  <th className="px-[15px] py-[10px]">Price</th>
                  <th className="px-[15px] py-[10px]">Date of Purchase</th>
                  <th className="px-[15px] py-[10px]">Creator Name</th>
                  <th className="px-[15px] py-[10px]"></th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr
                    key={index}
                    className="w-full  shadow-lg border border-gray-500 rounded-[10px]"
                  >
                    <td className="px-[15px] py-[20px] font-semibold text-left text-[#000000CC] text-[14px] md:text-[16px] ">
                      {item.name}
                    </td>
                    <td className="px-[15px] py-[10px] font-semibold text-[#000000CC] text-[14px] md:text-[16px] ">
                      {item.price}
                    </td>
                    <td className="px-[15px] py-[10px] font-semibold text-[#000000CC] text-[14px] md:text-[16px] ">
                      {item.date}
                    </td>
                    <td className="px-[15px] py-[10px] font-semibold text-[#000000CC] text-[14px] md:text-[16px]">
                      {item.creatorName}
                    </td>
                    <td className="px-[10px] py-[10px] rounded-r-[20px]">
                      <button className="text-orange-500 hover:underline text-[14px] md:text-[16px]">
                        More Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListPage;
