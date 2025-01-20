import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

function HomeInfo() {
  const data = [
    {
      image: "/home/face.png",
      title: "Hello, Welcome Lexie Graham",
      description:
        "You have an finished job. Among them are 2 Scripts, 5 Storyboards, and 2 Synopses. Work for the week is very good.You have an finished job. Among them are 2 Scripts, 5 Storyboards, and 2 Synopses. Work for the week is very good",
    },
  ];

  const textData = [
    { title: "Total Post", numbers: "100" },
    { title: "Total Interested", numbers: "100" },
    { title: "Total Purchased", numbers: "128" },
  ];

  const rightData = [
    { title: "Following", number: 120, logo: "/home/info.svg" },
  ];

  return (
    <>
      <section className="space-y-[40px]">
        {/* First Section */}
        <Fade direction="up" triggerOnce>
          <div className="pt-[40px]">
            {data.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-[20px] lg:gap-[40px] p-[20px] rounded-[20px] shadow-lg"
                style={{
                  backgroundImage: "url('/home/newImg.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Left Profile Image */}
                <div className="flex justify-center">
                  <div className="overflow-hidden border-4 border-white rounded-full">
                    <Image
                      src={item.image}
                      alt="Profile Picture"
                      width={256}
                      height={256}
                      className="object-cover w-[180px] h-[180px] lg:w-[256px] lg:h-[256px]"
                    />
                  </div>
                </div>

                {/* Right Section with Title and Description */}
                <div className="text-white flex flex-col justify-center ">
                  <h2 className=" text-[36px] lg:text-[40px] leading-none text-start">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-[14px] lg:text-[18px] leading-auto text-start">
                    {item.description}
                  </p>

                  {/* New div with Right Arrow Icon */}
                  <div className=" mt-[10px] md:mt-[20px] lg:mt-[30px] md:mr-[30px] flex justify-center md:justify-end items-center cursor-pointer">
                    <FaArrowRight
                      size={25}
                      className="md:w-[25px] md:h-[25px]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Fade>

        {/* Second Section */}
        <Fade direction="up" triggerOnce>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-[20px] rounded-[10px]">
            {/* Left Section (8 columns) */}
            <div
              className="col-span-9 grid gap-5 rounded-[30px] shadow-lg"
              style={{
                backgroundImage: "url('/home/left.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="grid grid-cols-3 gap-[5px] md:gap-[10px] lg:gap-[20px] p-[20px]">
                {textData.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center text-center text-white rounded-[30px]"
                  >
                    <h2 className=" text-[10px] md:text-[14px] lg:text-[15px] leading-auto">
                      {item.title}
                    </h2>
                    <p className=" text-[28px] md:text-[40px] lg:text-[60px] leading-auto">
                      {item.numbers}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Section (4 columns) */}
            <div className="  col-span-3 grid gap-5 p-5 text-white rounded-[30px] bg-[rgba(246,170,22,1)] shadow-lg home-other-none">
              {rightData.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[auto_1fr] items-center justify-center gap-5 home-other-none"
                >
                  <div className="home-img-none ">
                    <Image
                      src={item.logo}
                      alt="Info Logo"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h2 className="text-[14px] lg:text-[15px] leading-auto">
                      {item.title}
                    </h2>
                    <p className="text-[40px] lg:text-[60px] leading-auto">
                      {item.number}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Fade>
      </section>
    </>
  );
}

export default HomeInfo;
