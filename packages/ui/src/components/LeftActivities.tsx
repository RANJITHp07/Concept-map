import React from "react";
import Image from "next/image";

function LeftActivities() {
  interface ActivityData {
    logo: string;
    title: string;
  }

  const data: ActivityData[] = [
    {
      logo: "/LeftActivity/activity.svg",
      title: "You started to follow Stephen Burg",
    },
    {
      logo: "/LeftActivity/activity.svg",
      title: "You liked John Doe's post",
    },
    {
      logo: "/LeftActivity/activity.svg",
      title: "You started to follow Stephen Burg",
    },
    {
      logo: "/LeftActivity/activity.svg",
      title: "You liked John Doe's post",
    },
    {
      logo: "/LeftActivity/activity.svg",
      title: "You started to follow Stephen Burg",
    },
    {
      logo: "/LeftActivity/activity.svg",
      title: "You liked John Doe's post",
    },
  ];

  return (
    <>
      <section className="pt-[20px]">
        <div>
          <h1 className="text-[21px] font-bold">Activities</h1>

          <div className="pt-[10px]">
            {data.map((activity, index) => (
              <div
                key={index}
                className="grid grid-cols-[auto_1fr] gap-[10px] items-center border rounded-[14px] py-[10px] px-[15px] mb-[10px]"
              >
                {/* Logo Container */}
                <div className="h-[44px] w-[44px] rounded-full flex items-center justify-center bg-[rgba(246,170,22,1)] overflow-hidden">
                  <Image
                    src={activity.logo}
                    alt="Activity Logo"
                    width={24}
                    height={24}
                  />
                </div>

                {/* Title */}
                <div className="text-[15px] font-medium">{activity.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default LeftActivities;
