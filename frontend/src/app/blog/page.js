import { Input } from "@heroui/input";
import { Agbalumo } from 'next/font/google'
import clsx from 'clsx'

const agbalumo = Agbalumo({
    weight: '400',
    subsets: ['latin'],
})

export default function Blogs() {
    return (
        <div className="">
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
                    
                </div>
            </div>

        </div>
    )
}