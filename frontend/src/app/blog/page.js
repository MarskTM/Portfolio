"use client"

import React from "react";
import { Input } from "@/components/ui/input"
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
        <div className="max-h-screen min-h-[80vh] w-full">
            <div className="container lg:w-5xl m-auto my-10 max-sm:px-4 border-b-1 border-gray-200">
                <h1 className={clsx(
                    "text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 drop-shadow-md",
                    "flex items-center gap-2",
                    agbalumo.className
                )}>
                    All post <span className="text-3xl md:text-4xl">📰</span>
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
                    <div className="relative lg:w-2/3 max-sm:min-w-56 ">
                        <Input
                            type="text"
                            placeholder="Do you have a notion?"
                            className="w-full pr-10" // chừa chỗ cho icon
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 size-5 text-gray-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="w-5xl m-auto">Đang xây dựng ... ^.^</div>
        </div>
    )
}