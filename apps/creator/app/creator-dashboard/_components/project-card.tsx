import { Card } from "@repo/ui/components/card"
import { Heart, MessageCircle, Share2 } from "lucide-react"

interface ProjectCardProps {
  scriptNumber: string
  title: string
  description: string
  likes: number
  comments: number
  shares: number
}

export function ProjectCard({ scriptNumber, title, description, likes, comments, shares }: ProjectCardProps) {
  return (
    <Card className="p-6 bg-white rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105">
      <div className="text-sm text-muted-foreground mb-2">Script {scriptNumber}</div>
      <h3 className="font-medium mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-6">{description}</p>
      <div className="flex items-center space-x-6">
        <button className="flex items-center space-x-1 text-muted-foreground hover:text-orange-500">
          <Heart className="h-4 w-4" />
          <span className="text-sm">{likes}</span>
        </button>
        <button className="flex items-center space-x-1 text-muted-foreground hover:text-orange-500">
          <MessageCircle className="h-4 w-4" />
          <span className="text-sm">{comments}</span>
        </button>
        <button className="flex items-center space-x-1 text-muted-foreground hover:text-orange-500">
          <Share2 className="h-4 w-4" />
          <span className="text-sm">{shares}</span>
        </button>
      </div>
    </Card>
  )
}

