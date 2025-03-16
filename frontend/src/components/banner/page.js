"use client";

import { MapPinIcon, BriefcaseIcon } from "@heroicons/react/24/outline";
import Image from "next/image";


export default function Banner() {
    return (
        <section className="w-full flex justify-center py-28">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 rounded-lg p-6">
                {/* Text Section */}
                <div className="flex-2 lg:mx-28">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center gap-2">
                        Hi, I’m Sagar <span className="wave text-2xl">👋</span>
                    </h1>
                    <p className="mt-4 text-gray-700">
                        I’m a full stack developer (<strong>React.js & Node.js</strong>) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive.
                        Even though I have been creating web applications for over <strong>7 years</strong>, I still love it as if it was something new.
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
                <div className="flex-1">
                    <Image
                        src="/images/avata_banner.jpg" // Thay ảnh phù hợp
                        alt="Avatar Banner"
                        width={200}
                        height={240}
                        className="rounded-lg shadow-md m-auto"
                    />
                </div>
            </div>
        </section>
    );
}
