import { ArrowLeft, Star } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@repo/ui/components/avatar";
import Button from "@repo/ui/components/Button";
import { Tabs, TabsList, TabsTrigger } from "@repo/ui/components/tabs";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <div className="p-12">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <Link href="#" className="hover:opacity-80">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-xl font-semibold">Details Page</h1>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col md:flex-row gap-4 items-start mb-8">
        <Avatar className="w-12 h-12 md:w-20 md:h-20">
          <AvatarImage src="/HomeNavbar/Ellipse 18.png" alt="Profile picture" />
          <AvatarFallback>BE</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-1">Belle Erickson</h2>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-600 mb-4">
            <span>🌍 United Kingdom</span>
            <span>💬 I speak English</span>
            <span>✓ 139 orders completed</span>
          </div>
          <Tabs defaultValue="synopsis" className="w-full">
            <TabsList className="bg-transparent rounded-none p-0 h-auto">
              <TabsTrigger
                value="synopsis"
                className="bg-[#FDF6E7] data-[state=active]:bg-[#FDF6E7] rounded-full px-4 py-1 text-sm"
              >
                Synopsis
              </TabsTrigger>
              <TabsTrigger
                value="storyboard"
                className="bg-[#FDF6E7] data-[state=active]:bg-[#FDF6E7] rounded-full px-4 py-1 text-sm ml-2"
              >
                Story board
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Description */}
      <div className="mb-8">
        <p className="text-gray-600">
          Belle Erickson is a talented and versatile writer with a flair for
          storytelling and a keen eye for detail. Skilled in crafting engaging
          articles, creative fiction, and persuasive copy, she brings a unique
          voice and passion to every project. With expertise in content
          creation, editing, and scriptwriting, Belle excels at connecting with
          audiences and delivering impactful narratives.
        </p>
      </div>

      {/* Script Content */}
      <div className="bg-[#FDF6E7] rounded-lg p-6 mb-8">
        <h3 className="font-semibold mb-4 text-2xl">The Whispering Fog</h3>
        <p className=" text-gray-600">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source...
        </p>
        <div className="flex gap-2 my-2 pt-[10px] flex-wrap">
          <div className="flex items-center gap-2 px-[10px] lg:px-[16px] py-1  border  border-gray-700 rounded-full ">
            <span className="text-gray-700 text-[14px] lg:text-[16px]">
              Horror
            </span>
          </div>
          <div className="flex items-center gap-2 px-[10px] lg:px-[16px] py-1 border  border-gray-700  rounded-full">
            <span className="text-gray-700 text-[14px] lg:text-[16px]">
              Media Entertainment
            </span>
          </div>
          <div className="flex items-center gap-2 px-[10px] lg:px-[16px] py-1 border  border-gray-700  rounded-full">
            <span className="text-gray-700 text-[14px] lg:text-[16px]">
              Script
            </span>
          </div>
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
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source...
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="my-10 flex flex-col gap-5">
        <h1 className="text-xl font-semibold">
          Explore More Synopses, Scripts, and Storyboards
        </h1>
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border rounded-lg  relative">
              <div className="absolute inset-0 bg-white/50 backdrop-blur-sm  flex items-center justify-center flex-col rounded-lg">
                <div className="w-12 h-12 mb-2">
                  <Image src="/lock.png" width={50} height={50} alt="lock" />
                </div>
                <span className="font-medium text-lg">Click to Purchase</span>
              </div>
              <h4 className="font-semibold mb-4 bg-[#C1C1C1] px-6 py-4 rounded-t-lg text-xl">
                Story Board
              </h4>
              <p className="text-sm text-gray-600 mb-4 px-6 py-4">
                A plan video with the characters and situation of your choice.
              </p>
              <div className="flex justify-end px-6 text-xl pb-4">
                <span className="font-semibold text-2xl">$450</span>
              </div>
            </div>
          ))}
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
  );
}
