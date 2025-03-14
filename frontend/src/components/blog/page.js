import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const blogPosts = [
    {
        title: "Lorem ipsum dolor sit amet",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel lectus lacinia, scelerisque mauris ac, lacinia lorem.",
        link: "#",
    },
    {
        title: "Lorem ipsum dolor sit amet",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel lectus lacinia, scelerisque mauris ac, lacinia lorem.",
        link: "#",
    },
    {
        title: "Lorem ipsum dolor sit amet",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel lectus lacinia, scelerisque mauris ac, lacinia lorem.",
        link: "#",
    },
];

export default function Blog() {
    return (
        <section className="w-full m-auto pb-28 container">
            <div className="mx-auto px-6 text-center">
                {/* Tiêu đề */}
                <h2 className="text-xl md:text-2xl font-bold text-gray-600 flex items-center justify-center space-x-2">
                    <span>My Blog</span>
                    {/* <span className="text-gray-500">/ snippets</span> */}
                </h2>
                <p className="mt-2 text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel lectus lacinia, scelerisque mauris ac, lacinia lorem.
                </p>

                {/* Danh sách bài viết
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    {blogPosts.map((post, index) => (
                        <Link
                            key={index}
                            href={post.link}
                            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1 min-h-[370px]"
                        >
                            <h3 className="text-lg font-semibold text-yellow-800">{post.title}</h3>
                            <p className="mt-2 text-gray-600">{post.description}</p>
                            <div className="mt-4 flex items-center text-blue-600 hover:text-blue-800">
                                <span className="font-medium">Read more</span>
                                <ArrowRightIcon className="w-4 h-4 ml-1" />
                            </div>
                        </Link>
                    ))}
                </div> */}
            </div>
        </section>
    );
}
