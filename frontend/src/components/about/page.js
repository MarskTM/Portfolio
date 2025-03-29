'use client';

import { Image } from "@heroui/react";
import clsx from 'clsx'

export default function About() {
    return (
        <div
            id="about"
            className={clsx(
                "container lg:w-5xl mx-auto z-20",
                "pt-16 pb-10",
                "flex items-center justify-between",
                "max-sm:px-4"
            )}
        >
            <div className={clsx(
                "bg-white py-16",
                "grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-[auto,1fr,1fr] gap-y-10 gap-x-2"
            )} >

                {/* Section Title */}
                <div
                    className={clsx(
                        "row-start-1 lg:col-start-2 lg:col-span-3 row-span-1"
                    )} 
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="700"
                    data-aos-anchor-placement="top-bottom"
                >
                    <p className="text-sm font-semibold text-indigo-600 mb-2">About us</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-700 drop-shadow-sm">
                        A bit about my journey
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl">
                        My journey started in 2020, and I’m just getting started. I believe great products are built by great teams — and I’d love to be part of one.

                        {/* My current development direction is focused on working with microservice architecture and researching system optimization techniques. */}
                    </p>
                </div>

                {/* Mission Text */}
                <div
                    className={clsx(
                        "lg:row-start-2 lg:col-start-3 lg:col-span-2 row-span-2",
                    )} 
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="900"
                    data-aos-anchor-placement="top-bottom"
                >

                    <h3 className="text-lg font-semibold text-gray-700 mb-4">My Carrer</h3>
                    <p className="text-gray-700 mb-4 text-base">
                        Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                    </p>
                    <p className="text-gray-700 text-base">
                        Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                    </p>

                    <h3 className="w-max text-lg font-semibold text-gray-700 mt-10 mb-4">Tech Stack</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                        <div>
                            <p className="text-3xl font-bold text-gray-900">$150M</p>
                            <p className="mt-1 text-sm text-gray-500">Raised</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-gray-900">30K</p>
                            <p className="mt-1 text-sm text-gray-500">Companies</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-gray-900">1.5M</p>
                            <p className="mt-1 text-sm text-gray-500">Deals Closed</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-gray-900">200M</p>
                            <p className="mt-1 text-sm text-gray-500">Leads Generated</p>
                        </div>
                    </div>
                </div>

                {/* Image grid */}
                <div className={clsx(
                    "md:row-start-2 lg:row-start-2 lg:col-start-1 lg:col-span-2 lg:row-span-2 md:inline-grid hidden",
                    "grid grid-cols-2 gap-x-3"
                )}>
                    <div className="space-y-5 lg:-translate-y-20 flex flex-row gap-4 lg:flex-col lg:gap-0">
                        <Image
                            src="/images/gen3.png"
                            alt="Working together"
                            className="w-52 h-64 rounded-xl shadow-lg"
                        />
                        <Image
                            src="/images/gen2.png"
                            alt="Team meeting"
                            className="w-52 h-64 rounded-xl shadow-lg md:max-lg:translate-y-8"
                        />
                    </div>
                    <div className="space-y-6 lg:-translate-x-2 flex flex-row-reverse gap-4 lg:flex-col lg:gap-0">
                        <Image
                            src="/images/gen2.png"
                            alt="Office work"
                            className="w-52 h-64 rounded-xl shadow-lg md:max-lg:translate-y-8"
                        />
                        <Image
                            src="/images/gen3.png"
                            alt="Remote call"
                            className="w-52 h-64 rounded-xl shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}