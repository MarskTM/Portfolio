"use client"

import React from "react";
import { Input } from "@/components/ui/input";
import { Agbalumo } from 'next/font/google';
import { BlogCard } from "@/components/card";
import clsx from 'clsx';
import Link from "next/link";

const agbalumo = Agbalumo({
    weight: '400',
    subsets: ['latin'],
})

const blogs = [
    {
        title: 'Mastering State Management in React Mastering State Management in ReactMastering State Management in ReactMastering State Management',
        description: 'Explore different state management solutions in React and learn how to choose the right one for your project.Explore different state management solutions in React and learn how to choose the right one for your project.Explore different state management solutions in React and learn how to choose the right one for your project.Explore different state management solutions in React and learn how to choose the right one for your project.',
        author: 'Jane Smith',
        time: '15 mins ago',
        category: 'React',
        image: '/images/project_img.png', // Đường dẫn tới hình ảnh của bạn
        link: ''
    },
    {
        title: 'Introduction to Next.js Routing',
        description: 'Learn how to create dynamic routes in Next.js and understand the different routing strategies.',
        author: 'David Lee',
        time: '20 mins ago',
        category: 'Next.js',
        image: '/images/project_img.png', // Đường dẫn tới hình ảnh của bạn
    },
    {
        title: 'Building Scalable APIs with Node.js',
        description: 'Discover best practices for building scalable and maintainable APIs using Node.js and Express.',
        author: 'Emily White',
        time: '25 mins ago',
        category: 'Node.js',
        image: '/images/gen2.png', // Đường dẫn tới hình ảnh của bạn
    },
    {
        title: 'Building Scalable APIs with Node.js',
        description: 'Discover best practices for building scalable and maintainable APIs using Node.js and Express.',
        author: 'Emily White',
        time: '25 mins ago',
        category: 'Node.js',
        image: '/images/gen3.png', // Đường dẫn tới hình ảnh của bạn
    },
    {
        title: 'Introduction to Next.js Routing',
        description: 'Learn how to create dynamic routes in Next.js and understand the different routing strategies.',
        author: 'David Lee',
        time: '20 mins ago',
        category: 'Next.js',
        image: '/images/project_img.png', // Đường dẫn tới hình ảnh của bạn
    },
    {
        title: 'Building Scalable APIs with Node.js',
        description: 'Discover best practices for building scalable and maintainable APIs using Node.js and Express.',
        author: 'Emily White',
        time: '25 mins ago',
        category: 'Node.js',
        image: '/images/gen2.png', // Đường dẫn tới hình ảnh của bạn
    },
    {
        title: 'Building Scalable APIs with Node.js',
        description: 'Discover best practices for building scalable and maintainable APIs using Node.js and Express.',
        author: 'Emily White',
        time: '25 mins ago',
        category: 'Node.js',
        image: '/images/gen3.png', // Đường dẫn tới hình ảnh của bạn
    },
];

export default function Blogs() {
    return (
        <div className="min-h-[80vh] w-full">
            <div className="container lg:w-5xl m-auto my-10 max-sm:px-4 border-b-1 border-gray-200">
                <h1 className={clsx(
                    "text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 drop-shadow-md",
                    "flex items-center gap-2",
                    agbalumo.className
                )}>
                    All post <span className="text-3xl md:text-4xl">📰</span>
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
                    <div className="relative lg:w-2/3 max-sm:min-w-56 ">
                        <Input
                            type="text"
                            placeholder="Do you have a notion?"
                            className="w-full pr-10" // chừa chỗ cho icon
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 size-5 text-gray-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="w-5xl grid grid-cols-1 gap-8 pb-10 m-auto">
                {blogs.map((blog, index) => (
                    <Link href={`/blog/${blog.id}`} key={index}>
                        <BlogCard
                            title={blog.title}
                            titleSize="text-xl"
                            description={blog.description}
                            author={blog.author}
                            time={blog.time}
                            category={blog.category}
                            image={blog.image}
                            imgeHeight={200}
                            blogType="alls"
                        />
                    </Link>
                ))}
            </div>
        </div>
    )
}