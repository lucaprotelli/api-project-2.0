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
                    className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600"
                    variant="link"
                >
                    New open source UI library{" "}
                    <Icons.ChevronRight
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                    />
                </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80" align="start">
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
