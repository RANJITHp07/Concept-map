import { ArrowLeft, Star } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@repo/ui/components/avatar";
import Link from "next/link";
import Image from "next/image";
import apiHelper from "../../../lib/apiHelper";
import { apis } from "../../../lib/api";
import {
  genreShortsOption,
  genreTVOption,
  industryOptions,
} from "../../../lib/constant";
import Header from "@repo/ui/components/Header";
import ScriptSwiper from "./_component/scriptSwiper";

export default async function Page({ params }: any) {
  const { data } = await apiHelper(apis.getScriptDetails(params.id));

  const price = [
    { name: "Script", price: data?.script?.price },
    { name: "Story Board", price: data?.story_borad?.price },
    { name: "Synopsis", price: data?.synopsis?.price },
  ].filter((item) => item.price && item.price != 0);

  return (
    <div>
      <Header />
      <div className="px-12 py-5">
        {/* Header */}

        {/* Profile Section */}
        <div className="flex flex-col md:flex-row gap-4 items-start mb-8">
          <Avatar className="w-12 h-12 md:w-20 md:h-20">
            <AvatarImage
              src="/HomeNavbar/Ellipse 18.png"
              alt="Profile picture"
            />
            <AvatarFallback>BE</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-1">
              {data.userId.username}
            </h2>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-600 mb-4">
              <span>🌍 United Kingdom</span>
              <span>💬 I speak English</span>
              <span>✓ 139 orders completed</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-8">
          <p className="text-gray-600">
            {data.userId.username} is a talented and versatile writer with a
            flair for storytelling and a keen eye for detail. Skilled in
            crafting engaging articles, creative fiction, and persuasive copy,
            she brings a unique voice and passion to every project. With
            expertise in content creation, editing, and scriptwriting, Belle
            excels at connecting with audiences and delivering impactful
            narratives.
          </p>
        </div>

        {/* Script Content */}
        <div className="bg-[#FDF6E7] rounded-lg p-6 mb-8">
          <h3 className="font-semibold mb-4 text-2xl">{data.main_title}</h3>
          <p className=" text-gray-600">{data.description}...</p>
          <div className="mt-4 my-2 text-gray-700 flex gap-4 flex-row">
            {price.map((_price: any) => (
              <p key={_price.name}>
                <b>{_price.name}:</b> ₹{_price.price}{" "}
              </p>
            ))}
          </div>
          <div className="flex gap-2 my-2 pt-[10px] flex-wrap">
            <div className="flex items-center gap-2 px-[10px] lg:px-[16px] py-1  border  border-gray-700 rounded-full ">
              <span className="text-gray-700 text-[14px] lg:text-[16px]">
                {[...genreTVOption, ...genreShortsOption].find(
                  (option) => option.value === data.genre
                )?.name || "Other"}
              </span>
            </div>
            <div className="flex items-center gap-2 px-[10px] lg:px-[16px] py-1 border  border-gray-700  rounded-full">
              <span className="text-gray-700 text-[14px] lg:text-[16px]">
                {industryOptions.find(
                  (option) => option.value === data.industry_category
                )?.name || "Other"}
              </span>
            </div>
            {data.country.map((country: string) => (
              <div className="flex items-center gap-2 px-[10px] lg:px-[16px] py-1 border  border-gray-700  rounded-full">
                <span className="text-gray-700 text-[14px] lg:text-[16px]">
                  {country}
                </span>
              </div>
            ))}
            {data.state.map((country: string) => (
              <div className="flex items-center gap-2 px-[10px] lg:px-[16px] py-1 border  border-gray-700  rounded-full">
                <span className="text-gray-700 text-[14px] lg:text-[16px]">
                  {country}
                </span>
              </div>
            ))}
          </div>
          <div className="rounded-lg  relative mt-5">
            <div className="absolute cursor-pointer inset-0 backdrop-blur-sm  flex items-center justify-center flex-col rounded-lg">
              <div className="w-12 h-12 mb-2">
                <Image src="/lock.png" width={70} height={70} alt="lock" />
              </div>
              <span className="font-medium text-xl">Click to Purchase</span>
            </div>
            <div className="bg-[#FDF6E7] rounded-lg p-5 mb-8 mt-5">
              <h3 className="font-semibold mb-4 text-xl">Script 01</h3>
              <div className="mb-4 last:mb-0">
                <h4 className="font-semibold text-lg mb-2">Scene</h4>
                <p className=" text-gray-600">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source...
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="my-10 flex flex-col gap-5">
          <h1 className="text-xl font-semibold">
            Explore More Synopsis, Scripts, and Storyboards
          </h1>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <ScriptSwiper />
          </div>
        </div>

        {/* Reviews */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-xl">What people loved</h3>
            {/* <Button variant="link" className="text-gray-600">
            See all reviews
          </Button> */}
          </div>
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="border rounded-lg p-4">
                <div className="flex items-start gap-4">
                  <Avatar className="w-10 h-10">
                    <AvatarImage
                      src="/HomeNavbar/Ellipse 18.png"
                      alt="Reviewer"
                    />
                    <AvatarFallback>MW</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold">Mark walberg</h4>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <span>🌍 United States</span>
                          <div className="flex items-center">
                            {Array(5)
                              .fill(null)
                              .map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-4 h-4 fill-current text-yellow-400"
                                />
                              ))}
                            <span className="ml-1">5.0</span>
                          </div>
                        </div>
                      </div>
                      {/* <Button
                      variant="ghost"
                      size="icon"
                      className="text-gray-400"
                    >
                      <ArrowLeft className="w-4 h-4 rotate-180" />
                    </Button> */}
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      Eve is wonderful to work with! Delivers such high quality
                      storytelling and delivers fast! Honestly couldn't have a
                      better experience than with Eve. If you want high quality
                      work with a really kind person wh......
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
