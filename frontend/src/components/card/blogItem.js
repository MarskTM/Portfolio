import Image from "next/image";
import { Badge } from "@headlessui/react";
import { UserCircleIcon, ClockIcon } from "@heroicons/react/24/solid";

export default function BlogCard({ title, description, author, time, category, image }) {
    return (
        <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            {/* Hình ảnh */}
            <div className="w-20 h-20 flex-shrink-0 bg-gray-300 rounded-lg overflow-hidden">
                {image && <Image src={image} alt={title} width={80} height={80} objectFit="cover" />}
            </div>

            {/* Nội dung */}
            <div className="flex-1">
                {/* Danh mục */}
                <Badge className="text-sm text-gray-600 bg-gray-200 px-2 py-1 rounded-md">
                    {category}
                </Badge>

                {/* Tiêu đề */}
                <h2 className="text-lg font-semibold mt-2 hover:text-blue-500 cursor-pointer">
                    {title}
                </h2>

                {/* Mô tả */}
                <p className="text-gray-600 text-sm mt-1 line-clamp-2">{description}</p>

                {/* Tác giả & Thời gian */}
                <div className="flex items-center text-gray-500 text-xs mt-3 space-x-2">
                    <UserCircleIcon className="w-4 h-4" />
                    <span>{author}</span>
                    <ClockIcon className="w-4 h-4" />
                    <span>{time}</span>
                </div>
            </div>
        </div>
    );
}
