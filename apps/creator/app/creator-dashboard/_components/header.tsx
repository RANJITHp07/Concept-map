import { Bell } from "lucide-react";
import Button from "@repo/ui/components/Button";

export function Header() {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <span className="text-sm text-muted-foreground">
          Thursday, 25 February 2024
        </span>
      </div>
      <div className="flex items-center space-x-4">
        <div className="bg-[rgba(246,170,22,1)] text-white px-4 py-1 rounded-md text-sm">
          Jan - Feb 2024
        </div>
        <Button actionName="Date" type="button">
          <Bell className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
