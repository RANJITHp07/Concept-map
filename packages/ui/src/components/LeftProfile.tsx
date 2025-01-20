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
    <section className="leftMenu-hidden">
      <div className="rounded-[20px] p-[15px] bg-[rgba(254,201,97,0.22)] left-profile-padding">
        <div className="grid grid-cols-[1fr_auto] items-center mb-[20px]">
          <h1 className="text-[18px] leading-[25px] ">Following</h1>
          <h1 className="text-[15px] leading-[17px] text-blue-500 cursor-pointer">
            View All
          </h1>
        </div>

        {/* Data List */}
        <div className="grid gap-[10px]">
          {data.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[auto_1fr_auto] items-center gap-[10px] left-profile-gap cursor-pointer hover:bg-[#F6AA16] hover:shadow-md hover:scale-[1.02] hover:rounded-[10px] transition-all duration-200 ease-in-out hover:text-[white]"
            >
              {/* Logo */}
              <Image
                src={item.logo}
                alt={`${item.title} Logo`}
                width={45}
                height={45}
                className="rounded-full w-[50px] h-[50px] object-cover border-[2px] border-[rgba(246,170,22,1)] leftProfile-image"
              />

              {/* Title and Role */}
              <div className="hover:text-[white]">
                <h2 className="text-[14px] left-profile-title ">
                  {item.title}
                </h2>
                <p className="text-[14px]    left-profile-para">
                  {item.role}
                </p>
              </div>

              {/* Icon */}
              <Image
                className="left-profile-arrow"
                src={item.icon}
                alt="Arrow Icon"
                width={18}
                height={18}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LeftProfile;

