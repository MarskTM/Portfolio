import { PhoneIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

export default function Contact() {
    return (
        <section className="py-28 text-gray-300 p-6 m-auto flex items-center space-x-4">
            <div className="container mx-auto flex flex-col space-x-4">
                {/* Icon bên trái */}
                <div className="flex-shrink-0 flex items-center space-x-2">
                    <PhoneIcon className="w-12 h-8 text-indigo-900" /><h2 className="text-4xl font-semibold text-gray-600">Contact</h2>
                </div>

                {/* Nội dung chính */}
                <div>
                    <p className="text-sm">
                        consectetur adipiscing elit. Praesent imperdiet ante tortor, sit amet
                        mollis erat placerat suscipit.{" "}
                        <span className="text-blue-400">Nulla lobortis elit libero sit amet congue.</span>
                    </p>
                    <p className="text-sm text-blue-400">
                        Donec quis odio at augue imperdiet posuere. Sed ullamcorper hendrerit auctor.
                    </p>
                </div>


                <div className="my-16 w-5xl h-80 mx-auto flex flex-row items-center justify-between space-x-4 shadow-lg rounded-xl p-6 dark:bg-gray-800">
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
                                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                />
                            </div>
                            <button className="ml-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                                Subscribe
                            </button>
                        </div>
                    </div>



                </div>
            </div>

        </section>
    );
}
