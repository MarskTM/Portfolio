"use client";

import { useState } from "react";
import { SunIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import ScrollToTopButton from "@components/button/scrollTop";

const navigation = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blogs" },
    { name: "Contact", href: "#contact" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const handleNavigation = (href) => {
        if (pathname === "/") {
            // Nếu đã ở trang chủ thì cuộn mượt đến phần tương ứng
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            // Nếu không ở trang chủ, chuyển hướng về "/" rồi cuộn sau khi trang tải
            router.push("/");
            // Sau khi chuyển hướng, ta dùng một setTimeout để đợi trang chủ render xong
            setTimeout(() => {
                const element = document.querySelector(href);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 400);
        }
    };

    return (
        <header className="sticky top-2 z-50 w-full container mx-auto">
            <div className="mx-auto xl:w-[65rem] flex items-center justify-between mt-4 px-2 py-1 rounded-2xl bg-indigo-50">
                {/* Logo */}
                <Link href="/" className="text-lg font-bold">
                    <span className="text-gray-800">{`<tm />`}</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    {navigation.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => handleNavigation(item.href)}
                            className="text-gray-700 hover:text-black transition"
                        >
                            <span className="animated-title text-base font-sans">{item.name}</span>
                        </button>
                    ))}
                    {/* Light mode toggle */}
                    <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
                        <SunIcon className="h-5 w-5 text-gray-700" />
                    </button>
                    {/* Blog button */}
                    <Link
                        href="/blog"
                        className="px-4 py-1 text-base text-white bg-black rounded-full hover:bg-gray-800 transition"
                    >
                        Download CV
                    </Link>
                </nav>

                {/* Mobile Menu */}
                <div className="relative md:hidden transition duration-300">
                    <button onClick={() => setIsOpen(!isOpen)} className="p-2">
                        {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            {isOpen && (
                <div className="md:hidden shadow-md transform-content translate-y-2">
                    <nav className="flex flex-col items-center space-y-4 p-4">
                        {navigation.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => {
                                    setIsOpen(false);
                                    handleNavigation(item.href);
                                }}
                                className="text-gray-700 hover:text-black transition"
                            >
                                <span className="animated-title">{item.name}</span>
                            </button>
                        ))}
                        <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
                            <SunIcon className="h-5 w-5 text-gray-700" />
                        </button>
                        <Link
                            href="/blog"
                            className="px-4 py-2 text-white bg-black rounded-full hover:bg-gray-800 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            My Blog
                        </Link>
                    </nav>
                </div>
            )}

            <ScrollToTopButton />
        </header>
    );
}
