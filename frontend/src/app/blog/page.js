"use client"

import React from "react";
import { Card, Skeleton, Button } from "@heroui/react";
import { Agbalumo } from 'next/font/google'
import clsx from 'clsx'

const agbalumo = Agbalumo({
    weight: '400',
    subsets: ['latin'],
})

export default function Blogs() {
    const [isLoaded, setIsLoaded] = React.useState(false);

    const toggleLoad = () => {
        setIsLoaded(!isLoaded);
    };

    return (
        <div className="max-h-screen min-h-[80vh]">
            <div className="container w-5xl m-auto my-10 border-b-1 border-gray-200">
                <h1 className={clsx(
                    "text-2xl md:text-5xl font-extrabold tracking-tight text-gray-900 drop-shadow-md",
                    "flex items-center gap-2",
                    agbalumo.className
                )}>
                    All post <span className="md:text-4xl">📰</span>
                </h1>
                <p className={clsx(
                    "mt-12 mb-3 text-lg text-gray-900",
                    "flex flex-row items-center"
                )}>
                    Welcome to my personal blog🏂 – a space where I share my journey in programming, real-world experiences, and helpful little tips. I hope you'll find something here that inspires you or supports you on your own path in tech. 🌾🌾
                </p>

                <p className={clsx(
                    "mt-4 mb-3 text-lg text-gray-900",
                    "flex flex-row items-center"
                )}>
                    Happy reading 🍵
                </p>

                <div className="container pb-6 rounded-2xl">
                    <div className="flex flex-col gap-3">
                        <Card className="w-[200px] space-y-5 p-4" radius="lg">
                            <Skeleton className="rounded-lg" isLoaded={isLoaded}>
                                <div className="h-24 rounded-lg bg-secondary" />
                            </Skeleton>
                            <div className="space-y-3">
                                <Skeleton className="w-3/5 rounded-lg" isLoaded={isLoaded}>
                                    <div className="h-3 w-full rounded-lg bg-secondary" />
                                </Skeleton>
                                <Skeleton className="w-4/5 rounded-lg" isLoaded={isLoaded}>
                                    <div className="h-3 w-full rounded-lg bg-secondary-300" />
                                </Skeleton>
                                <Skeleton className="w-2/5 rounded-lg" isLoaded={isLoaded}>
                                    <div className="h-3 w-full rounded-lg bg-secondary-200" />
                                </Skeleton>
                            </div>
                        </Card>
                        <Button color="secondary" size="sm" variant="flat" onPress={toggleLoad}>
                            {isLoaded ? "Show" : "Hide"} Skeleton
                        </Button>
                    </div>
                </div>
            </div>

            <div className="w-5xl m-auto">Đang xây dựng ... ^.^</div>
        </div>
    )
}