import React from "react";
import Image from "next/image";
import LeftMenu from "@repo/ui/components/LeftMenu";
import RightMenu from "@repo/ui/components/RightMenu";
import LeftProfile from "@repo/ui/components/LeftProfile";

function Home() {
  return (
    <section className=" pt-[20px]">
      <div className="flex w-full  ">
        <div className="w-[20%] ">
          <div className="flex justify-center">
            <Image
              alt="logo"
              src={"/logo.png"}
              width={100}
              height={100}
              className="w-[276px] h-[57px]"
            />
          </div>
          <LeftMenu />
          <LeftProfile />
        </div>

        <div className="w-[60%] bg-gray-300 p-4 ">
          <p>hiiii</p>
        </div>

        {/* Right section (20% width) */}
        <div className="w-[20%] p-4 bg-black">{/* <RightMenu /> */}</div>
      </div>
    </section>
  );
}

export default Home;

// import React from 'react';
// import Image from "next/image";

// function Home() {
//   return (
//     <>
//       <section className="pt-5 w-full">
//         <div className="flex w-full">
//           {/* Left Section - 20% */}
//           <div className="w-1/5 bg-gray-200">
//             <h1>niyas</h1>
//           </div>
//           {/* Center Section - 60% */}
//           <div className="w-3/5 bg-gray-400 text-center">
//             <p>Content here</p>
//           </div>
//           {/* Right Section - 20% */}
//           <div className="w-1/5 bg-gray-200">
//             <h1>niyas</h1>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Home;
