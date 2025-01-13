import React from "react";
import Image from "next/image";

function HomeInfo() {
  const data = [
    {
      image: "/home/face.png",
      title: "Hello, Welcome Lexie Graham",
      description:
        "You have an finished job. Among them are 2 Scripts, 5 Storyboards, and 2 Synopses. Work for the week is very good.",
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
      <section className="space-y-12">
        {/* First Section */}
        <div className="pt-12">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-10 p-8 rounded-2xl h-72"
              style={{
                backgroundImage: "url('/home/newImg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Left Profile Image */}
              <div className="flex-shrink-0 w-64 h-64 overflow-hidden border-4 border-white rounded-full">
                <Image
                  src={item.image}
                  alt="Profile Picture"
                  width={256}
                  height={256}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Right Section with Title and Description */}
              <div className="flex-grow text-white">
                <h2 className="text-4xl font-bold leading-tight">{item.title}</h2>
                <p className="mt-3 text-lg">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Second Section */}
        <div className="flex gap-5 rounded-lg">
          {/* Left Section - 70% */}
          <div
            className="flex flex-grow flex-col gap-5 rounded-[30px]"
            style={{
              backgroundImage: "url('/home/left.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex justify-between gap-5 p-5 pt-[30px]">
              {textData.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center w-1/3 text-center text-white rounded-lg"
                >
                  <h2 className="text-[15px]">{item.title}</h2>
                  <p className="text-[60px]">{item.numbers}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - 30% */}
          <div
            className="flex flex-shrink-0 flex-col gap-5 w-1/3 p-5 text-white rounded-[30px] bg-[rgba(246,170,22,1)]"
          >
            {rightData.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-evenly w-full"
              >
                <div className="flex-shrink-0">
                  <Image src={item.logo} alt="Info Logo" width={64} height={64} />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-[20px]">{item.title}</h2>
                  <p className="text-[60px]">{item.number}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeInfo;
