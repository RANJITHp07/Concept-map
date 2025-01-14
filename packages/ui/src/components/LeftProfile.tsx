import Image from "next/image";

function LeftProfile() {
  interface MenuItem {
    logo: string;
    title: string;
    role: string;
    icon: string;
  }

  const data: MenuItem[] = [
    {
      logo: "/leftProfile/face.png",
      title: "Benton Hurley",
      role: "Writer",
      icon: "/leftProfile/right.svg",
    },
    {
      logo: "/leftProfile/face.png",
      title: "Benton Hurley",
      role: "Writer",
      icon: "/leftProfile/right.svg",
    },
    {
      logo: "/leftProfile/face.png",
      title: "Benton Hurley",
      role: "Writer",
      icon: "/leftProfile/right.svg",
    },
    {
      logo: "/leftProfile/face.png",
      title: "Benton Hurley",
      role: "Writer",
      icon: "/leftProfile/right.svg",
    },
  ];

  return (
    <section className="pt-[20px]">
      <div className="rounded-[28px] p-[20px] bg-[rgba(254,201,97,0.22)]">
 
        <div className="flex justify-between items-center mb-[5px]">
          <h1 className="text-[21px]  font-bold">Following</h1>
          <h1 className="text-[12px]  text-blue-500 cursor-pointer">
            View All
          </h1>
        </div>

        {/* Data List */}
        <div className="pt-[5px]">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-[15px] mt-[20px]">
              {/* Logo */}
              <Image
                src={item.logo}
                alt={`${item.title} Logo`}
                width={40}
                height={40}
                className="rounded-full w-[40px] h-[40px] object-cover border-[2px] border-[rgba(246,170,22,1)]"
              />

              {/* Title and Role */}
              <div className="flex-1">
                <h2 className="text-[17px] ">{item.title}</h2>
                <p className="text-[15px] text-gray-600">{item.role}</p>
              </div>

              {/* Icon */}
              <Image src={item.icon} alt="Arrow Icon" width={25} height={25} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LeftProfile;
