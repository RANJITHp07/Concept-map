import { Sidebar } from "./_components/sidebar";
import { StatsCard } from "./_components/stats-card";
import { ProjectCard } from "./_components/project-card";
import { RightSidebar } from "./_components/right-sidebar";
import { Bell, Search, Target, Users, DollarSign, Heart } from "lucide-react";
import Button from "@repo/ui/components/Button";
import { Input } from "@repo/ui/components/input";
import Image from "next/image";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-[#FFF8F0]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="bg-white p-6 flex items-center justify-between">
          <div className="flex-1 items-center gap-4">
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <span className="text-sm text-muted-foreground">
              Thursday, 25 February 2024
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-[rgba(246,170,22,1)] text-white px-4 py-1.5 rounded-lg text-sm w-32">
              Jan - Feb 2024
            </div>
            {/* <Button actionName="Date" type="button">
              <Bell className="h-5 w-5" />
            </Button> */}
          </div>
        </header>

        <main className="flex-1 p-6 space-y-6">
          <div className="bg-[rgba(246,170,22,1)] rounded-xl p-6 flex items-center gap-6 text-white">
            <Image
              src="/HomeNavbar/Ellipse 18.png?height=80&width=80"
              alt="Profile"
              width={80}
              height={80}
              className="rounded-full transition-transform duration-300 hover:scale-110"
            />
            <div>
              <h2 className="text-2xl font-bold mb-2">Hello, Aidan Edwards</h2>
              <p className="text-orange-50">
                You have an finished job. Among them are 2 Story board & scripts
                and 2 story Work for this week is
              </p>
            </div>
          </div>

          <div className="grid grid-cols-4 grid-rows-2 gap-4">
            <StatsCard
              title="Total projects"
              value="500"
              icon={<Target className="h-6 w-6 text-orange-500" />}
              showGraph={true}
              large={true}
            />
            <StatsCard
              title="Total Interested"
              value="25"
              icon={<Heart className="h-6 w-6 text-orange-500" />}
            />
            <StatsCard
              title="Team"
              value="05"
              icon={<Users className="h-6 w-6 text-orange-500" />}
            />
            <StatsCard
              title="Your Earnings"
              value="$500"
              icon={<DollarSign className="h-6 w-6 text-orange-500" />}
            />
            <StatsCard
              title="Clients"
              value="10+"
              icon={<Users className="h-6 w-6 text-orange-500" />}
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="flex items-center justify-between gap-4">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Start typing..."
                  className="pl-9 rounded-full border-gray-200 w-full"
                />
              </div>
              {/* <div className="flex items-center gap-4">
                {["3 Story board", "5 Scripts", "3 story"].map((filter) => (
                  <Button actionName="Story board" type="button" key={filter}>
                    {filter}
                  </Button>
                ))}
              </div> */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ProjectCard
                scriptNumber="1"
                title="Close in scene"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
                likes={10}
                comments={15}
                shares={20}
              />
              <ProjectCard
                scriptNumber="2"
                title="The Gift of the Magi"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
                likes={8}
                comments={12}
                shares={23}
              />
              <ProjectCard
                scriptNumber="3"
                title="Come in scene"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
                likes={15}
                comments={20}
                shares={18}
              />
            </div>
          </div>
        </main>
      </div>

      <RightSidebar />
    </div>
  );
}
