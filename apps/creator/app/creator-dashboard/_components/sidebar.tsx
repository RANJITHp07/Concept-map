import Link from "next/link";
import Image from "next/image";
import {
  BarChart2,
  FileText,
  Users,
  Briefcase,
  FolderClosed,
  LayoutIcon,
  Settings,
  Upload,
  Plus,
} from "lucide-react";
import { Button } from "@repo/ui/components/Button";
import LeftMenu from "@repo/ui/components/LeftMenu";

export function Sidebar() {
  return (
    <div className="w-64 bg-white p-6 flex flex-col">
      <div className="flex justify-center my-2">
        <Image
          alt="logo"
          src={"/logo.png"}
          width={230}
          height={100}
          className="w-[230px] h-[40px]"
        />
      </div>
      <div className="mb-8">
        {/* <Image src="/logo_.png?height=32&width=150" alt="Concepts Map" width={150} height={32} className="mb-8" /> */}
        {/* <nav className="space-y-2">
          <Button
            variant="secondary"
            className="w-full justify-start bg-orange-100 text-orange-500 hover:bg-orange-200"
            asChild
          >
            <Link href="/dashboard">
              <BarChart2 className="mr-2 h-4 w-4" />
              Dashboard
            </Link>
          </Button>
          {[
            { icon: FileText, label: "Reports" },
            { icon: Users, label: "Profile" },
            { icon: Briefcase, label: "Contracts" },
            { icon: FileText, label: "Invoices" },
            { icon: FolderClosed, label: "Projects" },
            { icon: LayoutIcon, label: "Tasks" },
            { icon: Settings, label: "Settings" },
          ].map((item) => (
            <Button key={item.label} variant="ghost" className="w-full justify-start" asChild>
              <Link href={`/${item.label.toLowerCase()}`}>
                <item.icon className="mr-2 h-4 w-4" />
                {item.label}
              </Link>
            </Button>
          ))}
        </nav> */}
        <LeftMenu />
      </div>
      <div className="mt-auto space-y-2">
        <Button
          variant="outline"
          className="w-full justify-center text-muted-foreground text-[17px] leading-[21px] font-medium bg-gray-300 hover:bg-gray-100"
        >
          Upload
          <Upload className="mr-2 h-4 w-4" />
        </Button>
        <Button className="w-full justify-center text-[17px] leading-[21px] font-medium bg-[rgba(246,170,22,1)] hover:bg-orange-600 text-white">
          Create New
          <Plus className="mr-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
