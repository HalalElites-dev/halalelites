'use client';
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Navigation } from "./Navigation";
import Image from 'next/image';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden"
      >
        {isOpen ? <X className="h-10 w-10" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background backdrop-blur-sm md:hidden">
          <div className="fixed right-5 w-full max-w-md bg-background border-l  animate-in slide-in-from-right duration-300">

            {/* Header */}
             {/* Header */}
            <div className="flex items-center justify-between border-b border-border bg-muted px-6 py-4">
              <div className="flex items-center space-x-2">
                <Image suppressHydrationWarning
                  src="/LogoW.png"
                  alt="Logo"
                  width={160}
                  height={32}
                  className="block dark:hidden"
                />
                <Image suppressHydrationWarning
                  src="/Logo.png"
                  alt="Logo"
                  width={160}
                  height={32}
                  className="hidden dark:block"
                />
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Navigation Content */}
            <div className="flex flex-col h-full">
              <div className="flex-1 px-6 py-6">
                <Navigation />
              </div>


            </div>
          </div>
        </div>
      )}
    </>
  )
}