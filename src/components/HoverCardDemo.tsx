import { CalendarDays } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Button } from "./ui/button"
import { Icons } from "@/components/Icons"

export function HoverCardDemo() {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <Button
                    className="inline-flex items-center justify-center rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10 hover:text-indigo-800 hover:ring-indigo-600/30 transition-all md:py-2 "
                    variant="link"
                >
                    New open source UI library{" "}
                    <Icons.ChevronRight
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                    />
                </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80" align="center">
                <div className="flex justify-between space-x-4">
                    <Avatar>
                        <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                        <h4 className="text-sm font-semibold">@shadcn-ui</h4>
                        <p className="text-sm">
                            The UI library for Next.js applications by @shadcn
                        </p>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    )
}
