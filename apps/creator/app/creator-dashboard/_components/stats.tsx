import { Card } from "@repo/ui/components/card"
import { Users, Target, DollarSign, Heart } from "lucide-react"

export function Stats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card className="p-4 flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Total Projects</p>
          <p className="text-2xl font-bold">500</p>
        </div>
        <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center">
          <Target className="h-6 w-6 text-orange-500" />
        </div>
      </Card>
      <Card className="p-4 flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Total Interested</p>
          <p className="text-2xl font-bold">25</p>
        </div>
        <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center">
          <Heart className="h-6 w-6 text-orange-500" />
        </div>
      </Card>
      <Card className="p-4 flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Team</p>
          <p className="text-2xl font-bold">05</p>
        </div>
        <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center">
          <Users className="h-6 w-6 text-orange-500" />
        </div>
      </Card>
      <Card className="p-4 flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Your Earnings</p>
          <p className="text-2xl font-bold">$500</p>
        </div>
        <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center">
          <DollarSign className="h-6 w-6 text-orange-500" />
        </div>
      </Card>
    </div>
  )
}

