import React from 'react'
import { Button } from '../ui/button'
import { Navigation } from './Navigation'
import { ThemeToggle } from '../ThemeToggle'
import { MobileMenu } from '@/components/layout/mobileMenu'
import Link from 'next/link';
import Image from 'next/image';

export function Header() {
    return (
        <nav className="fixed top-0 w-full z-50 glass-effect backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1">
                <div className="flex justify-between items-center h-16 ">

                    {/* Left section: Logo and brand */}
                    <Link href="/" className="flex items-center space-x-2">
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
                    </Link>

                    {/* Right section: Navigation and actions */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Navigation />
                        <Button className="bg-brand-primary hover:bg-brand-primary/90 px-4 py-2 rounded-md text-sm font-mono transition-all ">
                            <Link href={"/services"}>{">"} deploy_with_us</Link>
                        </Button>
                        <ThemeToggle />
                    </div>

                    {/* Mobile menu */}
                    <div className="md:hidden">
                        <MobileMenu />
                        <ThemeToggle />

                    </div>

                </div>
            </div>
        </nav>
    )
}