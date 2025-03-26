'use client';

import { Image } from "@heroui/react";
import clsx from 'clsx'

export default function About() {
    return (
        <div
            id="about"
            className={clsx(
                "container lg:w-5xl mx-auto",
                "pt-16 pb-10",
                "flex items-center justify-between"
            )}
        >
            <div className={clsx(
                "bg-white py-16",
                "grid grid-cols-4 grid-rows-[auto,1fr,1fr] gap-y-10 gap-x-2"
            )} >

                {/* Section Title */}
                <div className={clsx(
                    "row-start-1 col-start-2 col-span-3 row-span-1"
                )}>
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
                <div className={clsx(
                    "row-start-2 col-start-3 col-span-2 row-span-2",
                )} >

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
                    "row-start-2 col-start-1 col-span-2 row-span-2",
                    "lg:grid grid-cols-2 gap-x-3"
                )}>
                    <div className="space-y-5 -translate-y-20">
                        <Image
                            src="/images/gen3.png"
                            alt="Working together"
                            width={210}
                            height={260}
                            className="w-full rounded-xl shadow-lg object-cover"
                        />
                        <Image
                            src="/images/gen2.png"
                            alt="Team meeting"
                            width={210}
                            height={260}
                            className="w-full rounded-xl shadow-lg object-cover"
                        />
                    </div>
                    <div className="space-y-6 -translate-x-2">
                        <Image
                            src="/images/gen2.png"
                            alt="Office work"
                            width={210}
                            height={260}
                            className="w-full rounded-xl shadow-lg object-cover"
                        />
                        <Image
                            src="/images/gen3.png"
                            alt="Remote call"
                            width={210}
                            height={260}
                            className="w-full rounded-xl shadow-lg object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
