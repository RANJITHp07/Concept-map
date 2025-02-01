"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown, FileText } from "lucide-react";
import { Card, CardContent, CardHeader } from "@repo/ui/components/card";
import { Input } from "@repo/ui/components/input";
import { ShadcnButton } from "@repo/ui/components/ShadcnButton";
import { Textarea } from "@repo/ui/components/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/components/select";

export default function SynopsisWriter() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="py-4 flex items-start justify-center containers  px-4 sm:px-6 lg:px-[100px]">
      <Card className="w-full bg-white border-none">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-7 bg-[#FEF6EA]">
          <div className="flex items-center gap-3">
            <div className="bg-orange-400 p-3 rounded-full">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">New Synopsis</h2>
              <p className="text-sm text-gray-500">
                Create design for new project
              </p>
            </div>
          </div>
          <ShadcnButton
            variant="ghost"
            size="icon"
            className="text-gray-500"
            onClick={toggleExpand}
          >
            {isExpanded ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </ShadcnButton>
        </CardHeader>

        {isExpanded && (
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between mt-5">
              <h3 className="text-lg font-semibold">
                Type your Synopsis with yourself or with the help of AI
              </h3>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-md">
                <ShadcnButton
                  variant="outline"
                  className="bg-white text-orange-500 hover:bg-orange-50"
                >
                  <span className="mr-2">⚡</span> Use AI to write
                </ShadcnButton>
              </div>
            </div>

            <div className="space-y-6">
              <Textarea
                className="min-h-[200px] resize-none bg-gray-100 border-0"
                placeholder="Type here"
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Add Pricing</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                <Input placeholder="Add Price" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-end gap-3">
              <ShadcnButton className="bg-black hover:bg-black/90 text-white order-last sm:order-first">
                Save Now
              </ShadcnButton>
              <ShadcnButton className="w-full sm:w-auto bg-orange-400 hover:bg-orange-500 text-white">
                Publish Now
              </ShadcnButton>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
}
