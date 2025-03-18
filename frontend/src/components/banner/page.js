"use client";

import { MapPinIcon, BriefcaseIcon } from "@heroicons/react/24/outline";
import Image from "next/image";


export default function Banner() {
    return (
        <section className="container lg:w-7xl py-28 m-auto flex flex-col md:flex-row items-center gap-10 justify-between rounded-lg">
            {/* Text Section */}
            <div className="w-2/3">
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 flex items-center gap-2">
                    Howdy, fellow! <span className="wave text-2xl">👋</span>
                </h1>
                <p className="mt-4 text-lg text-gray-700 font">
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
            <div className="p-3 border-14 border-indigo-500/20 bg-border-indigo-500/20 rounded-2xl">
                <Image
                    src="/images/avata_banner.jpg" // Thay ảnh phù hợp
                    alt="Avatar Banner"
                    width={240}
                    height={250}
                    className="rounded-lg shadow-md"
                />
            </div>
        </section>
    );
}
