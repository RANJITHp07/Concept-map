import { ArrowLeft, Star } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@repo/ui/components/avatar"
import { Button } from '@repo/ui/components/Button'
import { Tabs,TabsList, TabsTrigger } from "@repo/ui/components/tabs"
import Link from "next/link"

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
            <TabsList className="bg-transparent border-b rounded-none p-0 h-auto">
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
        <h3 className="text-xl text-gray-500 mb-4">
          I will provide industry standard script coverage and development notes on your script
        </h3>
        <p className="text-gray-600">
          Eve is wonderful to work with! Delivers such high quality storytelling and delivers fast! Honestly couldn't have a better experience than with Eve. If you want high quality work with a really kind person wh......
        </p>
      </div>

      {/* Pricing Tiers */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="border rounded-lg p-6">
          <h4 className="font-semibold mb-4">Script</h4>
          <p className="text-sm text-gray-600 mb-4">
            A short story with the characters and situation of your choice.
          </p>
          <div className="flex justify-between items-center">
            <Button variant="default" className="bg-[#F7AB0A] hover:bg-[#F7AB0A]/90 text-black">
              View Script
            </Button>
            <span className="font-semibold">$250</span>
          </div>
        </div>
        {[1, 2].map((i) => (
          <div key={i} className="border rounded-lg p-6 relative">
            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center flex-col">
              <div className="w-12 h-12 mb-2">🔒</div>
              <span className="font-medium">Click to Purchase</span>
            </div>
            <h4 className="font-semibold mb-4">Story Board</h4>
            <p className="text-sm text-gray-600 mb-4">
              A plan video with the characters and situation of your choice.
            </p>
            <div className="flex justify-end">
              <span className="font-semibold">${i === 1 ? "450" : "130"}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Script Content */}
      <div className="bg-[#FDF6E7] rounded-lg p-6 mb-8">
        <h3 className="font-semibold mb-4">Script 01</h3>
        {[1, 2, 3].map((i) => (
          <div key={i} className="mb-6 last:mb-0">
            <h4 className="font-semibold mb-2">Scene {i}</h4>
            <p className="text-sm text-gray-600">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
            </p>
          </div>
        ))}
      </div>

      {/* Reviews */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold">What people loved</h3>
          <Button variant="link" className="text-gray-600">
            See all reviews
          </Button>
        </div>
        <div className="space-y-4">
          {[1, 2].map((i) => (
            <div key={i} className="border rounded-lg p-4">
              <div className="flex items-start gap-4">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/HomeNavbar/Ellipse 18.png" alt="Reviewer" />
                  <AvatarFallback>MW</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold">Mark walberg</h4>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span>🌍 United States</span>
                        <div className="flex items-center">
                          {Array(5).fill(null).map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                          ))}
                          <span className="ml-1">5.0</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="text-gray-400">
                      <ArrowLeft className="w-4 h-4 rotate-180" />
                    </Button>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Eve is wonderful to work with! Delivers such high quality storytelling and delivers fast! Honestly couldn't have a better experience than with Eve. If you want high quality work with a really kind person wh......
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

