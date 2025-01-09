import React from "react";
import Image from "next/image";

function HomeNavbar() {
  const data = [
    {
      notification: "/HomeNavbar/notification 1.svg",
      profile: "/HomeNavbar/Ellipse 18.png",
      downArrow: "/HomeNavbar/down 1.png",
    },
  ];

  return (
    <>
      <section className="px-[10px]">
        
          {/* Navigation links */}
          <div className="flex justify-between items-center">
            <ul className="flex gap-10">
              <li className="text-[22px]">About Us</li>
              <li className="text-[22px]">Why Us</li>
              <li className="text-[22px]">Contact Us</li>
            </ul>
            {/* Notification and profile */}
            <div className="flex items-center gap-4">
              {data.map((item, index) => (
                <React.Fragment key={index}>
                  {/* Notification Icon */}
                  <div>
                    <Image
                      src={item.notification}
                      alt="Notification Icon"
                      width={50}
                      height={50}
                    />
                  </div>
                  {/* Profile Icon */}
                  <div>
                    <Image
                      src={item.profile}
                      alt="Profile Icon"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                  </div>
                  {/* Down Arrow */}
                  <div>
                    <Image
                      src={item.downArrow}
                      alt="Down Arrow"
                      width={34}
                      height={34}
                    />
                  </div>
                </React.Fragment>
              ))}
            </div>
       
            </div>



      
      </section>
    </>
  );
}

export default HomeNavbar;
