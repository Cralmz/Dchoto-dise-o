"use client";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className=" mx-auto px-1">
      <div className="flex justify-between items-center py-4">
        
        <Link href="/" className="flex items-center ">
          <Image src="/logo.png" alt="Dchoto" width={225} height={25} priority />
        </Link>

        
        <div className="hidden lg:flex items-center gap-6 mr-6">
          <Link href="/dashboard" className="text-[#0A2342]">List of projects</Link>
          <Link href="/sign-in">
            <Button className="bg-[#2196F3] flex items-center gap-2">
              Sign In
              <User className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
