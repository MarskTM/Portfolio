import {
    MapPinIcon,
    ClockIcon,
    IdentificationIcon,
    StarIcon,
} from '@heroicons/react/24/outline';
import Image from "next/image";
import clsx from 'clsx'

export default function Footer() {
    return (
        <footer
            className={clsx(
                "relative container xl:w-5xl m-auto",
                "pt-8 mb-8 m-auto px-2",
                "text-gray-800 dark:text-white",
                "border-t-2 border-gray-200",
                "max-sm:px-4"
            )}
        >
            <div className="xl:w-5xl m-auto flex flex-row items-start justify-between gap-2">
                {/* Cột 1: Logo & Policy */}
                <div className="">
                    <h2 className="text-xl font-bold text-gray-700 drop-shadow-sm">K.Manh's Portfolio</h2>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                        Be sure to take a look at our Terms of Use and Privacy Policy.
                    </p>
                    <div className="flex flex-row gap-6 mt-3">
                        <Image
                            src="/images/signature.png" // Thay ảnh phù hợp
                            alt="Avatar Banner"
                            width={200}
                            height={200}
                            className="rounded-lg"
                        />

                        <div className="mt-2 space-y-2 text-sm text-gray-700 hidden lg:block">
                            <div className="flex items-center justify-center gap-2">
                                <IdentificationIcon className="h-5 w-5 text-gray-600" />
                                <span className="animated-title">manhtokim@gmail.com</span>
                                <StarIcon className="h-4 w-4 text-amber-400" />
                            </div>

                            <div className="flex items-center gap-2">
                                <MapPinIcon className="h-5 w-5 text-gray-600" />
                                <span>[::1]:443 - Ha Noi</span>
                                <span className="h-5 w-5 vietnam"></span>
                            </div>

                            <div className="flex items-center gap-2">
                                <ClockIcon className="h-5 w-5 text-gray-600" />
                                <span className="animated-title">10:49 PM -</span>
                                <span className="text-gray-500">same time</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Cột 2: Danh mục liên kết */}
                <div className="mt-5 lg:mr-5 grid grid-cols-2 justify-items-center gap-8 lg:gap-14">
                    <div>
                        <h3 className="font-semibold text-base">Sitemap</h3>
                        <ul className="mt-4 space-y-2.5 text-sm flex flex-col items-end">
                            <li className='animated-title'>About Me</li>
                            <li className='animated-title'>Projects</li>
                            <li className='animated-title'>Blogs</li>
                            <li className='animated-title'>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-base">Personal stuff</h3>
                        <ul className="mt-4 space-y-2.5 text-sm flex flex-col items-end">
                            <li className='animated-title'>Resume</li>
                            <li className='animated-title'>Books</li>
                            <li className='animated-title'>Analytics</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
