"use client"
import { useScroll } from '@/hooks/use-scroll'
import { cn } from '@/lib/utils';
import React from 'react'
import Logo from './Logo';
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { ModeToggle } from '@/components/mode-toggle';
import { useConvexAuth } from "convex/react";
import { Button } from '@/components/ui/button';

function Navbar() {
    const scrolled = useScroll();
    const { isLoading, isAuthenticated } = useConvexAuth();

    return (
        <div className={cn("z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6", scrolled && "border-b shadow-sm")}>
            <Logo />
            <div className='md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2'>
                {
                    isLoading && (
                      <p>Loading...</p>
                    )
                }
                {
                    !isAuthenticated && !isLoading && (
                        <>
                            <SignInButton mode="modal">
                                <Button variant="ghost" size="sm">
                                    Log in
                                </Button>
                            </SignInButton>
                            <SignInButton mode="modal">
                                <Button size="sm">
                                    Get Jotion Free
                                </Button>
                            </SignInButton>
                        </>
                    )
                }
                {
                    isAuthenticated && !isLoading && (
                        <>
                            <Button variant="ghost" size="sm" asChild>
                                    Enter Jotion
                            </Button>
                            <UserButton afterSignOutUrl='/' />
                        </>
                    )
                }
                <ModeToggle />
            </div>
        </div>
    )
}

export default Navbar
