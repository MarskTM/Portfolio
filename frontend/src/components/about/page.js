'use client';

import Image from 'next/image';
import clsx from 'clsx'

export default function About() {
    return (
        <div
            id="about"
            className="container lg:w-5xl mx-auto flex items-center justify-between pt-28 pb-10"
        >
            <div className={clsx(
                "bg-white py-16",
                "grid grid-cols-4 grid-rows-[auto,1fr,1fr] gap-10"
            )} >

                {/* Section Title */}
                <div className={clsx(
                    "row-start-1 col-start-2 col-span-3 row-span-1"
                )}>
                    <p className="text-sm font-semibold text-indigo-600 mb-2">About us</p>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-700 drop-shadow-sm">
                        A bit about my journey
                    </h2>
                    <p className="mt-4 text-base text-gray-600 max-w-3xl">
                        Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam.
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

                    <h3 className="text-lg font-semibold text-gray-700 border-b-1 border-b-gray-300 mt-6 mb-6 pb-2">Tech and frameworks</h3>
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
                    "lg:grid grid-cols-2 gap-8"
                )}>
                    <div className="space-y-4 -translate-y-24">
                        <Image
                            src="/images/vccorp_logo.png"
                            alt="Working together"
                            width={600}
                            height={650}
                            className="w-full rounded-xl shadow-lg object-cover"
                        />
                        <Image
                            src="/images/about2.jpg"
                            alt="Team meeting"
                            width={600}
                            height={650}
                            className="w-full rounded-xl shadow-lg object-cover"
                        />
                    </div>
                    <div className="space-y-4">
                        <Image
                            src="/images/phenikaa_logo.png"
                            alt="Office work"
                            width={600}
                            height={650}
                            className="w-full rounded-xl shadow-lg object-cover"
                        />
                        <Image
                            src="/images/about4.jpg"
                            alt="Remote call"
                            width={600}
                            height={650}
                            className="w-full rounded-xl shadow-lg object-cover"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}
