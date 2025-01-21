"use client";

import Link from "next/link";
import { Bell, ChevronDown, Search } from "lucide-react";
import { Input } from "@repo/ui/components/input";
import { Button } from "@repo/ui/components/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@repo/ui/components/dropdown-menu";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@repo/ui/components/avatar";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-50  border-b bg-white containers py-2 ">
      <div className=" flex h-16 items-center  px-4 sm:px-6 lg:px-16">
        <div className="flex items-center space-x-2 w-[200px]">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo_.png"
              alt="Concepts Map"
              width={130}
              height={50}
              className="w-auto h-auto"
            />
          </Link>
        </div>

        <nav className="mx-6 hidden items-center space-x-6 md:flex lg:space-x-8">
          <Link
            href="/about"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            About Us
          </Link>
          <Link
            href="/why-us"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Why Us
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contact Us
          </Link>
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="relative hidden w-full  max-w-sm md:flex ">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground " />
            <Input
              placeholder="Start typing... "
              className="pl-8  rounded-2xl"
            />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="relative"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-orange-500" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-19%20152626-7HRNYXGkCJ6wP79JTRxWer8zwSjT8A.png"
                    alt="User avatar"
                  />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Open menu"
          >
            <ChevronDown className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="border-t p-2 md:hidden ">
        <div className="relative w-full">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Start typing..." className="pl-8 w-full " />
        </div>
      </div>
    </header>
  );
}
