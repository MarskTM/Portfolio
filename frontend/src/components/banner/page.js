"use client";

import { MapPinIcon, BriefcaseIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import clsx from 'clsx'
import { Agbalumo, Fredoka } from 'next/font/google'

const agbalumo = Agbalumo({
    weight: '400',
    subsets: ['latin'],
})

const fredoka = Fredoka({
    weight: '400',
    subsets: ['latin'],
})

export default function Banner() {
    return (
        <section className="container lg:w-5xl pt-28 pb-12 m-auto flex flex-col md:flex-row items-center gap-10 justify-between rounded-lg">
            {/* Text Section */}
            <div className="w-2/3">
                <h1 className={clsx(
                    "text-2xl md:text-5xl font-extrabold tracking-tight text-gray-900 drop-shadow-md",
                    "flex items-center gap-2",
                    agbalumo.className
                )}>
                    Well, howdy-do! <span className="wave text-5xl">👋</span>
                </h1>
                <p className={clsx(
                    "mt-4 text-base text-gray-700",
                    fredoka.className
                )}>
                    I’m To Kim Manh - a passionate Software Engineer in Viet Nam with over 2+ years of experience in job maintaining and developing application servers. My current development direction is focused on working with microservice architecture and researching system optimization techniques.
                </p>

                {/* Location & Availability */}
                <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-gray-600">
                        <MapPinIcon className="h-5 w-5 text-gray-500" />
                        <span>Ahmedabad, India</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                        <BriefcaseIcon className="h-5 w-5 text-green-500" />
                        <span className="text-green-600">Available for new projects</span>
                    </div>
                </div>

                {/* Social Icons */}
                <div className="mt-4 flex space-x-4 text-gray-600">
                    <a href="#" className="hover:text-blue-500">🔗</a>
                    <a href="#" className="hover:text-blue-500">🐦</a>
                    <a href="#" className="hover:text-blue-500">💼</a>
                </div>
            </div>

            {/* Image Section */}
            <div className="p-3 rounded-xl">
                <Image
                    src="/images/avata_banner.jpg" // Thay ảnh phù hợp
                    alt="Avatar Banner"
                    width={180}
                    height={200}
                    className="rounded-lg shadow-md"
                />
            </div>
        </section>
    );
}
