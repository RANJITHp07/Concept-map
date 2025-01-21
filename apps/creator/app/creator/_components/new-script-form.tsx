"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, FileEdit } from 'lucide-react'
import { Card, CardContent, CardHeader } from "@repo/ui/components/card"
import { Input } from "@repo/ui/components/input"
import { Button } from "@repo/ui/components/Button"
import { Textarea } from "@repo/ui/components/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/components/select"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@repo/ui/components/collapsible"

export function ScriptWriter() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="py-4 flex items-start justify-center containers px-4 sm:px-6 lg:px-[100px]">
      <Card className="w-full bg-white border-none">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-7 bg-[#FEF6EA]">
            <div className="flex items-center gap-3">
              <div className="bg-orange-400 p-3 rounded-full">
                <FileEdit className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">New Script</h2>
                <p className="text-sm text-gray-500">
                  Create design for new project
                </p>
              </div>
            </div>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-500">
                {isOpen ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </Button>
            </CollapsibleTrigger>
          </CardHeader>

          <CollapsibleContent>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between mt-5">
                <h3 className="text-lg font-semibold">
                  Type your Script with yourself or with the help of AI
                </h3>
                <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-md">
                  <Button
                    variant="outline"
                    className="bg-white text-orange-500 hover:bg-orange-50"
                  >
                    <span className="mr-2">⚡</span> Use AI to write
                  </Button>
                </div>
              </div>

              <div className="space-y-6 bg-gray-100 p-6 rounded-lg">
                {[1, 2, 3].map((scene) => (
                  <div key={scene} className="space-y-2">
                    <h4 className="font-medium">Scene {scene}</h4>
                    <Textarea
                      className="min-h-[120px] resize-none bg-white border-0"
                      defaultValue="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
                    />
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Add Pricing</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose Currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usd">USD</SelectItem>
                      <SelectItem value="eur">EUR</SelectItem>
                      <SelectItem value="gbp">GBP</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input placeholder="Add Price" type="number" />
                  <Button className="bg-black hover:bg-black/90 text-white">
                    Save Now
                  </Button>
                </div>
              </div>

             
            </CardContent>
          </CollapsibleContent>
        </Collapsible>
      </Card>
    </div>
  )
}