import { useState } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { BlogCard } from "@components/card";
import Pagination from "@components/pagination/page";

const blogs = [
    {
        title: 'Creating an Intuitive User Interface (UI) for Your SaaS Product',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip...',
        author: 'John Doe',
        time: '10 mins ago',
        category: 'Frontend',
        image: '/images/project_img.png', // Đường dẫn tới hình ảnh của bạn
    },
    {
        title: 'Mastering State Management in React',
        description: 'Explore different state management solutions in React and learn how to choose the right one for your project.',
        author: 'Jane Smith',
        time: '15 mins ago',
        category: 'React',
        image: '/images/project_img.png', // Đường dẫn tới hình ảnh của bạn
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
        image: '/images/project_img.png', // Đường dẫn tới hình ảnh của bạn
    },
];

export default function Blog() {
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <section className="w-full m-auto pb-28 container">
            <div className="mx-auto text-center">
                {/* Tiêu đề */}
                <div className="my-28">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-600 flex items-center justify-center space-x-2">
                        <span>My Blog</span>
                        {/* <span className="text-gray-500">/ snippets</span> */}
                    </h2>
                    <p className="mt-2 text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel lectus lacinia, scelerisque mauris ac, lacinia lorem.
                    </p>
                </div>



                {/* Danh sách bài viết */}
                <div className="flex flex-row gap-8 mt-6">
                    <div className="flex-2/3 container mx-auto">
                        <div className="flex items-center justify-between">
                            <h1 className="text-left text-4xl font-bold mb-4">Keep Reading</h1>
                            <Link href="/" className="text-vase font-bold">
                                <span className="text-gray-500">See More </span>
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            {blogs.map((blog, index) => (
                                <Link href="/" key={index}>
                                    <BlogCard
                                        title={blog.title}
                                        description={blog.description}
                                        author={blog.author}
                                        time={blog.time}
                                        category={blog.category}
                                        image={blog.image}
                                    />
                                </Link>

                            ))}
                        </div>
                        <Pagination showControls currentPage={currentPage} totalPages={5} onPageChange={(page) => setCurrentPage(page)} />
                    </div>

                    <div className="flex-1/3 container mx-auto p-4 bg-gray-50 rounded-l-2xl shadow-xl">
                        <h1 className="text-center text-2xl font-bold mb-4">Popular Post</h1>
                        <div className="flex flex-wrap gap-2"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
