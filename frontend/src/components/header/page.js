"use client";

import { useState } from "react";
// import { Menu, Transition } from "@headlessui/react";
import { SunIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const navigation = [
    { name: "About", href: "#about" },
    // { name: "Experience", href: "#work" },
    { name: "Projects", href: "#testimonials" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full ">
            <div className="container mx-auto flex items-center justify-between p-4">
                {/* Logo */}
                <Link href="/" className="text-lg font-bold">
                    <span className="text-gray-800">{`<tm />`}</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-gray-700 hover:text-black transition"
                        >
                            <span className="animated-title text-lg font-sans">{item.name}</span>
                        </Link>
                    ))}
                    {/* Light mode toggle */}
                    <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
                        <SunIcon className="h-5 w-5 text-gray-700" />
                    </button>
                    {/* Blog button */}
                    <Link
                        href="/blog"
                        className="px-4 py-2 text-white bg-black rounded-full hover:bg-gray-800 transition"
                    >
                        Download CV
                    </Link>
                </nav>

                {/* Mobile Menu */}
                <div className="md:hidden">
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
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-gray-700 hover:text-black transition"
                                onClick={() => setIsOpen(false)}
                            >
                                <span className="animated-title">{item.name}</span>
                            </Link>
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
        </header>
    );
}