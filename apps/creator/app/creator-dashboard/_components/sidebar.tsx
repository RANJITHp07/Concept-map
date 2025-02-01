"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Upload, Plus, Menu, X } from "lucide-react";
import Button from "@repo/ui/components/Button";
import LeftMenu from "@repo/ui/components/LeftMenu";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  // Disable body scrolling when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="relative overflow-auto">
      {/* Hamburger Icon */}
      <div className="lg:hidden p-4">
        <button onClick={toggleSidebar} aria-label="Toggle Sidebar">
          <Menu className="h-6 w-6 text-orange-600" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-40 h-full bg-white p-6 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:relative lg:translate-x-0 lg:w-64  overflow-y-auto`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center mb-4 lg:hidden">
          <Image
            alt="logo"
            src={"/logo.png"}
            width={150}
            height={40}
            className="w-[150px] h-[40px]"
          />
          <button
            onClick={toggleSidebar}
            aria-label="Close Sidebar"
            className="ml-3 mb-2"
          >
            <X className="h-6 w-6 text-orange-600" />
          </button>
        </div>

        {/* Navigation Menu */}
        <div className="mb-8">
          <LeftMenu />
        </div>

        {/* Footer Buttons */}
        <div className="mt-auto space-y-2">
          <Button
            actionName="Upload"
            className="w-full justify-center text-muted-foreground text-[17px] leading-[21px] font-medium bg-gray-300 hover:bg-gray-100"
          >
            Upload
            <Upload className="mr-2 h-4 w-4" />
          </Button>
          <Button
            actionName="Create New"
            className="w-full justify-center text-[17px] leading-[21px] font-medium bg-[rgba(246,170,22,1)] hover:bg-orange-600 text-white"
          >
            <Plus className="mr-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Overlay for Small Screens */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
}
