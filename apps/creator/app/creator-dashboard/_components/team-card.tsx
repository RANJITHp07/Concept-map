import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/components/card"
import Image from "next/image"

interface TeamMember {
  name: string
  role: string
  avatar: string
}

interface TeamCardProps {
  members: TeamMember[]
}

export function TeamCard({ members }: TeamCardProps) {
  return (
<Card className="transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-gray-100">
  <CardHeader>
    <CardTitle className="text-lg">Team</CardTitle>
  </CardHeader>
  <CardContent className="space-y-4">
    {members.map((member) => (
      <div
        key={member.name}
        className="flex items-center space-x-4 group transition-all duration-300 transform hover:scale-105"
      >
        <Image
          src={member.avatar || "/placeholder.svg"}
          alt={member.name}
          width={50}
          height={50}
          className="rounded-full transform transition-transform duration-300 group-hover:scale-110"
        />
        <div className="transition-all duration-300 group-hover:scale-105">
          <p className="text-sm font-medium">{member.name}</p>
          <p className="text-xs text-muted-foreground">{member.role}</p>
        </div>
      </div>
    ))}
  </CardContent>
</Card>


  )
}

