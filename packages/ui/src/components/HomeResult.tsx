import React from "react";
import Image from "next/image";

const sliderData = [
  {
    id: 1,
    name: "Stephen Burg",
    title: "Crime in scene",
    rating: "5.0(123)",
    image: "/HomeData/face.png",
    dot: "/HomeResult/star.svg",
    bookmark: "/HomeResult/right.svg",
  },
  {
    id: 2,
    name: "Stephen Burg",
    title: "Crime in scene",
    rating: "5.0(123)",
    image: "/HomeData/face.png",
    dot: "/HomeResult/star.svg",
    bookmark: "/HomeResult/right.svg",
  },
  {
    id: 3,
    name: "Stephen Burg",
    title: "Crime in scene",
    rating: "5.0(123)",
    image: "/HomeData/face.png",
    dot: "/HomeResult/star.svg",
    bookmark: "/HomeResult/right.svg",
  },
  {
    id: 4,
    name: "Stephen Burg",
    title: "Crime in scene",
    rating: "5.0(123)",
    image: "/HomeData/face.png",
    dot: "/HomeResult/star.svg",
    bookmark: "/HomeResult/right.svg",
  },
  {
    id: 5,
    name: "Stephen Burg",
    title: "Crime in scene",
    rating: "5.0(123)",
    image: "/HomeData/face.png",
    dot: "/HomeResult/star.svg",
    bookmark: "/HomeResult/right.svg",
  },
  {
    id: 6,
    name: "Stephen Burg",
    title: "Crime in scene",
    rating: "5.0(123)",
    image: "/HomeData/face.png",
    dot: "/HomeResult/star.svg",
    bookmark: "/HomeResult/right.svg",
  },
  
];

function HomeResult() {
  return (
    <>
      <section className="py-[30px]">
      <div className="flex items-center justify-between">
          <h1 className="text-[20px] font-bold">100+ Results</h1>
          <button className="py-[5px] px-[15px] border-2 text-[#A0A0A0]] border-[#A0A0A0] text-[12px] rounded-[10px]">
            View All
          </button>
        </div>

        <div className="pt-[50px]">
          <div className="grid grid-cols-3 gap-[20px]">
            {sliderData.map((item) => (
              <div key={item.id} className="border rounded-[30px]">
                <div className="pl-[20px] py-[20px] flex justify-between">
                  {/* Image and Content */}
                  <div className="flex items-start">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={40}
                      height={40}
                      className="rounded-full h-[30px] w-[30px] mr-[10px] object-cover border border-[rgba(254,201,97,1)]"
                    />
                    <div>
                      <h2 className="text-[14px]">{item.name}</h2>
                      <p className="text-[12px]">{item.title}</p>
                    </div>
                  </div>
                  {/* Button */}
                  <button className="self-start py-[6px]  text-sm bg-[#FEC961] pl-[20px] px-[7px] text-white  rounded-tl-[15px] rounded-bl-[15px] ">
                    Following
                  </button>
                </div>

                <div className="px-[20px] pb-[20px] pt-[5px]">
                  <div>
                    <p className="text-[15px]">
                      Torem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam eu turpis molestie, dictum est a, mattis tellus. ....
                    </p>
                    <div className="flex items-center justify-between pt-[10px]">
                      <div className="flex items-center ">
                      <Image
                          src={item.dot}
                          alt="dot"
                          width={15}
                          height={15}
                          className="mr-[5px]"
                        />
                        <p className="text-[10px]">{item.rating}</p>
                    
                      </div>
                      <div className="inline-block p-2 rounded-[100px] bg-[rgba(246,170,22,1)]">
                        <Image
                          src={item.bookmark}
                          alt="bookmark"
                          width={18}
                          height={18}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeResult;
