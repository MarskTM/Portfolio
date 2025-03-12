import { PhoneIcon } from "@heroicons/react/24/solid";

export default function Contact() {
    return (
        <section className="bg-gray-950/65 text-gray-300 h-72 p-6 m-auto flex items-center space-x-4">
            <div className="container mx-auto flex items-center space-x-4">
                {/* Icon bên trái */}
                <div className="flex-shrink-0">
                    <PhoneIcon className="w-6 h-6 text-purple-400" />
                </div>

                {/* Nội dung chính */}
                <div>
                    <h2 className="text-lg font-semibold text-purple-400">Contact</h2>
                    <p className="text-sm">
                        consectetur adipiscing elit. Praesent imperdiet ante tortor, sit amet
                        mollis erat placerat suscipit.{" "}
                        <span className="text-blue-400">Nulla lobortis elit libero sit amet congue.</span>
                    </p>
                    <p className="text-sm text-blue-400">
                        Donec quis odio at augue imperdiet posuere. Sed ullamcorper hendrerit auctor.
                    </p>
                </div>

                {/* Hình trang trí góc phải */}
                <div className="ml-auto hidden md:block">
                    <svg
                        className="w-16 h-16 text-purple-400 opacity-50"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="50" cy="50" r="40" strokeWidth="2" />
                        <path d="M30 50h40M50 30v40" strokeWidth="2" />
                    </svg>
                </div>
            </div>
        </section>
    );
}
