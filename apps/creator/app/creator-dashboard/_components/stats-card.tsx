import { Card } from "@repo/ui/components/card"

interface StatsCardProps {
  title: string
  value: string
  icon: React.ReactNode
  showGraph?: boolean
  large?: boolean
}

export function StatsCard({ title, value, icon, showGraph = false, large = false }: StatsCardProps) {
  return (
    <Card className={`p-4 bg-white rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 ${large ? "col-span-2 row-span-2" : ""}`}>

      {showGraph && (
        <div className="stats-graph w-full h-32 mb-4">
          <svg className="w-full h-full">
            <path d="M0 80 C 40 70, 80 40, 120 30 S 160 20, 200 10" fill="none" stroke="orange" strokeWidth="2" />
          </svg>
        </div>
      )}
      <div className="flex items-center gap-5">
        <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center">{icon}</div>
        <div>
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <p className={`font-semibold ${large ? "text-4xl" : "text-2xl"}`}>{value}</p>
        </div>
      </div>
    </Card>
  )
}

