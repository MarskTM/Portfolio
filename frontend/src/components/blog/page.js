import Link from "next/link";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import { BlogCard } from "@components/card";
import clsx from 'clsx'

const blogs = [
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

const blogs2 = [
    {
        title: 'Creating an Intuitive User Interface (UI) for Your SaaS Product Creating an Intuitive User Interface (UI) SaaS Product Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip...',
        author: 'John Doe',
        time: '10 mins ago',
        category: 'Frontend',
        image: '/images/project_img.png', // Đường dẫn tới hình ảnh của bạn
    },
    {
        title: 'Introduction to Next.js Routing',
        description: 'Learn how to create dynamic routes in Next.js and understand the different routing strategies.',
        author: 'David Lee',
        time: '20 mins ago',
        category: 'Next.js',
        image: '/images/gen3.png', // Đường dẫn tới hình ảnh của bạn
    },
    {
        title: 'Introduction to Next.js Routing',
        description: 'Learn how to create dynamic routes in Next.js and understand the different routing strategies.',
        author: 'David Lee',
        time: '20 mins ago',
        category: 'Next.js',
        image: '/images/gen3.png', // Đường dẫn tới hình ảnh của bạn
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
    { name: 'js', size: 'text-lg' },
    { name: 'junior', size: 'text-2xl' },
];

export default function Blog() {
    return (
        <section
            id="blogs"
            className="w-full container m-auto pt-24 pb-10"
        >
            <div className="lg:w-5xl mx-auto text-center">
                {/* Tiêu đề */}
                <div className="mb-14">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-700 drop-shadow-sm">
                        My Blog
                    </h2>
                    <p className="mt-2 text-lg text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel lectus lacinia, scelerisque mauris ac, lacinia lorem.
                    </p>
                </div>



                {/* Danh sách bài viết */}
                <div className="flex flex-col xl:flex-row gap-10 mt-6">
                    <div className="max-sm:px-4 xl:flex-2/3 container mx-auto">
                        <div className="flex items-center justify-between mt-10">
                            <h1 className="text-left text-xl text-gray-600 font-bold mb-4">Keep Reading</h1>
                            <Link href="/" className="text-vase font-bold flex flex-row justify-center items-center">
                                <span className="text-xs text-gray-500 hover:text-blue-400">See more</span><ChevronDoubleRightIcon className="size-4 text-blue-900" />
                            </Link>
                        </div>
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
                                        blogType={'suggest'}
                                    />
                                </Link>

                            ))}
                        </div>
                    </div>

                    {/* Sub menu */}
                    <div className={clsx(
                        "container xl:flex-1/3 mx-auto p-4 bg-white/80",
                        "border-gray-100 shadow-lg rounded-lg",
                        "max-sm:shadow-none"
                    )}>

                    {/* Popular Post */}
                    <div className="m-auto flex flex-wrap gap-2 md:hidden lg:block md:w-full lg:w-1/2 xl:w-full">
                        <h1 className="text-center text-lg font-bold mt-7 mb-2 text-gray-700">Popular Post</h1>
                        <div className="grid grid-cols-1 grid-rows-2 gap-2 overflow-hidden">
                            {blogs2.map((blog, index) => (
                                <Link href="/" key={index}>
                                    <BlogCard
                                        title={blog.title}
                                        author={blog.author}
                                        time={blog.time}
                                        image={blog.image}
                                        // category={blog.category}
                                        blogType={'news'}
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Categories */}
                    <h1 className="text-center text-lg font-semibold mt-4 text-gray-700">Categories</h1>
                    <div className="p-4 mx-auto xl:w-full md:w-1/2 space-y-2">
                        {categories.map((category) => (
                            <Link key={category.name} href="/" className="text-sm p-2 flex justify-between items-center border-b border-gray-200 hover:bg-gray-200 transition">
                                <span className="text-gray-700">{category.name}</span>
                                <span className="text-gray-500 text-sm">({category.count})</span>
                            </Link>
                        ))}
                    </div>

                    {/* tags */}
                    <h1 className="text-center text-lg font-semibold mt-10 text-gray-700">Tags</h1>
                    <div className="p-4 mx-auto xl:w-full md:w-1/2">
                        <div className="flex flex-wrap items-center justify-center gap-2">
                            {tagsData.map((tag, index) => (
                                <span
                                    key={index}
                                    className={`py-1 rounded-full font-medium text-indigo-900/80 hover:text-black hover:scale-3d translate-0.5 hover:cursor-pointer ${tag.size}`}
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
        </section >
    );
}
