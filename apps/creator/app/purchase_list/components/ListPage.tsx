import React from "react";
import { ArrowLeft } from "lucide-react";

const ListPage = () => {
  const data = [
    {
      name: "Story Board Purchase",
      price: "$480",
      date: "10/08/24",
      creatorName: "Belle Erickson",
    },
    {
      name: "Story Board Purchase",
      price: "$480",
      date: "10/08/24",
      creatorName: "Belle Erickson",
    },
    {
      name: "Story Board Purchase",
      price: "$480",
      date: "10/08/24",
      creatorName: "Belle Erickson",
    },
    {
      name: "Story Board Purchase",
      price: "$480",
      date: "10/08/24",
      creatorName: "Belle Erickson",
    },
    {
      name: "Story Board Purchase",
      price: "$480",
      date: "10/08/24",
      creatorName: "Belle Erickson",
    },
    {
      name: "Story Board Purchase",
      price: "$480",
      date: "10/08/24",
      creatorName: "Belle Erickson",
    },
    {
      name: "Story Board Purchase",
      price: "$480",
      date: "10/08/24",
      creatorName: "Belle Erickson",
    },
    {
      name: "Story Board Purchase",
      price: "$480",
      date: "10/08/24",
      creatorName: "Belle Erickson",
    },
    {
      name: "Story Board Purchase",
      price: "$480",
      date: "10/08/24",
      creatorName: "Belle Erickson",
    },
    {
      name: "Story Board Purchase",
      price: "$480",
      date: "10/08/24",
      creatorName: "Belle Erickson",
    },
  ];

  return (
    <section className=" md:px-[20px]">
      <div>
        <div className="flex items-center py-[20px] md:py-[30px] lg:py-[40px] px-[10px]">
          <ArrowLeft className="  h-[20px] w-[20px]    md:h-[20px] md:w-[20px] lg:h-[30px] lg:w-[30px]" />
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
                  <tr key={index} className="w-full  shadow-lg rounded-[10px]">
                    <td className="px-[15px] py-[10px] font-semibold text-left text-[#000000CC] text-[14px] md:text-[16px] ">
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
