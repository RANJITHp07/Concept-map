import Image from "next/image"
import { Card } from "@repo/ui/components/card"
import { ChevronRight } from "lucide-react"

export function RightSidebar() {
  const tasks = [
    {
      title: "New Script",
      description: "Create a new script project",
      icon: "📝",
    },
    {
      title: "Story board",
      description: "Starting story board today",
      icon: "🎨",
    },
    {
      title: "Layout",
      description: "Make a new design layout",
      icon: "📐",
    },
  ]

  return (
    <div className="w-80 bg-white p-6 flex flex-col gap-6">
      <div className="text-sm text-left">
        <span className="text-muted-foreground">My Profile</span>
        <div className="text-xs text-orange-500">You're Progress</div>
      </div>

      <div className="text-center">
        <div className="relative inline-block profile-dots">
          <Image
            src="/HomeNavbar/Ellipse 18.png?height=100&width=100"
            alt="Aidan Edwards"
            width={100}
            height={100}
            className="rounded-full border-4 border-white shadow-lg"
          />
        </div>
        <h2 className="font-semibold mt-4">Aidan Edwards</h2>
      </div>

      <Card className="bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
  <div className="p-4">
    <div className="flex items-center justify-between mb-4">
      <h3 className="font-semibold">Today</h3>
      <button className="text-xs text-orange-500">View All</button>
    </div>
    <div className="space-y-4">
      {tasks.map((task) => (
        <div
          key={task.title}
          className="flex items-center justify-between group cursor-pointer transition-all duration-300 hover:bg-gray-50 p-2 rounded-lg"
        >
          <div className="flex items-center gap-3">
            <div className="bg-orange-100 w-10 h-10 rounded-lg flex items-center justify-center text-lg">
              {task.icon}
            </div>
            <div>
              <p className="font-medium text-sm">{task.title}</p>
              <p className="text-xs text-muted-foreground">{task.description}</p>
            </div>
          </div>
          <ChevronRight className="h-5 w-5 text-black-500 group-hover:opacity-100 transition-opacity" />
        </div>
      ))}
    </div>
  </div>
</Card>


<Card className="bg-orange-100 shadow-sm transition-all duration-300 hover:shadow-lg">
  <div className="p-4">
    <div className="flex items-center justify-between mb-4">
      <h3 className="font-semibold">Team</h3>
      <button className="text-xs text-orange-500 hover:text-orange-700 transition-colors">
        View All
      </button>
    </div>
    <div className="space-y-4">
      {[
        { name: "Jeffery Farley", role: "Senior Designer" },
        { name: "Pan Myung-Dae", role: "Writer" },
      ].map((member) => (
        <div
          key={member.name}
          className="flex items-center gap-3 group cursor-pointer transition-all duration-300 transform hover:scale-105"
        >
          <Image
            src="/HomeNavbar/Ellipse 18.png?height=40&width=40"
            alt={member.name}
            width={40}
            height={40}
            className="rounded-full transition-transform duration-300 group-hover:scale-110"
          />
          <div className="transition-all duration-300 group-hover:scale-105">
            <p className="font-medium text-sm">{member.name}</p>
            <p className="text-xs text-muted-foreground">{member.role}</p>
          </div>
          <ChevronRight className="h-5 w-5 text-black-500 ml-auto transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      ))}
    </div>
  </div>
</Card>

    </div>
  )
}

