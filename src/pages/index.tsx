import type { Metadata } from "next"
import Link from "next/link"
import { Icons } from "@/components/Icons"
import { HoverCardDemo } from "@/components/HoverCardDemo"
import Paragraph from "@/components/ui/Paragraph"
import LargeHeader from "@/components/ui/LargeHeadings"
import Navbar from "@/components/Navbar"
import { CalendarDateRangePicker } from "@/components/CalendarDateRangePicker"

export const metadata: Metadata = {
    title: "Api Project |  Home",
    description: "Free & open-source text simplification API",
}

export default function Home() {
    return (
        <div className="relative isolate overflow-hidden bg-white h-screen">
            <Navbar />
            <svg
                className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
            >
                <defs>
                    <pattern
                        id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
                        width={200}
                        height={200}
                        x="50%"
                        y={-1}
                        patternUnits="userSpaceOnUse"
                    >
                        <path d="M.5 200V.5H200" fill="none" />
                    </pattern>
                </defs>
                <rect
                    width="100%"
                    height="100%"
                    strokeWidth={0}
                    fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
                />
            </svg>
            <div className="flex justify-center content-center">
                <div className="mx-auto text-center px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
                        <CalendarDateRangePicker className="" />
                        <div className="mt-24 sm:mt-32 lg:mt-16 text-center">
                            <HoverCardDemo />
                        </div>
                        {/* <h1 className="mt-10 text-4xl text-center font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Deploy to the cloud with confidence
                        </h1> */}
                        <LargeHeader size="lg" className="mt-10 ">
                            Easily determine the similarity of your text
                        </LargeHeader>
                        <Paragraph className="mt-8">
                            {" "}
                            With the open source text similarity API you can
                            easily determine the similarity of your text and get
                            the result in a variety of formats with a 💸{" "}
                            <Link
                                href="/login"
                                className="inline-flex items-center underline underline-offset-2 text-black dark:text-white hover:text-slate-800 transition-all"
                            >
                                API key <Icons.Link className="h-4 w-4" />
                            </Link>
                        </Paragraph>
                    </div>
                </div>
            </div>
        </div>
    )
}
