import { EnvelopeIcon } from "@heroicons/react/24/solid";

export default function Subscribe() {
    return (
        <section className="container dark:bg-gray-900 m-auto p-8 rounded-lg">
            <div className="max-w-2xl mx-auto flex flex-row items-center justify-between space-x-4">
                <div>
                    {/* Tiêu đề */}
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                        Stay up to date!
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        Subscribe to our newsletter to get inbox notifications.
                    </p>
                </div>


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
        </section>
    );
}
