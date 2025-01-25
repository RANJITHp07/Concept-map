"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaUsers, FaHeart } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const sliderData = [
    {
      id: 1,
      name: "Stephen Burg",
      title: "Crime in scene",
      rating: "5.0(123)",
      image: "/HomeData/face.png",
      dot: "/HomeResult/star.svg",
      price: "100"
    },
    {
      id: 2,
      name: "Stephen Burg",
      title: "Crime in scene",
      rating: "5.0(123)",
      image: "/HomeData/face.png",
      dot: "/HomeResult/star.svg",
      price: "150"
    },
    {
      id: 3,
      name: "Stephen Burg",
      title: "Crime in scene",
      rating: "5.0(123)",
      image: "/HomeData/face.png",
      dot: "/HomeResult/star.svg",
      price: "200"
    },
    {
      id: 4,
      name: "Stephen Burg",
      title: "Crime in scene",
      rating: "5.0(123)",
      image: "/HomeData/face.png",
      dot: "/HomeResult/star.svg",
      price: "120"
    },
    {
      id: 5,
      name: "Stephen Burg",
      title: "Crime in scene",
      rating: "5.0(123)",
      image: "/HomeData/face.png",
      dot: "/HomeResult/star.svg",
      price: "180"
    },
    {
      id: 6,
      name: "Stephen Burg",
      title: "Crime in scene",
      rating: "5.0(123)",
      image: "/HomeData/face.png",
      dot: "/HomeResult/star.svg",
      price: "90"
    },
    {
      id: 7,
      name: "Sarah Miller",
      title: "Mystery Unveiled",
      rating: "4.9(98)",
      image: "/HomeData/face.png",
      dot: "/HomeResult/star.svg",
      price: "110"
    },
    {
      id: 8,
      name: "Michael Chen",
      title: "Detective Stories",
      rating: "4.8(156)",
      image: "/HomeData/face.png",
      dot: "/HomeResult/star.svg",
      price: "130"
    },
    {
      id: 9,
      name: "Emma Watson",
      title: "Cold Case Files",
      rating: "4.7(142)",
      image: "/HomeData/face.png",
      dot: "/HomeResult/star.svg",
      price: "140"
    },
    {
      id: 10,
      name: "James Wilson",
      title: "True Crime",
      rating: "4.9(167)",
      image: "/HomeData/face.png",
      dot: "/HomeResult/star.svg",
      price: "160"
    },
    {
      id: 11,
      name: "Laura Thompson",
      title: "Criminal Minds",
      rating: "4.8(134)",
      image: "/HomeData/face.png",
      dot: "/HomeResult/star.svg",
      price: "170"
    },
    {
      id: 12,
      name: "David Brown",
      title: "Murder Mystery",
      rating: "4.7(145)",
      image: "/HomeData/face.png",
      dot: "/HomeResult/star.svg",
      price: "190"
    },
    {
      id: 13,
      name: "Sofia Garcia",
      title: "Forensic Files",
      rating: "4.9(178)",
      image: "/HomeData/face.png",
      dot: "/HomeResult/star.svg",
      price: "200"
    },
    {
      id: 14,
      name: "Robert Lee",
      title: "Crime Scene",
      rating: "4.8(189)",
      image: "/HomeData/face.png",
      dot: "/HomeResult/star.svg",
      price: "220"
    },
    {
      id: 15,
      name: "Emily Davis",
      title: "Cold Cases",
      rating: "4.7(167)",
      image: "/HomeData/face.png",
      dot: "/HomeResult/star.svg",
      price: "180"
    },
    {
      id: 16,
      name: "William Taylor",
      title: "Detective Files",
      rating: "4.9(145)",
      image: "/HomeData/face.png",
      dot: "/HomeResult/star.svg",
      price: "150"
    },
    {
      id: 17,
      name: "Oliver White",
      title: "Criminal Cases",
      rating: "4.8(156)",
      image: "/HomeData/face.png",
      dot: "/HomeResult/star.svg",
      price: "170"
    },
    {
      id: 18,
      name: "Isabella Martinez",
      title: "Mystery Files",
      rating: "4.7(134)",
      image: "/HomeData/face.png",
      dot: "/HomeResult/star.svg",
      price: "140"
    }
  ];

function SearchResult() {
  const [followState, setFollowState] = useState<Record<number, boolean>>(
    sliderData.reduce(
      (acc, item) => ({
        ...acc,
        [item.id]: false,
      }),
      {}
    )
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(18);

  // Update itemsPerPage based on screen size
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(18);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(12);
      } else {
        setItemsPerPage(6);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  const toggleFollow = (id: number) => {
    setFollowState((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Calculate the items to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sliderData.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages
  const totalPages = Math.ceil(sliderData.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="pt-[10px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[10px] lg:gap-[20px] Home-result-gird">
        {currentItems.map((item, index) => (
          <Fade
            key={item.id}
            direction="up"
            triggerOnce
            delay={index * 100}
            duration={600}
          >
            <div className="border rounded-[30px] shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <div className="pl-[20px] py-[20px] flex justify-between">
                <div className="flex items-start">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded-full h-[40px] w-[40px] lg:h-[50px] lg:w-[50px] mr-[10px] object-cover border border-[rgba(254,201,97,1)]"
                  />
                  <div>
                    <h2 className="text-[14px] lg:text-[16px]">{item.name}</h2>
                    <p className="text-[14px] lg:text-[14px]">{item.title}</p>
                  </div>
                </div>
                <button
                  onClick={() => toggleFollow(item.id)}
                  className={`self-start py-[6px] px-[12px] rounded-tl-[15px] rounded-bl-[15px] border transition-colors text-[14px] ${
                    followState[item.id]
                      ? "bg-[rgb(246,170,22)] text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {followState[item.id] ? "Followed" : "Following"}
                </button>
              </div>

              <div className="px-[20px] pb-[20px] pt-[5px]">
                <div>
                  <p className="text-[14px]">
                    Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                    eu turpis molestie, dictum est a, mattis tellus. ....
                  </p>
                  <div className="flex items-center mt-[5px]">
                    <Image
                      src={item.dot}
                      alt="dot"
                      width={15}
                      height={15}
                      className="mr-[5px]"
                    />
                    <p className="text-[12px]">{item.rating}</p>
                  </div>
                  <div className="flex items-center justify-end pt-[10px]">
                  
                    <div className="inline-block px-[10px] py-[5px] bg-[rgba(246,170,22,1)] rounded-[5px]">
                      <h1 className="text-white">{item.price} rs</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-8 gap-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-[15px] py-[10px] rounded-lg text-[14px] ${
            currentPage === 1
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-[rgb(246,170,22)] text-white hover:bg-[rgb(226,150,2)]"
          }`}
        >
          Previous
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 rounded-lg ${
              currentPage === index + 1
                ? "bg-[rgb(246,170,22)] text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-[15px] py-[10px] rounded-lg text-[14px] ${
            currentPage === totalPages
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-[rgb(246,170,22)] text-white hover:bg-[rgb(226,150,2)]"
          }`}
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default SearchResult;