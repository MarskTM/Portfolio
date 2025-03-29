import { PhoneIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { Image } from "@heroui/react";
import clsx from 'clsx'

export default function Contact() {
    return (
        <section id="contact" className={clsx(
            "container lg:w-5xl my-28 m-auto space-x-4 z-20 text-gray-300",
            "max-sm:px-4"
        )}>
            <div className="container mx-auto flex flex-col space-x-4">
                <div className="flex-shrink-0 flex items-center space-x-2">
                    <PhoneIcon className="w-10 h-6 text-indigo-900" /><h2 className="text-2xl font-semibold text-gray-700 drop-shadow-sm">Contact</h2>
                </div>

                {/* Nội dung chính */}
                <div className="mt-2">
                    <p className="text-sm">
                        consectetur adipiscing elit. Praesent imperdiet ante tortor, sit amet
                        mollis erat placerat suscipit.{" "}
                        <span className="text-blue-400">Nulla lobortis elit libero sit amet congue.</span>
                    </p>
                    <p className="text-sm text-blue-400">
                        Donec quis odio at augue imperdiet posuere. Sed ullamcorper hendrerit auctor.
                    </p>
                </div>

                <div
                    className={clsx(
                        "md:self-end self-auto",
                        "md:w-5/6 mt-16 h-60 p-7",
                        "flex flex-row items-center justify-between space-x-4",
                        "shadow-lg rounded-xl dark:bg-gray-800 bg-[image:url('/images/contact_bg.svg')] bg-cover bg-center",
                    )}
                    data-aos="zoom-in"
                    data-aos-duration="500"
                    data-aos-anchor-placement="bottom-bottom"
                >
                    <div>
                        {/* Tiêu đề */}
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                            Stay up to date!
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            Subscribe to our newsletter to get inbox notifications.
                        </p>

                        {/* Form nhập email */}
                        <div className="mt-4 flex items-center justify-center">
                            <div className="relative w-full max-w-md">
                                <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                />
                            </div>
                            <button className="ml-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col items-center space-y-4">
                        <Image src="/images/contact_bg2.jpg" alt="Contact" className="w-60" />
                    </div>

                </div>
            </div>

        </section>
    );
}
