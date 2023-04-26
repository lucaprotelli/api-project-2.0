import { FC } from "react"
import Link from "next/link"
import { buttonVariants } from "./ui/button"
import { NavigationMenuDemo } from "@/components/NavigationMenuDemo"
import { UserButton, UserProfile } from "@clerk/nextjs"

const Navbar = () => {
    return (
        <div className="fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between">
            <div className="container max-w-7xl mx-auto w-full flex justify-between items-center">
                <Link href="/" className={buttonVariants({ variant: "link" })}>
                    Api Project 2.0
                </Link>

                <div className="hidden lg:block">
                    <NavigationMenuDemo />
                </div>

                <div className="hidden md:flex gap-4">
                    <UserButton />
                </div>
            </div>
        </div>
    )
}

export default Navbar
