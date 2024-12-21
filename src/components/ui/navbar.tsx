"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 w-full bg-[#FFF7E2] border-b">
      <nav className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Company Logo"
                width={100}
                height={100}
                className="rounded-sm object-contain"
                layout="responsive"
              />
            </Link>

            <div className="hidden md:flex items-center justify-center gap-6 ml-40">
              <Link
                href=""
                className="text-base font-medium text-gray-700 hover:text-[#3A643B] transition-colors"
              >
                Home
              </Link>
              <Link
                href=""
                className="text-base font-semibold text-gray-700  hover:text-[#3A643B] transition-colors"
              >
                find doctors
              </Link>
              <Link
                href=""
                className="text-base font-medium text-gray-700 hover:text-[#3A643B] transition-colors"
              >
                About us
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Desktop buttons */}
            <div className="hidden md:flex items-center gap-2">
              <Button
                variant="outline"
                className="border-[#3A643B] text-[#3A643B] bg-[#FFF7E2] hover:bg-[#3A643B] hover:text-white"
              >
                Login
              </Button>
              <Button className="bg-[#3A643B] text-white hover:bg-[#2A542B]">
                Sign Up
              </Button>
            </div>

            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6 text-[#3A643B]" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#FFF7E2]">
                <SheetHeader>
                  <SheetTitle>Navigation Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-4">
                  <Link
                    href=""
                    className="text-sm font-medium text-gray-700 hover:text-[#3A643B] transition-colors"
                  >
                    Home
                  </Link>
                  <Link
                    href=""
                    className="text-sm font-medium text-gray-700 hover:text-[#3A643B] transition-colors"
                  >
                    find doctors
                  </Link>
                  <Link
                    href=""
                    className="text-sm font-medium text-gray-700 hover:text-[#3A643B] transition-colors"
                  >
                    About us
                  </Link>
                  <hr className="my-4" />
                  <Button
                    variant="outline"
                    className="w-full border-[#3A643B] text-[#3A643B] bg-[#FFF7E2] hover:bg-[#3A643B] hover:text-white"
                  >
                    Login
                  </Button>
                  <Button className="w-full bg-[#3A643B] text-white hover:bg-[#2A542B]">
                    Sign Up
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </div>
  );
}
