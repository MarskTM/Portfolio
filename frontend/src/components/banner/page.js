"use client";

import { MapPinIcon, BriefcaseIcon } from "@heroicons/react/24/outline";
import { Image } from "@heroui/react";
import { Agbalumo } from 'next/font/google'
import { TypeAnimation } from 'react-type-animation';
import clsx from 'clsx'

const agbalumo = Agbalumo({
    weight: '400',
    subsets: ['latin'],
})

const Hobby = [
    "My first programming language I learned was Pascal.", 2000,
    "I'm a sport-guy | 🏸", 2000,
    "I live in Ha Noi, Viet Nam.", 2000,
    "I'm a freelance graphic designer and UI/UX designer.", 2000,
    "I love watching movies and playing video games.", 2000,
    "I was born in Dien Bien Phu Cty", 2000,
]

const introduction = [
    "I had over 3+ years of experience working in product-based teams.",
    "I landed my first job as a Golang developer in 2021.",
    "I have a passion for JS/TS, web dev, and eCommerce.",
    "Now, I'm currently focusing on improving system design skills and exploring distributed systems."
]

export default function Banner() {

    return (
        <section className={clsx(
            "container lg:w-5xl pt-28 pb-12 m-auto z-20",
            "flex flex-col md:flex-row items-center gap-10 justify-between",
            "rounded-lg",
            "max-sm:pt-7"
        )}>
            {/* Text Section */}
            <div className="px-4 lg:w-2/3 md:px-0">
                <h1 className={clsx(
                    "text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 drop-shadow-md",
                    "flex items-center gap-2",
                    agbalumo.className
                )}>
                    Well, howdy-do! <span className="wave text-5xl">👋</span>
                </h1>
                <p className={clsx(
                    "mt-12 mb-3 text-lg text-gray-900",
                    "flex flex-row items-center",
                    "max-sm:text-md max-sm:block"
                )}>
                    I’m To Kim Manh - a passionate Software Engineer in Viet Nam <span className="w-5 h-5 ml-1 vietnam"></span>
                </p>
                <div className="max-sm:h-14">
                    <TypeAnimation
                        sequence={Hobby}
                        wrapper="span"
                        speed={50}
                        deletionSpeed={50}
                        style={{ display: 'inline-block', marginBottom: '0.5em' }}
                        repeat={Infinity}
                        className={clsx(
                            "text-gray-900 text-lg",
                            "cursor-pointer",
                            "max-sm:text-md max-sm:inline-block"
                        )}
                    />
                </div>



                {/* Introduction */}
                {introduction.map((item, index) => (
                    <p key={index} className={clsx(
                        "mt-1 text-base text-gray-500/90 leading-8",
                        "max-sm:text-sm max-sm:inline-block max-sm:leading-7"
                    )}>
                        {item}
                    </p>
                ))}


                {/* Location & Availability */}
                <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-gray-600">
                        <MapPinIcon className="h-5 w-5 text-gray-500" />
                        <span>Ha Noi, Viet Nam </span>
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
            <div className="p-3 rounded-xl photo-wrapper">
                <Image
                    src="/images/avata_banner.jpg" // Thay ảnh phù hợp
                    alt="Avatar Banner"
                    // width={200}
                    // height={250}
                    className="min-w-52 h-64 rounded-lg shadow-md"
                />
            </div>
        </section>
    );
}
