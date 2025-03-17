import { useState } from "react";
import Link from "next/link";
import { ArrowRightIcon, ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import { BlogCard } from "@components/card";
import Pagination from "@components/pagination/page";

const blogs = [
    {
        title: 'Creating an Intuitive User Interface (UI) for Your SaaS Product Creating an Intuitive User Interface (UI) for',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
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
    {
        title: 'Building Scalable APIs with Node.js',
        description: 'Discover best practices for building scalable and maintainable APIs using Node.js and Express.',
        author: 'Emily White',
        time: '25 mins ago',
        category: 'Node.js',
        image: '/images/project_img.png', // Đường dẫn tới hình ảnh của bạn
    },
];

const blogs2 = [
    {
        title: 'Creating an Intuitive User Interface (UI) for Your SaaS Product Creating an Intuitive User Interface (UI) SaaS Product',
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
];

const categories = [
    { name: 'Frontend', count: 5 },
    { name: 'Backend', count: 4 },
    { name: 'AI', count: 1 },
    { name: 'Other', count: 3 },
];

// components/Tags.js
const tagsData = [
    { name: 'algorithm', size: 'text-2xl' },
    { name: 'azure', size: 'text-sm' },
    { name: 'blog', size: 'text-base' },
    { name: 'C#', size: 'text-lg' },
    { name: 'c#.net', size: 'text-xl' },
    { name: 'c# hay ho', size: 'text-base' },
    { name: 'code', size: 'text-sm' },
    { name: 'coder', size: 'text-xs' },
    { name: 'coding', size: 'text-base' },
    { name: 'cv', size: 'text-lg' },
    { name: 'công nghệ', size: 'text-3xl' },
    { name: 'database', size: 'text-sm' },
    { name: 'developer', size: 'text-base' },
    { name: 'dự án', size: 'text-lg' },
    { name: 'facebook', size: 'text-xl' },
    { name: 'framework', size: 'text-sm' },
    { name: 'front-end', size: 'text-xs' },
    { name: 'javascript', size: 'text-base' },
    { name: 'js', size: 'text-lg' },
    { name: 'junior', size: 'text-2xl' },
    { name: 'kinh nghiệm', size: 'text-sm' },
    { name: 'lập trình', size: 'text-xs' }
];

export default function Blog() {
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <section className="w-full m-auto py-28 bg-gray-50">
            <div className="container mx-auto text-center">
                {/* Tiêu đề */}
                <div className="mb-28">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-600 flex items-center justify-center space-x-2">
                        <span>My Blog</span>
                        {/* <span className="text-gray-500">/ snippets</span> */}
                    </h2>
                    <p className="mt-2 text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel lectus lacinia, scelerisque mauris ac, lacinia lorem.
                    </p>
                </div>



                {/* Danh sách bài viết */}
                <div className="flex flex-col xl:flex-row gap-20 mt-6">
                    <div className="flex-2/3 container mx-auto">

                        <div className="grid grid-cols-1 gap-4">
                            {blogs.map((blog, index) => (
                                <Link href="/" key={index}>
                                    <BlogCard
                                        title={blog.title}
                                        titleSize={"text-xl"}
                                        description={blog.description}
                                        author={blog.author}
                                        time={blog.time}
                                        category={blog.category}
                                        image={blog.image}
                                        imgeHeight={200}
                                    />
                                </Link>

                            ))}
                        </div>
                        <div className="flex items-center justify-end mt-10">
                            {/* <h1 className="text-left text-4xl font-bold mb-4">Keep Reading</h1> */}
                            <Link href="/" className="text-vase font-bold flex flex-row justify-center items-center">
                                <span className="text-gray-500 hover:text-blue-400">See more</span><ChevronDoubleRightIcon className="size-4 text-blue-900" />
                            </Link>
                        </div>
                        {/* <Pagination showControls currentPage={currentPage} totalPages={5} onPageChange={(page) => setCurrentPage(page)} /> */}
                    </div>

                    {/* Sub menu */}
                    <div className="flex-1/3 container mx-auto p-4 bg-white/80 rounded-l-2xl shadow-xl">
                        {/* Popular Post */}
                        <div className="flex flex-wrap gap-2 md:hidden lg:block">
                            <h1 className="text-center text-2xl font-bold my-7 text-gray-700">Popular Post</h1>
                            <div className="grid grid-cols-1 grid-rows-3 gap-4 overflow-hidden">
                                {blogs2.map((blog, index) => (
                                    <Link href="/" key={index}>
                                        <BlogCard
                                            title={blog.title}
                                            author={blog.author}
                                            time={blog.time}
                                            image={blog.image}
                                        />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Categories */}
                        <h1 className="text-center text-2xl font-bold mt-7 text-gray-700">Categories</h1>
                        <div className="p-4 mx-auto space-y-2">
                            {categories.map((category) => (
                                <Link key={category.name} href="/" className="text-base p-2 flex justify-between items-center border-b border-gray-200 hover:bg-gray-200 transition">
                                    <span className="text-gray-700">{category.name}</span>
                                    <span className="text-gray-500 text-sm">({category.count})</span>
                                </Link>
                            ))}
                        </div>

                        {/* tags */}
                        <h1 className="text-center text-2xl font-bold mt-7 text-gray-700">Tags</h1>
                        <div className="p-4 mx-auto xl:w-full md:w-1/2">
                            <div className="flex flex-wrap items-center justify-center gap-2">
                                {tagsData.map((tag, index) => (
                                    <span
                                        key={index}
                                        className={`py-1 rounded-full font-medium text-indigo-900/80 hover:text-indigo-950 hover:scale-3d translate-0.5 hover:cursor-pointer ${tag.size}`}
                                        onClick={() => alert(`Tag ${tag.name} clicked!`)}
                                    >
                                        {tag.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
