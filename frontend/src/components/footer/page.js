import { EnvelopeIcon } from "@heroicons/react/24/solid";

export default function Footer() {
    return (
        <footer
            className="relative container bg-auto xl:bg-[length:100%] bg-center bg-no-repeat text-gray-800 dark:text-white h-80 pt-22 m-auto border-t-2 border-gray-200"
            style={{ backgroundImage: "url('/images/footer_bg.svg')" }}
        >
            <div className=" mx-auto px-6 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Cột 1: Logo & Policy */}
                    <div>
                        <h2 className="text-2xl font-bold">Startup 3</h2>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                            Be sure to take a look at our Terms of Use and Privacy Policy.
                        </p>
                    </div>

                    {/* Cột 2: Danh mục liên kết */}
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <h3 className="font-semibold">About</h3>
                            <ul className="mt-2 space-y-2 text-sm">
                                <li>About Us</li>
                                <li>Blog</li>
                                <li>Team</li>
                                <li>Career</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold">Company</h3>
                            <ul className="mt-2 space-y-2 text-sm">
                                <li>Privacy</li>
                                <li>Support</li>
                                <li>Help Desk</li>
                                <li>FAQ</li>
                            </ul>
                        </div>
                    </div>

                    {/* Cột 3: Subscribe & Social */}
                    <div>
                        <h3 className="font-semibold">Subscribe our Newsletters</h3>
                        <div className="mt-3 flex items-center">
                            <div className="relative w-full">
                                <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                />
                            </div>
                            <button className="ml-3 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
